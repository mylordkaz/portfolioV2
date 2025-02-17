export class ModalManager {
  private activeModal: HTMLElement | null = null;
  private activeFullscreenViewer: HTMLElement | null = null;

  openModal(modalId: string) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    this.activeModal = modal;
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    setTimeout(() => modal.classList.remove("opacity-0"), 10);
  }

  closeModal(modal: HTMLElement) {
    if (!modal || this.activeFullscreenViewer) return; // Prevent modal close if fullscreen is active

    modal.classList.add("opacity-0");
    setTimeout(() => {
      modal.classList.add("hidden");
      document.body.style.overflow = "";
    }, 300);
    this.activeModal = null;
  }

  openFullscreen(imageSrc: string, imageAlt: string) {
    const viewer = document.getElementById("fullscreen-viewer");
    const viewerImage = document.getElementById(
      "fullscreen-image",
    ) as HTMLImageElement;

    if (!viewer || !viewerImage) return;

    this.activeFullscreenViewer = viewer;
    viewerImage.src = imageSrc;
    viewerImage.alt = imageAlt;
    viewer.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  closeFullscreen() {
    if (!this.activeFullscreenViewer) return;

    this.activeFullscreenViewer.classList.add("hidden");
    document.body.style.overflow = "hidden"; // Keep hidden because modal is still open
    this.activeFullscreenViewer = null;
  }

  initializeModals() {
    // Open modal buttons
    document.querySelectorAll('[id^="modal-open-"]').forEach((button) => {
      const id = button.id.replace("modal-open-", "");
      button.addEventListener("click", (e) => {
        e.stopPropagation();
        this.openModal(`modal-${id}`);
      });
    });

    // Close modal buttons
    document.querySelectorAll(".modal-close").forEach((button) => {
      button.addEventListener("click", (e) => {
        e.stopPropagation();
        if (this.activeFullscreenViewer) return; // Prevent modal close if fullscreen is active
        const modal = (e.target as HTMLElement).closest('[id^="modal-"]');
        if (modal) this.closeModal(modal as HTMLElement);
      });
    });

    // Close on outside click (only for desktop)
    document.addEventListener("click", (e) => {
      if (this.activeFullscreenViewer) return; // Prevent modal close if fullscreen is active
      if (
        this.activeModal &&
        !(e.target as HTMLElement).closest(".modal-content") &&
        window.innerWidth >= 640
      ) {
        this.closeModal(this.activeModal);
      }
    });

    // Handle ESC key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (this.activeFullscreenViewer) {
          this.closeFullscreen();
        } else if (this.activeModal) {
          this.closeModal(this.activeModal);
        }
      }
    });
  }

  initializeFullscreenViewer() {
    const viewer = document.getElementById("fullscreen-viewer");
    const viewerImage = document.getElementById(
      "fullscreen-image",
    ) as HTMLImageElement;
    const closeButton = document.getElementById("close-fullscreen");
    const expandButtons = document.querySelectorAll(".expand-image");

    if (!viewer || !viewerImage || !closeButton) return;

    expandButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent modal close
        const imageSrc = button.getAttribute("data-image-src");
        const imageAlt = button.getAttribute("data-image-alt");
        if (imageSrc) {
          this.openFullscreen(imageSrc, imageAlt || "");
        }
      });
    });

    closeButton.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent event bubbling
      this.closeFullscreen();
    });

    viewer.addEventListener("click", (e) => {
      if (e.target === viewer) {
        this.closeFullscreen();
      }
    });
  }

  // Initialize both systems
  init() {
    this.initializeModals();
    this.initializeFullscreenViewer();
  }
}

export const modalManager = new ModalManager();

export class ModalManager {
  private activeModal: HTMLElement | null = null;

  openModal(modalId: string) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    this.activeModal = modal;
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    setTimeout(() => modal.classList.remove("opacity-0"), 10);
  }

  closeModal(modal: HTMLElement) {
    if (!modal) return;

    modal.classList.add("opacity-0");
    setTimeout(() => {
      modal.classList.add("hidden");
      document.body.style.overflow = "";
    }, 300);
    this.activeModal = null;
  }

  init() {
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
        const modal = (e.target as HTMLElement).closest('[id^="modal-"]');
        if (modal) this.closeModal(modal as HTMLElement);
      });
    });

    // Close on outside click (only for desktop)
    document.addEventListener("click", (e) => {
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
      if (e.key === "Escape" && this.activeModal) {
        this.closeModal(this.activeModal);
      }
    });
  }
}

export const modalManager = new ModalManager();

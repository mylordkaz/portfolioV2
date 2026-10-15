export class ModalManager {
  private activeModal: HTMLElement | null = null;
  private opener: HTMLElement | null = null;
  private background: HTMLElement[] = [];
  private previousOverflow = "";
  private initialized = false;

  private focusable(modal: HTMLElement) {
    return [...modal.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
    )].filter((element) => element.getClientRects().length > 0 && !element.closest("[inert]"));
  }

  openModal(modalId: string) {
    const modal = document.getElementById(modalId);
    if (!modal || modal === this.activeModal) return;
    if (this.activeModal) this.closeModal(this.activeModal);
    this.opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    this.activeModal = modal;
    this.previousOverflow = document.body.style.overflow;
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    // Disable only siblings along the ancestry path, leaving the dialog usable.
    let current: HTMLElement = modal;
    while (current.parentElement && current !== document.body) {
      for (const sibling of current.parentElement.children) {
        if (sibling instanceof HTMLElement && sibling !== current && !sibling.inert) {
          sibling.inert = true;
          this.background.push(sibling);
        }
      }
      current = current.parentElement;
    }
    (this.focusable(modal)[0] ?? modal).focus({ preventScroll: true });
    requestAnimationFrame(() => modal.classList.remove("opacity-0"));
  }

  closeModal(modal: HTMLElement) {
    if (this.activeModal !== modal) return;
    this.activeModal = null;
    modal.classList.add("opacity-0");
    for (const element of this.background) element.inert = false;
    this.background = [];
    document.body.style.overflow = this.previousOverflow;
    this.opener?.focus({ preventScroll: true });
    this.opener = null;
    setTimeout(() => {
      if (this.activeModal !== modal) modal.classList.add("hidden");
    }, window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 300);
  }

  init() {
    if (this.initialized) return;
    this.initialized = true;
    document.addEventListener("click", (event) => {
      if (!(event.target instanceof Element)) return;
      const opener = event.target.closest<HTMLElement>('[id^="modal-open-"]');
      if (opener) {
        this.openModal(`modal-${opener.id.replace("modal-open-", "")}`);
        return;
      }
      if (!this.activeModal) return;
      if (event.target.closest(".modal-close") || !event.target.closest(".modal-content")) {
        this.closeModal(this.activeModal);
      }
    });
    document.addEventListener("keydown", (event) => {
      const modal = this.activeModal;
      if (!modal) return;
      if (event.key === "Escape") {
        event.preventDefault();
        this.closeModal(modal);
      } else if (event.key === "Tab") {
        const elements = this.focusable(modal);
        const first = elements[0] ?? modal;
        const last = elements[elements.length - 1] ?? modal;
        if (event.shiftKey && (document.activeElement === first || !modal.contains(document.activeElement))) {
          event.preventDefault(); last.focus();
        } else if (!event.shiftKey && (document.activeElement === last || !modal.contains(document.activeElement))) {
          event.preventDefault(); first.focus();
        }
      }
    });
  }
}

export const modalManager = new ModalManager();

import { useEffect } from "react";

const ModalLogic = ({ isOpen, closeModal }: { isOpen: boolean, closeModal: () => void }) => {
  useEffect(() => {
    const lightboxBtns = document.querySelectorAll(".lightbox-btn");
    const lightboxCloseBtns = document.querySelectorAll(".lightbox-close-btn");

    // Lightbox button interactions
    lightboxBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const lightboxContainer = btn.nextElementSibling;
        if (lightboxContainer) {
          lightboxContainer.classList.add("light-box-open");
        }
      });
    });

    lightboxCloseBtns.forEach((closeBtn) => {
      closeBtn.addEventListener("click", () => {
        const lightboxContainer = closeBtn.closest(".light-box-popup");
        if (lightboxContainer) {
          lightboxContainer.classList.remove("light-box-open");
        }
      });
    });

    // Modal scroll prevention and close modal on Escape
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling on body
      document.body.style.position = "fixed"; // Prevent background from scrolling by fixing the body position
      document.body.style.width = "100%"; // Prevent layout shift caused by overflow hidden

      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          closeModal();
        }
      };

      document.addEventListener("keydown", handleEscape);

      return () => {
        document.removeEventListener("keydown", handleEscape);
        document.body.style.overflow = ""; // Reset scroll behavior when modal is closed
        document.body.style.position = ""; // Reset body position
        document.body.style.width = ""; // Reset width
      };
    }
  }, [isOpen, closeModal]);

  return null;
};

export default ModalLogic;

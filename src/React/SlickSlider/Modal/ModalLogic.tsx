import { useEffect } from "react";

const ModalLogic = ({ isOpen, closeModal }: { isOpen: boolean, closeModal: () => void }) => {
  useEffect(() => {
    const lightboxBtns = document.querySelectorAll(".lightbox-btn");
    const lightboxCloseBtns = document.querySelectorAll(".lightbox-close-btn");

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
        let lightboxContainer = closeBtn.closest(".light-box-popup");
        if (lightboxContainer) {
          lightboxContainer.classList.remove("light-box-open");
        }
      });
    });

    if (isOpen) {
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          closeModal();
        }
      };
      document.addEventListener("keydown", handleEscape);
      return () => {
        document.removeEventListener("keydown", handleEscape);
      };
    }
  }, [isOpen, closeModal]);

  return null;
};

export default ModalLogic;

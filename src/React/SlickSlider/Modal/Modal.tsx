import { useState } from "react";
import ModalLogic from "./ModalLogic";
import ModalImg from "./ModalImg";

const Modal = ({ id }: { id: string | number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  
  return (
    <>
      <ModalLogic isOpen={isOpen} closeModal={closeModal} />
      <div className="modal-btn">
        <div
          className="modal-btn-4 js-modal-button hover btn d-inline-block bg-dark outline-dark text-white px-2 py-1 cursor"
          onClick={openModal}
        >
          詳細を見る
        </div>
        {isOpen && (
          <div className="light-box-popup light-box-open">
            <div className="light-box-popup-in">
              <div className="margin-center">
                <ModalImg id={id} />
              </div>
            </div>
            <div className="bg-gray-clear" onClick={closeModal}></div>
          </div>
        )}
      </div>
    </>
  );
};
export default Modal;

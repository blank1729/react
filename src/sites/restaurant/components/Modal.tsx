import { XMarkIcon } from "@heroicons/react/24/outline";
import { ReactNode, useCallback, useEffect, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: ReactNode;
  footer?: ReactNode;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryLabel?: string;
}

const Modal = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryLabel,
}: ModalProps) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }
    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="
        flex
        justify-center
        items-center
        overflow-x-hidden
        overflow-y-auto
        fixed
        inset-0
        z-50
        outline-none
        focus:outline-none
        bg-neutral-800/70   
    "
      >
        <div
          className="
      relative
      md:w-4/6
      lg:w-1/2
      xl:w-2/5
      w-full
      my-6
      mx-auto
      h-full
      md:h-auto
      "
        >
          <div
            className={`
        translate
        duration-300
        h-full
        ${showModal ? "translate-y-0" : "translate-y-full"}
        ${showModal ? "opacity-100" : "opacity-0"}
        `}
          >
            <div
              className="
            translate
            h-full
            md:h-auto
            border-0
            rounded-lg
            shadow-lg
            relative
            flex
            flex-col
            w-full
            bg-white
            outline-none
            focus:outline-none
            "
            >
              {/* header */}
              <div
                className="
            flex 
            items-center
            p-6
            rounded-t
            justify-center
            relative
            border-b
            border-black/10
            "
              >
                <button
                  onClick={handleClose}
                  className="absolute right-6 border-0 hover:opacity-70 transition"
                >
                  <XMarkIcon className="w-8 h-8" />
                </button>
              </div>

              {/* content */}
              <div className="flex-auto p-6 relative">{body}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

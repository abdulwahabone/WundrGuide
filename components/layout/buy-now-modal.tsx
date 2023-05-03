import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";

const BuyNowModal = ({
  showModal,
  setShowModal,
}: {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal aria-modal showModal={showModal} setShowModal={setShowModal}>
      <div className="w-full overflow-hidden shadow-xl md:max-w-md md:rounded-2xl md:border md:border-gray-200">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center md:px-16">
          <h3 className="mt-5 font-display text-2xl font-bold">
            Enjoying the Guide?
          </h3>
          <p className="text-sm text-gray-500">
            Don&apos;t miss out on insider tips and hidden gems. Unlock the full
            version of our destination guide now for an unforgettable trip.
          </p>
        </div>

        <div className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 md:px-16">
          <button
            onClick={() => setShowModal(false)}
            className=" mx-auto rounded-full border border-black bg-black px-8 py-2 text-lg text-white transition-all hover:bg-white hover:text-black"
          >
            Buy now
          </button>
        </div>
      </div>
    </Modal>
  );
};

export function useBuyNowModal() {
  const [showModal, setShowModal] = useState(false);

  const ModalCallback = useCallback(() => {
    return <BuyNowModal showModal={showModal} setShowModal={setShowModal} />;
  }, [setShowModal, showModal]);

  return useMemo(
    () => ({ setShowModal, BuyNowModal: ModalCallback }),
    [setShowModal, ModalCallback],
  );
}

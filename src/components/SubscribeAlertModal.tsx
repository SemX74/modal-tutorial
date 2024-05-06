import { FC } from "react";
import { ModalProps } from "../hooks/useModal";
import Modal from "./ui/Modal";
import { useForm } from "react-hook-form";

interface SubscribeAlertModalProps extends ModalProps {}

const SubscribeAlertModal: FC<SubscribeAlertModalProps> = (props) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      subscribed: false,
    },
  });

  const onSubmit = (data: { subscribed: boolean }) => {
    if (data.subscribed) {
      console.log("NICK ЩАСЛИВИЙ");
    }
  };

  return (
    <Modal {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Title>
          <strong className="uppercase">
            Підпишись на Ніка з каналу дев рутін!
          </strong>
        </Modal.Title>
        <Modal.Body>
          <p> Зробимо історію разом </p>
          <label htmlFor="">
            Підписатися
            <input type="checkbox" {...register("subscribed")} />
          </label>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="bg-gray-200 text-black rounded border shadow"
            onClick={props.onClose}
          >
            Close
          </button>
          <button
            type="submit"
            className="bg-gray-200 text-black rounded border shadow"
            onClick={props.onClose}
          >
            Save
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default SubscribeAlertModal;

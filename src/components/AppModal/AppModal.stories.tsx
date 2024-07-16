import { Meta, StoryFn } from "@storybook/react";
import AppModal from "./AppModal";
import { useState } from "react";
import { AppButton } from "../AppButton";

export default {
  title: "AppModal",
  component: AppModal,
} as Meta<typeof AppModal>;

const Template: StoryFn<typeof AppModal> = (args) => (
  <AppModal {...args}>
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium.
    </p>
  </AppModal>
);

export const BasicModel = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <AppButton
        variant="primary"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Open Modal
      </AppButton>
      <AppModal
        title="Modal"
        show={showModal}
        primaryButtonText="Save"
        onHide={() => setShowModal(false)}
        onSecondaryClicked={() => setShowModal(false)}
      >
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium.
      </AppModal>
    </>
  );
};
export const SingleActionButtonModel = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <AppButton
        variant="primary"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Open Modal
      </AppButton>
      <AppModal
        title="Modal"
        show={showModal}
        hideSecondaryButton={true}
        onHide={() => setShowModal(false)}
      >
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium.
      </AppModal>
    </>
  );
};

import React, { useState } from "react";
import { ChildModal } from "./ChildModal";

export const ParentModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalHandler = () => {
    setIsModalOpen(true);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div>
        <h1>Simple Modal Example</h1>
        <button onClick={openModalHandler}>Open Modal</button>
        <ChildModal isModalOpenState={isModalOpen} closeModal={closeModalHandler}>
          <h2>This is Child Modal</h2>
          <p>You can add any content inside the modal.</p>
          <button onClick={closeModalHandler}>Close</button>
        </ChildModal>
      </div>
    </>
  );
};

import React from 'react';

import { useModal } from 'react-hooks-use-modal';
function DeleteComment() {
  const [Modal, open, close, isOpen] = useModal('root', {
    preventScroll: true,
    closeOnOverlayClick: false,
  });
  return (
    <div>
      <p>Modal is Open? {isOpen ? 'Yes' : 'No'}</p>
      <button onClick={open}>OPEN</button>
      <Modal>
        <div className="leading-5 text-base rounded-lg font-normal text-lightGray flex flex-col justify-around w-[400px] h-[250px] p-6 bg-white">
          <h1 className="leading-7 text-lg font-bold">Delete Comment</h1>
          <p>
            Are you sure you want to delete this comment? This will remove the
            comment and can't be undone.
          </p>
          <div className="flex justify-around">
            <button
              className="bg-lightGray rounded w-[150px] px-6 py-2 text-white "
              onClick={close}
            >
              No, Cancel
            </button>
            <button
              className=" bg-softRed rounded w-[150px] px-6 py-2 text-white "
              onClick={close}
            >
              Yes, Delete
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default DeleteComment;

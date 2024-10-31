import React, { useState } from "react";

import toast from "react-hot-toast";
import Title from "../ui/Title/Title";

const DeleteModal = ({ data, deleteFun, closeModal }) => {
  const { id, username } = data;
  console.log(data);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async (id) => {
    setIsDeleting(true);
    try {
      const response = await deleteFun(1);
      console.log(response);
      if (response?.data?.status === 200) {
        toast.success("Successfully Deleted");
        closeModal();
      } else {
        toast.error(response?.error?.data?.detail);
      }
    } catch (error) {
      toast.error(error?.data?.detail);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleCancel = () => {
    closeModal();
  };

  return (
    <div className="py-8 max-h-[500px] overflow-x-auto sm:w-[300px] md:w-[600px] lg:w-[800px] xl:w-[900px] mx-auto px-5">
      <div className="text-center">
        <Title>
          Are You Sure? You Want To Delete!{" "}
          <span className="text-primary">{username}</span>
        </Title>
        <div className="flex items-center gap-5 justify-center">
          <button
            onClick={handleCancel}
            className="bg-gray-400 text-white rounded-md px-4 py-2"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              if (!isDeleting) {
                handleDelete(id);
              }
            }}
            className={`${
              isDeleting
                ? "disabled bg-primary text-white rounded-md px-4 py-2 opacity-70"
                : "bg-primary text-white rounded-md px-4 py-2"
            }`}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;

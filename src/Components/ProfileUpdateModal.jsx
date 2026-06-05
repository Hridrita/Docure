'use client'
import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const ProfileUpdateModal = ({user, setUserProfile, refetch}) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const onSubmit = async(e) =>{
  e.preventDefault();
  const formData = new FormData(e.currentTarget)
  const data = Object.fromEntries(formData.entries());

  try{
    await authClient.updateUser({
      name: data.name,
      image: data.image,
    })
    toast.success("Profile updated successfully!")
    setIsOpen(false)
  } catch (error) {
    console.log(error);
    toast.error("Update failed!")
  }
}
  return (
    <div>
      <Toaster></Toaster>
      <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
        <Modal.Trigger className="w-full">
          <button
            onClick={() => setIsOpen(true)}
            className="w-full mt-4 py-3.5 bg-[#4A6B6F] hover:bg-[#3a5558] active:scale-[0.98] text-[#DDE6D8] rounded-[14px] font-medium text-[15px] flex items-center justify-center gap-2 transition-all duration-200"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Z"
              />
            </svg>
            Update profile
          </button>
        </Modal.Trigger>
        <Modal.Backdrop>
          <Modal.Container className="px-4 w-full">
            <Modal.Dialog className="w-full sm:max-w-lg rounded-3xl overflow-hidden shadow-2xl bg-white p-2">
              <Modal.CloseTrigger />

              <Modal.Header className="px-6 pt-6 pb-2">
                <Modal.Heading className="text-2xl sm:text-3xl font-extrabold text-[#4A6B6F] text-center">
                  Update Your Profile
                </Modal.Heading>
              </Modal.Header>

              <Modal.Body className="px-6 py-4">
                <Surface
                  variant="default"
                  className="bg-transparent shadow-none"
                >
                  <form onSubmit={onSubmit} id="appointmentForm" className="flex flex-col gap-4">
                    <TextField
                    defaultValue={user.name}
                      className="w-full"
                      name="name"
                      type="text"
                      variant="secondary"
                    >
                      <Label>Name</Label>
                      <Input required placeholder="Enter your name" />
                    </TextField>

                    <TextField
                    defaultValue={user.image}
                      className="w-full"
                      name="image"
                      type="text"
                      variant="secondary"
                    >
                      <Label>Image URL</Label>
                      <Input required placeholder="Enter your name" />
                    </TextField>
                  </form>
                </Surface>
              </Modal.Body>

              <Modal.Footer className="px-6 pb-6 pt-2 flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={() => setIsOpen(false)}
                  className="w-full sm:w-auto flex-1 text-base bg-gray-100 hover:bg-gray-200 font-bold text-[#4A6B6F] rounded-xl"
                >
                  Cancel
                </Button>
                <Button
                  form="appointmentForm"
                  className="w-full sm:w-auto flex-1 text-base bg-[#4A6B6F] hover:bg-[#3d5a5e] font-bold text-white rounded-xl"
                  type="submit"
                >
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default ProfileUpdateModal;

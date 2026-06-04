"use client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaEdit } from "react-icons/fa";

const EditModal = ({ booking, onUpdate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [doctorInfo, setDoctorInfo] = useState(null);

  useEffect(()=>{
    const savedDoctor = localStorage.getItem('selectedDoctor');
    if(savedDoctor){
        setDoctorInfo(JSON.parse(savedDoctor));
    }
  }, []);

  const onSubmit = async(e) =>{
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries());

    const res = await fetch(`http://localhost:5000/bookings/${booking._id}`,{
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if(res.ok){
        onUpdate({...booking, ...data})
        setIsOpen(false);
        toast.success("Booking Updated!");
    }
  }
  
  return (
    <div>
        <Toaster></Toaster>
      <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
        <Modal.Trigger className="w-full">
          <button
            className="p-3 bg-[#4A7C80]/10 text-[#4A7C80] rounded-xl hover:bg-[#4A7C80]/20 focus:outline-none focus:ring-2 focus:ring-[#4A7C80] transition"
            title="Edit"
            aria-label={`Edit booking for`}
          >
            <FaEdit />
          </button>
        </Modal.Trigger>
        <Modal.Backdrop>
          <Modal.Container className="px-4 w-full">
            <Modal.Dialog className="w-full sm:max-w-lg rounded-3xl overflow-hidden shadow-2xl bg-white p-2">
              <Modal.CloseTrigger />

              <Modal.Header className="px-6 pt-6 pb-2">
                <Modal.Heading className="text-2xl sm:text-3xl font-extrabold text-[#4A6B6F] text-center">
                  Book Your Appointment
                </Modal.Heading>
                <p className="text-gray-500 mt-2 text-center text-sm sm:text-base">
                  Confirm your visit with <strong>{booking.doctorName}</strong>
                </p>
              </Modal.Header>

              <Modal.Body className="px-6 py-4">
                <Surface
                  variant="default"
                  className="bg-transparent shadow-none"
                >
                  <form onSubmit={onSubmit} id="appointmentForm" className="flex flex-col gap-4">
                    <TextField
                      defaultValue={booking.patientName}
                      className="w-full"
                      name="patientName"
                      type="text"
                      variant="secondary"
                    >
                      <Label>Patient Name</Label>
                      <Input required placeholder="Enter your name" />
                    </TextField>

                    <TextField
                      defaultValue={booking.gender}
                      className="w-full"
                      name="gender"
                      type="text"
                      variant="secondary"
                    >
                      <Label>Gender</Label>
                      <Input required placeholder="Enter your gender" />
                    </TextField>

                    <TextField
                      defaultValue={booking.phone}
                      className="w-full"
                      name="phone"
                      type="tel"
                      variant="secondary"
                    >
                      <Label>Phone</Label>
                      <Input required placeholder="Enter your phone number" />
                    </TextField>

                    <TextField
                      defaultValue={booking.appointmentDate}
                      className="w-full"
                      name="appointmentDate"
                      type="date"
                      variant="secondary"
                    >
                      <Label>Appointment Date</Label>
                      <Input required />
                    </TextField>

                    <TextField className="w-full" variant="secondary">
                      <Label>Appointment Time</Label>
                      <select
                        required
                        name="appointmentTime"
                        defaultValue={booking.appointmentTime}
                        className="w-full h-11 px-3 rounded-lg border border-gray-200 bg-gray-50 focus:border-[#4A6B6F] focus:ring-1 focus:ring-[#4A6B6F] outline-none transition text-sm sm:text-base"
                      >
                        <option value={booking.appointmentTime}>
                          {booking.appointmentTime}
                        </option>
                        {doctorInfo?.availability?.map((time, i) => (
                <option key={i} value={time}>{time}</option>
            ))}
                      </select>
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
                  Update Booking
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default EditModal;

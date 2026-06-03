'use client'
import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const AppointmentModal = ({ doctor }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user2 = Object.fromEntries(formData.entries());
    console.log(user2);


    const bookingData = {
      userId: user.id,
      email: user.email,
      doctorName: doctor.name,
      patientName: user2.name,
      gender: user2.gender,
      phone: user2.phone,
      appointmentDate: user2.date,
      appointmentTime: user2.time
      
    }
    console.log("booking data:",bookingData);

    try{
      const res = await fetch("http://localhost:5000/bookings",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookingData)
    });
    const data = await res.json();
    console.log(data);

    if(res.ok){
      toast.success("Appointment booked successfully!");
      setIsOpen(false);
    } else {
      toast.error("Failed to book appointment.")
    }
    } catch (error) {
      toast.error("Something went wrong!")
    }
    
    
  };

  

  return (
    <div>
      <Toaster></Toaster>
      <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
        <Modal.Trigger className="w-full">
          <Button onClick={() => setIsOpen(true)} className="w-full bg-[#DDE6D8] text-[#4A6B6F] font-bold py-4 rounded-xl hover:bg-white transition text-sm">
            Book Appointment
          </Button>
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
                  Confirm your visit with <strong>{doctor.name}</strong>
                </p>
              </Modal.Header>

              <Modal.Body className="px-6 py-4">
                <Surface variant="default" className="bg-transparent shadow-none">
                  <form onSubmit={handleSubmit} id="appointmentForm" className="flex flex-col gap-4">
                    <TextField className="w-full" name="name" type="text" variant="secondary">
                      <Label>Patient Name</Label>
                      <Input required placeholder="Enter your name" />
                    </TextField>

                    <TextField className="w-full" name="gender" type="text" variant="secondary">
                      <Label>Gender</Label>
                      <Input required placeholder="Enter your gender" />
                    </TextField>

                    <TextField className="w-full" name="phone" type="tel" variant="secondary">
                      <Label>Phone</Label>
                      <Input required placeholder="Enter your phone number" />
                    </TextField>

                    <TextField className="w-full" name="date" type="date" variant="secondary">
                      <Label>Appointment Date</Label>
                      <Input required />
                    </TextField>

                    <TextField className="w-full" variant="secondary">
                      <Label>Appointment Time</Label>
                      <select
                        required
                        name="time"
                        className="w-full h-11 px-3 rounded-lg border border-gray-200 bg-gray-50 focus:border-[#4A6B6F] focus:ring-1 focus:ring-[#4A6B6F] outline-none transition text-sm sm:text-base"
                      >
                        <option value="">Select a Time</option>
                        {doctor.availability.map((time, i) => (
                          <option key={i} value={time}>{time}</option>
                        ))}
                      </select>
                    </TextField>
                  </form>
                </Surface>
              </Modal.Body>

              <Modal.Footer className="px-6 pb-6 pt-2 flex flex-col sm:flex-row gap-3">
                <Button onClick={() => setIsOpen(false)} className="w-full sm:w-auto flex-1 text-base bg-gray-100 hover:bg-gray-200 font-bold text-[#4A6B6F] rounded-xl">
                  Cancel
                </Button>
                <Button form="appointmentForm" className="w-full sm:w-auto flex-1 text-base bg-[#4A6B6F] hover:bg-[#3d5a5e] font-bold text-white rounded-xl" type="submit">
                  Confirm Booking
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default AppointmentModal;
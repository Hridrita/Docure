import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

const AppointmentModal = ({ doctor }) => {
  return (
    <div>
      <Modal>
        <Modal.Trigger className="w-full">
          <Button className="w-full bg-[#DDE6D8] text-[#4A6B6F] font-bold py-4 rounded-xl hover:bg-white transition text-sm">
            Book Appointment
          </Button>
        </Modal.Trigger>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-lg rounded-2xl overflow-hidden shadow-2xl bg-slate-50">
              <Modal.CloseTrigger />
              <Modal.Header className="px-8 pt-8 pb-2">
                <Modal.Heading className=" text-3xl font-extrabold text-[#4A6B6F] text-center">
                  Book Your Appointment
                </Modal.Heading>
                <p className="text-gray-500 mt-2 text-center">Fill the details to confirm your visit with <strong>{doctor.name}</strong></p>
              </Modal.Header>
              <Modal.Body className="px-8 py-6">
                <Surface variant="default">
                  <form id="appointmentForm" className="flex flex-col gap-5 bg-slate-50">
                    <TextField
                      className="w-full"
                      name="name"
                      type="text"
                      variant="secondary"
                    >
                      <Label>Patient Name</Label>
                      <Input required placeholder="Enter your name" />
                    </TextField>

                    <TextField
                      className="w-full"
                      name="gender"
                      type="text"
                      variant="secondary"
                    >
                      <Label>Gender</Label>
                      <Input required placeholder="Enter your gender" />
                    </TextField>

                    <TextField
                      className="w-full"
                      name="phone"
                      type="tel"
                      variant="secondary"
                    >
                      <Label>Phone</Label>
                      <Input required placeholder="Enter your phone number" />
                    </TextField>

                    <TextField
                      className="w-full"
                      name="time"
                      variant="secondary"
                    >
                      <Label>Appointment Time</Label>
                      <select
                        required
                        className="w-full h-10 px-3 rounded-lg border border-gray-200 bg-gray-50 focus:border-[#4A6B6F] focus:ring-1 focus:ring-[#4A6B6F] outline-none transition"
                      >
                        <option value="">Select a Time</option>
                        {doctor.availability.map((time, i) => (
                          <option key={i} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </TextField>
                  </form>
                </Surface>
              </Modal.Body>
              <Modal.Footer>
                <Button slot="close" className="bg-[#DDE6D8] hover:bg-[#DDE6E8] font-bold text-[#4A6B6F]" variant="secondary">
                  Cancel
                </Button>
                <Button form="appointmentForm" className="bg-[#4A6B6F] hover:bg-[#3d5a5e] font-bold text-[#DDE6D8]" type="submit">
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

"use client";

import { AlertDialog, Button } from "@heroui/react";
import { FaTrash } from "react-icons/fa";

const CancelAppointment = ({booking}) => {
  return (
    <AlertDialog>
        <AlertDialog.Trigger>
            <button
        className="p-3 bg-red-100 text-red-600 rounded-xl hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
        title="Delete"
        aria-label={`Delete booking for ${booking.patientName}`}
      >
        <FaTrash />
      </button>
        </AlertDialog.Trigger>
      
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Cancel {booking.doctorName}'s Appointment Permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body></AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button slot="close" variant="danger">
                Delete Appointment
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default CancelAppointment;

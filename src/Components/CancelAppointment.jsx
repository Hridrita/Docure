"use client";

import { AlertDialog, Button } from "@heroui/react";
import toast from "react-hot-toast";
import { FaTrash } from "react-icons/fa";

const CancelAppointment = ({booking,onDelete}) => {
    const handleDelete = async() =>{
        try{
            const res = await fetch(`http://localhost:5000/bookings/${booking._id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            
        })

        if(res.ok){
            toast.success("Appointment deleted successfully!")
            onDelete(booking._id)
        } else {
            throw new Error("Failed to delete");
        }
        } catch(error) {
            toast.error("Something went wrong, please try again.")
        }
    }
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
              <Button onClick={handleDelete} slot="close" variant="danger">
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

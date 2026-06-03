import { FaUserMd, FaCalendarAlt, FaClock, FaPhoneAlt, FaVenusMars, FaEdit, FaTrash } from "react-icons/fa";

const MyBookingsCard = ({ booking }) => {
    const { doctorName, patientName, gender, phone, appointmentDate, appointmentTime } = booking;

    return (
        <div className="w-full bg-white border border-gray-200 shadow-md hover:shadow-lg rounded-3xl p-6 transition-shadow duration-300">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-[#326273] flex items-center gap-3">
                        <FaUserMd className="text-xl text-[#4A7C80]" aria-hidden="true" /> 
                        {doctorName}
                    </h2>
                    <p className="text-gray-600 mt-1 text-md">
                        Patient:&nbsp;
                        <span className="font-medium text-gray-800">{patientName}</span>
                    </p>
                </div>
                <div className="flex gap-3">
                    <button 
                      className="p-3 bg-[#4A7C80]/10 text-[#4A7C80] rounded-xl hover:bg-[#4A7C80]/20 focus:outline-none focus:ring-2 focus:ring-[#4A7C80] transition"
                      title="Edit"
                      aria-label={`Edit booking for ${patientName}`}
                    >
                        <FaEdit />
                    </button>
                    <button 
                      className="p-3 bg-red-100 text-red-600 rounded-xl hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                      title="Delete"
                      aria-label={`Delete booking for ${patientName}`}
                    >
                        <FaTrash />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-7 text-gray-700 text-sm font-medium">
                <div className="flex items-center gap-2">
                    <FaVenusMars className="text-[#4A7C80]" aria-hidden="true" /> {gender}
                </div>
                <div className="flex items-center gap-2">
                    <FaPhoneAlt className="text-[#4A7C80]" aria-hidden="true" /> {phone}
                </div>
                <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-[#4A7C80]" aria-hidden="true" /> {appointmentDate}
                </div>
                <div className="flex items-center gap-2">
                    <FaClock className="text-[#4A7C80]" aria-hidden="true" /> {appointmentTime}
                </div>
            </div>

            <div className="mt-7 pt-5 border-t border-gray-200 flex justify-end">
                <span className="text-xs font-semibold uppercase tracking-wide text-[#2B4A49] bg-[#D9E8E7] px-5 py-1.5 rounded-full select-none">
                    Confirmed
                </span>
            </div>
        </div>
    );
};

export default MyBookingsCard;

"use client";
import { Input, TextField, Label, TextArea, Button, Card } from "@heroui/react";
import { useState } from "react";

const AddDoctorPage = () => {
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    doctorName: "",
    specialty: "",
    experience: "",
    imageUrl: "",
    availability: "",
    fee: "",
    hospital: "",
    location: "",
    description: "",
  });

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit fired", form);

    let newErrors = {};
    if (!form.doctorName || form.doctorName.length < 3)
      newErrors.doctorName =
        "Please enter a correct name (at least 3 characters)";
    if (!form.fee || parseInt(form.fee) < 0 || isNaN(parseInt(form.fee)))
      newErrors.fee = "Doctor's fee should be a positive number";
    if (!form.imageUrl || !form.imageUrl.startsWith("http"))
      newErrors.imageUrl =
        "Please enter a correct image URL starting with http";
    if (!form.experience)
      newErrors.experience = "Please enter doctor's experience";
    if (!form.availability)
      newErrors.availability = "Please enter correct time slot";
    if (!form.specialty)
      newErrors.specialty = "Please enter doctor's specialization";
    if (!form.hospital || form.hospital.length < 3)
      newErrors.hospital = "Please enter hospital name (at least 3 characters)";
    if (!form.location) newErrors.location = "Please enter correct location";
    if (!form.description || form.description.length < 10)
      newErrors.description =
        "Please enter a short description (at least 10 characters)";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/doctors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <Card className="p-2 shadow-xl border border-gray-100 bg-white rounded-3xl">
          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <TextField
                  className="w-full md:col-span-2"
                  isInvalid={!!errors.doctorName}
                  errorMessage={errors.doctorName}
                >
                  <Label className="font-bold text-[#4A6B6F] mb-2 block">
                    Doctor Name
                  </Label>
                  <Input
                    value={form.doctorName}
                    onChange={handleChange("doctorName")}
                    placeholder="Dr. John Doe"
                  />
                </TextField>
                {errors.doctorName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.doctorName}
                  </p>
                )}
              </div>

              <div>
                <TextField isInvalid={!!errors.specialty}>
                  <Label className="font-bold text-[#4A6B6F] mb-2 block">
                    Specialty
                  </Label>
                  <Input
                    value={form.specialty}
                    onChange={handleChange("specialty")}
                    placeholder="e.g. Cardiologist"
                  />
                </TextField>
                {errors.specialty && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.specialty}
                  </p>
                )}
              </div>

              <div>
                <TextField isInvalid={!!errors.experience}>
                  <Label className="font-bold text-[#4A6B6F] mb-2 block">
                    Experience
                  </Label>
                  <Input
                    value={form.experience}
                    onChange={handleChange("experience")}
                    placeholder="e.g. 10 years"
                  />
                </TextField>
                {errors.experience && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.experience}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <TextField isInvalid={!!errors.imageUrl}>
                  <Label className="font-bold text-[#4A6B6F] mb-2 block">
                    Image URL
                  </Label>
                  <Input
                    value={form.imageUrl}
                    onChange={handleChange("imageUrl")}
                    placeholder="https://image-link.com"
                  />
                </TextField>
                {errors.imageUrl && (
                  <p className="text-red-500 text-xs mt-1">{errors.imageUrl}</p>
                )}
              </div>

              <div>
                <TextField isInvalid={!!errors.availability}>
                  <Label className="font-bold text-[#4A6B6F] mb-2 block">
                    Availability (Time Slots)
                  </Label>
                  <TextArea
                    value={form.availability}
                    onChange={handleChange("availability")}
                    placeholder="e.g. 09:00 AM - 12:00 PM"
                  />
                </TextField>
                {errors.availability && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.availability}
                  </p>
                )}
              </div>

              <div>
                <TextField isInvalid={!!errors.fee}>
                  <Label className="font-bold text-[#4A6B6F] mb-2 block">
                    Fee (BDT)
                  </Label>
                  <Input
                    value={form.fee}
                    onChange={handleChange("fee")}
                    placeholder="e.g. 500"
                  />
                </TextField>
                {errors.fee && (
                  <p className="text-red-500 text-xs mt-1">{errors.fee}</p>
                )}
              </div>

              <div>
                <TextField isInvalid={!!errors.hospital}>
                  <Label className="font-bold text-[#4A6B6F] mb-2 block">
                    Hospital Name
                  </Label>
                  <Input
                    value={form.hospital}
                    onChange={handleChange("hospital")}
                    placeholder="e.g. City Hospital"
                  />
                </TextField>
                {errors.hospital && (
                  <p className="text-red-500 text-xs mt-1">{errors.hospital}</p>
                )}
              </div>
              <div>
                <TextField isInvalid={!!errors.location}>
                  <Label className="font-bold text-[#4A6B6F] mb-2 block">
                    Location
                  </Label>
                  <Input
                    value={form.location}
                    onChange={handleChange("location")}
                    placeholder="e.g. Dhanmondi, Dhaka"
                  />
                </TextField>
                {errors.location && (
                  <p className="text-red-500 text-xs mt-1">{errors.location}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <TextField isInvalid={!!errors.description}>
                  <Label className="font-bold text-[#4A6B6F] mb-2 block">
                    Description
                  </Label>
                  <TextArea
                    value={form.description}
                    onChange={handleChange("description")}
                    placeholder="Tell us about the doctor's expertise..."
                  />
                </TextField>
                {errors.description && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.description}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#4A6B6F] text-white font-bold py-4 rounded-xl hover:opacity-90 transition"
            >
              Add Doctor Profile
            </button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AddDoctorPage;

'use client'
import {
  FieldError,
  Input,
  Select,
  TextField,
  Label,
  ListBox,
  TextArea,
  Button,
  Card,
} from "@heroui/react";

const AddDoctorPage = () => {
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const doctor = Object.fromEntries(formData.entries());
        // console.log(doctor);

        

        try{
            const res = await fetch('http://localhost:5000/doctors', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(doctor)
        })

        const data = await res.json()
        console.log(data);
        } catch(error) {
            console.log(error);
        }
    }
  return (
    <div className="bg-slate-50">
      <div className="p-5 max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800">
            Add New Doctor
          </h1>
          <p className="text-gray-500 mt-2">
            Fill in the details to create a new doctor description
          </p>
        </div>

        <Card className="p-2 shadow-2xl border-0 bg-white/80 backdrop-blur-sm rounded-3xl">
          <form onSubmit={handleSubmit} className="p-8 space-y-6 bg-[#DDE6D8]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <TextField name="doctorName" isRequired>
                  <Label className="font-semibold text-[#4A6B6F]">
                    Doctor Name
                  </Label>
                  <Input
                    placeholder="enter doctor name"
                    className="rounded-xl border-gray-200 mt-1"
                  />
                </TextField>
              </div>

              <TextField name="specialty" isRequired>
                <Label className="font-semibold text-[#4A6B6F]">Specialty</Label>
                <Input
                  placeholder="e.g. Cardiologist"
                  className="rounded-xl border-gray-200 mt-1"
                />
              </TextField>

              <div className="md:col-span-2">
                <TextField name="imageUrl" isRequired>
                  <Label className="font-semibold text-[#4A6B6F]">
                    Image URL
                  </Label>
                  <Input
                    type="url"
                    placeholder="https://..."
                    className="rounded-xl border-gray-200 mt-1"
                  />
                </TextField>
              </div>

              

              <TextField name="experience" isRequired>
                <Label className="font-semibold text-[#4A6B6F]">
                  Experience
                </Label>
                <Input
                  
                  placeholder="e.g. 10 years"
                  className="rounded-xl border-gray-200 mt-1"
                />
              </TextField>

              <div>
                <Label className="font-semibold text-[#4A6B6F]">Availability</Label>
                <Select name="availability" isRequired className="w-full mt-1">
                  <Select.Trigger className="rounded-xl border-gray-200">
                    <Select.Value placeholder="Select a time" />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      {[
                        "09:00 AM - 12:00 PM",
                        "10:00 AM - 01:00 PM",
                        "08:00 AM - 02:00 PM",
                        "02:00 AM - 07:00 PM",
                        "11:00 AM - 03:00 PM",
                        "07:00 AM - 11:00 PM",
                      ].map((item) => (
                        <ListBox.Item key={item} id={item}>
                          {item}
                        </ListBox.Item>
                      ))}
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              <TextField name="hospital" isRequired>
                <Label className="font-semibold text-[#4A6B6F]">Hospital</Label>
                <Input
                  placeholder="e.g. Labaid Cardiac Hospital"
                  className="rounded-xl border-gray-200 mt-1"
                />
              </TextField>

              <div className="md:col-span-2">
                <TextField name="location" type="text" isRequired>
                  <Label className="font-semibold text-[#4A6B6F]">
                    Loaction
                  </Label>
                  <Input
                    placeholder="e.g. Dhanmondi"
                    className="rounded-xl border-gray-200 mt-1"
                  />
                </TextField>
              </div>

              <TextField name="fee" isRequired>
                <Label className="font-semibold text-[#4A6B6F]">Fee</Label>
                <Input
                  placeholder="e.g. 500"
                  className="rounded-xl border-gray-200 mt-1"
                />
              </TextField>

              

              <div className="md:col-span-2">
                <TextField name="description" isRequired>
                  <Label className="font-semibold text-[#4A6B6F]">
                    Description
                  </Label>
                  <TextArea
                    placeholder="Describe about the doctor"
                    className="rounded-xl border-gray-200 mt-1 min-h-[120px]"
                  />
                </TextField>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#4A6B7F] hover:bg-[#4A6B6F] text-xl text-[#DDE6D8] hover:text-white font-bold  py-6 rounded-2xl transition-all shadow-lg shadow-[#4A6B6F]"
            >
              Add Doctor
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AddDoctorPage;

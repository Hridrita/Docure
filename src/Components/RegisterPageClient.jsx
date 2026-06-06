"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
  Form,
  Input,
  Label,
  Link,
  TextField,
  Separator,
} from "@heroui/react";
import { redirect } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const RegisterPageClient = () => {
    const [errors, setErrors] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    // console.log(user);

    let newErrors = {};

    if (!user.name) newErrors.name = "Full name is required";
    if (!user.email) newErrors.email = "email is required";
    if (!user.image) {
      newErrors.image = "Image URL is required";
    } else if (!user.image?.startsWith("http")) {
      newErrors.image = "Please provide a valid URL";
    }

    const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!user.password) {
      newErrors.password = "Password is required";
    } else if (!passwordValidation.test(user.password)) {
      newErrors.password =
        "Password must be at least 6 characters, include 1 uppercase and 1 lowercase letter.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const { data, error } = await authClient.signUp.email({
      name: user.name,
      email: user.email,
      image: user.image,
      password: user.password,
    });
    console.log("data:", data, "error", error);

    if (data) {
      toast.success("Account created successfully!");
      redirect("/login");
    }

    if (error) {
      toast.error(error.message || "Registration failed. Please try again.");
    }}

    const handleGoogleSignUp = async() =>{
      await authClient.signIn.social({
        provider: "google"
      })
  };
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] p-6">
      <div>
        <Toaster />
      </div>

      <Card className="w-full max-w-2xl p-10 shadow-[0_20px_50px_rgba(74,107,111,0.15)] rounded-[2.5rem] border-t-8 border-[#4A6B6F] bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-5xl font-black text-[#4A6B6F]">Join Us!</h1>
            <p className="text-gray-500 text-lg">
              Create your account to start managing your health appointments
              efficiently.
            </p>
          </div>

          <Form onSubmit={handleSubmit} className="space-y-5">
            <TextField name="name" variant="secondary">
              <Label className="text-sm font-bold text-gray-700">
                Full Name
              </Label>
              <Input className="h-12 rounded-xl" placeholder="John Doe" />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </TextField>

            <div className="grid grid-cols-2 gap-4">
              <TextField name="email" variant="secondary">
                <Label className="text-sm font-bold text-gray-700">Email</Label>
                <Input
                  className="h-12 rounded-xl"
                  placeholder="name@mail.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </TextField>

              <TextField name="password" variant="secondary">
                <Label className="text-sm font-bold text-gray-700">
                  Password
                </Label>
            
                <Input
                  className="h-12 rounded-xl"
                  type="password"
                  placeholder="••••••••"
                />
                <p className="text-[11px] text-gray-400 mt-1 ml-1 font-medium">
    min 6 chars, 1 uppercase & 1 lowercase
  </p>
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.password}
                  </p>
                )}
              </TextField>
            </div>

            <TextField name="image" variant="secondary">
              <Label className="text-sm font-bold text-gray-700">
                Photo URL
              </Label>
              <Input
                className="h-12 rounded-xl"
                placeholder="https://image.url"
              />
              {errors.image && (
                <p className="text-red-500 text-xs mt-1">{errors.image}</p>
              )}
            </TextField>

            <Button
              type="submit"
              className="w-full h-12 bg-[#4A6B6F] text-white rounded-xl font-bold hover:bg-[#3d5a5e] transition-all"
            >
              Create Account
            </Button>
          </Form>
        </div>

        <div className="mt-8">
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <Separator />
            </div>
            <div className="relative flex justify-center text-xs uppercase font-bold text-gray-400">
              <span className="bg-white px-2">Or continue with</span>
            </div>
          </div>

          <Button
          onClick={handleGoogleSignUp}
            variant="secondary"
            className="w-full h-12 rounded-xl border border-gray-200 font-bold hover:bg-gray-50"
          >
            <FcGoogle className="mr-2 text-xl" /> Sign up with Google
          </Button>

          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-[#4A6B6F] font-black hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </Card>
    </div>
    );
};

export default RegisterPageClient;
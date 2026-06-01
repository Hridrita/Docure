"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Card, Form, Input, Label, Link, TextField, Separator } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const user = Object.fromEntries(formData.entries())
        console.log(user);
    }
  return (
    
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] p-6">
      
      
      <Card className="w-full max-w-2xl p-10 shadow-[0_20px_50px_rgba(74,107,111,0.15)] rounded-[2.5rem] border-t-8 border-[#4A6B6F] bg-white">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          
          <div className="space-y-4">
            <h1 className="text-5xl font-black text-[#4A6B6F]">Join Us!</h1>
            <p className="text-gray-500 text-lg">
              Create your account to start managing your health appointments efficiently.
            </p>
          </div>

          
          <Form onSubmit={handleSubmit} className="space-y-5">
            <TextField name="name" variant="secondary">
              <Label className="text-sm font-bold text-gray-700">Full Name</Label>
              <Input className="h-12 rounded-xl" placeholder="John Doe" />
            </TextField>

            <div className="grid grid-cols-2 gap-4">
               <TextField name="email" variant="secondary">
                 <Label className="text-sm font-bold text-gray-700">Email</Label>
                 <Input className="h-12 rounded-xl" placeholder="name@mail.com" />
               </TextField>
               <TextField name="password" variant="secondary">
                 <Label className="text-sm font-bold text-gray-700">Password</Label>
                 <Input className="h-12 rounded-xl" type="password" placeholder="••••••••" />
               </TextField>
            </div>

            <TextField name="photo" variant="secondary">
              <Label className="text-sm font-bold text-gray-700">Photo URL</Label>
              <Input className="h-12 rounded-xl" placeholder="https://image.url" />
            </TextField>

            <Button type="submit" className="w-full h-12 bg-[#4A6B6F] text-white rounded-xl font-bold hover:bg-[#3d5a5e] transition-all">
              Create Account
            </Button>
          </Form>
        </div>

        <div className="mt-8">
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center"><Separator /></div>
              <div className="relative flex justify-center text-xs uppercase font-bold text-gray-400">
                <span className="bg-white px-2">Or continue with</span>
              </div>
            </div>

            <Button variant="secondary" className="w-full h-12 rounded-xl border border-gray-200 font-bold hover:bg-gray-50">
              <FcGoogle className="mr-2 text-xl" /> Sign up with Google
            </Button>

            <p className="text-center text-sm text-gray-600 mt-6">
              Already have an account? <Link href="/login" className="text-[#4A6B6F] font-black hover:underline">Login</Link>
            </p>
        </div>
      </Card>
    </div>
  );
};

export default RegisterPage;
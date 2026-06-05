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
import toast, { Toaster } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const LoginPageClient = () => {
    const handleLogin = async(e) =>{
    e.preventDefault();

    const formData = new FormData(e.currentTarget)
    const user = Object.fromEntries(formData.entries());
    // console.log(user);

    const {data,error} = await authClient.signIn.email({
      email: user.email,
      password: user.password
    })

    console.log(data);

    if(data){
      toast.success("Login successfull!")
      window.location.href = "/";
    }

    if(error){
      console.log("Error:", error);
      toast.error(error.message);
    }
    
  }

  const handleGoogleSignIn = async() =>{
      await authClient.signIn.social({
        provider: "google"
      })
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-gray-100 p-6">
      <Toaster></Toaster>
      
      <Card className="w-full max-w-md p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-3xl border border-white bg-white/90 backdrop-blur-sm">
        
        <Card.Header className="text-center mb-8">
          <Card.Title className="text-4xl font-black text-[#4A6B6F] tracking-tight">
            Welcome Back
          </Card.Title>
          <Card.Description className="text-gray-500 mt-2 font-medium">
            Enter your credentials to access your account
          </Card.Description>
        </Card.Header>

        <Form onSubmit={handleLogin} className="flex flex-col gap-6">
          <Card.Content className="flex flex-col gap-5">
            <TextField name="email" type="email" variant="secondary">
              <Label className="text-sm font-bold text-gray-700">Email Address</Label>
              <Input
                placeholder="name@company.com"
                className="h-14 rounded-2xl border-gray-200 focus:border-[#4A6B6F] transition-all"
              />
            </TextField>

            <TextField name="password" type="password" variant="secondary">
              <Label className="text-sm font-bold text-gray-700">Password</Label>
              <Input
                placeholder="••••••••"
                className="h-14 rounded-2xl border-gray-200 focus:border-[#4A6B6F] transition-all"
              />
            </TextField>

            <Link
              className="ml-auto text-xs font-bold text-[#4A6B6F] hover:underline"
              href="#"
            >
              Forgot password?
            </Link>
          </Card.Content>

          <Card.Footer className="flex flex-col gap-4">
            <Button
              className="w-full h-14 bg-[#4A6B6F] hover:bg-[#3d5a5e] rounded-2xl font-bold text-lg text-white transition-all shadow-lg shadow-[#4A6B6F]/20"
              type="submit"
            >
              Sign In
            </Button>

            <div className="relative my-2">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-[10px] uppercase font-bold tracking-widest">
                <span className="bg-white px-2 text-gray-400">Or continue with</span>
              </div>
            </div>

            <Button
            onClick={handleGoogleSignIn}
              variant="secondary"
              className="w-full h-14 rounded-2xl border-2 border-gray-100 hover:bg-gray-50 transition-all font-bold text-gray-700"
              
            >
              <FcGoogle className="mr-2 text-2xl" />
              Sign in with Google
            </Button>
            
            <div className="text-center text-sm text-gray-600 mt-2">
              Don't have an account?{" "}
              <a href={"/register"} className="text-[#4A6B6F] font-black hover:underline">
                Register
              </a>
            </div>
          </Card.Footer>
        </Form>
      </Card>
    </div>
    );
};

export default LoginPageClient;
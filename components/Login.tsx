"use client";
import React from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className="relative bg-white h-screen flex flex-col items-center justify-center text-black overflow-none">
      <Image className="w-16 h-16 absolute top-5" src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" loading="lazy" alt="google logo"  width={30}
        height={30} />
      <h3 className="font-semibold">Login using the below method to continue to ChatGPT</h3>
      <button
        onClick={() => signIn("google")}
        className="px-4 py-2 m-6 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
    <Image className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"  width={30}
        height={30} />
    <span>Login with Google</span>
      
       
      </button>
      <sub className="absolute bottom-5">This page is just an imitation of the real OpenAI login procedure for ChatGPT, albeit with obvious differentiators</sub>
    </div>
  );
}

export default Login;


"use client";

import { signIn } from "next-auth/react";
console.log(process.env.GOOGLE_CLIENT_ID);
console.log(process.env.GOOGLE_CLIENT_SECRET);
export default function SignIn() {
    return (
        <div className="h-screen flex items-center justify-center">
            <button
                onClick={() => signIn("google")}
                className="px-4 py-2 bg-black text-white"
            >

                Sign in with Google
            </button>
        </div>
    );
}
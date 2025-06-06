"use client";

import { signIn } from "next-auth/react";
import { IconBrandGithub } from '@tabler/icons-react'

const SignInButton = () => {
    return (
        <button className="btn bg-black text-white border-black" onClick={() => signIn("github", { callbackUrl: "/dashboard" })} type="button">
            <IconBrandGithub />
            Login with GitHub
        </button>

    );
};

export default SignInButton;
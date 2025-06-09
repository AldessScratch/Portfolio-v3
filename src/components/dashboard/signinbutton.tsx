"use client";

import { signIn } from "next-auth/react";
import { IconBrandGithub } from '@tabler/icons-react'

const SignInButton = () => {
    return (
        <button className="btn btn-outline rounded-lg border-1" onClick={() => signIn("github", { callbackUrl: "/dashboard" })} type="button">
            <IconBrandGithub />
            Sign in with GitHub
        </button>

    );
};

export default SignInButton;
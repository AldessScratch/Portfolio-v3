"use client";

import { signOut } from "next-auth/react";
import { IconLogout2 } from '@tabler/icons-react'

const SignOutButton = () => {
    return (
        <button 
            className={`
                flex items-center justify-center font-semibold transition-transform
                p-2 rounded-full
                md:gap-2 md:px-4 md:py-2 md:rounded-lg
                btn btn-rounded btn-ghost md:btn-soft
            `}
            onClick={() => signOut({ callbackUrl: "/" })}
            type="button"
        >
            <IconLogout2 /> <span className="md:flex hidden">Sign out</span>
        </button>

    );
};

export default SignOutButton;
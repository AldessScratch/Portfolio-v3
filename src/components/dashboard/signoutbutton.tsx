"use client";

import { signOut } from "next-auth/react";
import { IconLogout2 } from '@tabler/icons-react'

const SignOutButton = () => {
    return (
        <button className="flex items-center gap-2 w-full justify-center px-4 py-2 rounded-lg font-semibold  transition-transform btn btn-soft" onClick={() => signOut({ callbackUrl: "/" })} type="button">
            <IconLogout2 /> Sign out
        </button>

    );
};

export default SignOutButton;
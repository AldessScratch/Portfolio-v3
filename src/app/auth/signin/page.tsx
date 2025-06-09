import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { options } from "../../api/auth/[...nextauth]/options";

import SignInButton from "@/components/dashboard/signinbutton";

const SignInPage = async () => {
  const session = await getServerSession(options);

  if (session) {
    redirect("/dashboard");
  } else {
    return (
      <div className="h-[100vh] w-full flex justify-center items-center flex-col">
        <div className="flex justify-center items-center flex-col blbg rounded-2xl p-10">
          <SignInButton />
        </div>
      </div>
    );
  }
};

export default SignInPage;
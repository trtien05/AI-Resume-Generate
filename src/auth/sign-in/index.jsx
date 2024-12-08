import { SignIn } from "@clerk/clerk-react";

function SignInPage() {
  return (
    <div className="flex items-center justify-center my-10">
      <SignIn />
    </div>
  )
}

export default SignInPage
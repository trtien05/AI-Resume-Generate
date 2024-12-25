import { SignIn } from '@clerk/clerk-react'

function SignInPage() {
  return (
    <div className='flex justify-center my-20 items-center'>
      <SignIn
        path="/auth/sign-in"
        routing="path"
        fallbackRedirectUrl="/dashboard" // URL sẽ redirect sau khi đăng nhập
        forceRedirectUrl="/dashboard" // URL sẽ redirect sau khi đăng ký
      />
    </div>
  )
}

export default SignInPage
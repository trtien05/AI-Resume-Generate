import { SignUp } from '@clerk/clerk-react'

function SignUpPage() {
  return (
    <div className='flex justify-center my-20 items-center'>
      <SignUp
        path="/auth/sign-up"
        routing="path"
        fallbackRedirectUrl="/dashboard" // URL sẽ redirect sau khi đăng nhập
        forceRedirectUrl="/dashboard" // URL sẽ redirect sau khi đăng ký
      />
    </div>
  )
}

export default SignUpPage
import { SignIn, useUser } from '@clerk/clerk-react'
import { redirect } from 'react-router-dom';

function SignInPage() {
  const { user } = useUser();
  if (!user) {
    redirect('/auth/sign-up')
  }
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
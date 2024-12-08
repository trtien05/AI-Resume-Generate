import { UserButton, useUser } from "@clerk/clerk-react"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"

function Header() {
  const { isSignedIn } = useUser()
  return (
    <div className='flex justify-between shadow-md p-3 px-5'>
      <img src="./logo.svg" width={100} height={100} />
      <div>
        {isSignedIn ? (
          <div className="flex items-center gap-2">
            <Link to="/dashboard">
              <Button variant='outline'>Dashboard</Button>
            </Link>
            <UserButton />
          </div>
        ) : (
          <Link to="/auth/sign-in">
            <Button>Get Started</Button>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Header
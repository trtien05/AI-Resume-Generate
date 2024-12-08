import { Navigate, Outlet } from 'react-router-dom'
import './App.css'
import { useUser } from '@clerk/clerk-react'

function App() {
  const { isLoad, isSignedIn } = useUser()
  if (!isSignedIn && isLoad) {
    return <Navigate to="/auth/sign-in" />
  }
  return (
    <>
      <Outlet />
    </>
  )
}

export default App

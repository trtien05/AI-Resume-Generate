import { Navigate, Outlet } from 'react-router-dom'
import './App.css'
import { useUser } from '@clerk/clerk-react'
import Header from './components/custom/Header'

function App() {
  const { isLoad, isSignedIn } = useUser()
  if (!isSignedIn && isLoad) {
    return <Navigate to="/auth/sign-in" />
  }
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App

import React from 'react'
import { useAuth0 } from "@auth0/auth0-react"

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return <div className="flex min-h-screen items-center justify-center text-center text-5xl font-mono">
      <p>Loading...</p>
    </div>
  }
  if (error) {
    return <div className="flex flex-col items-center justify-center text-center text-5xl font-mono">
      <p>{error.message}</p>
    </div>
  }
  return (
    <>
      {children}
    </>
  )
}

export default AuthWrapper
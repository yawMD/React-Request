import React, { useEffect } from 'react'
import LoginScreen from '../../components/Login'
import { User } from 'next-auth'
import { useRouter } from 'next/router'

const Login = () => {
  const router = useRouter()

  useEffect(() => {
    const userString = localStorage.getItem('user')
    if (userString) {
      const user = JSON.parse(userString) as unknown as User
      if (user) {
        router.push('/user')
      } else {
        router.push('/auth/login')
      }
    } else {
      router.push('/auth/login')
    }
  }, [])

  return (
    <>
      <div className="w-screen h-screen bg-white grid grid-rows-4 overflow-y-scroll">
        <div className="loginBanner" />
        <div className="row-span-3 px-5">
          <LoginScreen />
        </div>
      </div>
    </>
  )
}

export default Login

import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { User } from 'next-auth'

const Home: NextPage = () => {
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

  return <div className={styles.container} />
}

export default Home

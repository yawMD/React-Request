import React, { ReactNode } from 'react'
import Navbar from '../Navbar'

interface Props {
  children: ReactNode | ReactNode[]
}

interface User {
  token: string
  user: {
    admin: boolean
    createdAt: string
    email: string
    id: string
    name: string
  }
}

export const UserContext = React.createContext<User | null>(null)

const PageLayout = (props: Props) => {
  const [user, setUser] = React.useState<User | null>(null)

  React.useEffect(() => {
    const userString = localStorage.getItem('user')
    if (userString) {
      setUser(JSON.parse(userString) as User)
    }
  }, [])

  return (
    <UserContext.Provider value={user}>
      <div>
        <Navbar />
        <main className="max-w-1440 mx-auto mt-8 px-3 sm:px-6 lg:px-8">{props.children}</main>
      </div>
    </UserContext.Provider>
  )
}

export default PageLayout

import React, { useContext } from 'react'
import { UserContext } from '../Layout'

interface Props {
  title: string
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

const PageHeader = (props: Props) => {
  const user = useContext(UserContext)
  return (
    <div className="w-full space-y-6 justify-between items-center mb-10">
      <div className="center">
        <h2 className="font-semibold text-riverBlack text-lg">
          Welcome {user?.user.name.toUpperCase()}
        </h2>
      </div>
    </div>
  )
}

export default PageHeader

import React from 'react'
import PageLayout from '../../components/Layout'
import PageHeader from '../../components/PageHeader'
import Members from '../../components/Members'
import Users from '../../components/Users'

const Home = () => {
  return (
    <PageLayout>
      <div className="space-y-6">
        <Users />
      </div>
    </PageLayout>
  )
}

export default Home

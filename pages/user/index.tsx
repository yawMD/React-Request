import React from 'react'
import PageLayout from '../../components/Layout'
import PageHeader from '../../components/PageHeader'
import Members from '../../components/Members'

const Home = () => {
  return (
    <PageLayout>
      <PageHeader title={`WELCOME PEREZ CATO`} />
      <div className="space-y-6">
        <Members />
      </div>
    </PageLayout>
  )
}

export default Home

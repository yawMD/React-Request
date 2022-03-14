import React from 'react'
import PageLayout from '../../components/Layout'
import PageHeader from '../../components/PageHeader'
import Members from '../../components/Members'

const Home = () => {
  const [commission, setCommission] = React.useState<number>(0)
  const [search, setSearch] = React.useState<string>('')

  return (
    <PageLayout>
      <PageHeader search={search} setSearch={setSearch} title={`WELCOME PEREZ CATO`} />
      <div className="space-y-6">
        <Members />
      </div>
    </PageLayout>
  )
}

export default Home

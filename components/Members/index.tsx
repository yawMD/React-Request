import React, { useContext, useEffect } from 'react'
import { members } from './members'
import Panel from '../Panel'
import { PuffLoader } from 'react-spinners'
import axios from 'axios'
import { User } from 'next-auth'
import ViewMessage from '../modals/view-message.modal'

export interface Requests {
  id: string
  title: string
  message: string
  received: boolean
  createdAt: string
}

const Members = () => {
  const [isFetching, setIsFetching] = React.useState<boolean>(false)
  const [requests, setRequests] = React.useState<Requests[]>([])
  const [viewMessage, setViewMessage] = React.useState<boolean>(false)
  const [selectedMessage, setSelectedMessage] = React.useState<Requests>()
  const [user, setUser] = React.useState<any>()

  useEffect(() => {
    const fetchRequests = async () => {
      const userString = localStorage.getItem('user')
      if (userString) {
        try {
          setIsFetching(true)
          const user = JSON.parse(userString) as unknown as User
          setUser(user)

          let requestString = 'http://localhost:3001/request/user'
          // @ts-ignore
          if (user.user.admin) {
            requestString = 'http://localhost:3001/request/all'
          }

          const req = await axios.get(requestString, {
            headers: {
              Authorization: user.token as string,
            },
          })
          setRequests(req.data.data)
          setIsFetching(false)
        } catch (e) {
          setIsFetching(false)
        }
      }
    }

    fetchRequests().catch()
  }, [])

  return (
    <>
      {viewMessage && (
        <ViewMessage user={user} request={selectedMessage} setOpen={setViewMessage} />
      )}

      <div className="mb-5">
        {requests && (
          <Panel title={'Requests'}>
            <div className="overflow-x-auto w-full">
              {isFetching && (
                <div className="flex justify-center mt-6">
                  <PuffLoader color="#2FAEF3" />
                </div>
              )}
              {requests && requests.length > 0 && (
                <table className="min-w-full divide-y divide-gray-200 border-b">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Title
                      </th>
                      {user && user.user.admin && (
                        <>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            User
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Email
                          </th>
                        </>
                      )}

                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {requests &&
                      requests.map((request, id) => (
                        <tr
                          key={id}
                          className="cursor-pointer"
                          onClick={() => {
                            setSelectedMessage(request)
                            setViewMessage(true)
                          }}
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-normal text-riverDeepGray">
                            {id + 1}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-normal text-riverDeepGray">
                            {request.title}
                          </td>
                          {user && user.user.admin && (
                            <>
                              <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-normal text-riverDeepGray">
                                {
                                  //@ts-ignore
                                  request.user.name
                                }
                              </td>

                              <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-normal text-riverDeepGray">
                                {
                                  //@ts-ignore
                                  request.user.email
                                }
                              </td>
                            </>
                          )}

                          <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-normal text-riverDeepGray">
                            {new Date(request.createdAt).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              )}
            </div>
          </Panel>
        )}
      </div>
    </>
  )
}

export default Members

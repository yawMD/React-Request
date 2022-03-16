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

          let requestString = `${process.env.API_REQUEST}/request/user`
          // @ts-ignore
          if (user.user.admin) {
            requestString = `${process.env.API_REQUEST}/request/all`
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

                      {user && !user.user.admin && (
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Status
                        </th>
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
                      requests
                        .sort(
                          //@ts-ignore
                          (sort1, sort2) => new Date(sort2.createdAt) - new Date(sort1.createdAt)
                        )
                        .map((request, id) => (
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

                            {user && !user.user.admin && (
                              <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-normal text-riverDeepGray">
                                {
                                  //@ts-ignore
                                  request.received ? (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-6 w-6 text-green-600"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                      />
                                    </svg>
                                  ) : (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-6 w-6 text-red-600"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                      />
                                    </svg>
                                  )
                                }
                              </td>
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

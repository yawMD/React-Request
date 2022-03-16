//@ts-nocheck
import React, { useContext, useEffect } from 'react'
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

const Users = () => {
  const [isFetching, setIsFetching] = React.useState<boolean>(false)
  const [requests, setRequests] = React.useState<User[]>([])
  const [viewMessage, setViewMessage] = React.useState<boolean>(false)
  const [selectedMessage, setSelectedMessage] = React.useState<User>()
  const [user, setUser] = React.useState<any>()

  useEffect(() => {
    const fetchRequests = async () => {
      const userString = localStorage.getItem('user')
      if (userString) {
        try {
          setIsFetching(true)
          const user = JSON.parse(userString) as unknown as User
          setUser(user)

          let requestString = `${process.env.API_REQUEST}/user/all`

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
      {/*{viewMessage && (*/}
      {/*  <ViewMessage user={user} request={selectedMessage} setOpen={setViewMessage} />*/}
      {/*)}*/}

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
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Phone Number
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Company
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Department
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Actions
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
                            {request.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-normal text-riverDeepGray">
                            {
                              //@ts-ignore
                              request.email
                            }
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-normal text-riverDeepGray">
                            {
                              //@ts-ignore
                              request.phone_number
                            }
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-normal text-riverDeepGray">
                            {
                              //@ts-ignore
                              request.company
                            }
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-normal text-riverDeepGray">
                            {
                              //@ts-ignore
                              request.department
                            }
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-normal text-riverDeepGray">
                            {
                              //@ts-ignore
                              new Date(request.createdAt).toLocaleDateString()
                            }
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-normal text-riverDeepGray">
                            <button>edit</button>
                            <button>Delete</button>
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

export default Users

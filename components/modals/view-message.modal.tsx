import React from 'react'
import { Requests } from '../Members'

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  request: Requests | undefined
  user: React.Dispatch<React.SetStateAction<any>>
}

const ViewMessage = (props: Props) => {
  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      style={{ margin: 0 }}
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
          aria-hidden="true"
        />

        <span className="hidden sm:inline-block  sm:h-screen" aria-hidden="true">
          &#8203;
        </span>

        <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-2 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-2/5 sm:px-16 sm:py-12">
          <button onClick={() => props.setOpen(false)} className="absolute top-4 right-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div>
            <div className=" text-left sm:mt-5">
              <div className="flex items-center space-x-1">
                {
                  //@ts-ignore
                  props.request.received ? (
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
                <h3 className="text-lg leading-6 font-medium " id="modal-title">
                  {props.request?.title}
                </h3>
              </div>

              <div className="mt-2">
                <p className="text-sm text-gray-500">{props.request?.message}</p>
              </div>
            </div>
          </div>

          {
            //@ts-ignore
            props.user && props.user.user.admin && (
              <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => console.log(false)}
                >
                  Mark as received
                </button>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default ViewMessage

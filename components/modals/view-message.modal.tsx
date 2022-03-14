import React from 'react'
import { Requests } from '../Members'

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  request: Requests | undefined
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
              <h3 className="text-lg leading-6 font-medium " id="modal-title">
                {props.request?.title}
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">{props.request?.message}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewMessage

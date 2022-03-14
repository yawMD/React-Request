import React from 'react'

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ErrorModal = (props: Props) => {
  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto m-0"
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

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>

        <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-[26rem] sm:px-16 sm:py-12">
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
            <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-red-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <div className="mt-3 text-center sm:mt-5">
              <h3 className="text-lg leading-6 font-medium " id="modal-title">
                Unsuccessful request
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">Your request was not successful</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorModal

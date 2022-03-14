import React from 'react'

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  request?: boolean
  created?: boolean
}

const CreateUpdateModal = (props: Props) => {
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
            <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100">
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.2129 23.375V26.35"
                  stroke="#008000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.1289 31.166H24.2956V29.7493C24.2956 28.191 23.0206 26.916 21.4622 26.916H12.9622C11.4039 26.916 10.1289 28.191 10.1289 29.7493V31.166V31.166Z"
                  stroke="#008000"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                />
                <path
                  d="M8.71289 31.166H25.7129"
                  stroke="#008000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.9997 22.6673C11.5172 22.6673 7.08301 18.2332 7.08301 12.7507V8.50065C7.08301 5.36982 9.61884 2.83398 12.7497 2.83398H21.2497C24.3805 2.83398 26.9163 5.36982 26.9163 8.50065V12.7507C26.9163 18.2332 22.4822 22.6673 16.9997 22.6673Z"
                  stroke="#008000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.74881 16.5038C6.68631 16.1638 5.75131 15.5404 5.01465 14.8038C3.73965 13.3871 2.88965 11.6871 2.88965 9.70378C2.88965 7.72044 4.44798 6.16211 6.43132 6.16211H7.35215C7.06882 6.81378 6.92715 7.53628 6.92715 8.28711V12.5371C6.92715 13.9538 7.22465 15.2854 7.74881 16.5038Z"
                  stroke="#008000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M26.251 16.5038C27.3135 16.1638 28.2485 15.5404 28.9851 14.8038C30.2601 13.3871 31.1101 11.6871 31.1101 9.70378C31.1101 7.72044 29.5518 6.16211 27.5685 6.16211H26.6476C26.931 6.81378 27.0726 7.53628 27.0726 8.28711V12.5371C27.0726 13.9538 26.7751 15.2854 26.251 16.5038Z"
                  stroke="#008000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="mt-3 text-center sm:mt-5">
              {props.request && (
                <>
                  <h3 className="text-lg leading-6 font-medium " id="modal-title">
                    Added Successfully
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">Your request was successful</p>
                  </div>
                </>
              )}

              {props.created && (
                <>
                  <h3 className="text-lg leading-6 font-medium " id="modal-title">
                    User Added Successful
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">You have successfully added a new user</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateUpdateModal

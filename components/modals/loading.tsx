import React from 'react'
import { PuffLoader } from 'react-spinners'

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const LoadingModal = (props: Props) => {
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
          <div>
            <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100">
              <PuffLoader color="#2FAEF3" />
            </div>
            <div className="mt-3 text-center sm:mt-5">
              <h3 className="text-lg leading-6 font-medium " id="modal-title">
                Sending request
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingModal

import React, { useContext } from 'react'
import PageLayout, { UserContext } from '../../components/Layout'
import Panel from '../../components/Panel'
import { Formik } from 'formik'
import * as Yup from 'yup'
import LoadingModal from '../../components/modals/loading'
import axios from 'axios'
import { User } from 'next-auth'
import CreateUpdateModal from '../../components/modals/create-update-modal'
import ErrorModal from '../../components/modals/error.modal'

const Request = () => {
  const [loading, setLoading] = React.useState<boolean>(false)
  const [success, setSuccess] = React.useState<boolean>(false)
  const [error, setError] = React.useState<boolean>(false)

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    message: Yup.string().required('Message is required'),
  })

  return (
    <>
      {loading && <LoadingModal setOpen={setLoading} />}
      {success && <CreateUpdateModal request setOpen={setSuccess} />}
      {error && <ErrorModal setOpen={setError} />}

      <PageLayout>
        <Panel title={'Make a Request'}>
          <Formik
            validateOnBlur={false}
            validateOnChange={false}
            initialValues={{
              title: '',
              message: '',
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, formik) => {
              try {
                const userString = localStorage.getItem('user')
                if (userString) {
                  setLoading(true)
                  const res = await axios.post(
                    'http://localhost:3001/request',
                    {
                      title: values.title,
                      message: values.message,
                    },
                    {
                      headers: {
                        authorization: (JSON.parse(userString) as unknown as User).token as string,
                      },
                    }
                  )
                  setLoading(false)
                  setSuccess(true)
                  formik.resetForm()
                } else {
                  setLoading(false)
                  setError(true)
                }
              } catch (e) {
                setLoading(false)
                setError(true)
              }
            }}
          >
            {(formik) => (
              <form onSubmit={formik.handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="requestInput col-span-2">
                    <input
                      value={formik.values.title}
                      onChange={(e) => formik.setFieldValue('title', e.target.value)}
                      type="text"
                      placeholder="Request title"
                    />
                  </div>
                  <div className="col-span-2 requestInput">
                    <textarea
                      value={formik.values.message}
                      onChange={(e) => formik.setFieldValue('message', e.target.value)}
                      placeholder={'message'}
                      rows={10}
                    />
                  </div>
                </div>
                <div className="mt-2">
                  <button
                    type="button"
                    onClick={() => formik.handleSubmit()}
                    className="w-full py-2 bg-green-500 text-white rounded-md font-semibold"
                  >
                    Request
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </Panel>
      </PageLayout>
    </>
  )
}

export default Request

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
    name: Yup.string().required(),
    email: Yup.string().required(),
    phone_number: Yup.string().required(),
    password: Yup.string().required(),
    company: Yup.string().required(),
    department: Yup.string().required(),
    admin: Yup.boolean(),
  })

  return (
    <>
      {loading && <LoadingModal setOpen={setLoading} />}
      {success && <CreateUpdateModal request setOpen={setSuccess} />}
      {error && <ErrorModal setOpen={setError} />}

      <PageLayout>
        <Panel title={'Add User'}>
          <Formik
            validateOnBlur={false}
            validateOnChange={false}
            initialValues={{
              name: '',
              email: '',
              phone_number: '',
              password: '',
              company: '',
              department: '',
              admin: false,
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, formik) => {
              try {
                const userString = localStorage.getItem('user')
                if (userString) {
                  setLoading(true)
                  const res = await axios.post(
                    'http://localhost:3001/user',
                    {
                      name: values.name,
                      email: values.email,
                      phone_number: values.phone_number,
                      company: values.company,
                      department: values.department,
                      password: values.password,
                      admin: false,
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
                  <div className="requestInput col-span-1">
                    <input
                      value={formik.values.name}
                      onChange={(e) => formik.setFieldValue('name', e.target.value)}
                      type="text"
                      placeholder="Name"
                    />
                  </div>

                  <div className="requestInput col-span-1">
                    <input
                      value={formik.values.email}
                      onChange={(e) => formik.setFieldValue('email', e.target.value)}
                      type="text"
                      placeholder="Email"
                    />
                  </div>

                  <div className="requestInput col-span-1">
                    <input
                      value={formik.values.phone_number}
                      onChange={(e) => formik.setFieldValue('phone_number', e.target.value)}
                      type="text"
                      placeholder="Phone Number"
                    />
                  </div>

                  <div className="requestInput col-span-1">
                    <input
                      value={formik.values.password}
                      onChange={(e) => formik.setFieldValue('password', e.target.value)}
                      type="text"
                      placeholder="Password"
                    />
                  </div>

                  <div className="requestInput col-span-1">
                    <input
                      value={formik.values.company}
                      onChange={(e) => formik.setFieldValue('company', e.target.value)}
                      type="text"
                      placeholder="Company"
                    />
                  </div>

                  <div className="requestInput col-span-1">
                    <input
                      value={formik.values.department}
                      onChange={(e) => formik.setFieldValue('department', e.target.value)}
                      type="text"
                      placeholder="Department"
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

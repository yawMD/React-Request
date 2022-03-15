import React from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { BarLoader } from 'react-spinners'
import axios from 'axios'
import { useRouter } from 'next/router'

const LoginScreen = () => {
  const [submitting, setSubmitting] = React.useState<boolean>(false)
  const router = useRouter()

  const validationSchema = Yup.object({
    email: Yup.string().required('Email is required').email('Invalid input'),
    password: Yup.string().required('Password'),
  })

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validateOnBlur={false}
        validateOnChange={false}
        validationSchema={validationSchema}
        onSubmit={async (values, formik) => {
          try {
            setSubmitting(true)
            const res = await axios.post(`http://localhost:3001/auth/login`, {
              email: values.email,
              password: values.password,
            })
            localStorage.setItem('user', JSON.stringify(res.data.data))
            router.push('/user').catch()
            setSubmitting(false)
          } catch (e) {
            formik.setErrors({})
            setSubmitting(false)
          }
        }}
      >
        {(formik) => {
          return (
            <form onSubmit={formik.handleSubmit}>
              <div className="sm:w-full sm:max-w-md mx-auto rounded-md shadow-xl -m-16 z-10 bg-white overflow-hidden ">
                {submitting && (
                  <div className="flex h-auto overflow-hidden w-full">
                    <BarLoader color="#2FAEF3" height={4} width={'100%'} />
                  </div>
                )}
                <div className="py-16 md:px-16 px-10 space-y-16 relative">
                  <div className="flex flex-col justify-center items-center space-y-2">
                    <img src="/imgs/logo.png" className="h-24" alt="river logo" />
                  </div>
                  <div className="center mt-8">
                    <h2 className="font-semibold text-riverBlack text-xl">Welcome Back</h2>
                  </div>
                  <div className="center flex-col space-y-3">
                    <div className="w-full">
                      <div className="w-full mx-auto PhoneInput flex flex-col items-start space-y-3">
                        <div className="w-full">
                          <input
                            value={formik.values.email}
                            onChange={(e) => formik.setFieldValue('email', e.target.value)}
                            className="w-full"
                            type="email"
                            placeholder="Enter email"
                          />
                          {formik.errors.email && (
                            <p className="error-label">{formik.errors.email}</p>
                          )}
                        </div>
                        <div className="w-full">
                          <input
                            value={formik.values.password}
                            onChange={(e) => formik.setFieldValue('password', e.target.value)}
                            className="w-full"
                            type="password"
                            placeholder="Enter password"
                          />
                          {formik.errors.password && (
                            <p className="error-label">{formik.errors.password}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="-mt-3">
                    <button
                      type="submit"
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-riverBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-riverBlue"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )
        }}
      </Formik>
    </>
  )
}

export default LoginScreen

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { UserContext } from '../Layout'
import { useRouter } from 'next/router'

const Navbar = () => {
  const headerRef = useRef<HTMLDivElement>(null)
  const [isSticky, setIsSticky] = useState<boolean>(false)
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const user = React.useContext(UserContext)
  const router = useRouter()

  const setNavBarSticky = () => {
    if (headerRef && headerRef.current) {
      const scrollOffset = window.scrollY
      const headerHeightHalved = +headerRef.current.getBoundingClientRect().height
      setIsSticky(scrollOffset > headerHeightHalved)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', setNavBarSticky)
    return () => window.removeEventListener('scroll', setNavBarSticky)
  }, [])

  const logoutUser = () => {
    localStorage.removeItem('user')
    router.push('/auth/login')
  }

  return (
    <div
      ref={headerRef}
      className={`bg-white w-full ${isSticky ? 'sticky top-0 left-0 shadow' : 'relative'}`}
    >
      {/*{showMenu && (*/}
      {/*  <div className="relative md:hidden">*/}
      {/*    <div className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right ">*/}
      {/*      <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden space-y-4">*/}
      {/*        <div className="px-5 pt-4 flex items-center justify-between">*/}
      {/*          /!*<NavLink to={'/'} exact={true}>*!/*/}
      {/*          <img className="h-6 w-20" src={RiverLogo} alt="river logo" />*/}
      {/*          /!*</NavLink>*!/*/}
      {/*          <div className="-mr-2">*/}
      {/*            <div*/}
      {/*              onClick={() => setShowMenu(!showMenu)}*/}
      {/*              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"*/}
      {/*            >*/}
      {/*              <span className="sr-only">Close main menu</span>*/}
      {/*              /!*<XIcon className="h-6 w-6" aria-hidden="true" />*!/*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </div>*/}

      {/*        <div className="px-2 pt-2 pb-3 space-y-1 divide-y">*/}
      {/*          <NavLink*/}
      {/*            to={'/'}*/}
      {/*            exact={true}*/}
      {/*            className="block px-3 py-2 rounded-md text-riverMainGray text-sm font-normal hover:bg-gray-50"*/}
      {/*            activeClassName="text-riverBlack text-sm font-semibold"*/}
      {/*          >*/}
      {/*            Home*/}
      {/*          </NavLink>*/}
      {/*          <NavLink*/}
      {/*            to={'/resources'}*/}
      {/*            exact={true}*/}
      {/*            className="block px-3 py-2 rounded-md text-riverMainGray text-sm font-normal hover:bg-gray-50"*/}
      {/*            activeClassName="text-riverBlack text-sm font-semibold"*/}
      {/*          >*/}
      {/*            Resources*/}
      {/*          </NavLink>*/}
      {/*        </div>*/}

      {/*        <div className="grid grid-cols-2">*/}
      {/*          <div*/}
      {/*            onClick={logoutUser}*/}
      {/*            className="block w-full logoutButton text-sm font-semibold"*/}
      {/*          >*/}
      {/*            Log out*/}
      {/*          </div>*/}
      {/*          <div className="flex items-center justify-center">*/}
      {/*            <img*/}
      {/*              src={*/}
      {/*                user*/}
      {/*                  ? `https://ui-avatars.com/api/?name=${user.first_name} ${user.last_name}&background=2FAEF3&color=fff&bold=true`*/}
      {/*                  : avatar*/}
      {/*              }*/}
      {/*              className="h-8 w-8 rounded-full"*/}
      {/*              alt="user avatar"*/}
      {/*            />*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*)}*/}

      <div className="max-w-1440 mx-auto py-6 px-2 sm:px-6 lg:px-8 flex justify-between">
        <Link href={'/'}>
          <a className="inline-block flex justify-center items-center">
            <img src={'/imgs/logo.png'} className="h-16 w-28" alt="river logo" />
          </a>
        </Link>

        <nav className="space-x-8 flex items-center">
          <div
            onClick={() => setShowMenu(!showMenu)}
            className="md:hidden bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-riverBlack hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            {/*<MenuIcon className="h-6 w-6" aria-hidden="true" />*/}
          </div>
          <ul className=" hidden md:flex items-center space-x-8">
            <li>
              <Link href="/user">
                <a className="inline-block text-riverMainGray text-sm font-normal">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/user/request">
                <a className="inline-block text-riverMainGray text-sm font-normal">
                  Make a Request
                </a>
              </Link>
            </li>
            <li className="logoutButton text-sm font-semibold">
              <div onClick={logoutUser} className="cursor-pointer">
                Logout
              </div>
            </li>
          </ul>
          <div className="hidden md:flex items-center justify-center">
            <img
              src={`https://ui-avatars.com/api/?name=${user?.user.name}&background=2FAEF3&color=fff&bold=true`}
              className="h-8 w-8 rounded-full"
              alt="user avatar"
            />
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar

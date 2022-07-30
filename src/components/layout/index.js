import React, { Fragment } from 'react'
import Link from 'next/link'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'

import { USER_LOGIN_STATUS } from '@constants/app'

import ConnectLogoWithoutName from '@assets/logo/connect_logo_without_name.png'
import YaserProfilePic from '@assets/profile/yaser.jpg'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Layout = ({ children }) => {
  const router = useRouter()

  const handleSignOut = () => {
    localStorage.removeItem(USER_LOGIN_STATUS)
    router.push('/')
  }

  return (
    <div className="h-screen bg-gray-100">
      <Disclosure as="nav" className="bg-white">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="flex-1 flex items-center sm:items-stretch sm:justify-start">
                  <Link href={'/feeds'} passHref>
                    <a>
                      <div className="flex-shrink-0 flex items-center">
                        <img
                          className="block h-10 w-auto"
                          src={ConnectLogoWithoutName.src}
                          alt="Connect"
                        />
                        <span className="text-2xl font-bold leading-relaxed inline-block mx-2 py-2 whitespace-nowrap uppercase default-text-color">
                          {'𝕮𝖔𝖓𝖓𝖊𝖈𝖙'}
                        </span>
                      </div>
                    </a>
                  </Link>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-none hover:text-white hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon
                        className="block h-6 w-6 default-text-color"
                        aria-hidden="true"
                      />
                    ) : (
                      <MenuIcon
                        className="block h-6 w-6 default-text-color"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="absolute inset-y-0 right-0 hidden md:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full md:h-10 md:w-10"
                          src={YaserProfilePic.src}
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                              onClick={handleSignOut}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="sm:hidden">
              <div className="w-full border-top-1px-gray border-bottom-1px-gray h-full">
                <div className="w-auto h-auto mx-3">
                  <div className="px-2 pt-2 pb-3 space-y-1 h-full border-bottom-1px-gray flex items-center">
                    <img
                      className="h-9 w-9 rounded-full border-black border border-solid"
                      src={YaserProfilePic.src}
                      alt=""
                    />
                    <div className="flex flex-col justify-center px-3">
                      <span className="text-gray-900">Yaser Meeran</span>
                      <span className="text-gray-500">View your profile</span>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1 h-full flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mx-1.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    <div
                      className="flex flex-col justify-center px-3"
                      onClick={handleSignOut}
                    >
                      <span className="text-gray-900">Sign out</span>
                    </div>
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <main className="max-w-screen-xl md:w-full min-h-screen mx-auto md:py-5">
        {children}
      </main>
    </div>
  )
}

export const getLayout = (page) => <Layout>{page}</Layout>

export default Layout

import { useState } from 'react'
import { Dialog,  Popover } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

import Resume from "../img/Resume (1).pdf"
import Logo from "../img/ND - Geometric Type Monogram-PhotoRoom.png-PhotoRoom.png"


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-black max-w-screen-2xl sticky z-10">
      <nav className="mx-auto flex  max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Sachin Parihar</span>
            <img className="h-12 w-auto" src={Logo} alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white-700 bg-#4f46e5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
        <a href="/" className=" text-lg font-semibold leading-6 text-white">
            Home
          </a>

          <a href="features" className="text-lg font-semibold leading-6 text-white">
            Tech Stack
          </a>
          <a href="cta" className="text-lg font-semibold leading-6 text-white">
            Projects
          </a>
          <a href="#" className="text-lg font-semibold leading-6 text-white">
            Contactn
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href={Resume} target={'_blank'} className="text-sm font-semibold leading-6 text-white" rel="noreferrer">
            Resume <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src={Logo}
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
              <a
                href="/"
                  className="-mx-3 block rounded-lg text-4xl px-3 py-2 font-semibold leading-7 hover:text-black text-white hover:bg-gray-50"
                >
                  Home
                </a>
                <a
                href="features"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-black text-white hover:bg-gray-50"
                >
                  Tech Stack
                </a>
                <a
                  href="cta"
                  to="cta"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-black text-white hover:bg-gray-50"
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-black text-white hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href={Resume}
                  target='_blank'
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:text-black text-white hover:bg-gray-50" rel="noreferrer"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

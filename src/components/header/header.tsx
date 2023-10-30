'use client'

import { Fragment, useState, useEffect } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import ThemeChanger from './theme-changer';
import { useTheme } from 'next-themes'
import Image from 'next/image';
import Link from 'next/link';

import { 
  ArrowRight, 
  PieChart,
  ChevronDown,
  MousePointer,
  Menu,
  X
 } from 'lucide-react';

const { NEXT_PUBLIC_URL } = process.env;

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: PieChart },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: MousePointer },
]




export default function Header() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (
    <header className="bg-white dark:bg-neutral-950">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Star Wars</span>
            <Image
              className="h-12 w-auto dark:invert"
              src={`/star-wars-4.svg`}
              alt=""
              width={32}
              height={32}
            />
            {/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" /> */}
          </a>
        </div>
        <div className="flex lg:hidden hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 txt-default"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
   
        <div className=" lg:flex lg:flex-1 lg:justify-end">
            <ThemeChanger />
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Star Wars</span>
            <Image
              className="h-12 w-auto dark:invert"
              src={`/star-wars-4.svg`}
              alt=""
              width={32}
              height={32}
            />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
               
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 txt-default hover:bg-gray-50"
                >
                  Features
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 txt-default hover:bg-gray-50"
                >
                  Marketplace
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 txt-default hover:bg-gray-50"
                >
                  Company
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 txt-default hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

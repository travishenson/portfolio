import React, {Fragment} from 'react';
import {Popover, Transition} from '@headlessui/react';
import {MenuIcon, XIcon} from '@heroicons/react/outline';
import {Link} from 'gatsby';

import {EmailButton} from '../email-button';
import Logo from '../logo';

interface NavLinkProps {
  children: React.ReactNode;
  currentSlug: string;
  href: string;
  isLogo?: boolean;
  isMobile?: boolean;
}

interface NavbarProps {
  currentSlug: string;
  isFullWidthPage: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({
  children,
  currentSlug,
  href,
  isLogo = false,
}: NavLinkProps) => {
  const isActive = `/${currentSlug}` === href;

  return (
    <Link
      to={href}
      className={`font-outfit hover:text-brand-grey-100 relative transition-all duration-300 tracking-[1px] group 
        ${isActive ? 'text-brand-grey-100' : 'text-brand-grey-300'}
      `}
    >
      {children}
      <span
        className={`bg-brand-grey-100 h-[2px] w-full absolute left-0 -bottom-1 opacity-0 transition-all duration-300 
          ${isActive && !isLogo ? 'opacity-100' : ''}
          ${!isLogo ? 'group-hover:opacity-100' : ''}
        `}
      />
    </Link>
  );
};

const Navbar: React.FC<NavbarProps> = ({currentSlug, isFullWidthPage}) => {
  return (
    <Popover
      className={`fixed w-full z-30 ${
        isFullWidthPage
          ? 'bg-brand-black border-b border-brand-grey-900'
          : 'bg-brand-grey-900 border-b border-brand-grey-700'
      }`}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative z-20">
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5 sm:py-4 lg:px-8 md:space-x-10">
          <NavLink href="/" currentSlug={currentSlug} isLogo>
            <div className="w-[40px] h-[40px] md:w-[45px] md:h-[45px]">
              <Logo />
            </div>
          </NavLink>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-brand-grey-500 hover:text-brand-grey-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-blue-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex">
            <div className="flex flex-row items-center mr-12 gap-12">
              <NavLink href="/about" currentSlug={currentSlug}>
                About
              </NavLink>
              <NavLink href="/projects" currentSlug={currentSlug}>
                Projects
              </NavLink>
              {/* <NavLink href="/blog" currentSlug={currentSlug}>
                Blog
              </NavLink> */}
            </div>
            <EmailButton />
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-30 top-0 inset-x-0 h-screen transition transform origin-top-right md:hidden touch-none"
        >
          <div className="h-full flex flex-col justify-between shadow-lg ring-1 ring-black ring-opacity-5 bg-brand-black divide-y-2 divide-brand-grey-900">
            <div className="pt-5 pb-6 px-5 sm:pb-8">
              <div className="flex items-center justify-between">
                <div className="w-[40px] h-[40px]">
                  <Logo />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-brand-black rounded-md p-2 inline-flex items-center justify-center text-brand-grey-500 hover:text-brand-grey-100 hover:bg-brand-grey-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-blue-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-8 px-4 sm:mt-10">
                <nav className="flex flex-col items-end gap-12 text-xl md:hidden">
                  <NavLink href="/" currentSlug={currentSlug}>
                    Home
                  </NavLink>
                  <NavLink href="/about" currentSlug={currentSlug}>
                    About
                  </NavLink>
                  <NavLink href="/projects" currentSlug={currentSlug}>
                    Projects
                  </NavLink>
                  {/* <NavLink href="/blog" currentSlug={currentSlug}>
                    Blog
                  </NavLink> */}
                </nav>
              </div>
            </div>
            <div className="flex justify-center py-6 px-5">
              <EmailButton />
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export {Navbar};

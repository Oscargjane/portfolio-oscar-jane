'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { LayoutGroup, motion } from 'framer-motion';
import { BarsIcon, XMarkIcon } from '@/components/icons';

const navItems = {
  '/': {
    name: 'home',
  },
  '/about': {
    name: 'about',
  },
  '/projects': {
    name: 'projects',
  },
};

function Logo() {
  return (
    <Link aria-label="Oscar Jané" href="/">
      <motion.svg
        className="text-neutral-900 w-[179px] h-[37px] ml-[-40px]"
        width="179"
        height="37"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 142.51"
      >
        <motion.path
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          d="M60,104.22,84.86,28.15h8.71L68.72,104.22Z"
        />
        <motion.path
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          d="M173.7,69.77c-.94-.34-1.93-.65-2.95-.92-1.28-.35-2.63-.65-4.05-.89l-2.52-.43A13.57,13.57,0,0,1,159.6,66a1.3,1.3,0,0,1-.18-.15,3.4,3.4,0,0,1-1.51-3,3.51,3.51,0,0,1,1.73-3.13,6.24,6.24,0,0,1,2.07-.84,11.49,11.49,0,0,1,2.68-.28,9.5,9.5,0,0,1,5.2,1.33,6.61,6.61,0,0,1,2.67,4.33c0,.09.05.16.07.25l6.92-1.94A12.26,12.26,0,0,0,175,55.83a8.73,8.73,0,0,0-.77-.59,16.73,16.73,0,0,0-9.85-2.71l-.62,0a15.93,15.93,0,0,0-9.33,2.76,9.16,9.16,0,0,0-3.75,7.82,8.67,8.67,0,0,0,1.73,5.56,11.48,11.48,0,0,0,4.69,3.38l.25.1A32.41,32.41,0,0,0,163.67,74l2.46.43c1,.18,1.84.39,2.62.61A13,13,0,0,1,171.46,76a3.38,3.38,0,0,1,1.8,3.17,4.17,4.17,0,0,1-1.91,3.54,9.26,9.26,0,0,1-5.44,1.37h-.14a13.1,13.1,0,0,1-4.3-.72,7.27,7.27,0,0,1-3.42-2.45,10.85,10.85,0,0,1-2-4.68l-.08,0-6.84,1.64A13.61,13.61,0,0,0,153,85.66a13,13,0,0,0,1.71,1.41,18.56,18.56,0,0,0,9.18,3c.67,0,1.36.08,2.07.08q6.71,0,10.67-3a9.75,9.75,0,0,0,4-8.29,8.66,8.66,0,0,0-1.84-5.77A11.68,11.68,0,0,0,173.7,69.77Z M213,81.05q-2.46,2.42-7.14,2.42a11.43,11.43,0,0,1-5.59-1.37,9.82,9.82,0,0,1-3.93-4,13.35,13.35,0,0,1-1.44-6.42V71a13.13,13.13,0,0,1,1.44-6.38,10.13,10.13,0,0,1,3.93-4,11.23,11.23,0,0,1,5.59-1.4,10.78,10.78,0,0,1,5.26,1.15,8.44,8.44,0,0,1,3.25,3.1,12.06,12.06,0,0,1,1.51,4.33l7.21-1.52a16.52,16.52,0,0,0-2.85-6.85,16.08,16.08,0,0,0-5.8-5,18.73,18.73,0,0,0-8.73-1.88,19.51,19.51,0,0,0-9.26,2.2A16.47,16.47,0,0,0,189.88,61a18.94,18.94,0,0,0-2.41,9.84v.94a19.15,19.15,0,0,0,2.41,9.87,16.14,16.14,0,0,0,6.57,6.28,19.72,19.72,0,0,0,9.26,2.16,19,19,0,0,0,8.73-1.84,15.63,15.63,0,0,0,5.8-4.94,19.11,19.11,0,0,0,3.07-6.78l-7.21-1.65A11.1,11.1,0,0,1,213,81.05Z M261.24,80.73V66.09q0-6.5-4-10t-10.89-3.54A18.37,18.37,0,0,0,238.74,54a13.93,13.93,0,0,0-5.09,3.79A15.15,15.15,0,0,0,230.88,63l6.92,2.23a8.58,8.58,0,0,1,2.67-4.68,8.49,8.49,0,0,1,5.84-1.81q3.9,0,5.77,1.88a6.72,6.72,0,0,1,1.87,5v2.31H243.14a18.54,18.54,0,0,0-7,1.23,10.72,10.72,0,0,0-4.83,3.64,10,10,0,0,0-1.77,6.09A10.39,10.39,0,0,0,231.35,85a10.93,10.93,0,0,0,4.76,3.82,16.85,16.85,0,0,0,6.81,1.3,14.2,14.2,0,0,0,5.91-1,9.34,9.34,0,0,0,3.39-2.49A16.17,16.17,0,0,0,254,84H255v.22a4.31,4.31,0,0,0,1.59,3.53,6.27,6.27,0,0,0,4.11,1.3h3.34l2-6.2h-2.84C261.91,82.89,261.24,82.17,261.24,80.73ZM254,74.38a9.13,9.13,0,0,1-2.74,7A10.11,10.11,0,0,1,244,84a8.22,8.22,0,0,1-5.12-1.44A4.65,4.65,0,0,1,237,78.64a4.25,4.25,0,0,1,1.8-3.72,8.15,8.15,0,0,1,4.76-1.26H254Z M285.91,54.44a6.13,6.13,0,0,0-2.78,3.28H282V53.54H274.7V89.09h7.42V68.18q0-4.11,2.31-6.09a8.77,8.77,0,0,1,5.91-2H292l2.52-6.35a19.55,19.55,0,0,0-3.87-.35A9.92,9.92,0,0,0,285.91,54.44Z M351.56,80.73V66.09q0-6.5-4-10t-10.89-3.54A18.45,18.45,0,0,0,329.06,54,13.89,13.89,0,0,0,324,57.76,15.17,15.17,0,0,0,321.2,63l6.93,2.23a8.63,8.63,0,0,1,2.66-4.68,8.54,8.54,0,0,1,5.85-1.81q3.89,0,5.76,1.88a6.73,6.73,0,0,1,1.88,5v2.31H333.46a18.61,18.61,0,0,0-7,1.23,10.82,10.82,0,0,0-4.83,3.64,10,10,0,0,0-1.76,6.09A10.38,10.38,0,0,0,321.67,85a11,11,0,0,0,4.76,3.82,16.93,16.93,0,0,0,6.82,1.3,14.2,14.2,0,0,0,5.91-1,9.34,9.34,0,0,0,3.39-2.49A16.9,16.9,0,0,0,344.28,84h1.08v.22A4.31,4.31,0,0,0,347,87.79a6.23,6.23,0,0,0,4.11,1.3h3.35l2-6.2h-2.86C352.23,82.89,351.56,82.17,351.56,80.73Zm-7.28-6.35a9.17,9.17,0,0,1-2.74,7A10.13,10.13,0,0,1,334.33,84a8.2,8.2,0,0,1-5.12-1.44,4.66,4.66,0,0,1-1.88-3.89,4.23,4.23,0,0,1,1.81-3.72,8.12,8.12,0,0,1,4.75-1.26h10.39Z M390.75,54.77a14.14,14.14,0,0,0-7.17-1.8q-5.13,0-7.72,1.87a10.74,10.74,0,0,0-3.6,4H371.1V53.54h-7.28V89.09h7.43v-18q0-5.77,2.77-8.8a9.55,9.55,0,0,1,7.39-3,8.81,8.81,0,0,1,6.35,2.2q2.31,2.2,2.31,6.81V89.09h7.42V67.75a16.21,16.21,0,0,0-1.8-7.9A12.85,12.85,0,0,0,390.75,54.77Z M440,70.56a19.65,19.65,0,0,0-2.17-9.45,15.9,15.9,0,0,0-6-6.31,17.38,17.38,0,0,0-9-2.27,18.51,18.51,0,0,0-9.27,2.27,15.94,15.94,0,0,0-6.24,6.42,20.16,20.16,0,0,0-2.23,9.7v.87a19.63,19.63,0,0,0,2.27,9.62,16,16,0,0,0,6.31,6.42,19,19,0,0,0,9.44,2.27,18.13,18.13,0,0,0,7.94-1.51,15.46,15.46,0,0,0,5-3.75A21.8,21.8,0,0,0,439,80.58l-6.13-3.17a13.3,13.3,0,0,1-3.28,4.33q-2.13,1.88-6.31,1.87a10.58,10.58,0,0,1-7.47-2.77,10.14,10.14,0,0,1-3.13-7.47H440Zm-27.26-2.88a9.75,9.75,0,0,1,3.21-6.31,10,10,0,0,1,6.81-2.28,9.9,9.9,0,0,1,6.78,2.28,8.85,8.85,0,0,1,2.89,6.31Z M123.44,89.77a20,20,0,0,1-9.48-2.2,16.18,16.18,0,0,1-6.53-6.31,19.08,19.08,0,0,1-2.38-9.74V70.44a18.88,18.88,0,0,1,2.38-9.7,16.49,16.49,0,0,1,6.53-6.3,19.64,19.64,0,0,1,9.48-2.24A19.91,19.91,0,0,1,133,54.44a16.5,16.5,0,0,1,6.56,6.3,19,19,0,0,1,2.38,9.7v1.08a19.18,19.18,0,0,1-2.38,9.74A16.2,16.2,0,0,1,133,87.57,20.25,20.25,0,0,1,123.44,89.77Zm0-6.64a10.66,10.66,0,0,0,8-3.13q3.06-3.14,3.06-8.69v-.65q0-5.55-3-8.69a11.63,11.63,0,0,0-15.9,0q-3.06,3.14-3.06,8.69v.65q0,5.55,3.06,8.69A10.56,10.56,0,0,0,123.44,83.13Z M309.62,54h-6.36V90.86c0,9.4-7.37,10-7.37,10l1.55,6.44c4.89,0,13.24-3.92,13.24-16.48V54Z M310.68,40.51A5,5,0,0,0,307,39.1a5.09,5.09,0,0,0-3.65,1.41,5.24,5.24,0,0,0,0,7.28A5.09,5.09,0,0,0,307,49.2a5,5,0,0,0,3.67-1.41,5.29,5.29,0,0,0,0-7.28Z"
        />
      </motion.svg>
    </Link>
  );
}

export default function Navigation() {
  const [isToggle, setIsToggle] = useState(false);
  const pathname = usePathname();

  const handleClickMobileNav = () => {
    setIsToggle(!isToggle);
  };

  return (
    <LayoutGroup>
      <nav className="flex flex-wrap items-center justify-between">
        <Logo />
        <button
          className="lg:hidden focus:outline-none"
          onClick={handleClickMobileNav}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 350,
              damping: 30,
            }}
          >
            {isToggle ? <XMarkIcon /> : <BarsIcon />}
          </motion.div>
        </button>
        <div
          className={clsx(
            'w-full lg:w-min lg:flex',
            { block: isToggle },
            { hidden: !isToggle }
          )}
        >
          <ul className="flex flex-col items-center font-medium lg:flex-row">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = path === pathname;
              return (
                <li
                  key={path}
                  className={clsx(
                    'transition-all relative px-[10px] py-[5px] flex align-middle text-neutral-500 hover:text-neutral-800',
                    { 'text-neutral-800': isActive }
                  )}
                >
                  <Link href={path}>
                    {name}
                    {path === pathname ? (
                      <motion.div
                        className="absolute inset-0 bg-neutral-100 rounded-md z-[-1]"
                        layoutId="navigation"
                        transition={{
                          type: 'spring',
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </LayoutGroup>
  );
}

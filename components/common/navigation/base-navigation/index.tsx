import Link from 'next/link';
import { FC, ReactElement } from 'react';

interface BaseNavigationProps {
  handleNavigation: () => void;
}

const BaseNavigation: FC<BaseNavigationProps> = ({
  handleNavigation,
}): ReactElement => {
  return (
    <div
      className="flex justify-between bg-transparent relative pt-5 lg:pt-6 px-3 lg:px-16 xl:px-20"
      style={{ background: 'linear-gradient(to right ,#050942, #6c2662 90%)' }}
    >
      <div>
        <Link href="/">
          <a href="/">
            <img
              style={{ width: '104px' }}
              src="/img/omax-2.svg"
              alt="omax"
              className="relative bottom-1 lg:bottom-1 lg:left-2"
            />
          </a>
        </Link>
      </div>
      <div className="hidden lg:flex flex-row text-sm space-x-12">
        <div className="flex flex-row space-x-6">
          <Link href="#">
            <a href="#" className="text-white font-semibold">
              About Us
            </a>
          </Link>
          <Link href="#">
            <a href="#" className="text-white font-semibold">
              Learn
            </a>
          </Link>
          <Link href="#">
            <a href="#" className="text-white font-semibold">
              Blog
            </a>
          </Link>
        </div>
        <div className="space-x-2">
          <Link href="#">
            <a
              className="bg-transparent border rounded-md text-white px-4 py-2 font-semibold"
              href="#"
            >
              Login
            </a>
          </Link>
          <Link href="#">
            <a
              style={{
                background: 'linear-gradient(to right ,#629509, #da6200)',
                padding: '10px',
              }}
              className="bg-button-gradient rounded-md font-semibold text-white"
              href="#"
            >
              Create Account
            </a>
          </Link>
        </div>
      </div>
      <div className="lg:hidden">
        <button
          style={{ WebkitTapHighlightColor: 'transparent', bottom: '15px' }}
          className="absolute right-2"
          onClick={handleNavigation}
        >
          <img src="/img/menu.svg" alt="menu" className="w-7" />
        </button>
      </div>
    </div>
  );
};

export default BaseNavigation;

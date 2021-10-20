import Link from 'next/link';
import { ReactElement, FC } from 'react';
import styles from './index.module.css';

interface MobileNavigationProps {
  isNavOpen: boolean;
  closeNav: () => void;
}

const MobileNavigation: FC<MobileNavigationProps> = ({
  isNavOpen,
  closeNav,
}): ReactElement => {
  return (
    <div
      style={{ background: '#170c46', zIndex: 99 }}
      className={`fixed top-0 w-full h-full opacity-95 ${
        isNavOpen ? styles.navOpen : styles.navClosed
      }`}
    >
      <div className="mt-4 mx-3 uppercase">
        <div className="flex flex-row items-center justify-between">
          <div>
            <Link href="/">
              <img src="/img/omax-2.svg" alt="omax" className="w-28" />
            </Link>
          </div>
          <div>
            <button onClick={closeNav}>
              <img src="/img/close.png" alt="close" className="w-5" />
            </button>
          </div>
        </div>
        <div className="flex flex-col space-y-8 mt-12">
          <Link href="#">
            <a
              href="#"
              className="text-white text-center text-lg font-semibold border-b py-2"
            >
              About Us
            </a>
          </Link>
          <Link href="#">
            <a
              href="#"
              className="text-white text-center text-lg font-semibold border-b py-2"
            >
              Learn
            </a>
          </Link>
          <Link href="#">
            <a
              href="#"
              className="text-white text-center text-lg font-semibold border-b py-2"
            >
              Blog
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4 mt-16">
          <Link href="#">
            <a
              href="#"
              className="text-white text-center text-lg font-semibold border-2 py-3 rounded-md"
            >
              LOGIN
            </a>
          </Link>
          <Link href="#">
            <a
              href="#"
              style={{
                background: 'linear-gradient(to right ,#629509, #da6200)',
                padding: '15px 0',
              }}
              className="text-white text-center text-lg font-semibold rounded-md"
            >
              Create Account
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;

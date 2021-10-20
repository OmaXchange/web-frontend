import { FC, ReactElement } from 'react';
import Link from 'next/link';
import styles from '../index.module.css';

const SectionFour: FC = (): ReactElement => {
  return (
    <section
      className={`text-white ${styles.sectionFourBackground} py-20 lg:py-20 lg:px-8 xl:px-48`}
    >
      <div className="flex flex-col space-y-8 lg:space-y-0 lg:flex-row items-center lg:h-full lg:justify-end">
        <div className="text-center lg:text-left">
          <div className="font-bold my-3 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
            Buy. Sell. <br />
            Earn. Learn. <br />
          </div>
          <p className="font-semibold text-base lg:text-lg mx-2 lg:mx-0 my-3 lg:mt-7 lg:mb-14">
            Experience the best of fast and reliable transactions.
          </p>
          <div className="mt-8 mb-10">
            <Link href="#">
              <a
                href="#"
                className="text-white font-semibold rounded-md text-lg py-4 lg:py-5 px-10 lg:px-16 lg:text-xl"
                style={{
                  background: 'linear-gradient(to right ,#629509, #da6200)',
                  boxShadow: '0px 0px 17px #446806, 0px 0px 17px #a15201',
                }}
              >
                Get Started Today!
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;

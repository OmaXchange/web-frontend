import { FC, ReactElement } from 'react';
import Link from 'next/link';
import CryptoConverter from './CryptoConverter';
import styles from '../index.module.css';

const SectionOne: FC = (): ReactElement => {
  return (
    <section
      className={`py-10 px-2 lg:px-16 xl:px-20 ${styles.sectionOneBackground}`}
      // style={{ background: 'linear-gradient(to right ,#050942, #6c2662 90%)' }}
    >
      <div className="text-white px-2 mt-6 lg:mt-10">
        <h1 className="font-bold text-3xl lg:text-5xl leading-10 lg:leading-extra-loose">
          Buy or Sell your Crypto. <br />
          Redeem your Gift Cards.
        </h1>
        <p className="mt-6 lg:mb-6 text-sm sm:text-base lg:text-xl">
          OmaX allows you to trade your crypto and <br /> giftcards - all in one
          place!
        </p>
        <CryptoConverter />
        <div className="mt-14 mb-6 lg:mb-20">
          <Link href="#">
            <a
              href="#"
              className="text-white font-semibold rounded-md py-4 lg:py-5 px-10 lg:px-16 text-lg lg:text-xl"
              style={{
                background: 'linear-gradient(to right ,#629509, #da6200)',
                boxShadow: '0px 0px 16px #446806, 0px 0px 16px #a15201',
              }}
            >
              I want to trade now
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;

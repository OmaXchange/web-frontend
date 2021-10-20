import { FC, ReactElement } from 'react';
import styles from '../index.module.css';

const SectionSix: FC = (): ReactElement => {
  return (
    <section className={styles.sectionSixBackground}>
      <div className="h-full lg:flex lg:flex-row lg:align-middle lg:items-center lg:justify-start">
        <div className="mx-auto lg:mx-0 sm:max-w-2xl lg:max-w-3xl lg:px-20 lg:py-0 px-4 py-20 text-center lg:text-left">
          <div className="text-white lg:max-w-2xl text-3xl lg:text-4xl xl:text-5xl font-bold">
            Get the latest news about Cryptocurrency <br /> for FREE!
          </div>
          <div className="mt-5 mb-4 lg:mt-7 lg:mb-10">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              className="w-full lg:w-4/5 xl:w-full lg:max-w-3xl px-3 py-3 bg-transparent border-2 border-white rounded-md placeholder-white font-semibold text-white lg:text-lg outline-none"
            />
          </div>
          <div>
            <button
              className="w-full lg:w-4/5 xl:w-full px-3 py-4 lg:py-5 xl:py-7 lg:max-w-xl lg:text-2xl text-white font-semibold rounded-md"
              style={{
                background: 'linear-gradient(to right ,#629509, #da6200)',
                boxShadow: '0px 0px 17px #a15201, 0px 0px 17px #44680',
              }}
            >
              I want the latest news and updates
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSix;

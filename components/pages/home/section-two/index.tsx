import { FC, ReactElement } from 'react';
import styles from '../index.module.css';

const SectionTwo: FC = (): ReactElement => {
  const images = [
    {
      imageSrc: '/img/bitcoin.svg',
      imageAlt: 'bitcoin',
    },
    {
      imageSrc: '/img/am-express.svg',
      imageAlt: 'american-express',
    },
    {
      imageSrc: '/img/ethereum.svg',
      imageAlt: 'ethereum',
    },
    {
      imageSrc: '/img/amazon.svg',
      imageAlt: 'amazon',
    },
    {
      imageSrc: '/img/iTunes.svg',
      imageAlt: 'iTunes',
    },
    {
      imageSrc: '/img/steam.svg',
      imageAlt: 'steam',
    },
  ];

  return (
    <section className={`lg:mx-16 xl:mx-20 overflow-hidden`}>
      <div
        className={`my-10 grid grid-cols-2 sm:grid-cols-3 gap-y-5 lg:gap-y-0 place-items-center lg:flex lg:justify-center lg:items-center lg:space-x-6 ${styles.servicesAnimation}`}
      >
        {images &&
          images.map((image) => (
            <div key={image.imageAlt} className="mx-auto lg:mx-0">
              <img
                className="w-28 sm:w-36"
                src={image.imageSrc}
                alt={image.imageAlt}
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default SectionTwo;

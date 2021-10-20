import { FC, ReactElement } from 'react';

const SectionThree: FC = (): ReactElement => {
  return (
    <section className="bg-black text-white py-20 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="mx-6 lg:mx-0">
          <div className="font-bold text-3xl text-center mt-3 mb-10">Fast</div>
          <div className="my-6">
            <img
              src="/img/fast-time.svg"
              alt="fast-time"
              className="mx-auto w-32 h-28"
            />
          </div>
          <div className="text-center max-w-md lg:max-w-max mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            voluptatum alias libero nostrum fugit quod, error veritatis quasi
            ratione
          </div>
        </div>
        <div className="mx-6 lg:mx-0">
          <div className="font-bold text-3xl text-center mt-3 mb-10">Legit</div>
          <div className="my-6">
            <img
              src="/img/check-mark.svg"
              alt="legit"
              className="mx-auto w-32 h-28"
            />
          </div>
          <div className="text-center max-w-md lg:max-w-max mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            voluptatum alias libero nostrum fugit quod, error veritatis quasi
            ratione
          </div>
        </div>
        <div className="mx-6 lg:mx-0">
          <div className="font-bold text-3xl text-center mt-3 mb-10">
            Reliable
          </div>
          <div className="my-6">
            <img
              src="/img/security-shield.svg"
              alt="reliable"
              className="mx-auto w-32 h-28"
            />
          </div>
          <div className="text-center max-w-md lg:max-w-max mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            voluptatum alias libero nostrum fugit quod, error veritatis quasi
            ratione
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;

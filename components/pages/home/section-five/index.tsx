import { FC, ReactElement } from 'react';
import CustomerTestimonials from '../customer-testimonial/CustomerTestimonials';

const SectionFive: FC = (): ReactElement => {
  return (
    <section className="bg-white w-full pt-12 pb-32">
      <div className="text-center">
        <div
          style={{ letterSpacing: '10px' }}
          className="text-primary text-lg uppercase"
        >
          Testimonials
        </div>
        <div className="text-black text-xl font-bold mx-3 my-3 xl:my-14 xl:text-4xl xl:max-w-md xl:mx-auto">
          What our clients are saying about us
        </div>
      </div>
      <div className="mt-10">
        <CustomerTestimonials />
      </div>
    </section>
  );
};

export default SectionFive;

import { FC, ReactElement } from 'react';
import Testimonial from './Testimonial';

const CustomerTestimonials: FC = (): ReactElement => {
  const testimonials = [
    {
      content:
        'This is just a sample text - serving as a placeholder for the real text will be up soon! This is just a sample text - serving as a placeholder',
      author: 'Adekunle',
      location: 'ABUJA',
    },
    {
      content:
        'This is just a sample text - serving as a placeholder for the real text will be up soon! This is just a sample text - serving as a placeholder',
      author: 'Adekunle',
      location: 'ABUJA',
    },
    {
      content:
        'This is just a sample text - serving as a placeholder for the real text will be up soon! This is just a sample text - serving as a placeholder',
      author: 'Adekunle',
      location: 'ABUJA',
    },
  ];

  return (
    <div className="flex flex-row items-center justify-center lg:space-x-8">
      {/* <div>
        <button>Previous</button>
      </div> */}
      <div className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row lg:space-x-6">
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={`${testimonial.author}-${index}`}
            content={testimonial.content}
            author={testimonial.author}
            location={testimonial.location}
          />
        ))}
      </div>
      {/* <div>
        <button>Next</button>
      </div> */}
    </div>
  );
};

export default CustomerTestimonials;

import { FC, ReactElement } from 'react';

interface TestimonialProps {
  content: string;
  author: string;
  location: string;
}

const Testimonial: FC<TestimonialProps> = ({
  content,
  author,
  location,
}): ReactElement => {
  return (
    <div className="bg-primary text-white max-w-xs px-8 py-12 space-y-8 rounded-lg">
      <div className="font-bold">&#34;I am glad I traded with OmaX&#34;</div>
      <p className="font-semibold">{content}</p>
      <div className="font-bold">
        - {author}, {location}
      </div>
    </div>
  );
};

export default Testimonial;

import { FC, ReactElement } from 'react';

const Footer: FC = (): ReactElement => {
  return (
    <div className="bg-black text-white text-center bottom-0 w-full py-2">
      <p className="font-semibold text-sm lg:text-base">
        Copyright 2021 OmaXchange - Designed by Deji The Designer
      </p>
    </div>
  );
};

export default Footer;

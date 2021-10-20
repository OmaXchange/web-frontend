import { FC, ReactElement, useState } from 'react';
import BaseNavigation from './base-navigation';
import MobileNavigation from './mobile-navigation';

const Navigation: FC = (): ReactElement => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const handleNavigation = (): void => {
    setNavOpen(!navOpen);
  };

  const closeNavigationMenu = (): void => {
    setNavOpen(false);
  };

  return (
    <div>
      <BaseNavigation handleNavigation={handleNavigation} />
      <MobileNavigation isNavOpen={navOpen} closeNav={closeNavigationMenu} />
    </div>
  );
};

export default Navigation;

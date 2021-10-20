import type { NextPage } from 'next';
import { ReactElement } from 'react';
import Layout from '../components/layout';
import SectionOne from '../components/pages/home/section-one';
import SectionTwo from '../components/pages/home/section-two';
import SectionThree from '../components/pages/home/section-three';
import SectionFour from '../components/pages/home/section-four';
import SectionFive from '../components/pages/home/section-five';
import SectionSix from '../components/pages/home/section-six';
import { SeoProp } from '../ts/interface';

const Home: NextPage = (): ReactElement => {
  const seo: SeoProp = {
    title: 'OmaX - Buy or Sell your Crypto. Redeem your Gift Cards',
    description:
      'Buy or Sell your Crypto. Redeem your Gift Cards. OmaX allows you to trade your crypto and giftcards - all in one place',
  };

  return (
    <Layout seo={seo}>
      <main>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
      </main>
    </Layout>
  );
};

export default Home;

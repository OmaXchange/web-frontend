import { FC, ReactElement } from 'react';
import Head from 'next/head';
import { SeoProp } from '../../ts/interface';
import Footer from '../common/footer';
import Navigation from '../common/navigation';

interface LayoutProps {
  children: ReactElement;
  seo?: SeoProp;
}

const Layout: FC<LayoutProps> = ({ children, seo }): ReactElement => {
  const defaultTitle = 'OmaX';
  const defaultDescription =
    'Buy or Sell your Crypto. Redeem your Gift Cards. OmaX allows you to trade your crypto and giftcards - all in one place';
  return (
    <div>
      <Head>
        <title>{seo?.title || defaultTitle}</title>
        <meta
          name="description"
          content={seo?.description || defaultDescription}
        />
        <meta name="title" content={seo?.title || defaultTitle} />
        <meta property="og:title" content={seo?.title || defaultTitle} />
        <meta
          property="og:description"
          content={seo?.description || defaultDescription}
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

import {NextPage} from 'next';
import Link from 'next/link';
import Image from 'next/dist/client/image';

import Layout from '../components/layout';

const Custom404: NextPage = () => {
  const gifWidth = 500;
  const gifHeight = gifWidth * 0.47222222222;

  return (
    <Layout pageTitle="Page Not Found">
      <main className="error-page">
        <div className="err-gif">
          <Image
            src="https://media.graphcms.com/OkcVNJSRSHCXiaXUGauF"
            width={`${gifWidth}px`}
            height={`${gifHeight}px`}
            alt="Gandalf the Grey is very confused in the Mines of Moria"
          />
        </div>
        <div className="err-text">
          <h2>Gandalf has no memory of this place...</h2>
          <div className="err-paragraphs">
            <p>
              The page you were looking for doesn&apos;t seem to exist&mdash;or
              simply couldn&apos;t be found.
            </p>
            <p>
              If you think that page should exist, double check the URL or{' '}
              <a href="mailto:hello@travishenson.com?subject=Broken%20URL%20on%20Your%20Website">
                send me an email
              </a>{' '}
              about the broken link. I&apos;ll do my best to fix the issue and
              pass along my appreciation!
            </p>
            <p>
              To get you back on your way, you can{' '}
              <Link href="/">return home</Link>, find out more{' '}
              <Link href="/about">about me</Link>, or view some of{' '}
              <Link href="/projects">my projects</Link>.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Custom404;

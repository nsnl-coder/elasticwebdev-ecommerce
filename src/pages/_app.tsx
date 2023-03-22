import type { AppProps } from 'next/app';
import CommonLayout from '@src/common/layout/CommonLayout';
import { Jost } from 'next/font/google';

const jost = Jost({ subsets: ['latin'] });

//
import '@src/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={jost.className}>
      <CommonLayout>
        <Component {...pageProps} />
      </CommonLayout>
    </div>
  );
}

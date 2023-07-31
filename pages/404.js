// pages/404.js
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import notFoundimage from '../assets/404.png';
import TheDivArea from '@/components/TheDivArea';

const NotFoundPage = () => {
  const router = useRouter();
  const prevPage = router.asPath !== '/' ? router.asPath : null;

  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <main>
        <TheDivArea>
          <div className='h-screen flex flex-col items-center justify-center'>
            <Image src={notFoundimage} alt='notFoundimage' width='60%' />
            <div className='flex items-center justify-center gap-5 mt-5'>
              <Link href={prevPage} className="bg-primary text-white font-medium px-4 lg:px-6 py-2 rounded-full">Previous Page</Link>
              <Link href="/" className="bg-white border border-primary text-primary font-medium px-4 lg:px-6 py-2 rounded-full">Home</Link>
            </div>
          </div>
        </TheDivArea>
      </main>
    </>
  );
};

export default NotFoundPage;
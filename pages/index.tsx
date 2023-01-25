import Head from 'next/head';
import Image from 'next/image';
import Meta from '@/components/Meta';

export default function Home() {
  return (
    <>
      <Meta />
      <main>
        <h1 className='text-red-500 font-poppins font-bold'>HELLO WORLD</h1>
      </main>
    </>
  );
}

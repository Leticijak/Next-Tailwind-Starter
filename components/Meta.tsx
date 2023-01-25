import Head from 'next/head';

type MetaProps = {
  title: string;
  keywords: string;
  description: string;
};

const Meta = ({ title, keywords, description }: MetaProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />

        <meta name='description' content='My own content' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </>
  );
};

Meta.defaultProps = {
  title: 'NEXTJS | STARTER',
  keywords: 'Next JS, Starter, Starter Kit, Starter Template',

  description:
    'Next JS Starter Kit is a starter template for Next JS projects. Fonts are imported from Google Fonts. Tailwind CSS is used for styling. Favicon is imported from Favicon.io. Meta tags are imported from Next JS Head.',
};

export default Meta;

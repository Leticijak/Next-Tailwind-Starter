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
  title: 'Money Match',
  keywords: 'Online video game bets, one versus one betting',

  description:
    'The best place to find the latest news and information about the video game industry.',
};

export default Meta;

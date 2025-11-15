import React from 'react';
import Layout from '../core/Layout';
import Gallery from '../components/Gallery';
import Head from 'next/head';

const GalleryPage = () => {
  return (
    <Layout>
      <Head>
        <title>ギャラリー – FlowmapBlue</title>
      </Head>
      <h1>ギャラリー</h1>
      <section>
        <p>これまでに公開されたフローマップの一部をご紹介します。</p>
        <Gallery />
      </section>
    </Layout>
  );
};

export default GalleryPage;

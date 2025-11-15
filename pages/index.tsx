import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from '@emotion/styled';
import {Away, Column, Logo, Row} from '../core';
import VideoPlaceholderImg from '../public/images/nyc-citi-bike-new-4-1000.webp';
import {Button, Classes, Colors, Intent, Tag} from '@blueprintjs/core';
import News from '../components/News';
import ReactPlayer from 'react-player';
import Layout from '../core/Layout';
import {USED_BY_LOGOS} from '../used-by';
import Gallery from '../components/Gallery';
import Credits from '../components/Credits';
import Head from 'next/head';

const LogoTitle = styled.h1`
  margin-bottom: 1em;
`;

const ListOfUses = styled.div`
  display: flex;
  // border-radius: 6px;
  // background-color: ${Colors.DARK_GRAY3};
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0.5em 1em;
  margin: 1em 0;
`;

const ListOfUsesItem = styled(({className, children}) => (
  <Tag className={className} minimal round interactive={false} intent={Intent.NONE}>
    {children}
  </Tag>
))`
  margin: 5px;
`;

const GalleryPreviewOuter = styled.div`
  margin-bottom: 20px;
`;

const DemoVideo = styled.div`
  width: 100%;
  margin-bottom: 20px;
  max-width: 500px;
  display: inline-block;
  @media (min-width: 800px) {
    float: right;
    margin-left: 20px;
  }
`;

const ResponsivePlayer = styled.div`
  position: relative;
  padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
`;

const ResponsiveReactPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid ${Colors.GRAY1};
`;

const NewsletterDescription = styled.div`
  font-size: 9pt;
  color: ${Colors.GRAY4};
`;

const NewsletterOuter = styled.div`
  justify-self: flex-end;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  button {
    white-space: nowrap;
  }
  input {
    width: 270px;
  }
  @media (max-width: 800px) {
    input {
      width: 200px;
    }
    margin-bottom: 2rem;
  }
`;

const UsedByContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-items: center;
  justify-content: center;
  & > * > img {
    max-width: 100px;
    height: 50px;
  }
  & > * {
    padding: 1em;
    opacity: 0.5;
    transition: opacity 0.2s;
    &:hover {
      opacity: 1;
    }
  }
  padding: 1em;
`;
const TitleRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Index = () => (
  <Layout>
    <Head>
      <title>FlowmapBlue – フローマップ可視化ツール</title>
    </Head>
    <TitleRow>
      <LogoTitle>
        <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Logo fontSize={35} collapseWidth={300} />
        </div>
      </LogoTitle>
    </TitleRow>

    <DemoVideo>
      <ResponsivePlayer>
        <ResponsiveReactPlayer
          // url={['/videos/demo_500.webm', '/videos/demo_500.mp4']}
          url="https://vimeo.com/378757494"
          light={VideoPlaceholderImg.src}
          width="100%"
          height="100%"
          controls={true}
          loop={true}
          playing={true}
        />
      </ResponsivePlayer>
    </DemoVideo>

    <section>
      <p>地点間の移動量を表す地理的フローマップを作成できます。</p>
      <p>Google Sheets に公開した独自の OD データを可視化しましょう。</p>
      <p>インタラクティブにデータを探索できます。</p>
    </section>

    <section>
      <h2>何に使える？</h2>
      <div>
        FlowmapBlue は、地点のペアが関わるさまざまな現象を可視化するために使われています。
        <ListOfUses>
          <ListOfUsesItem>都市モビリティ</ListOfUsesItem>
          <ListOfUsesItem>通勤・通学</ListOfUsesItem>
          <ListOfUsesItem>歩行者の動き</ListOfUsesItem>
          <ListOfUsesItem>バス移動</ListOfUsesItem>
          <ListOfUsesItem>地下鉄利用</ListOfUsesItem>
          <ListOfUsesItem>鉄道利用</ListOfUsesItem>
          <ListOfUsesItem>航空移動</ListOfUsesItem>
          <ListOfUsesItem>海上交通</ListOfUsesItem>
          <ListOfUsesItem>自転車シェア</ListOfUsesItem>
          <ListOfUsesItem>スクーターシェア</ListOfUsesItem>
          <ListOfUsesItem>ライドシェア</ListOfUsesItem>
          <ListOfUsesItem>タクシー</ListOfUsesItem>
          <ListOfUsesItem>国内移住</ListOfUsesItem>
          <ListOfUsesItem>国際移住</ListOfUsesItem>
          <ListOfUsesItem>難民の移動</ListOfUsesItem>
          <ListOfUsesItem>人身取引</ListOfUsesItem>
          <ListOfUsesItem>麻薬の流通</ListOfUsesItem>
          <ListOfUsesItem>貨物輸送</ListOfUsesItem>
          <ListOfUsesItem>物質の流れ</ListOfUsesItem>
          <ListOfUsesItem>貿易</ListOfUsesItem>
          <ListOfUsesItem>鳥の渡り</ListOfUsesItem>
          <ListOfUsesItem>家畜の移動</ListOfUsesItem>
          <ListOfUsesItem>植物の移入</ListOfUsesItem>
          <ListOfUsesItem>都市インフラ</ListOfUsesItem>
          <ListOfUsesItem>下水の流れ</ListOfUsesItem>
          <ListOfUsesItem>廃棄物管理</ListOfUsesItem>
          <ListOfUsesItem>サプライチェーン</ListOfUsesItem>
          <ListOfUsesItem>疫学</ListOfUsesItem>
          <ListOfUsesItem>歴史的な旅路</ListOfUsesItem>
          <ListOfUsesItem>科学研究の協働</ListOfUsesItem>
        </ListOfUses>
      </div>
      <GalleryPreviewOuter>
        <Gallery maxCount={6} />
      </GalleryPreviewOuter>
      {/*<p>*/}
      {/*  <Link legacyBehavior href="/gallery">Visit our gallery</Link> to see more real world examples.*/}
      {/*</p>*/}
    </section>

    <section>
      <h2>誰が使っている？</h2>
      <UsedByContainer>
        {USED_BY_LOGOS.map(({url, name, img, width = 120}) => (
          <Away key={name} href={url}>
            <Image
              alt={name}
              width={width}
              height="50"
              src={img}
              // placeholder="blur"
              // blurDataURL={img}
              objectFit="contain"
            />
          </Away>
        ))}
      </UsedByContainer>
    </section>

    <section>
      <h2 id="how-to">フローマップの作り方</h2>
      <p>
        手順は{' '}
        <Link legacyBehavior href="/how-to-make-a-flow-map">
          このページ
        </Link>
        でご確認ください。
      </p>
    </section>

    {/*<section>*/}
    {/*  <h2>Data preparation helpers</h2>*/}
    {/*  <p>*/}
    {/*    <Button>Convert OD-matrix</Button>*/}
    {/*  </p>*/}
    {/*</section>*/}

    <section>
      <h2 id="news">最新情報</h2>
      <News maxCount={5} />
    </section>

    <Credits showTitle={true} />
  </Layout>
);

export default Index;

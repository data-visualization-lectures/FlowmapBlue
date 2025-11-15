import Layout from '../core/Layout';
import {Away} from '../core';
import ReadMore from '../components/ReadMore';
import Link from 'next/link';
import Head from 'next/head';

import SpreadsheetKeyExtractor from '../components/SpreadsheetKeyExtractor';
import * as React from 'react';
import styled from '@emotion/styled';

export interface Props {}

const ListOfSteps = styled.ol`
  margin: 30px 20px;
  & > li {
    margin: 1em 0;
    padding-left: 0.3em;
  }
  @media (max-width: 500px) {
    margin: 0;
    padding: 0;
    list-style-position: inside;
    & > li {
      padding-left: 0;
      margin-left: 0;
    }
  }
`;

const ListOfTools = styled.ul`
  list-style-type: none;
  padding: 0;
  h3 {
    margin-bottom: 0.5em;
  }
  & > * + * {
    margin-top: 2em;
  }
`;

const HowToPage: React.FC<Props> = (props) => {
  const {} = props;
  return (
    <Layout>
      <Head>
        <title>フローマップの作り方 – FlowmapBlue</title>
      </Head>
      <section>
        <h1>フローマップの作り方</h1>
        <p>
          データセットをフローマップとして可視化・公開するには Google アカウントが必要です。まだお持ちでない場合は{' '}
          <Away href="https://accounts.google.com/signup">こちらから登録</Away>してください。
        </p>
        <p>以下の手順に従ってください。</p>
        <ListOfSteps>
          <li>
            <Away href="https://docs.google.com/spreadsheets/d/1ROFkkHpOljmqc6nl4diagj8q2kOta71UnwlQO-07tvk">
              テンプレートのスプレッドシート
            </Away>を開きます。
          </li>
          <li>メニューの「ファイル」→「コピーを作成…」で複製します。</li>
          <li>
            新しいスプレッドシートにデータを追加します。{' '}
            <ReadMore>
              <p>
                このスプレッドシートには「<b>properties</b>」「<b>locations</b>」「<b>flows</b>
                」の3つのシートがあります。<b>properties</b> にはデータセットのタイトルや説明、その他の設定項目を記述します。<b>locations</b>{' '}
                には <b>id</b>、<b>lat</b>、<b>lon</b> と任意の <b>name</b> 列があります。<b>
                  flows
                </b>{' '}
                には <b>origin</b>、<b>dest</b>、<b>count</b> と任意の <b>time</b> 列があります。
                <b>origin</b> と <b>dest</b> の値は、それぞれ対応する地点の <b>id</b> と一致する必要があります。
              </p>
              <p>
                移動量がクロス集計で記述されている場合は{' '}
                <Link legacyBehavior href="/od-matrix-converter">
                  OD-matrix converter
                </Link>{' '}
                をご利用ください。
              </p>
              また{' '}
              <Link legacyBehavior href="/geocoding">
                Geocoding tool
              </Link>{' '}
              は、データセットに地点名しかない場合でも緯度経度を取得するのに役立ちます。
            </ReadMore>
          </li>
          {/*<li>Publish your spreadsheet by going to "File" / "Publish to the web…"</li>*/}
          <li>
            「共有」ボタンをクリックし、「リンクを取得」のドロップダウンで「制限付き」を「リンクを知っている全員」に変更します。{' '}
            <ReadMore>
              この設定を行うことで FlowmapBlue がスプレッドシートのデータにアクセスできるようになります。URL を他人に送ったりオンラインで公開しない限り、スプレッドシートやフローマップは事実上非公開のままです。私たちはデフォルトでデータを非公開として扱い、ユーザーの明示的な同意を得ずに URL を共有することはありません（ただし、ご自身で公開サイトからリンクした場合は除きます）。
            </ReadMore>
          </li>
          <SpreadsheetKeyExtractor />
        </ListOfSteps>
        Google Sheets にデータをアップロードするのが難しい場合は、{' '}
        <Link legacyBehavior href="/in-browser">
          In-browser flow map
        </Link>{' '}
        の利用や、任意の URL から CSV を読み込む方法を{' '}
        <Away href="https://github.com/FlowmapBlue/flowmap.blue/issues/18#issuecomment-610063627">
          こちら
        </Away>
        でご確認ください。
      </section>

      <section>
        <h2 id="tools">ツール</h2>
        <p>データの準備や可視化に役立つツールを紹介します。</p>

        <ListOfTools>
          <li>
            <h3>
              <Link legacyBehavior href="/geocoding">
                Geocoding tool
              </Link>
            </h3>
            <p>
              データセットに地点名しかない場合でも、緯度経度を取得する際に役立ちます。
            </p>
          </li>
          <li>
            <h3>
              <Link legacyBehavior href="/od-matrix-converter">
                OD-matrix converter
              </Link>
            </h3>
            <p>移動量が OD マトリクスで記録されている場合にご利用ください。</p>
          </li>
          <li>
            <h3>
              <Link legacyBehavior href="/in-browser">
                In-browser flow map
              </Link>
            </h3>
            <p>
              データを Google Sheets にアップロードせずに、ブラウザ上で直接 OD データを可視化できます。
            </p>
          </li>
        </ListOfTools>
      </section>
      <section>
        <h2 id="need-help">お困りですか？</h2>
        <p>
          <Away href="https://spectrum.chat/flowmap-blue/general">フォーラムで質問する</Away>
          、{` `}
          <Away href="https://github.com/FlowmapBlue/flowmap.blue/issues">Issue を投稿する</Away>
          {` または `}
          <a href="mailto:ilya@boyandin.me?subject=FlowmapBlue">メールで連絡する</a>
          ことができます。
        </p>
      </section>
    </Layout>
  );
};

export default HowToPage;

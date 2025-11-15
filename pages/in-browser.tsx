import React, {useState} from 'react';
import styled from '@emotion/styled';
import {Button, H5, Intent, TextArea} from '@blueprintjs/core';
import {IconNames} from '@blueprintjs/icons';
import {dsvFormat} from 'd3-dsv';
import FlowMap, {DEFAULT_CONFIG, Flow, Location, MapContainer, prepareFlows} from '../core';
import {PromiseState} from 'react-refetch';
import Layout from '../core/Layout';
import {useRouter} from 'next/router';
import md5 from 'blueimp-md5';

interface DataProps {
  locations: Location[];
  flows: Flow[];
}

const FlowMapContainer = (props: DataProps) => {
  const {flows, locations} = props;
  return (
    <MapContainer>
      <FlowMap
        inBrowser={true}
        flowsFetch={PromiseState.resolve(flows)}
        locationsFetch={PromiseState.resolve(locations)}
        config={DEFAULT_CONFIG}
        spreadSheetKey={undefined}
        flowsSheet={undefined}
      />
    </MapContainer>
  );
};

const ButtonArea = styled.div`
  text-align: right;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content 1fr min-content;
  column-gap: 1rem;
  row-gap: 0.5rem;
  align-items: center;
  & > textarea {
    min-height: 350px;
    height: 100%;
    font-size: 12px !important;
    white-space: pre;
    font-family: monospace;
  }
`;

const InBrowserFlowMap = () => {
  const [locationsCsv, setLocationsCsv] = useState(
    `id,name,lat,lon
1,New York,40.713543,-74.011219
2,London,51.507425,-0.127738
3,Rio de Janeiro,-22.906241,-43.180244`,
  );
  const [flowsCsv, setFlowsCsv] = useState(
    `origin,dest,count
1,2,42
2,1,51
3,1,50
2,3,40
1,3,22
3,2,42`,
  );
  const router = useRouter();
  const {hash} = router.query;
  const [data, setData] = useState<DataProps>();
  const handleVisualize = () => {
    const data = {
      locations: dsvFormat(',').parse(locationsCsv, (row: any) => ({
        ...row,
        lat: +row.lat,
        lon: +row.lon,
      })),
      flows: prepareFlows(dsvFormat(',').parse(flowsCsv)),
    };
    setData(data);
    router.push({
      // Change the URL so that users can go back to data editing
      query: {
        hash: md5(JSON.stringify(data)),
      },
    });
  };
  return data && hash ? (
    <FlowMapContainer {...data} />
  ) : (
    <Layout>
      <h1>ブラウザ内フローマップ</h1>
      <section>
        <p>
          このツールを使用すると、Googleスプレッドシートにアップロードすることなく、ブラウザ内で直接ODデータをフローマップとして可視化できます。データはブラウザ内に保持され、
          <i>どこにもアップロードされません</i>。ただし、ブラウザウィンドウを閉じると可視化は失われます。戻ってきたり、他の人と共有したりするためのURLは生成されません。
        </p>
      </section>
      <Container>
        <H5>Locations CSV</H5>
        <H5>Flows CSV</H5>
        <TextArea
          growVertically={false}
          large={true}
          intent={Intent.PRIMARY}
          onChange={(event) => setLocationsCsv(event.target.value)}
          value={locationsCsv}
        />
        <TextArea
          growVertically={false}
          large={true}
          intent={Intent.PRIMARY}
          onChange={(event) => setFlowsCsv(event.target.value)}
          value={flowsCsv}
        />
      </Container>
      <ButtonArea>
        <Button icon={IconNames.CHART} large={true} onClick={handleVisualize}>
          可視化
        </Button>
      </ButtonArea>
    </Layout>
  );
};

export default InBrowserFlowMap;

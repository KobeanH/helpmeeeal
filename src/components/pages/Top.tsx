import { VFC } from 'react';
import styled from 'styled-components';


export const Top: VFC = () => (


<>
  <SMap id="map"></SMap>
  <p><button>近所のレストランを検索</button></p>
  </>
);

const SMap = styled.div`
height:400px;
width:600px;
`

import React from 'react';
import styled from 'styled-components';
import Featured from '../components/Featured';
// import Chart from '../components/Chart';
// import { userData } from '../dummyData';
import LgWidget from '../components/LgWidget';
import SmWidget from '../components/SmWidget';



const HomeContainer=styled.div`
   flex:4;
`   

const HomeWidgets=styled.div`
    display:flex;
    margin:20px;
`

const Home = () => {
  return (
    <HomeContainer>
        <Featured/>
        {/* <Chart data={userData} title='User Analytics' grid DataKey='Active User'/> */}
        <HomeWidgets>
            <SmWidget/>
            <LgWidget/>
        </HomeWidgets>
    </HomeContainer>
  )
}

export default Home
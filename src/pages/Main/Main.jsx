import React from 'react';
import Carousel from '../Carousel/Carousel';
import './Main.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import CenteredTabs from './Tab.jsx';

const Main = () => {
  const [datas, setData] = useState();
  useEffect(() => {
    fetch(`../data/data.json`)
      // fetch(`${API.LIST}/${tabSwtich}/list`) //`name=${name}`
      // fetch(`http://172.20.10.3:3000/products/${tabSwtich}/list`) //`name=${name}`
      .then(res => res.json())
      .then(data => setData(data)); //통신 할땐 data.result
  }, []);
  console.log(datas, '메인');
  console.log(datas);
  return (
    <div>
      <Carousel />
      <div style={{ marginTop: '100px' }}>
        <CenteredTabs datas={datas} />
      </div>
    </div>
  );
};

export default Main;

const Box = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
`;

const AllWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: space-evenly;
  gap: 50px;
  margin-top: 30px;

  /* width: 500px; */
  h6 {
    display: flex;
    justify-content: center;
    font-size: 18px;
    font-weight: 600;
    margin-top: 30px;
  }
  p {
    display: flex;
    justify-content: center;
    font-weight: 400;
    color: #c8c8c8;
    margin-top: 10px;
  }
`;

const ProductWrap = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  background-color: #f9f7f8;
  border-radius: 15px;
  font-size: 12px;
  margin-top: 100px;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 300px;
    height: 300px;
    object-fit: fill;
  }
  button {
    position: absolute;
    bottom: 15px;
    right: 15px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: white;
    margin: 0 auto;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
      rgba(0, 0, 0, 0.05) 0px 5px 10px;
    &:hover {
      width: 60px;
      height: 60px;
      transition: all 0.5s;
      overflow: hidden;
    }
  }
`;

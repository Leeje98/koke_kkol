import React, { useEffect } from 'react'
import styled from 'styled-components'
import Product from '../components/Product'
import theme from '../theme'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch } from 'react-redux';
import { unMainPage, unTopHeader } from '../store';
import { Link, Navigate } from 'react-router-dom';

const Backgraund = styled.div`
  width: 100vw;
  height: 100%;
  background-color: ${({theme}) => theme.colors.Beige};
`

const Outer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.size.mainSize};
  margin: 0 auto;
  height: auto;
`

const Title = styled.h2`
  display: block;
  width: 100%;
  margin: 50px 0 30px;
  font-size: 40px;
  font-weight: normal;

  // border: 1px solid black;
`

const SubTitleBox = styled.div`
  display: flex;

  // border: 1px solid black;
`

const SubTitle01 = styled.h3`
  flex: 1;
  font-weight: normal;
`

const SubTitle02 = styled.h4`
  flex: 3;
  font-weight: normal;
  font-size: 17px;
  padding-left: 10px;
`

const ContainerBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  // border: 1px solid black;
`

const OptionBox = styled.div`
  flex: 1;

  border: 1px solid black;
  height: 100vh;
  margin-right: 20px;
`

const Products = styled.div`
  flex: 3;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  // border: 1px solid black;
  height: 100vh;

`
 



export default function AllCoffee() {

  let dispatch = useDispatch(); 

  useEffect(() => {
    // return () => {
      dispatch(unTopHeader())
      dispatch(unMainPage())
    // };
  }, []);


  return (
    <Backgraund>
    <Outer>
      <Title>모든 커피</Title>
      <SubTitleBox>
        <SubTitle01>커피 찾기</SubTitle01>
        <SubTitle02>0 개</SubTitle02>
      </SubTitleBox>
      <ContainerBox>
        <OptionBox>옵션박스</OptionBox>
        <Products>
          {/* <Container>  
            <Row>
              <Col><Product/></Col>
              <Col><Product/></Col>
              <Col><Product/></Col>
            </Row>
          </Container> */}
          <Link to="/CoffeeDetails">
            <Product />
          </Link>  
          <Link to="/CoffeeDetails">
            <Product />
          </Link>  
          <Link to="/CoffeeDetails">
            <Product />
          </Link>  
        </Products>
      </ContainerBox>
    </Outer>
    </Backgraund>
  )
}

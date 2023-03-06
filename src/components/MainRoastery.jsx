import axios from "axios";
import React, { useEffect, useState } from "react";
import { MainTitle, SubTitle } from "./MainTitle";
import styled from "styled-components";
import theme from "../theme";
import { Link, Navigate, NavLink } from "react-router-dom";

const ContainerBox = styled.div`
  width: ${({ theme }) => theme.size.mainSize};
  margin: 0 auto 30px;
  display: flex;
  justify-content: space-between;
`;

const ImgBox = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  background-color: gray;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  &:hover{
    transition: 0.3s;
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const Box = styled.div`
  position: absolute;
  bottom: 33px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  width: 40px;
  min-width: 40px;
  height: 40px;
  min-height: 40px;
  border-radius: 50%;
  background-color: black;
  margin-right: 5px;
  overflow: hidden;
`;

const Title = styled.h6`
  white-space:nowrap;
  vertical-align: middle;
  font-size: 15px;
  color: white;
  background-color: rgba(2, 2, 2, 0.5);
`;

const MainRoBtn = styled.button`
  display: block;
  width: 300px;
  height: 50px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.Bbrown};
  border: none;
  border-radius: 7px;
  color: white;
  text-align: center;
  line-height:50px;
  &:hover {
    transition: 0.3s;
    background-color: ${({ theme }) => theme.colors.brown};
  }
`

export default function MainRoastery() {
  const [roastery, setRoastery] = useState([]);

  useEffect(() => {
    if (roastery.length === 0) {
      axios({
        method: "get",
        url: "https://15.165.242.95:9002/roastery/top4",
        // timeout: 5000,
        headers: {
          // Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8;",
        },
        responseType: "json",
      })
        .then((res) => {
          const Roastery4Data = res.data.body;
          setRoastery(Roastery4Data);
          console.log(Roastery4Data);
          console.log(Roastery4Data[0].roasteryNm);
        })
        .catch((err) => {
          console.log(err);
          alert(err.message);
        });
    }
  }, []);
  // }, [roastery]);

 
  return (
    <>
      <div className="titleBox">
        <MainTitle
          Mtext={[
            "한 번쯤 마셔보고 싶었던",
            <br />,
            "커피 맛집 로스터리 모든 원두",
          ]}
        />
        <SubTitle
          Stext={[
            "커피 맛있다고 소문난 로스터리의 원두가 다 있어요.",
            <br />,
            "3일 내 로스팅된 원두로 신선하게 즐기세요.",
          ]}
        />
      </div>

      <ContainerBox>
        {roastery.map((rbata, i) => (
          <ImgBox key={roastery[i].id}>
          <Img
            src={roastery[i].photoImgUrl}
            alt="로스터리 사진"
          />
          <Box>
            <Logo>
            <Img
            src={roastery[i].logoImgUrl}
            alt="로스터리 로고"
            style={{ withe: "100%", height: "100%" }}
          />
            </Logo>
            <Title>{roastery[i].roasteryNm}</Title>
          </Box>
        </ImgBox>
        ))}
      </ContainerBox>
      <MainRoBtn>
        <Link to="/AllCoffee" style={{color: "white", display: "block", width: "100%", height: "100%" }}>
          커피 맛집 원두 모두 보기
        </Link>
      </MainRoBtn>
      
    </>
  );
}

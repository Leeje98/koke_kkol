import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import CelebSlider from "../components/CelebSlider";
import MainImg from "../components/MainImg";
import MainRoastery from "../components/MainRoastery";
import SubscriptionEvent from "../components/SubscriptionEvent";
import { mainPage, TopHeader, unTopHeader } from "../store";

export default function Main() {
  let dispatch = useDispatch();

  // 스크롤이 50px 이상 내려올경우 true값을 넣어줄 useState
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    dispatch(TopHeader())
    dispatch(mainPage())
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    // 스크롤이 Top에서 85px 이상 내려오면 true값을 useState에 넣어줌
    if (window.scrollY >= 85) {
      dispatch(unTopHeader())
      setScroll(true);
      // console.log(scroll);
    } else {
      // 스크롤이 50px 미만일경우 false를 넣어줌
      dispatch(TopHeader())
      setScroll(false);
    }
  };



  const Maindiv = styled.div`
    background-color: ${({ theme }) => theme.colors.Beige};
    width: 100vw;
  `;

  return (
    <Maindiv>
      <MainImg />
      <CelebSlider />
      <MainRoastery />
      <SubscriptionEvent />
    </Maindiv>
  );
}

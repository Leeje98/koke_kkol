import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles 
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./CelebSlider.modul.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

import { ImQuotesLeft } from "react-icons/im";
import { MainTitle, SubTitle } from "./MainTitle";
import axios from "axios";
import styled from "styled-components";

export default function CelebSlider(cardList) {
  // const prevRef = useRef(null);
  // const nextRef = useRef(null);

  const [dataList, setDataList] = useState([]);


  useEffect(() => {
    
  if(dataList.length === 0) {
    // 슬라이더 데이터 조회
      axios({
        method: "get",
        url: "https://api.kkol.store:9002/celebrity",
        // url: "http://15.165.242.95:9002/celebrity",
        // data: JSON.stringify(searchData),
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        // timeout: 1000,
        responseType: "json",
      })
        .then((res) => {
          const CelebData = res.data.body;
          // const data3 = JSON.stringify(res.data.body)
          // console.log((res.data.body))
          // // gridRef.current.loadData(data);
          
          setDataList(CelebData);
          console.log(CelebData[0]);
          console.log(CelebData[0].celebrityName);
          // // console.log(res.data.body[0].id)
          // // console.log(dataList)
          // console.log(dataList[0]);
        })
        .catch((err) => {
          console.log(err);
          alert(err.message);
        });
      }
    
  }, [dataList]);

  // const settings = {
  //   spaceBetween: 20,
  //   navigation: {
  //     prevEl: prevRef.current, // 이전 버튼
  //     nextEl: nextRef.current, // 다음 버튼
  //   },
  //   scrollbar: { draggable: true, el: null },
  //   slidesPerView: 3,
  //   onBeforeInit: (swiper) => {
  //     // 초기 설정
  //     swiper.params.navigation.prevEl = prevRef.current;
  //     swiper.params.navigation.nextEl = nextRef.current;
  //     swiper.navigation.update();
  //   },
  // };
 


  return (
    <>
      <div className="titleBox">
        <MainTitle
          Mtext={["코케를 구독 중인", <br />, "다양한 커피 취향의 커피인들"]}
        />
        <SubTitle
          Stext={[
            "데일리 커피에서 디카페인까지.",
            <br />,
            "다양한 취향을 가진 사람들이 구독중인 코케",
          ]}
        />
      </div>

      <Swiper 
        navigation={true}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={5000}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        className="mySwiper_celeb"
      >
       
        {dataList.map((data, i) => (
            <SwiperSlide key={dataList[i].id}>
              <div className="imgBox">
                <img src={dataList[i].celebrityImgUrl} alt="celebrityImg" />
              </div>
              <ImQuotesLeft style={{margin:"10px"}}/>
              <div className="TextContainer">
                <p>{dataList[i].title}</p>            
                <p>{dataList[i].comment} </p>
                <div className="Textflex">
                  <p className="celeb_name">{dataList[i].celebrityName} · </p>
                  <p className="celeb_job">  {dataList[i].celebrityJob}</p>
                </div>            
                <p className="celeb_id">{dataList[i].instagramId}</p>
              </div>
            </SwiperSlide>
            
        ))}
         
      </Swiper>
 
    </>
  );
}

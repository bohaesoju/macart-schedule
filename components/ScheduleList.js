import React from 'react';
import Link from 'next/link';
import { List } from 'antd'; 
import styled from 'styled-components';

const ImgWrapper = styled.img`
  width: 30px;
  border-radius:50%;
`;

const DanceImage = styled.img`
  position:absolute;
  right:0;
  width: 70px;
`;

const TopTitle = styled.p`
  text-align: center;
  font-size:18px;
  font-weight: bold;
  margin: 0;
`;

const Address = styled.span`
  position:absolute;
  right:105px;
  width:160px;
  text-align: right;
`;

const BoldLink = styled.a`
  font-weight:bold;
`;

const NaverMap = styled.a`
  margin-left:-25px;
`;

const KakaoMap = styled.a`
  position:absolute;
  right:65px;
`;

const data = [
    ['신촌점','https://calendar.google.com/calendar/embed?src=fo9if3lrltseqj4fj4ot53spso%40group.calendar.google.com&ctz=Asia%2FSeoul', 'https://m.map.kakao.com/actions/searchView?q=%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EB%85%B8%EA%B3%A0%EC%82%B0%EB%8F%99%2056-25&wxEnc=LVSOTP&wyEnc=QNLTTMN&lvl=4#!/LWSOUO,QNLSPQM/map/place', '마포구 노고산동 56-25', 'https://m.map.naver.com/search2/search.nhn?query=%EB%85%B8%EA%B3%A0%EC%82%B0%EB%8F%99%2056-25&sm=hty&style=v5'],
    ['홍대점','https://calendar.google.com/calendar/embed?src=sgv14t2h9uk5op6lqjd0s01ra4%40group.calendar.google.com&ctz=Asia%2FSeoul', 'https://m.map.kakao.com/actions/searchView?q=%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EC%B0%BD%EC%A0%84%EB%8F%99%205-123%EB%B2%88%EC%A7%80%20%5B%EC%B6%9C%EC%B2%98%5D%20%EB%A7%A5%EC%95%84%ED%8A%B8%20%ED%99%8D%EB%8C%80%EC%A0%90%208%EB%B2%88%EC%B6%9C%EA%B5%AC%EB%A1%9C%20%EC%98%A4%EC%8B%9C%EB%8A%94%EA%B8%B8%20%7C%EC%9E%91%EC%84%B1%EC%9E%90%20%EB%A7%A5%EC%95%84%ED%8A%B8%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4&wxEnc=LWRPLRHR&wyEnc=QNLSMUS&lvl=4#!/LWRPMQ,QNLSMUO/map/place', '마포구 창전동 5-123', 'https://m.map.naver.com/search2/search.nhn?query=%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EC%B0%BD%EC%A0%84%EB%8F%99%205-123&sm=hty&style=v5'],
    ['합정점','https://calendar.google.com/calendar/embed?src=how92477%40gmail.com&ctz=Asia/Seoul','https://m.map.kakao.com/actions/searchView?q=%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EC%B0%BD%EC%A0%84%EB%8F%99%205-123%20%EC%99%80%EC%9A%B0%EC%82%B4%EB%A1%B1&wxEnc=LWSOUOHR&wyEnc=QNLSPQLIM&lvl=2#!/25132196/map/place', '마포구 합정동 441-10번지','https://m.map.naver.com/search2/search.nhn?query=%ED%95%A9%EC%A0%95%EB%8F%99%20441-10%EB%B2%88%EC%A7%80&sm=hty&style=v5'],
    ['강남점','https://calendar.google.com/calendar/embed?src=uc51cm24uathma9lmhhlaoin6g%40group.calendar.google.com&ctz=Asia%2FSeoul','https://m.map.kakao.com/actions/searchView?q=%EC%97%AD%EC%82%BC%EB%8F%99%20705-16&wxEnc=LWRPNNHPM&wyEnc=QNLSMULIM&lvl=2#!/MNNPSN,QNOOSOP/map/place','강남구 역삼동 705-16','https://m.map.naver.com/search2/search.nhn?query=%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%97%AD%EC%82%BC%EB%8F%99%20705-16&sm=hty&style=v5'],
    ['사당점','https://calendar.google.com/calendar/embed?src=qb0bsc6m0jlhfb74qus4lcq12s@group.calendar.google.com&ctz=Asia/Seoul&pli=1','https://m.map.kakao.com/actions/searchView?q=%EC%82%AC%EB%8B%B9%EB%8F%99%201046-40&wxEnc=MNNPSOHR&wyEnc=QNOOSOS&lvl=2#!/LVSMMU,QNNQUMQ/map/place', '동작구 사당동 1046-40','https://m.map.naver.com/search2/search.nhn?query=%EB%8F%99%EC%9E%91%EA%B5%AC%20%EC%82%AC%EB%8B%B9%EB%8F%99%201046-40&sm=hty&style=v5'],
  ];

const ScheduleList = () => {

  return (
    <>
      <List
        header={<TopTitle><DanceImage src="/dance.gif" /> 맥아트 스튜디오 스케줄</TopTitle>}
        footer={<div>대관 문의 : <Link href="tel:01038022904"><a>01038022904</a></Link></div>}
        bordered
        dataSource={data}
        renderItem={item => (
            <List.Item>
              <Link href={item[1]}><BoldLink href={item[1]}>{item[0]}</BoldLink></Link>
              <Address>{item[3]}</Address>
              <Link href={item[2]}><KakaoMap href={item[2]}><ImgWrapper src="/kakaomap.png" /></KakaoMap></Link>
              <Link href={item[4]}><NaverMap href={item[4]}><ImgWrapper src="/naver-map.png" /></NaverMap></Link>
            </List.Item>
        )}
      />
    </>
  );
};

export default ScheduleList;
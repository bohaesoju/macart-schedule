import React from 'react';
import Link from 'next/link';
import { Button } from 'antd';
import { List, Typography } from 'antd';

const data = [
    ['신촌점','https://calendar.google.com/calendar/embed?src=fo9if3lrltseqj4fj4ot53spso%40group.calendar.google.com&ctz=Asia%2FSeoul', 'https://m.map.kakao.com/actions/searchView?q=%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EB%85%B8%EA%B3%A0%EC%82%B0%EB%8F%99%2056-25&wxEnc=LVSOTP&wyEnc=QNLTTMN&lvl=4#!/LWSOUO,QNLSPQM/map/place'],
    ['홍대점','https://calendar.google.com/calendar/embed?src=sgv14t2h9uk5op6lqjd0s01ra4%40group.calendar.google.com&ctz=Asia%2FSeoul', 'https://m.map.kakao.com/actions/searchView?q=%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EC%B0%BD%EC%A0%84%EB%8F%99%205-123%EB%B2%88%EC%A7%80%20%5B%EC%B6%9C%EC%B2%98%5D%20%EB%A7%A5%EC%95%84%ED%8A%B8%20%ED%99%8D%EB%8C%80%EC%A0%90%208%EB%B2%88%EC%B6%9C%EA%B5%AC%EB%A1%9C%20%EC%98%A4%EC%8B%9C%EB%8A%94%EA%B8%B8%20%7C%EC%9E%91%EC%84%B1%EC%9E%90%20%EB%A7%A5%EC%95%84%ED%8A%B8%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4&wxEnc=LWRPLRHR&wyEnc=QNLSMUS&lvl=4#!/LWRPMQ,QNLSMUO/map/place'],
    ['합정점','https://calendar.google.com/calendar/embed?src=how92477%40gmail.com&ctz=Asia/Seoul','https://m.map.kakao.com/actions/searchView?q=%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EC%B0%BD%EC%A0%84%EB%8F%99%205-123%20%EC%99%80%EC%9A%B0%EC%82%B4%EB%A1%B1&wxEnc=LWSOUOHR&wyEnc=QNLSPQLIM&lvl=2#!/25132196/map/place'],
    ['강남점','https://calendar.google.com/calendar/embed?src=uc51cm24uathma9lmhhlaoin6g%40group.calendar.google.com&ctz=Asia%2FSeoul','https://m.map.kakao.com/actions/searchView?q=%EC%97%AD%EC%82%BC%EB%8F%99%20705-16&wxEnc=LWRPNNHPM&wyEnc=QNLSMULIM&lvl=2#!/MNNPSN,QNOOSOP/map/place'],
    ['사당점','https://calendar.google.com/calendar/embed?src=qb0bsc6m0jlhfb74qus4lcq12s@group.calendar.google.com&ctz=Asia/Seoul&pli=1','https://m.map.kakao.com/actions/searchView?q=%EC%82%AC%EB%8B%B9%EB%8F%99%201046-40&wxEnc=MNNPSOHR&wyEnc=QNOOSOS&lvl=2#!/LVSMMU,QNNQUMQ/map/place'],
  ];

const ScheduleList = () => {

  return (
    <div>
        <List
        header={<div>맥아트 스튜디오 스케줄 리스트</div>}
        footer={<div>대관 문의 : 01047369161</div>}
        bordered
        dataSource={data}
        renderItem={item => (
            <List.Item>
                    <Link href={item[1]}><a>{item[0]}</a></Link>
                    <Button><Link href={item[2]}><a>위치보기</a></Link></Button>
            </List.Item>
        )}
        />
    </div>
  );
};

export default ScheduleList;
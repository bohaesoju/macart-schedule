import React from 'react';
import Link from 'next/link';
import { Button } from 'antd';
import { List, Typography } from 'antd'; 
import styled from 'styled-components';
const { Title } = Typography;

const DanceWorldTitle = styled.p`
  font-weight: bold;
  padding: 20px 0 0 25px;
`;
const LinkListWrap = styled.ul`
  padding: 0;
  display: flex;
  li{
      list-style: none;
      flex-basis: 33.3%;
      text-align: center;
      img{
          width:70px;
          border-radius: 50%;
      }
  }
`;

const FooterList = () => {
    return(
        <>
            <DanceWorldTitle>
                댄스월드
            </DanceWorldTitle>
            <LinkListWrap>
                <li>
                    <Link href="https://m.cafe.naver.com/sublimecreww"><a><img src="/naver.jpeg" /></a></Link>
                </li>
                <li>
                    <Link href="https://www.instagram.com/dancew0rld/?hl=ko"><a><img src="/instagram.png" /></a></Link>
                </li>
                <li>
                    <Link href="https://www.youtube.com/channel/UCvVrtyEDEJzo8P1JwEB4NKQ"><a><img src="/youtube.png" /></a></Link>
                </li>
            </LinkListWrap>
        </>
      )
};

export default FooterList;
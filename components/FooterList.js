import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

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
          width:60px;
          border-radius: 50%;
      }
  }
`;

const Footer = styled.div`
    border-top: 1px solid #e4e4e4;
    padding-top: 10px;
    background: #f2f2f2;
    text-align: center;
    margin-top: 50px;
    height: 100%;
    p{
        font-size:13px;
        color:#5f6368;
    }
`;

const SmallInstagram = styled.img`
    width:20px;
    border-radius: 50%;
    margin-top: -1px;
`;

const danceworldList = [
    ['naver.jpeg','https://m.cafe.naver.com/sublimecreww'],
    ['instagram.png','https://www.instagram.com/dancew0rld/?hl=ko'],
    ['youtube.png','https://www.youtube.com/channel/UCvVrtyEDEJzo8P1JwEB4NKQ'],
    ['naverblog.png','https://blog.naver.com/PostList.nhn?blogId=danceworld1215'],
  ];

const FooterList = () => {
    return(
        <>
            <DanceWorldTitle>
                댄스월드
            </DanceWorldTitle>
            <LinkListWrap>
            {danceworldList.map((e, i) => {
                return(
                    <li key={i}>
                        <Link href={e[1]}><a><img src={e[0]} /></a></Link>
                    </li>
                )
            })}
            </LinkListWrap>
            <Footer>
                <p>Made with by <Link href="https://www.instagram.com/uyjoong/?hl=ko"><a>Uyjoong Kim <SmallInstagram src="/instagram.png" /></a></Link></p>
            </Footer> 
        </>
      )
};

export default FooterList;
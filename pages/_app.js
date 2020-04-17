import App from 'next/app'
import React from 'react';
import { ThemeProvider } from 'styled-components'
import 'antd/dist/antd.css';
import ScheduleList from '../components/ScheduleList';
import FooterList from '../components/FooterList';
import { Helmet } from 'react-helmet';


const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
       <Helmet
          title="맥아트 스튜디오 스케줄"
          htmlAttributes={{ lang: 'ko' }}
          meta={[{
            charset: 'UTF-8',
          }, {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover',
          }, {
            'http-equiv': 'X-UA-Compatible', content: 'IE=edge',
          }, {
            name: 'description', content: '맥아트 스튜디오',
          }, {
            name: 'og:title', content: '맥아트 스튜디오',
          }, {
            name: 'og:description', content: '맥아트 스튜디오',
          }, {
            property: 'og:type', content: 'website',
          }, {
            property: 'og:image', content: 'https://danceworld.shop/favicon.ico',
          }]}
          link={[{
            rel: 'shortcut icon', href: '/favicon.ico',
          }]}
        />
        <ThemeProvider theme={theme}>
          <ScheduleList>
            <Component {...pageProps} />
          </ScheduleList>
          <FooterList />
        </ThemeProvider>
      </>
    )
  }
}

// const MacArt = ({ Component }) => {
//   return (
//     <>
//       <Helmet
//           title="맥아트 스튜디오 스케줄"
//           htmlAttributes={{ lang: 'ko' }}
//           meta={[{
//             charset: 'UTF-8',
//           }, {
//             name: 'viewport',
//             content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover',
//           }, {
//             'http-equiv': 'X-UA-Compatible', content: 'IE=edge',
//           }, {
//             name: 'description', content: '맥아트 스튜디오',
//           }, {
//             name: 'og:title', content: '맥아트 스튜디오',
//           }, {
//             name: 'og:description', content: '맥아트 스튜디오',
//           }, {
//             property: 'og:type', content: 'website',
//           }, {
//             property: 'og:image', content: 'https://danceworld.shop/favicon.ico',
//           }]}
//           link={[{
//             rel: 'shortcut icon', href: '/favicon.ico',
//           }]}
//         />
//         <ThemeProvider>
//           <ScheduleList>
//             <Component />  
//           </ScheduleList>  
//         </ThemeProvider>
//     </>
//   );
// };

// export default MacArt;
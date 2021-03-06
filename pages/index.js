import Head from 'next/head'
import styled from 'styled-components'

export default function Home() {

  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <Heading>
          FIRST NEXT APP
        </Heading>
        <SubHeading>
          i used next with styled-components
        </SubHeading>
      </Hero>
    </>
  )
}
const Hero = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:80vh;
  background-color:#fff;
  flex-direction:column;
`
const Heading = styled.h1`
 font-size:8rem;
 color:#000;
 font-weight:900;
`
const SubHeading = styled.a`
 font-size:2rem;
 color:#000;
 font-weight:400;
`
import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import styled from "styled-components";
import { breakpoints } from "../components/Media";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Footer from "../components/Footer";
import "../index.css";
import uclabootcamp from "../images/uclabootcamp.jpeg";
import mernstack from "../images/mernstack.jpg";

const LayoutAlt = styled(Layout)`
  margin-bottom: 0;
`;

const Container = styled.div`
  margin: 50px 0 0 0;
  width: 100%;
  height: auto;
  align-items: center;
  h1 {
    font-size: 30px;
  }

  @media (min-width: ${breakpoints.mobileMax}) {
    margin: 100px 0 0 0;
  }
`;

const TextContent = styled.div`
  max-width: 800px;
  margin-top: 40px;

  @media (min-width: ${breakpoints.mobileMax}) {
    margin-top: 100px;
  }
  :nth-child(1) {
    ${Heading} {
      font-size: 40px;

      @media (min-width: ${breakpoints.mobileMax}) {
        font-size: 60px;
      }
    }
  }
`;

const Image = styled.img`
  margin: 50px 0 20px 0;
  width: 100%;
  height: auto;
  border-radius: 4px;
  transform: scale(1);
  transition: transform 0.3s ease-in-out;

  @media (min-width: ${breakpoints.mobileMax}) {
    height: auto;
    margin: 100px 0 50px 0;
  }
`;

// const ProjectLink = styled(Paragraph)`
//   font-weight: 700;
//   font-size: 14px;
//   line-height: 163.19%;
//   display: inline;
//   color: black;
//   letter-spacing: 0.03em;
//   text-transform: uppercase;
//   border-bottom: 2px solid white;
//   transition: border-bottom 0.3s ease-in-out;

//   :hover {
//     border-bottom: 2px solid black;
//   }

//   span {
//     font-size: 20px;
//   }
// `;

// const LinkSet = styled.div`
//   :hover {
//     ${Image} {
//       transform: scale(1.02);
//     }
//     ${ProjectLink} {
//       border-bottom: 2px solid black;
//     }
//   }
// `;

const WebStack = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
    align-items: center;
    margin: 100px 0;
  }
`;

const LeftContent = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 4px;
  background-image: url(${mernstack});
  background-repeat: no-repeat;
  background-size: contain;
  margin: 0 20px 0 20px;
  background-position: center;

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 45%;
    margin: 20px;
  }
`;

const RightContent = styled.div`
  width: 100%;

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 45%;
  }
`;

const DuoImages = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
    align-items: center;
    margin: 100px 0;
  }
`;

const LeftImage = styled.div`
  width: 100%;
  height: 450px;
  margin-right: 0;
  margin-bottom: 50px;
  background-image: url();
  background-size: contain;
  background-position-x: center;
  background-repeat: no-repeat;

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 45%;
    margin-bottom: 0px;
    margin-right: 10px;
    height: 650px;
    background-position-x: left;
  }
`

const RightImage = styled.div`
  width: 100%;
  height: 450px;
  margin-bottom: 50px;
  background-image: url();
  background-size: contain;
  background-position-x: center;
  background-repeat: no-repeat;

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 45%;
    margin-bottom: 0;
    background-position-x: right;

    height: 650px;
  }
`

const DuoText = styled.div`
  display: flex;
  flex-wrap: nowrap;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
    align-items: center;
    margin: 300px 0 0 0;
  }
`

const DuoTextAlt = styled.div`
  display: flex;
  flex-wrap: nowrap;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
    align-items: center;
    margin: 100px 0 0 0;
  }
`

const LeftText = styled.div`
  width: 100%;
  height: 650px;
  margin-right: 0;
  margin-bottom: 50px;
  background-size: contain;
  background-position-x: center;
  background-repeat: no-repeat;

  ${Heading} {
    font-size: 40px;
  }

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 45%;
    margin-bottom: 0px;
    margin-right: 10%;
    height: 650px;
    background-position-x: left;
  }
`

const RightText = styled.div`
  width: 50%;
  height: 450px;
  margin-bottom: 50px;
  background-image: url();
  background-size: contain;
  background-position-x: center;
  background-repeat: no-repeat;
  transform: translateY(50px);

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 45%;
    margin-bottom: 0;
    background-position-x: right;
    height: 650px;
    transform: translateY(-100px);
  }
`

const RightTextAlt = styled(RightText)`
  background-image: url();

  @media (min-width: ${breakpoints.mobileMax}) {
    background-position-x: left;
  }
`

const CenterText = styled.div`
  width: 100%;
  padding-top: 30px;
  text-align: center;

  @media (min-width: ${breakpoints.mobileMax}) {
    padding-top: 120px;
  }

  ${Heading} {
    font-size: 40px;
  }

  ${Paragraph} {
    max-width: 700px;
    margin: 30px auto;
  }
`

const CenterTextAlt = styled(CenterText)`
  width: 90%;
  padding: 10px;
  @media (min-width: ${breakpoints.mobileMax}) {
    padding: 30px;
  }
  a {
    font-weight: 700;
    font-size: 14px;
    line-height: 163.19%;
    display: inline;
    color: black;
    text-decoration: none;
    letter-spacing: 0.03em;
    border-bottom: 2px solid transparent;
    transition: border-bottom 0.3s;

    :hover {
      border-bottom: 2px solid black;
    }

    span {
      font-size: 20px;
    }
  }
`

const DuoLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 50px;
  flex-wrap;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
    margin-bottom: 150px;
    width: 60%;
  }
`

const LinkLeft = styled.div`
  width: 100%;
  margin: 10px auto;
  text-align: center;

  @media (min-width: ${breakpoints.mobileMax}) {
    width: unset;
    text-align: left;
    margin: unset;
  }
`

const LinkRight = styled(LinkLeft)``

function Bootcamp() {
  return (
    <>
      <Helmet
        title="Alex Shoemaker - Bootcamp"
        meta={[
          { name: "Alex Shoemaker", content: "Portfolio" },
          {
            name: "Alex Shoemaker",
            content: "Alex Shoemaker - Full Stack Developer",
          },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <LayoutAlt>
        <Link to="/">Home</Link>
        <Container>
          <TextContent>
            <Heading>UCLA Full Stack Bootcamp</Heading>
            <Paragraph>
              I had the opportunity to study at{" "}
              <a href="https://bootcamp.uclaextension.edu/coding/">
                UCLA's Web Development Bootcamp
              </a>
              , an immersive, full stack coding bootcamp for 6 months in the
              Summer and Fall of 2019. It was an AMAZING experience, one that
              allowed me to study under several senior Developers and experienced
              project managers, who helped me build multiple powerful client
              facing products.
              <br /> <br />
              Throughout the cohort I was pushed and challenged in every aspect
              of my skillset and walked away with a very clear picture of how
              powerful performant code can be.
            </Paragraph>
          </TextContent>
          <Image src={uclabootcamp} alt="UCLA Bootcamp" />
          <TextContent>
            <Heading>Goal of the Bootcamp</Heading>
            <Paragraph>
              Prior to starting the bootcamp, I set some personal goals for myself
              so that I'd have clearly defined objectives for what I wanted to learn
              and accomplish. Of these goals, my main priority involved learning React,
              which for the little knowledge I had about the industry seemed to be the 
              best framework to be working with. I had no idea just how long that
              journey would be, starting with basic HTML and CSS, working all the way
              through vanilla JS, jQuery, Node, Express, SQL and NoSQL, Handlebars as 
              an introduction to templating, and finally to React.
              <br /><br />
              Another goal I set for myself during my time at bootcamp was to learn what
              it meant to be a member of a team in the world of web development. That meant
              not only understanding every phase of the development process, from ideation
              to launch, but also how the the individual roles fit together. After failing,
              and failing some more, I now have a firm grasp of how git plays into team
              development. Additionally, I'm walking away with an understanding of a few
              advanced git concepts. 
            </Paragraph>
          </TextContent>
          <WebStack>
            <LeftContent></LeftContent>
            <RightContent>
              <Heading>Personal Challenges and Growth</Heading>
              <Paragraph>
                The Summer and Fall spent in classes was most of the most challenging
                and rewarding experiences of my adult life.  Outside of my time at 
                North Carolina State University studying Economics, it was by far the most
                educational. I learned not only a ton about myself and how I learn, but also
                about what kind of coder I want to be.
                  <br /><br />
                At UCLA Full Stack Bootcamp, I learned a ton about JavaScript, Node,
                React, SQL/NoSQL, and Git. I also learned about how to develop with integrity,
                and how to be a valuable member of a team.  Working along side and learning from
                so many talented senior Developers inspired me to push beyond what I
                believed to be my own boundaries. 
              </Paragraph>
            </RightContent>
          </WebStack>
        </Container>
      </LayoutAlt>
      <Footer />
    </>
  )
}

export default Bootcamp

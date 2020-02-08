import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import { breakpoints } from "../components/Media"
import Heading from "../components/Heading"
import Paragraph from "../components/Paragraph"
import Layout from "../components/Layout"
import HeadingWrap from "../components/HeadingWrap/index"

const Container = styled.div`
  margin: 100px 0 200px 0;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center:
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
  }
`

const SkillTable = styled.div`
  width: 100%;
  text-align: left;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
  }

  p {
    color: black;
    font-weight: 700;
    min-widthL 200px;
    margin: 20px 0 0 0;

    @media (min-wdith: ${breakpoints}) {
      min-width: unset:
      margin: 30px 0;
    }
    span {
      font-size: 20px;
      margin-right: 5px;
      color: #b4e1e7;
    }
  }
  
`

const SubContainer = styled.div`
  margin: 0px 0;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
  }
`

const TextContent = styled.div`
  max-width: 700px;
  .Paragraph {
    a {
      border-bottom: 2px solid transparent;
      transition: 0.3s;

      :hover {
        border-bottom: 2px solid black;
      }
    }
  }
`

const TextContentWrap = styled(TextContent)`
  width: 100%;

  ${Paragraph} {
    margin: 40px 0px;
  }
  :nth-child(2) {
    ${Paragraph} {
      margin: 0px 0px;

      @media (min-wdith: ${breakpoints}) {
        margin: 40px 0;
      }
    }
  }

  @media (min-width: ${breakpoints}) {
    width: 45%;
  }
`

const SkillContent = styled.div`
  width: 100%;
`

// const HeadingImage = styled.div`
//   margin-left: 0px;
//   margin-right: 0px;
//   margin-top: 0px;
//   width: 100%;
//   border-radius: 4px.
//   height: 300px;
//   background-size: cover;
//   background-image: url();
//   background-color: #f5f5f5;
//   background-position: center;

//   @media (min-width: ${breakpoints.mobileMax}) {
//     width: 100%;
//     height: 400px;
//     background-position-x: right;
//     background-position-y: center;

//   }
// `;

const SubParagraph = styled(Paragraph)`
  margin-top: 10px;
  max-width: unset;

  @media (min-width: ${breakpoints.mobileMax}) {
    max-width: 70%;
  }
`

class Page extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log("This portfolio was built by Alex Shoemaker")
  }
  render() {
    return (
      <div>
        <Layout>
          <Link title="Home - Alex Shoemaker" to="/">
            {/* <Logo /> */}
          </Link>
          <Helmet>
            <title>Alex Shoemaker - Web Developer - Full Stack</title>
            <meta
              name="title"
              content="Alex Shoemaker - Web Developer - Full Stack"
            />
            <meta
              name="description"
              content="I have always been a little envious of artists and content creators, being able to share a little bit of themselves with the world. Until I discovered web development, I never had that outlet. Now I get to share a little bit myself in every application I create."
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://alexshoe.com/" />
            <meta
              property="og:description"
              content="I have always been a little envious of artists and content creators, being able to share a little bit of themselves with the world. Until I discovered web development, I never had that outlet. Now I get to share a little bit myself in every application I create."
            />
            {/* <meta 
              property='og:image'
              content={LandingImage}
            /> */}
          </Helmet>
          <HeadingWrap />
          {/* <HeadingImage /> */}
          <Container
            style={{
              alignItems: "start",
              margin: 0,
              justifyContent: "space-between",
            }}
          >
            <TextContentWrap>
              <Paragraph>
                I'm a 32 year old bartender in Los Angeles currently studying
                studying full stack web development. I also have a BS in
                Economics.
                <br />
                <br />
                As I have started on my journey as a developer, I've had the
                opportunity to learn from some senior developers who have raised
                my standards for what is expected of a production level web
                application.
              </Paragraph>
            </TextContentWrap>
            <TextContentWrap>
              <Paragraph>
                Through my experiences as a developer, I've had the opportunity
                to create memorable experiences while learning how to write code
                that is maintainable, replicable, and easy to understand.
              </Paragraph>
            </TextContentWrap>
          </Container>
          <Container>
            <SubContainer>
              <SkillContent>
                <TextContent>
                  <Heading>My Skills</Heading>
                  <Paragraph>
                    Aside from the courses I have taken at the UCLAX Full Stack
                    Web development Bootcamp, I have also taken a number of
                    online courses such as{" "}
                    <a
                      title="Dan Abramov, Maggie Appleton - Just JavaScript"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.justjavascript.com"
                    >
                      Dan Abramov and Maggie Appleton's Just JavaScript
                    </a>
                    ,{" "}
                    <a
                      title="Web Application For Everybody"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.coursera.org/specializations/web-applications"
                    >
                      Web Applications for Everybody
                    </a>
                    ,{" "}
                    <a
                      title="The Odin Project - JavaScript"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.theodinproject.com/courses/javascript"
                    >
                      The Odin Project - JavaScript
                    </a>
                    , and I'm currently taking{" "}
                    <a
                      title="ES6 for Everyone"
                      target="_blank"
                      rel="noreferrer"
                      href="https://es6.io/"
                    >
                      ES6 for Everyone
                    </a>
                  </Paragraph>
                </TextContent>
                <SkillTable>
                  <row>
                    <Paragraph>
                      <span>&#9675;</span> HTML5
                    </Paragraph>
                    <Paragraph>
                      <span>&#9675;</span> CSS3
                    </Paragraph>
                  </row>
                  <row>
                    <Paragraph>
                      <span>&#9675;</span> JavaScript ES6
                    </Paragraph>
                    <Paragraph>
                      <span>&#9675;</span> React
                    </Paragraph>
                  </row>
                  <row>
                    <Paragraph>
                      <span>&#9675;</span> Express Server
                    </Paragraph>
                    <Paragraph>
                      <span>&#9675;</span> Styled-Components
                    </Paragraph>
                  </row>
                  <row>
                    <Paragraph>
                      <span>&#9675;</span> Git
                    </Paragraph>
                    <Paragraph>
                      <span>&#9675;</span> SQL and NoSQL
                    </Paragraph>
                  </row>
                </SkillTable>
              </SkillContent>
            </SubContainer>
          </Container>
          <SubContainer>
            <TextContent>
              <Heading>What I've been working on</Heading>
              <SubParagraph>
                I love staying busy and am always trying to solidify my skills
                by keeping projects coming down the pipeline. Please take a
                moment to check out some of the applications I've been
                dedicating my time to completing.
              </SubParagraph>
            </TextContent>
          </SubContainer>
        </Layout>
      </div>
    )
  }
}

export default Page

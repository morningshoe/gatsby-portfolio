import React from 'react';
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import { Link } from "gatsby";
import styled from "styled-components";
import { breakpoints } from "../components/Media";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Footer from "../components/Footer";
import "../index.css";

const Container = styled.div`
  margin: 50px 0;
  width: 100%;
  height: auto;
  align-items: center;

  h1 {
    font-size: 30px;
  }

  @media (min-width ${breakpoints.mobileMax}) {
    margin: 100px 0;
  }
`;

const TextContent = styled.div`
  max-width: 800px;
  margin-top: 40px;

  @media (min-width: ${breakpoints.mobileMax}) {
    margin-top: 100px;
  }

  :nth-child(1) > ${Heading} {
    font-size: 40px;

    @media (min-width: ${breakpoints.mobileMax}) {
      font-size: 60px;
    }
  }
`;

const ProjectTable = styled.table`
  width: 100%;
  text-align: left;

  th {
    font-style: normal;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 129.69%;
    letter-spacing: 0.03em;
    padding-bottom: 20px;
  }

  td {
    width: 100px;
    font-size: 14px;
    line-height: 184.69%;
    letter-spacing: 0.03em;
  }
`;

const Bold = styled.td`
  a {
    font-size: 16px;
    letter-spacing: 0.03em;
    font-weight: 900;
    color: #dd7834;
    border-bottom: 2px solid transparent;
    transition: 0.3s;
    padding-bottom: 3px;

    :hover {
      border-bottom: 2px solid #dd7834;
    }
  }
`;

// const Image = styled.img`
//   margin: 50px 0 20px 0;
//   width: 105%;
//   transform: translate(-2.5%);
//   height: auto;
//   border-radius: 4px;

//   @media (min-width: ${breakpoints.mobileMax}) {
//     height: auto;
//     margin: 50px 0 50px 0;
//   }
// `;

const WebStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 30px 0;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
    align-items: center;
    margin: 100px 0;
  }
`;

const LeftContent = styled.div`
  width: 100%;
  height: 300px;
  background-image: url();
  background-repeat: no-repeat;
  background-position: center;

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 55%;
  }
`;

const RightContent = styled.div`
  width: 100%;

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 45%;
  }
`;

const CenterText = styled.div`
  width: 100%;
  padding: 50px 0;
  text-align: center;

  ${Paragraph} {
    max-width: 700px;
    margin: 30px auto;
  }
`;

// const DuoLinks = styled.div`
//   display: flex;
//   justify-content: space-evenly;
//   width: 100%;
//   margin: 0 auto;
//   margin-bottom: 150px;
//   flex-wrap: wrap;

//   @media (min-width: ${breakpoints.mobileMax}) {
//     flex-wrap: nowrap;
//     width: 60%;
//   }
// `;

// const LinkLeft = styled.div`
//   width: 100%;
//   margin: 10px auto;
//   text-align: center;

//   @media (min-width: ${breakpoints.mobileMax}) {
//     width: unset;
//     text-align: left;
//     margin: unset;
//   }
// `;

// const LinkRight = styled(LinkLeft)``;

// const ProjectLink = styled(Paragraph)`
//   font-weight: 700;
//   font-size: 14px;
//   line-height: 163.19%;
//   display: inline;
//   color: black;
//   color: black;
//   letter-spacing: 0.03em;
//   text-transform: uppercase;
//   border-bottom: 2px solid white;
//   transition: border-bottom 0.2s;

//   :hover {
//     border-bottom: 2px solid black;
//   }

//   span {
//     font-size: 20px;
//   }
// `;

function Janus() {
  return (
    <>
      <Helmet 
        title="Alex Shoemaker - Janus"
        meta={[
          {
            name: "Alex Shoemaker",
            content: "Portfolio - Alex Shoemaker"
          },
          {
            name: "Alex Shoemaker",
            content: "Alex Shoemaker - Full Stack Developer"
          }
        ]}
        >
          {" "}
          <html lang="en" />
        </Helmet>
        <Layout>
          <Link to="/">
            Home
          </Link>
          <Container>
            <TextContent>
              <Heading>Janus News App</Heading>
                <Paragraph>
                  Janus is a React based application built for
                  people who are not only interested in keeping up
                  with the news of the day, but also in sharing it
                  with others... with a splash of personal insight.   
                </Paragraph>
                <ProjectTable>
                  <tbody>
                    <tr>
                      <th>Type</th>
                      <th>Stack</th>
                      <th>Live</th>
                    </tr>
                    <tr>
                      <td>Educational</td>
                      <td>React</td>
                      <Bold>
                        <a href="https://janus-news.herokuapp.com/">View Site</a>
                      </Bold>
                    </tr>
                    <tr>
                      <td></td>
                      <td>Node and Express</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>REST API</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>SQL</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>Heroku</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </ProjectTable>
            </TextContent>
            {/* <Image
              src={}
              alt="Janus"
            /> */}
            <TextContent>
              <Heading>Project Purpose and Goal</Heading>
              <Paragraph>
                  I built this application alongside two other students at
                  my bootcamp as our final project.  The purpose was to
                  showcase our "full stack" skillset.  We used React with
                  for the front end, Node and Express with a REST API for 
                  the server, SQL for our database, and Heroku to deploy.
                  <br /><br />
                  Phase 1 included a brief description of the project, as 
                  well as wireframe mock ups of all of the pages and a 
                  detailed description of each individual's responsibilities.
                  I was given the position of project manager, and I was also 
                  responsible for setting up the database, server, and all endpoints.
                  Phase 2 included our MVP, as well as proof that we were managing
                  our responsibilities through a workflow software such as Jira. Phase
                  3 was a class presentation, requiring us to give an "elevator pitch",
                  and a thorough presentation of the operation of the application
              </Paragraph>
            </TextContent>
            <WebStack>
              <LeftContent></LeftContent>
              <RightContent>
                <Heading>Web Stack and Explanation</Heading>
                <Paragraph>
                  React, Node, an Express server, and either Mongo
                  or SQL were required for this project, as those were
                  the main components of the stack being taught at 
                  this bootcamp. We chose to use SQL with the Sequelize
                  CRM because we wanted to allow users to create/update/
                  edit their posts, and that feels much cleaner with SQL. 
                </Paragraph>
                <Paragraph>
                  Another requirement for this project was some sort of user
                  authentication process. We chose Passport.js for its ease of use, 
                  as it is a very lightweight/modular middlewear. 
                  Passport offers a number of authorization strategies, 
                  such as gmail, Facebook, GitHub, and ~500 more.  We chose 
                  to use their Local strategy, in addition to offering the 
                  user the ability to tie their Janus account to their 
                  GitHub account.   
                </Paragraph>
              </RightContent>
            </WebStack>
            {/* <Image 
              src={}
              alt="Janus blog posts"
            /> */}
            <CenterText>
              <Heading>Problems and Processes</Heading>
              <Paragraph>
                Like any other projects, there were definitely
                some bumps along the way. As usual, when working with others,
                it's difficult to agree on things like code structure 
                and organization. Because of the size of the project, and
                how little time we had to execute, I knew that efficiency 
                would be paramount. We worked very hard at keeping components 
                as reusable as possible.
                <br /><br />
                We weren't very well versed in our React CSS options
                at that point, so we decided to use React Bootstrap
                as we were all familiar with Bootstrap as a framework already.
                Having said that, we weren't assigned any designers for this
                project! None of us had much experience with UX/UI best
                practice, so there was alot to learn for this project. 
              </Paragraph>
            </CenterText>
            {/* <Image 
              src={}
              alt="Janus blog posts"
            /> */}
            <TextContent>
              <Heading>Lessons Learned</Heading>
              <Paragraph>
                I could really create an entirely separate page
                to fill with all of the things I learned while creating
                this project with Stephen and Ashkan. However, the most important
                points involved React, Git workflow, API integration,
                user authentication, and code organization/structure.
                Working with other people on projects this complex becomes
                a nightmare if you don't write clear, readable code. Also,
                the wise words of our class instructor Jason never felt more
                true: NAMING THINGS IS HARD. 
              </Paragraph>
            </TextContent>
          </Container>
        </Layout>
        <Footer />
    </>
  );
}

export default Janus
import React from 'react';
import { Link } from "gatsby";
import styled from "styled-components";
import { breakpoints } from "../Media";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import uclabootcamp from "../../images/uclabootcamp.jpeg";


const ProjectContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 0px;
  flex-wrap: wrap;
  margin-top: 0px;
  height: unset;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
    margin-bottom: 70px;
    margin-top: 70px;
    height: 500px;
  }
`;

const ProjectLink = styled(Paragraph)`
  font-weight: 700;
  font-size: 14px;
  line-height: 163.19%;
  display: inline;
  color: black;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.3s;

  :hover {
    border-bottom: 2px solid black
  }

  span {
    font-size: 20px;
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 4px;
  transition-duration: 0.3s;
`;

const Project = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 90px;
  transition-duration: 0.3s;

  :hover {
    ${ProjectImage} {
      transform: scale(1.03);
    }

    ${ProjectLink} {
      border-bottom: 2px solid black;
    }
  }

  :nth-child(1) {
    margin-right: 0;

    @media (min-width: ${breakpoints.mobileMax}) {
      margin-right: 10%;
    }
  }

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 45%;
    margin-bottom: 0px;
  }

  :nth-child(1) {
    ${ProjectImage} {
      background-image: url(${uclabootcamp});
      background-size: cover;
      background-position-x: center;
      background-position-y: center;
    }
  }
`;

const SubHeading = styled(Heading)`
  font-size: 30px;
  margin-bottom: 0;
  margin-top: 30px;
`;

const ProjectParagraph = styled(Paragraph)`
  margin-top: 10px;
  max-width: unset;
  margin-bottom: 20px;

  @media (min-width: ${breakpoints.mobileMax}) {
    max-width: 70%
  }
`;

function ProjectRow() {
  return (
    <ProjectContainer>
      <Project>
      <Link title="Bootcamp" to="/Bootcamp">
        <ProjectImage />
      </Link>
      <Link title="Bootcamp" to="/Bootcamp">
        <SubHeading>Bootcamp</SubHeading>
      </Link>
      <ProjectParagraph>
        A short description of my time at the UCLA Full Stack Bootcamp.
      </ProjectParagraph>
      <Link title="Bootcamp" to="/Bootcamp">
        <ProjectLink>
          Read Story<span>&#8250;</span> 
        </ProjectLink>
      </Link>
    </Project>
      <Project>
      <Link title="Janus" to="/Janus">
        <SubHeading>Janus</SubHeading>
      </Link>
      <ProjectParagraph>
        An application designed for the sharing of blogs and aggregation of news.
      </ProjectParagraph>
      <Link title="Janus" to="/Janus">
        <ProjectLink>
          View Project<span>&#8250;</span> 
        </ProjectLink>
      </Link>
    </Project>
    </ProjectContainer>
  )
}

export default ProjectRow;


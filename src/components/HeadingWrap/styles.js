import styled from 'styled-components';
import { breakpoints } from "../../components/Media";
import Container from '../../components/Container';
import insta from "../../images/social/insta.png";
import git from "../../images/social/git.png";

export const HeadingWrapCont = styled.div`
  background-image: url();
  padding-top: 40px;
  background-position: 0 0;
  background-repeat: no-repeat;
`;

export const HeadingElements = styled.div`
  display: flex;
  align-items: center;
`;

export const Line = styled.div`
  height: 2px;
  background-color: black;
  width: 100px;

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 200px;
  }
`;

export const SocialCont = styled.div`
  width: auto;
  height: auto;
  display: flex;
  margin-left: 20px;

  & .git {
    background-image: url(${git});
  }
  
  & .insta {
    background-image: url(${insta});
  }
`;

export const Social = styled.div`
  width: 27px;
  height: 27px;
  margin: 0 15px;
  background-repeat: no-repeat;
  background-size: 27px 27px;
  background-position: center center;
  transition-duration: 2s;

  :hover {
    background-size: 30px;
  }
`;
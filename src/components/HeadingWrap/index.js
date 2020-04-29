import React from "react";
import {
  HeadingWrapCont,
  HeadingElements,
  Line,
  SocialCont,
  Social,
} from "./styles";
import { Container } from "../Container";
import { HeadingMain } from "../../styles";

function HeadingWrap() {
  return (
    <Container>
      <HeadingWrapCont>
        <HeadingElements>
          <Line />
          <SocialCont>
            <a
              title="Instagram - Morningshoe"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/morningshoe/"
            >
              <Social className="insta"></Social>
            </a>
            <a
              title="Github - Repository"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.github.com/morningshoe/"
            >
              <Social className="git"></Social>
            </a>
          </SocialCont>
        </HeadingElements>
        <HeadingMain>
          Hi, I'm Alex. <br />
          JAMstack <span>Developer</span>, <br />
          Fan of Minimalist Design
        </HeadingMain>
      </HeadingWrapCont>
    </Container>
  );
}

export default HeadingWrap;

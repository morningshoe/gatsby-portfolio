import React from "react"
import styled from "styled-components/macro"

const Email = styled.div`
  color: black;
  font-weight: 700;
  padding-bottom: 5px;
  border-bottom: 2px solid transparent;
  display: inline-block;
  transition: border-bottom 0.2s;

  :hover {
    border-bottom: 2px solid black;
  }
`

function ContactEmail() {
  return (
    <>
      <a href="mailto: iamalexshoemaker@gmail.com">
        <Email>iamalexshoemaker@gmail.com</Email>
      </a>
    </>
  );
}

export default ContactEmail;

import styled from "styled-components";

export const ContactSectionWrapper =styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 100%;
`
export const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: larger;
  @media only screen and (max-width: 560px) {
    font-size: small;
  }
`

export const ContactText = styled.label`
  padding-left: 1rem;
  padding-bottom: 0.4rem;
`

export const ContactUrl = styled.a`
  padding-left: 1rem;
  padding-bottom: 0.4rem;
`

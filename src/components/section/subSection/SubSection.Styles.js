import styled from "styled-components";

export const SubSectionTitle = styled.label`
  font-size: larger;
  font-weight: 500;
  @media only screen and (max-width: 360px) {
    font-size: medium;
    word-break: break-word;
  }
`

export const SubSectionText = styled.label`
  font-size: larger;
  text-align: left;
  @media only screen and (max-width: 360px) {
    font-size: 0.9rem;
  }
`

export const SubSectionTextLi = styled.li`
  font-size: larger;
  text-align: left;
  @media only screen and (max-width: 360px) {
    font-size: 0.9rem;
  }
`

export const SubSectionWrapper = styled.div`
  width: 100%;
  display: grid;
  column-gap: 0.25rem;
  grid-template-columns: 2fr 9fr;
  padding: 0.5rem 0.5rem 0.5rem 0;
  @media only screen and (max-width: 360px) {
    column-gap: 0.5rem;
  }
`

export const ImageWrapper = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: inherit;
  @media only screen and (max-width: 360px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

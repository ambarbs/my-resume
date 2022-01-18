import styled from "styled-components";
import {SubSectionWrapper} from "../subSection/SubSection.Styles";

export const LeftWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LeftInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  //padding-left: 0.5rem;
`

export const ExperienceSectionWrapper = styled(SubSectionWrapper)`
  column-gap: 0.25rem;
  grid-template-columns:  0.5fr 1.5fr 9fr;
`

export const ImageContainer = styled.div`
  height: 100%;
  width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 360px) {
    width: 2.5rem;
  }
`

export const Strong = styled.strong`
  @media only screen and (max-width: 360px) {
    font-size: medium;
  }
`
export const Label = styled.label`
  @media only screen and (max-width: 360px) {
    font-size: 0.9rem;
  }
`
export const H3 = styled.h3`
  @media only screen and (max-width: 360px) {
    font-size: 0.9rem;
  }
`

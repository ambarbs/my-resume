import styled from "styled-components";

export const SubSectionTitle = styled.label`
  font-size: larger;
  font-weight: 500;
`

export const SubSectionText = styled.label`
  font-size: larger;
  text-align: left;
`

export const SubSectionWrapper = styled.div`
  width: 100%;
  display: grid;
  //column-gap: 1rem;
  grid-template-columns: 1fr 4fr;
  padding: 1rem 1rem 0.5rem 0;

`

export const SubSectionWrapperWithIcon = styled(SubSectionWrapper)`
  grid-template-columns:  0.3fr 0.7fr 4fr;
`
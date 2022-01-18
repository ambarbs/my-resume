import styled from 'styled-components';

export const SectionHeaderText = styled.label`
  text-transform: uppercase;
  font-size: 2rem;
  letter-spacing: 0.5rem;
  width: 80%;
  @media only screen and (max-width: 360px) {
    font-size: 1.25rem;
  }
`

export const SectionHeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: dodgerblue;

  & ${SectionHeaderText} {
    padding-left: 1rem;
  }
`

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  & ${SectionHeaderWrapper}{ 
    margin-bottom: 0.5rem;
  }
`


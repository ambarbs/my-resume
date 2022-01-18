import styled from 'styled-components';

export const SectionHeaderText = styled.label`
  text-transform: uppercase;
  font-size: 2rem;
  letter-spacing: 4px;
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

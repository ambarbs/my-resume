import styled from 'styled-components';

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 3rem;
  margin-bottom: 1rem;
`

export const SectionHeaderText = styled.label`
  text-transform: uppercase;
  font-size: xx-large;
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



import styled from 'styled-components';
import { ExperienceSectionWrapper } from './experienceSection/ExperienceSection.Styles';

export const SectionHeaderText = styled.label`
  text-transform: uppercase;
  font-size: 2rem;
  letter-spacing: 0.5rem;
  width: 80%;
  @media only screen and (max-width: 560px) {
    font-size: 1.25rem;
    width: 90%;
  }
  @media only screen and (max-width: 360px) {
    font-size: 1.25rem;
  }
  @media print {
    font-size: 1rem;
  }
`;

export const SectionHeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: dodgerblue;
  margin-top: 1rem;
  & ${SectionHeaderText} {
    padding-left: 1rem;
  }
`;

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  & ${SectionHeaderWrapper} {
    margin-bottom: 0.5rem;
  }

  & ${ExperienceSectionWrapper}:nth-child(even) {
    background-color: ${({ theme }) => (theme.type === 'light' ? '#ccc' : '#282828')};
  }
  & ${ExperienceSectionWrapper}:nth-child(odd) {
    background-color: ${({ theme }) => (theme.type === 'light' ? '#fff' : '#404040')};
  }
  @media print {
    margin-top: 0.5rem;
    margin-bottom: 0.4rem;
    & ${SectionHeaderWrapper} {
      margin-top: 1rem;
      margin-bottom: 0.2rem;
    }
  }
`;

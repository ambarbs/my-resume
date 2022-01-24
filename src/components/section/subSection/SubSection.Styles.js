import styled from 'styled-components';

export const SubSectionTitle = styled.label`
  font-size: 1rem;
  font-weight: bold;
  @media only screen and (max-width: 360px) {
    font-size: 0.83em;
    word-break: break-word;
  }
  @media print {
    font-size: x-small;
  }
`;

export const SubSectionText = styled.label`
  font-size: 1rem;
  text-align: left;
  @media only screen and (max-width: 360px) {
    font-size: 0.9rem;
  }
  @media print {
    font-size: x-small;
  }
`;

export const SubSectionTextLi = styled.li`
  font-size: 1rem;
  text-align: left;

  @media only screen and (max-width: 360px) {
    font-size: 0.9rem;
  }
  @media print {
    font-size: x-small;
  }
`;

export const SubSectionWrapper = styled.div`
  width: 100%;
  display: grid;
  column-gap: 0.25rem;
  grid-template-columns: 3fr 8fr;
  padding: 0.5rem 0.5rem 0.5rem 0;

  @media only screen and (max-width: 360px) {
    column-gap: 0.5rem;
  }
  @media print {
    padding: 0.2rem 0.5rem 0.2rem 0;
  }
`;

export const ImageWrapper = styled.img`
  width: ${({ width }) => width || '3rem'};
  height: ${({ height }) => height || '3rem'};
  border-radius: inherit;
  @media only screen and (max-width: 360px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

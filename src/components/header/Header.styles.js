import styled from 'styled-components';

export const HeaderWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 1rem;
  height: 12rem;

  @media only screen and (max-width: 360px) {
    height: 6rem;
  }
  @media print {
    height: 3rem;
    margin-bottom: 0.25rem;
  }
`;

export const NameWrapper = styled.div`
  font-size: 7em;
  font-family: 'Roboto';
  @media only screen and (max-width: 1024px) {
    font-size: 5em;
  }
  @media only screen and (max-width: 560px) {
    font-size: 1.75em;
  }
  @media only screen and (max-width: 360px) {
    font-size: 2.8em;
  }

  @media print {
    font-size: 2.5em;
  }
`;

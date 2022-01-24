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
    height: 2rem;
    margin-bottom: 0.25rem;
  }
`;

export const NameWrapper = styled.div`
  font-size: 8em;
  letter-spacing: 0.15em;
  line-height: 0.2em;
  font-family: 'Roboto';
  @media only screen and (max-width: 1024px) {
    font-size: 5em;
    letter-spacing: unset;
    line-height: unset;
  }
  @media only screen and (max-width: 560px) {
    font-size: 1.75em;
    letter-spacing: unset;
    line-height: unset;
  }
  @media only screen and (max-width: 360px) {
    font-size: 2.8em;
    letter-spacing: unset;
    line-height: unset;
  }

  @media print {
    font-size: 2.5em;
    letter-spacing: unset;
    line-height: unset;
  }
`;

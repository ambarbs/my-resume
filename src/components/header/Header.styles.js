import styled from 'styled-components';

export const HeaderWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  height: 10rem;

  @media only screen and (max-width: 360px) {
    height: 6rem;
  }
`

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
    font-size: 2.5em;
  }
`

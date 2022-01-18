import styled from 'styled-components';

export const HeaderWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
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
`

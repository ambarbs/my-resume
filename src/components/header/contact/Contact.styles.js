import styled from 'styled-components';

export const ContactSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 100%;
`;
export const ContactWrapper = styled.div`
  visibility: ${({ visibility }) => visibility};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: larger;
  @media only screen and (max-width: 560px) {
    font-size: small;
  }
  @media print {
    font-size: x-small;
    visibility: visible;
  }
`;

export const ContactText = styled.label`
  padding-left: 1rem;
  padding-bottom: 0.4rem;

  @media only screen and (max-width: 360px) {
    display: none;
    padding-left: 0.5rem;
  }
`;

export const ContactUrl = styled.a`
  padding-left: 1rem;
  padding-bottom: 0.4rem;
  color: ${({ color }) => color};
  @media only screen and (max-width: 360px) {
    display: none;
    padding-left: 0.5rem;
  }
`;

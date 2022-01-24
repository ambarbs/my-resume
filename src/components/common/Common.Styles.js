import styled from 'styled-components';

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;
export const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const Strong = styled.strong`
  @media only screen and (max-width: 360px) {
    font-size: small;
  }
  @media print {
    font-size: x-small;
  }
`;
export const Label = styled.label`
  @media only screen and (max-width: 360px) {
    font-size: 0.8rem;
  }
  @media print {
    font-size: x-small;
  }
`;
export const H3 = styled.h3`
  font-style: ${({ fontStyle }) => fontStyle};
  @media only screen and (max-width: 360px) {
    font-size: 0.9rem;
  }
  @media print {
    font-size: small;
  }
`;

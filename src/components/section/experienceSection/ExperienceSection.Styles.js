import styled from 'styled-components';
import { SubSectionWrapper } from '../subSection/SubSection.Styles';

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
  @media only screen and (max-width: 360px) {
    font-size: 0.9rem;
    padding-left: 1rem;
  }
  @media print {
    font-size: x-small;
  }
`;

export const H5 = styled.h5`
  margin: 0;
`;

export const H6 = styled.h6`
  margin: 0;
`;

export const LeftInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  @media only screen and (max-width: 360px) {
    & ${Strong} {
      padding-bottom: 1rem;
    }
  }
  @media print {
    & ${Strong} {
      padding-bottom: 0.5rem;
    }
  }
`;

export const LeftOuterWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & ${LeftInnerWrapper} {
    padding-left: 1rem;
  }

  @media only screen and (max-width: 360px) {
    flex-direction: column;
    align-items: flex-start;
    word-break: break-word;
    & ${LeftInnerWrapper} {
      padding-left: unset;
      padding-top: 1rem;
    }
  }
`;

export const ExperienceSectionWrapper = styled(SubSectionWrapper)`
  column-gap: 0.25rem;
  & ${LeftOuterWrapper} {
    margin-right: 4rem;
  }
  @media print {
    margin-bottom: 0.5rem;
  }
`;

export const ImageContainer = styled.div`
  height: 100%;
  width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 360px) {
    width: 2.5rem;
    height: unset;
    padding-top: 1rem;
  }
`;

export const ColumnList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ListWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const BulletList = styled.ul`
  list-style-type: disc;
`;

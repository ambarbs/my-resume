import styled from 'styled-components';
import { SubSectionWrapper } from '../subSection/SubSection.Styles';
import { H3, Row, Strong } from '../../common/Common.Styles';

export const H5 = styled.h5`
  margin: 0;
  @media print {
    font-size: x-small;
  }
`;

export const LeftInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  text-align: left;
  & ${Strong} {
    padding-bottom: 0.8rem;
  }
  @media print {
    & ${Strong} {
      padding-bottom: 0.5rem;
    }
  }
`;

export const LeftOuterWrapper = styled(Row)`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & ${LeftInnerWrapper} {
    padding-left: 1rem;
  }

  @media only screen and (max-width: 360px) {
    align-items: center;
    justify-content: flex-start;
    word-break: break-word;
    & ${LeftInnerWrapper} {
      padding-left: unset;
      padding-top: 1rem;
      margin-left: 2rem;
    }
  }
`;

export const ExperienceSectionWrapper = styled(SubSectionWrapper)`
  column-gap: 0.25rem;
  & ${LeftOuterWrapper} {
    margin-right: 4rem;
  }

  & ${Row} {
    & ${H3} {
      &:last-of-type {
        margin-left: 1rem;
      }
    }
  }

  @media only screen and (max-width: 390px) {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
  }
  @media print {
    margin-bottom: 0.5rem;
  }
`;

export const ImageContainer = styled.div`
  height: 100%;
  //width: ${({ width }) => width || '5rem'};
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 390px) {
    width: unset;
    height: unset;
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

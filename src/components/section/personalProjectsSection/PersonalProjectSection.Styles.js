import styled from 'styled-components';
import { SubSectionWrapper } from '../subSection/SubSection.Styles';
import { Column, Label, Row, Strong } from '../../common/Common.Styles';

export const PersonalProjectSectionWrapper = styled(SubSectionWrapper)`
  margin-bottom: 1rem;
  margin-top: 1rem;
  & ${Row} {
    & ${Strong} {
      margin-left: 1rem;
    }
  }
  & ${Column} {
    margin-left: 2rem;
    & ${Label} {
      margin-bottom: 0.5rem;
    }
  }

  @media print {
    margin-bottom: 0.2rem;
    margin-top: 0.2rem;
    font-size: x-small;
    & ${Column} {
      & ${Label} {
        margin-bottom: 0.2rem;
      }
    }
  }
`;

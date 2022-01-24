import styled from 'styled-components';
import { SubSectionWrapper } from '../subSection/SubSection.Styles';
import { Column, Label, Row, Strong } from '../../common/Common.Styles';

export const Description = styled.label``;
export const PersonalProjectSectionWrapper = styled(SubSectionWrapper)`
  & ${Row} {
    & ${Strong} {
      margin-left: 1rem;
    }
  }
  & ${Column} {
    & ${Label} {
      margin-bottom: 1rem;
    }
  }
`;

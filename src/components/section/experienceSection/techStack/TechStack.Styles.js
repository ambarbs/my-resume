import styled from 'styled-components';
import { ColumnList, H5 } from '../ExperienceSection.Styles';

export const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ListWithoutBullets = styled.li`
  list-style-type: none;

  ${Row} {
    background-color: red;
    ${H5} {
      padding-right: 1rem;
    }
  }
`;

export const TechStackListWrapper = styled(ColumnList)`
  ${H5} {
    padding-right: 1rem;
  }
  @media print {
    font-size: x-small;
  }
`;
export const StyledUL = styled.ul`
  > li {
    padding-top: 0.5rem;
  }
  @media only screen and (max-width: 360px) {
    padding-inline-start: 2rem;
  }
`;

export const StyledLi = styled.li`
  font-size: 1rem;
  @media only screen and (max-width: 360px) {
    font-size: 0.9rem;
  }
`;

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

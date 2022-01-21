import PropTypes from 'prop-types';
import { BulletList, ColumnList, H5, ListWrapper } from './ExperienceSection.Styles';
import { SubSectionTextLi } from '../subSection/SubSection.Styles';
import React from 'react';

export const List = ({ title, subSectionTexts }) => (
  <ListWrapper>
    <ColumnList>
      <H5>{title}</H5>
      <BulletList>
        {subSectionTexts.map((subSectionText) => (
          <SubSectionTextLi key={subSectionText}>{subSectionText}</SubSectionTextLi>
        ))}
      </BulletList>
    </ColumnList>
  </ListWrapper>
);

List.propTypes = {
  title: PropTypes.string,
  subSectionTexts: PropTypes.arrayOf(PropTypes.string),
};

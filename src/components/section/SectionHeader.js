import PropTypes from 'prop-types';
import React from 'react';
import { SectionHeaderText, SectionHeaderWrapper } from './Section.Styles';

const SectionHeader = ({ sectionHeader, SectionHeaderIcon }) => (
  <SectionHeaderWrapper>
    <SectionHeaderIcon size="4em" />
    <SectionHeaderText>{sectionHeader}</SectionHeaderText>
  </SectionHeaderWrapper>
);

export default SectionHeader;

SectionHeader.propTypes = {
  SectionHeaderIcon: PropTypes.any,
  sectionHeader: PropTypes.any,
};

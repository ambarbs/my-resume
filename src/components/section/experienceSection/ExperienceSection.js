import PropTypes from 'prop-types';
import React from 'react';
import { ImageWrapper, SubSectionTextLi } from '../subSection/SubSection.Styles';
import {
  ColumnList,
  ExperienceSectionWrapper,
  H3,
  H5,
  ImageContainer,
  Label,
  LeftInnerWrapper,
  LeftOuterWrapper,
  ListWrapper,
  Strong,
} from './ExperienceSection.Styles';
import styled from 'styled-components';
import TechStack from './techStack/TechStack';
import { List } from './List';

const ExperienceSection = ({
  subSectionTitle,
  subSectionIcon,
  yearsWorked,
  workTitle,
  subSectionTexts,
  techStack,
}) => {
  return (
    <ExperienceSectionWrapper>
      <LeftOuterWrapper>
        <ImageContainer>
          <ImageWrapper src={subSectionIcon} alt="work logo" />
        </ImageContainer>
        <LeftInnerWrapper>
          <Strong>{subSectionTitle}</Strong>
          <Label>{yearsWorked}</Label>
        </LeftInnerWrapper>
      </LeftOuterWrapper>
      <div>
        <H3>{workTitle}</H3>
        <List title="Projects & responsibilities" subSectionTexts={subSectionTexts} />
        <TechStack techStack={techStack} />
      </div>
    </ExperienceSectionWrapper>
  );
};

export default ExperienceSection;

ExperienceSection.propTypes = {
  SubSectionIcon: PropTypes.any,
  subSectionText: PropTypes.string,
  subSectionTitle: PropTypes.string,
  yearsWorked: PropTypes.string,
  workTitle: PropTypes.string,
  subSectionIcon: PropTypes.node,
  subSectionTexts: PropTypes.arrayOf(PropTypes.string),
  techStack: PropTypes.shape({
    frontend: PropTypes.string,
    backend: PropTypes.string,
  }),
};

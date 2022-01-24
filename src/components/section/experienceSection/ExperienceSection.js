import PropTypes from 'prop-types';
import React from 'react';
import { ImageWrapper } from '../subSection/SubSection.Styles';
import {
  ExperienceSectionWrapper,
  ImageContainer,
  LeftInnerWrapper,
  LeftOuterWrapper,
} from './ExperienceSection.Styles';
import TechStack from './techStack/TechStack';
import { List } from './List';
import { H3, Label, Row, Strong } from '../../common/Common.Styles';

const ExperienceSection = ({
  subSectionTitle,
  subSectionTitles,
  subSectionIcon,
  yearsWorked,
  workTitle,
  location,
  subSectionTexts,
  techStack,
  imageGrid = false,
}) => {
  return (
    <ExperienceSectionWrapper>
      <LeftOuterWrapper>
        {imageGrid && subSectionIcon}
        {!imageGrid && (
          <ImageContainer>
            <ImageWrapper src={subSectionIcon} alt="work logo" />
          </ImageContainer>
        )}
        <LeftInnerWrapper>
          {subSectionTitle && <Strong>{subSectionTitle}</Strong>}
          {subSectionTitles &&
            subSectionTitles.map((title) => <Strong key={title}>{title}</Strong>)}
          <Label>{yearsWorked}</Label>
        </LeftInnerWrapper>
      </LeftOuterWrapper>
      <div>
        <Row>
          <H3>{workTitle}</H3>
          <H3 fontStyle="italic">{location}</H3>
        </Row>
        <List title="Projects & responsibilities" subSectionTexts={subSectionTexts} />
        {techStack && <TechStack techStack={techStack} />}
      </div>
    </ExperienceSectionWrapper>
  );
};

export default ExperienceSection;

ExperienceSection.propTypes = {
  SubSectionIcon: PropTypes.any,
  subSectionText: PropTypes.string,
  subSectionTitle: PropTypes.string,
  subSectionTitles: PropTypes.arrayOf(PropTypes.string),
  yearsWorked: PropTypes.string,
  workTitle: PropTypes.string,
  location: PropTypes.string,
  imageGrid: PropTypes.bool,
  subSectionIcon: PropTypes.node,
  subSectionTexts: PropTypes.arrayOf(PropTypes.string),
  techStack: PropTypes.shape({
    frontend: PropTypes.string,
    backend: PropTypes.string,
  }),
};

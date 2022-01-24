import PropTypes from 'prop-types';
import React from 'react';
import { PersonalProjectSectionWrapper } from './PersonalProjectSection.Styles';
import { ImageWrapper } from '../subSection/SubSection.Styles';
import { ImageContainer } from '../experienceSection/ExperienceSection.Styles';
import { Column, Label, Row, Strong } from '../../common/Common.Styles';

const PersonalProjectSection = ({ project }) => (
  <PersonalProjectSectionWrapper>
    <Row>
      <ImageContainer width="5rem">
        <ImageWrapper src={project.image} alt="project" width="5rem" height="5rem" />
      </ImageContainer>
      <Strong>{project.title}</Strong>
    </Row>
    <Column>
      <Label>{project.description}</Label>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        {project.link}
      </a>
    </Column>
  </PersonalProjectSectionWrapper>
);

PersonalProjectSection.propTypes = {
  project: PropTypes.object,
};

export default PersonalProjectSection;

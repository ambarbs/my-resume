import PropTypes from 'prop-types';
import React from 'react';
import { StyledLi, StyledUL, TechStackListWrapper } from './TechStack.Styles';
import { H5 } from '../ExperienceSection.Styles';
import { Row } from '../../../common/Common.Styles';

const TechStack = ({ techStack }) => (
  <TechStackListWrapper>
    <H5>Tech-stack</H5>
    <StyledUL>
      {techStack.frontend && (
        <StyledLi>
          <Row>
            <H5>Frontend</H5>
            <label>{techStack.frontend}</label>
          </Row>
        </StyledLi>
      )}
      {techStack.backend && (
        <StyledLi>
          <Row>
            <H5>Backend</H5>
            <label>{techStack.backend}</label>
          </Row>
        </StyledLi>
      )}
    </StyledUL>
  </TechStackListWrapper>
);

export default TechStack;

TechStack.propTypes = {
  techStack: PropTypes.shape({
    frontend: PropTypes.string,
    backend: PropTypes.string,
  }),
};

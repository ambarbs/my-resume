import PropTypes from 'prop-types';
import React from 'react';
import { Row, TechStackListWrapper } from './TechStack.Styles';
import { H5 } from '../ExperienceSection.Styles';

const TechStack = ({ techStack }) => {
  console.log(techStack);
  return (
    <>
      {techStack && (
        <TechStackListWrapper>
          <H5>Tech-stack</H5>
          <ul>
            {techStack.frontend && (
              <li>
                <Row>
                  <H5>Frontend</H5>
                  <label>{techStack.frontend}</label>
                </Row>
              </li>
            )}
            {techStack.backend && (
              <li>
                <Row>
                  <H5>Backend</H5>
                  <label>{techStack.backend}</label>
                </Row>
              </li>
            )}
          </ul>
        </TechStackListWrapper>
      )}
    </>
  );
};

export default TechStack;

TechStack.propTypes = {
  techStack: PropTypes.shape({
    frontend: PropTypes.string,
    backend: PropTypes.string,
  }),
};

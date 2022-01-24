import PropTypes from 'prop-types';
import React from 'react';
import { SectionWrapper } from './Section.Styles';
import SectionHeader from './SectionHeader';
import SubSection from './subSection/SubSection';
import ExperienceSection from './experienceSection/ExperienceSection';
import PersonalProjectSection from './personalProjectsSection/PersonalProjectSection';

const Section = ({ sectionHeader, type, SectionHeaderIcon, subSections = [] }) => {
  return (
    <SectionWrapper>
      <SectionHeader sectionHeader={sectionHeader} SectionHeaderIcon={SectionHeaderIcon} />
      {subSections.map((subSection) => {
        switch (type) {
          default:
            return (
              <SubSection
                key={`${subSection.subSectionTitle}-${subSection.subSectionText}`}
                subSectionTitle={subSection.subSectionTitle}
                subSectionText={subSection.subSectionText}
              />
            );
          case 'experience':
            return (
              <ExperienceSection
                key={`${subSection.subSectionTitle}-${subSection.subSectionText}`}
                subSectionIcon={subSection.subSectionIcon}
                subSectionTitle={subSection.subSectionTitle}
                subSectionTitles={subSection.subSectionTitles}
                subSectionTexts={subSection.subSectionTexts}
                yearsWorked={subSection.yearsWorked}
                workTitle={subSection.workTitle}
                location={subSection.location}
                techStack={subSection.techStack}
                imageGrid={subSection.imageGrid}
              />
            );
          case 'personal':
            return (
              <PersonalProjectSection
                key={`${subSection.title}-${subSection.description}`}
                project={subSection}
              />
            );
        }
      })}
    </SectionWrapper>
  );
};

Section.propTypes = {
  SectionHeaderIcon: PropTypes.func,
  sectionHeader: PropTypes.string,
  type: PropTypes.string,
  subSections: PropTypes.array,
};

export default Section;

import React from 'react';
import { SectionWrapper } from './Section.Styles';
import SectionHeader from './SectionHeader';
import SubSection from './subSection/SubSection';
import ExperienceSection from './experienceSection/ExperienceSection';

const Section = ({ sectionHeader, SectionHeaderIcon, subSections = [] }) => (
  <SectionWrapper>
    <SectionHeader sectionHeader={sectionHeader} SectionHeaderIcon={SectionHeaderIcon} />
    {subSections.map((subSection) =>
      subSection.subSectionIcon ? (
        <ExperienceSection
          key={`${subSection.subSectionTitle}-${subSection.subSectionText}`}
          subSectionIcon={subSection.subSectionIcon}
          subSectionTitle={subSection.subSectionTitle}
          subSectionTexts={subSection.subSectionTexts}
          yearsWorked={subSection.yearsWorked}
          workTitle={subSection.workTitle}
        />
      ) : (
        <SubSection
          key={`${subSection.subSectionTitle}-${subSection.subSectionText}`}
          subSectionTitle={subSection.subSectionTitle}
          subSectionText={subSection.subSectionText}
        />
      )
    )}
  </SectionWrapper>
);

export default Section;

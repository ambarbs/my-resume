import React from "react";
import {SectionWrapper} from "./Section.Styles";
import SectionHeader from "./SectionHeader";
import SubSection from "./subSection/SubSection";

const Section = ({sectionHeader, SectionHeaderIcon, subSections = []}) => <SectionWrapper>
    <SectionHeader sectionHeader={sectionHeader} SectionHeaderIcon={SectionHeaderIcon}/>
    {subSections.map(subSection => <SubSection
        SubSectionIcon={subSection.subSectionIcon}
        subSectionTitle={subSection.subSectionTitle}
        subSectionText={subSection.subSectionText}
    />)}

</SectionWrapper>

export default Section;

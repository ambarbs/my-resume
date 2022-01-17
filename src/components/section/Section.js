import React from "react";
import {SectionWrapper} from "./Section.Styles";
import SectionHeader from "./SectionHeader";
import SubSection from "./subSection/SubSection";

const Section = ({sectionHeader, subSections = []}) => <SectionWrapper>
    <SectionHeader sectionHeader={sectionHeader}/>
    {subSections.map(subSection => <SubSection
        subSectionTitle={subSection.subSectionTitle}
        subSectionText={subSection.subSectionText}
    />)}

</SectionWrapper>

export default Section;

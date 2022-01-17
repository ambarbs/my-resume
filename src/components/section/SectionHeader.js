import React from "react";
import {SectionHeaderText, SectionHeaderWrapper} from "./Section.Styles";
import {AiOutlineMail} from "react-icons/ai";
import {GiSkills} from "react-icons/gi";

const SectionHeader = () => <SectionHeaderWrapper>
    <GiSkills size={50}/>
    <SectionHeaderText>Skills</SectionHeaderText>
</SectionHeaderWrapper>

export default SectionHeader

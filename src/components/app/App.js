import React from 'react';
import {AppWrapper} from "./App.styles";
import Header from "../header/Header";
import Section from "../section/Section";
import {contacts, sections} from "../constants";

function App() {
    return (
        <AppWrapper>
            <Header contacts={contacts}/>
            {sections.map(section => <Section
                key={section.header}
                sectionHeader={section.header}
                subSections={section.subSections}
            />)}
        </AppWrapper>
    );
}

export default App;

import React, { useState } from 'react';
import { AppWrapper } from './App.styles';
import Header from '../header/Header';
import Section from '../section/Section';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../theme/Global.Styles';
import { LightTheme, DarkTheme } from '../theme/Themes';
import ToggleButton from '../toggleButton/ToggleButton';
import { sections as sectionsUS, contacts as contactsUS } from '../data/cv_us';
import { sections as sectionsAU, contacts as contactsAU } from '../data/cv_au';

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = (isChecked = false) => {
    isChecked === true ? setTheme('dark') : setTheme('light');
  };

  let contacts = contactsAU;
  let sections = sectionsAU;
  if (window.location.search === '?v=cv') {
    contacts = contactsUS;
    sections = sectionsUS;
  }

  return (
    <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
      <>
        <GlobalStyles />
        <AppWrapper>
          <ToggleButton handleOnCheck={toggleTheme} />
          <Header contacts={contacts} />
          {sections.map((section) => (
            <Section
              key={section.header}
              sectionHeader={section.header}
              type={section.type}
              SectionHeaderIcon={section.headerIcon}
              subSections={section.subSections}
            />
          ))}
        </AppWrapper>
      </>
    </ThemeProvider>
  );
}

export default App;

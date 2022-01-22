import PropTypes from 'prop-types';
import React from 'react';
import { HeaderWrapper, NameWrapper } from './Header.styles';
import { ContactSectionWrapper } from './contact/Contact.styles';
import Contact from './contact/Contact';

const Header = ({ contacts = [] }) => (
  <HeaderWrapper>
    <NameWrapper>Ambar Bose</NameWrapper>
    <ContactSectionWrapper>
      {contacts.map((contact) => (
        <Contact
          key={`${contact.text}-${contact.link}`}
          Icon={contact.icon}
          text={contact.text}
          link={contact.link}
          isUrl={contact.isUrl}
          isEmail={contact.isEmail}
          hideOnWebPage={contact.hideOnWebPage}
        />
      ))}
    </ContactSectionWrapper>
  </HeaderWrapper>
);

export default Header;

Header.propTypes = {
  contacts: PropTypes.array,
};

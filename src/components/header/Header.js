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
          key={contact.text}
          Icon={contact.icon}
          text={contact.text}
          isUrl={contact.isUrl}
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

import {HeaderWrapper, NameWrapper} from "./Header.styles";
import {ContactSectionWrapper} from "./contact/Contact.styles";
import {AiOutlineMail} from "react-icons/ai";
import {GrLinkedin} from "react-icons/gr";
import {BsGithub} from "react-icons/bs";
import {FaNpm} from "react-icons/fa";
import Contact from "./contact/Contact";

const Header = () => <HeaderWrapper>
    <NameWrapper>Ambar Bose</NameWrapper>
    <ContactSectionWrapper>
            <Contact
                Icon={AiOutlineMail}
                text='ambar.bs@gmail.com'
            />
            <Contact
                Icon={GrLinkedin}
                text='https://www.linkedin.com/in/ambarbose/'
                isUrl
            />
            <Contact
                Icon={BsGithub}
                text='https://github.com/ambarbs'
                isUrl
            />
            <Contact
                Icon={FaNpm}
                text='https://www.npmjs.com/~ambar_bs'
                isUrl
            />
    </ContactSectionWrapper>
</HeaderWrapper>

export default Header;

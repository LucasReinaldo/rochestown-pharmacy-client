import { useState } from 'react';

import { FaPhoneAlt } from 'react-icons/fa';

import logoImg from '../../assets/logo.png';

import {
  Container,
  SizeContainer,
  ImageContainer,
  Image,
  NavContainer,
  ContactContainer,
  MenuSection,
} from './styles';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <SizeContainer>
        <ImageContainer>
          <Image src={logoImg} alt="Rochestown Pharmacy" />
        </ImageContainer>
        <NavContainer>
          <ContactContainer>
            <div>
              <FaPhoneAlt size={28} />
            </div>
            <span>+353 21 489 3639</span>
          </ContactContainer>
          <MenuSection open={open}>
            <button
              type="button"
              className="menu-toggle"
              onClick={() => setOpen(!open)}
            >
              <div className="one" />
              <div className="two" />
              <div className="three" />
            </button>
            <button type="button" onClick={() => setOpen(!open)}>
              <nav>
                <ul>
                  <li>
                    <a href="#home">home</a>
                  </li>
                  <li>
                    <a href="#about">about</a>
                  </li>
                  <li>
                    <a href="#services">services</a>
                  </li>
                  <li>
                    <a href="#gallery">gallery</a>
                  </li>
                  <li>
                    <a href="#contact">contact</a>
                  </li>
                </ul>
              </nav>
            </button>
          </MenuSection>
        </NavContainer>
      </SizeContainer>
    </Container>
  );
};

export default Navbar;

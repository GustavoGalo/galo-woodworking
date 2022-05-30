import React from 'react';
import { Header, Heading, Nav, ContactButton, Section, TransparentButton } from './styles';

import SectionImage from './assets/section_image.jpg';

export const App: React.FC = () => {
  return (
    <>
      <Header>
        <Heading>Marcenaria Galo</Heading>
        <Nav>
          <ContactButton>CONTATO</ContactButton>
        </Nav>
      </Header>
      <Section src={SectionImage}>
        <TransparentButton>VER TRABALHOS</TransparentButton>
      </Section>
    </>
  );
};

export default App;

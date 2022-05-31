import React, { useState } from 'react';
import {
  Header,
  Heading,
  Nav,
  ContactButton,
  ImageSection,
  TransparentButton,
  Section,
  FlexDisplay,
  MinnorImage,
  LithHeading,
  CentedBox,
  Label,
  DisplayWrapper,
  LeftArea,
  RightArea,
  Image,
  Footer,
  ContrastLabel,
  BlackedSection,
  ContrastLithHeading,
  Form,
  SubmitButton,
} from './styles';

import SectionImage from './assets/section_image.jpg';
import { TextInput } from './components/TextInput';

export const App: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhonenumber] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');

  return (
    <>
      <Header>
        <Heading>MARCENARIA GALO</Heading>
        <Nav>
          <ContactButton>CONTATO</ContactButton>
        </Nav>
      </Header>
      <ImageSection src={SectionImage}>
        <TransparentButton>VER TRABALHOS</TransparentButton>
      </ImageSection>
      <Section>
        <CentedBox>
          <LithHeading>MÓVEIS PLANEJADOS</LithHeading>
        </CentedBox>
        <FlexDisplay>
          <MinnorImage src={SectionImage} />
          <MinnorImage src={SectionImage} />
          <MinnorImage src={SectionImage} />
        </FlexDisplay>
      </Section>
      <Section>
        <CentedBox>
          <LithHeading>TRABALHOS</LithHeading>
        </CentedBox>
        <CentedBox>
          <Label>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus, nulla at
            consectetur eleifend, mi turpis ultricies metus, nec varius ipsum metus quis ex. Aenean
            viverra nulla et aliquet gravida. Sed lacinia nisl eget maximus sollicitudin. Vestibulum
            molestie diam erat.
          </Label>
        </CentedBox>
        <DisplayWrapper>
          <LeftArea>
            <Image src={SectionImage} />
            <Image src={SectionImage} />
          </LeftArea>
          <RightArea>
            <Image src={SectionImage} />
          </RightArea>
        </DisplayWrapper>
      </Section>
      <BlackedSection>
        <ContrastLithHeading>SOLICITE ORÇAMENTO</ContrastLithHeading>
      </BlackedSection>
      <Section>
        <DisplayWrapper>
          <LeftArea>
            <Image src={SectionImage} />
          </LeftArea>
          <RightArea>
            <Form>
              <TextInput label='NOME' value={name} onValueChange={setName} />
              <TextInput label='E-MAIL' value={email} onValueChange={setEmail} />
              <TextInput label='TELEFONE' value={phoneNumber} onValueChange={setPhonenumber} />
              <TextInput label='ENDEREÇO' value={address} onValueChange={setAddress} />
              <TextInput label='DESCRIÇÃO' value={description} onValueChange={setDescription} />
              <SubmitButton onClick={(event) => event.preventDefault()}>SOLICITAR</SubmitButton>
            </Form>
          </RightArea>
        </DisplayWrapper>
      </Section>
      <Footer>
        <CentedBox>
          <ContrastLabel>SOROCABA, SP - MARCENARIA GALO</ContrastLabel>
        </CentedBox>
      </Footer>
    </>
  );
};

export default App;

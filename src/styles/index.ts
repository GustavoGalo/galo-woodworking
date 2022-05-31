import styled from 'styled-components';

export const Header = styled.header`
  height: 4rem;
  background-color: #000;
  color: #fff;

  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Heading = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 0.2rem;
`;

export const Nav = styled.div``;

export const ContactButton = styled.button`
  padding: 0.75rem 1.25rem;
  border: 2px solid #fff;

  font-weight: 300;
  letter-spacing: 0.125rem;

  color: #fff;
  background-color: #000;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

interface ISectionProps {
  src: string;
}

export const ImageSection = styled.section<ISectionProps>`
  height: 450px;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.src});

  filter: grayscale(0.5);

  display: grid;
  place-content: center;
`;

export const TransparentButton = styled(ContactButton)`
  background-color: transparent;
  transform: scale(1.125);
`;

export const Section = styled.section`
  max-width: 1024px;
  margin: 0 auto;
`;

interface IImageProps {
  src: string;
}

export const FlexDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const MinnorImage = styled.img<IImageProps>`
  width: 300px;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.src});
`;

export const CentedBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 5rem 0;
`;

export const LithHeading = styled.h1`
  font-size: 2rem;
  font-weight: 200;
  letter-spacing: 0.2rem;
`;

export const Label = styled.p`
  color: #333;
  font-weight: 300;
  letter-spacing: 0.05rem;
  text-align: center;
`;

export const DisplayWrapper = styled.div`
  display: flex;
  margin-bottom: 5rem;

  gap: 1rem;
  padding: 1rem;
`;

export const LeftArea = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;

  gap: 1rem;
`;

export const RightArea = styled.div`
  width: 50%;
`;

export const Image = styled.img<IImageProps>`
  width: 100%;
  height: 100%;

  object-fit: cover;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.src});
`;

export const Footer = styled.footer`
  height: 200px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #000;
`;

export const ContrastLabel = styled(Label)`
  color: #fff;
`;

export const BlackedSection = styled.section`
  background-color: #000;
  height: 300px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 5rem;
`;

export const ContrastLithHeading = styled(LithHeading)`
  color: #fff;
`;

export const Form = styled.form`
  height: 100%;
  padding: 1rem 1rem 2rem;

  background-color: #000;
  gap: 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SubmitButton = styled.button`
  margin-top: 1rem;
  border: 1px solid #fff;
  background-color: #fff;

  padding: 0.75rem 0;
  cursor: pointer;

  font-weight: bold;
  letter-spacing: 0.05rem;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

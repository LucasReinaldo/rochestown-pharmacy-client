import Button from '../Button';

import {
  Container,
  SizeContainer,
  AboutContainer,
  Title,
  Description,
} from './styles';

const About = () => {
  return (
    <Container id="about">
      <SizeContainer>
        <AboutContainer>
          <Title>About</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            convallis urna est, id fringilla diam posuere a. Integer ut tortor
            metus. Mauris fringilla scelerisque enim, et bibendum lorem sodales
            vitae. Pellentesque porttitor bibendum tortor vitae dignissim.
            Phasellus dapibus consequat urna a congue. Morbi elementum metus
            libero, non aliquam eros laoreet at. Vestibulum congue orci et urna
            mattis scelerisque vitae sed lorem. Fusce hendrerit ullamcorper
            lacinia. Morbi semper elit odio, quis cursus arcu lobortis nec.
          </Description>
          <Button bgColor="#1B811B">Read More</Button>
        </AboutContainer>
      </SizeContainer>
    </Container>
  );
};

export default About;

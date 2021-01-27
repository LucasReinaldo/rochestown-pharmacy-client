import Button from '../Button';

import { Container, SizeContainer } from './styles';

const Hero = () => {
  return (
    <Container>
      <SizeContainer>
        <div>
          <h1>LOREM IPSUM DUMMY TEXT</h1>
          <h3>LOREM IPSUM DUMMY TEXT</h3>
          <Button bgColor="#3D2439">Read More</Button>
        </div>
      </SizeContainer>
    </Container>
  );
};

export default Hero;

import {
  Container,
  SizeContainer,
  OpeningHoursContainer,
  Title,
  BannerContainer,
  Banner,
  Day,
  Time,
} from './styles';

const OpeningHours = () => {
  return (
    <Container>
      <SizeContainer>
        <OpeningHoursContainer>
          <Title>Opening Hours</Title>
          <BannerContainer>
            <Banner>
              <Day>Weekdays</Day>
              <Time>09:00 AM - 08:00 PM</Time>
            </Banner>
            <Banner>
              <Day>Saturday</Day>
              <Time>09:00 AM - 06:00 PM</Time>
            </Banner>
            <Banner>
              <Day>Sunday</Day>
              <Time>11:00 AM - 02:00 PM</Time>
            </Banner>
          </BannerContainer>
        </OpeningHoursContainer>
      </SizeContainer>
    </Container>
  );
};

export default OpeningHours;

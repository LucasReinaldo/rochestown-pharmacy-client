import { useRef, useState } from 'react';
import { Form } from '@unform/web';

import api from '../../services/api';

import Button from '../Button';
import Input from '../Input';

import {
  Container,
  Footer,
  SizeContainer,
  ContactContainer,
  ContactFormContainer,
  VerticalBar,
  Title,
  InputContainer,
  ButtonContainer,
  ContactInfoContainer,
  Wrapper,
  ContactInfo,
  ContactType,
  ContactData,
} from './styles';

const ContactUs = () => {
  const formRef = useRef(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (data, { reset }) => {
    api.post('subscribe', data);
    setMessage('Subscription success!');

    reset();
  };

  return (
    <Container id="contact">
      <SizeContainer>
        <ContactContainer>
          <ContactFormContainer>
            <InputContainer>
              <Form ref={formRef} onSubmit={handleSubmit}>
                <Title>Contact us</Title>

                <Input name="name" placeholder="Name" required />
                <Input type="tel" name="phone" placeholder="Phone" required />
                <Input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  required
                />

                <ButtonContainer>
                  <Button bgColor="#FA9900">Submit</Button>
                  {message && <p>{message}</p>}
                </ButtonContainer>
              </Form>
            </InputContainer>
          </ContactFormContainer>
          <VerticalBar />
          <ContactInfoContainer>
            <Title>Contact information</Title>
            <Wrapper>
              <ContactInfo>
                <ContactType>Email</ContactType>
                <ContactData>Rochestownpharmacy@gmail.com</ContactData>
              </ContactInfo>
              <ContactInfo>
                <ContactType>Phone</ContactType>
                <ContactData>(021) 489 3639</ContactData>
              </ContactInfo>
              <ContactInfo>
                <ContactType>Address</ContactType>
                <ContactData>
                  Rochestown Road, Monfieldstown, Rochestown, Cork
                </ContactData>
              </ContactInfo>
            </Wrapper>
          </ContactInfoContainer>
        </ContactContainer>
      </SizeContainer>
      <Footer>Copyright &copy; 2021. All Rights Reserved</Footer>
    </Container>
  );
};

export default ContactUs;

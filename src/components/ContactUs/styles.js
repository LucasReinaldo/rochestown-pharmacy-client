import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  background-color: #333333;
`;

export const SizeContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 90%;
`;

export const ContactContainer = styled.div`
  display: flex;
  padding: 80px 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContactFormContainer = styled.div`
  text-align: center;
  display: inline-block;
  width: 100%;
`;

export const VerticalBar = styled.div`
  display: flex;
  margin: 0 48px;
  border: 2px solid #656565;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 700;
  color: var(--primary-white);
  margin-bottom: 40px;

  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 24px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  @media (max-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 12px;

  > p {
    color: var(--primary-white);
  }
`;

export const ContactInfoContainer = styled.div`
  width: 100%;
`;

export const Wrapper = styled.div`
  display: block;

  > div + div {
    margin-top: 16px;
  }
`;

export const ContactInfo = styled.div`
  color: var(--primary-white);
  line-height: 1.4;
  font-size: 1.8rem;
  text-transform: capitalize;
`;

export const ContactType = styled.p`
  font-weight: 600;
`;

export const ContactData = styled.p``;

export const Footer = styled.footer`
  background-color: #000000;
  text-transform: capitalize;
  color: var(--primary-white);
  text-align: center;
  padding: 20px;
  font-size: 1.8rem;
  font-weight: 600;
`;

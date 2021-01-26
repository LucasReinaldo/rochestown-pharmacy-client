import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  margin: 80px 0;
`;

export const SizeContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 90%;
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  color: var(--secondary-green);
`;

export const Description = styled.p`
  color: #9a9a9a;
  text-align: center;
  padding: 48px 0;
  line-height: 1.6;
  white-space: 2px;
  font-weight: 600;
  width: 90%;
`;

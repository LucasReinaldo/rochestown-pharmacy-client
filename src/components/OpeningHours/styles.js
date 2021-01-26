import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  background-color: var(--primary-green);
`;

export const SizeContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 90%;
`;

export const OpeningHoursContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
`;

export const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  color: var(--primary-white);
`;

export const BannerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Banner = styled.div`
  display: block;
  background-color: var(--primary-white);
  margin: 40px 12px 0;
  padding: 18px 32px;
  font-size: 1.8rem;
  text-align: center;
  flex: 1 0 auto;
  flex-shrink: 0;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  will-change: transform;

  :hover {
    transform: translateY(-4px);
  }

  @media (max-width: 560px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Day = styled.span`
  font-weight: 700;
  text-transform: capitalize;
  color: #9b9b9b;
  margin-right: 4px;

  @media (max-width: 560px) {
    text-transform: uppercase;
  }
`;

export const Time = styled.span`
  font-weight: 500;
  text-transform: uppercase;
  color: #9b9b9b;
`;

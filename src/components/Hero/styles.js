import styled from 'styled-components';

import bgImage from '../../assets/bgImage.png';

export const Container = styled.div`
  display: block;
  height: 50%;
  position: relative;

  display: flex;
  align-items: center;

  &::before {
    content: '';
    background: url(${bgImage});
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    opacity: 0.6;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
    filter: grayscale(0.3);
  }
`;

export const SizeContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 90%;

  display: flex;
  justify-content: flex-end;

  > div {
    display: inline-block;
    flex-direction: column;
    text-align: end;
    max-width: 48rem;
    color: var(--primary-white);

    > h1 {
      font-size: 4.8rem;
      font-weight: 800;
    }

    > h3 {
      font-size: 2.8rem;
    }

    > button {
      margin-left: auto;
    }
  }
`;

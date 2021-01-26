import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  background-color: var(--primary-green);
`;

export const SizeContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 90%;
`;

export const SocialContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 4px 0 6px;

  svg {
    color: var(--primary-white);
    cursor: pointer;
  }
`;

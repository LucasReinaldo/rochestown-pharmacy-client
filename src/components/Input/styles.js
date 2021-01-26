import styled, { css } from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px 0;
  padding: 4px 8px;
  width: 100%;
  max-width: 48rem;
  border: 2px solid transparent;
  transition: color, border-color 0.2s;
  background: #fff;
  will-change: background color;

  ${(props) =>
    props.isFocused &&
    css`
      color: var(--primary-yellow);
      border-color: var(--primary-yellow);
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    padding-left: 6px;
    height: 32px;
    width: 100%;
    max-width: 48rem;
  }
`;

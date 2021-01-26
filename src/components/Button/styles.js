import styled from 'styled-components';

export const Container = styled.button`
  align-items: center;
  background: ${(props) => (props.bgColor ? props.bgColor : 'whitesmoke')};
  border: none;
  color: ${(props) => (props.bgColor ? 'var(--primary-white)' : 'whitesmoke')};
  display: flex;
  font-weight: 600;
  justify-content: center;
  margin: 12px 0;
  outline: none;
  padding: 10px 32px;
  text-align: center;
  transition: all 0.2s;
  will-change: opacity background color;

  &:hover {
    opacity: 0.9;
  }
`;

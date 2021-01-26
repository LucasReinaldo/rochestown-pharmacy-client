import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: block;
`;

export const SizeContainer = styled.div`
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
  width: 90%;
`;

export const ImageContainer = styled.div``;

export const Image = styled.img`
  @media (max-width: 768px) {
    width: 60%;
  }
`;

export const NavContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
  margin-left: auto;
`;

export const ContactContainer = styled.div`
  display: flex;
  padding-bottom: 4px;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  will-change: border-bottom;

  :hover {
    border-bottom: 2px solid var(--primary-red);
  }

  > div {
    display: flex;
    background-color: var(--primary-red);
    border-radius: 50%;
    padding: 2px;
    margin-right: 16px;

    svg {
      color: #fdfced;
      padding: 4px;
    }
  }

  span {
    font-size: 2.8rem;
    font-weight: 700;
    color: var(--primary-red);
    letter-spacing: 1.6px;
  }

  @media (max-width: 560px) {
    display: none;
  }
`;

export const MenuSection = styled.div`
  display: inline-flex;

  > button {
    background: transparent;
    border: none;
  }

  ul {
    display: inline-flex;
    list-style: none;
    color: #a6a8a6;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.5rem;

    li {
      a {
        cursor: pointer;
        padding: 4px 8px;
        transition: all 0.2s ease-in-out;
        will-change: background-color color;
      }

      a:hover {
        background-color: #939593;
        color: var(--primary-white);
      }
    }

    li + li {
      margin-left: 4px;
    }

    li + li::before {
      content: '';
      display: inline-block;
      width: 2px;
      height: 12px;
      margin-right: 4px;
      background-color: #a6a8a6;
      flex-wrap: wrap;
    }
  }

  @media (max-width: 768px) {
    nav {
      display: none;
    }

    nav ul li + li::before {
      content: '';
      display: none;
    }

    .one,
    .two,
    .three {
      background-color: #000;
      height: 5px;
      width: 100%;
      margin: 6px auto;
      transition-duration: 0.3s;
    }

    .menu-toggle {
      width: 40px;
      height: 30px;
      margin-right: 20px;
    }

    /* menu fullscreen */
    ${(props) =>
      props.open &&
      css`
        & {
          position: absolute;
          top: 0;
          left: 0;

          width: 100%;
          height: 100%;

          background-color: var(--primary-green);

          z-index: 100;

          display: flex;
          justify-content: center;
          align-items: center;
        }

        & nav {
          display: block;
        }

        & .menu-toggle {
          position: absolute;
          right: 25px;
          top: 15px;
        }

        & .menu-toggle .one {
          transform: rotate(45deg) translate(7px, 7px);
          background-color: var(--primary-white);
        }

        & .menu-toggle .two {
          opacity: 0;
        }

        & .menu-toggle .three {
          transform: rotate(-45deg) translate(8px, -9px);
          background-color: var(--primary-white);
        }

        & nav ul {
          text-align: center;
          display: block;
        }

        & nav ul a {
          transition-duration: 0.5s;
          font-size: 4rem;
          line-height: 4rem;
          display: block;
          color: var(--primary-white);
          margin: 20% 0;
          padding: 16px 24px;

          :hover {
            background-color: var(--primary-grey);
          }
        }
      `}
  }
`;

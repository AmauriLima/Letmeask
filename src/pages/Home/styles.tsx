import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const Aside = styled.aside`
  flex: 7;
  background: ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.white.pure};

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 120px 80px;

  img {
    max-width: 320px;
  }

  strong {
    font: 700 36px 'Poppins', sans-serif;
    line-height: 42px;
    margin-top: 16px;
  }

  p {
    font-size: 24px;
    line-height: 32px;
    margin-top: 16px;
    color: ${({ theme }) => theme.colors.white.background}
  }
`;

export const Main = styled.main`
  flex: 8;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  align-items: stretch;
  text-align: center;

  > img {
    align-self: center;
  }

  form {
    input {
      height: 50px;
      border-radius: 8px;
      padding: 0 16px;
      background: ${({ theme }) => theme.colors.white.pure};
      border: 1px solid ${({ theme }) => theme.colors.gray.medium};
    }

    button {
      margin-top: 16px;
    }

    button, input {
      width: 100%;
    }
  }
`;

export const CreateRoom = styled.button`
  margin-top: 64px;
  height: 50px;
  border-radius: 8px;
  font-size: 500;
  background: #ea4335;
  color: ${({ theme }) => theme.colors.white.pure};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 0;
  transition: filter 200ms ease-in;

  img {
    margin-right: 8px;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;

export const Separator = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray.medium};
  margin: 32px 0;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    flex: 1;
    height: 1px;
    background: ${({ theme }) => theme.colors.gray.medium};
    margin-right: 16px;
  }

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${({ theme }) => theme.colors.gray.medium};
    margin-left: 16px;
  }
`;

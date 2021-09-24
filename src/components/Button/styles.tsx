import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  margin-top: 64px;
  height: 50px;
  border-radius: 8px;
  font-size: 500;
  background: ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.white.pure};
  padding: 0 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 0;
  transition: filter 200ms ease-in;

  img {
    margin-right: 8px;
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`;

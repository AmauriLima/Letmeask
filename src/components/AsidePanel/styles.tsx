import styled from 'styled-components';

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

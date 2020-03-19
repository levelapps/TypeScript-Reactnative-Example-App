import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props): string => props.theme.background};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

import styled from 'styled-components/native';

export const TransparentButton = styled.View`
  display: flex;
  width: 100%;
  height: 100%;

  border-radius: 3;
  border-style: solid;
  border-width: 1;
  border-color: #e3e3e3;
  margin-bottom: 8;

  justify-content: center;
  align-items: center;
  background: rgba(235, 87, 87, 0.03);
  color: #333;
  opacity: 1;

  &:hover {
    opacity: 0.5;
  }
  &:active {
    opacity: 0.5;
  }
`;

export const WhiteButton = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 3;
  border-style: solid;
  border-width: 1;
  margin-bottom: 8;

  justify-content: center;
  align-items: center;
  opacity: 1;

  &:hover {
    opacity: 0.5;
  }
  &:active {
    opacity: 0.5;
  }
`;

export const StyledButton = styled.View`
  background-color: ${({ theme }): string => theme.btnPrimary};
  align-self: center;
  border-radius: 4px;
  border-width: 2px;
  width: 320px;
  height: 52px;
  border-color: ${({ theme }): string => theme.btnPrimary};

  align-items: center;
  justify-content: center;
`;

export const StyledButtonDisabled = styled(StyledButton)`
  background-color: ${({ theme }): string => theme.btnDisabled};
  border-color: rgb(200, 200, 200);
`;

export const StyledText = styled.Text`
  font-size: 14px;
  color: ${({ theme }): string => theme.btnPrimaryFont};
`;

export const StyledTextDisabled = styled(StyledText)`
  color: ${({ theme }): string => theme.textDisabled};
`;

export const StyledImage = styled.Image`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 16px;
`;

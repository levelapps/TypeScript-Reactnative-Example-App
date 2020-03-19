import React from 'react';
import {
  ActivityIndicator,
  ImageSourcePropType,
  ImageStyle,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {
  StyledButton,
  StyledButtonDisabled,
  StyledText,
  StyledTextDisabled,
  StyledImage,
} from './styles';

interface Props {
  testID?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
  style?: ViewStyle;
  disabledStyle?: ViewStyle;
  textStyle?: TextStyle;
  imgLeftSrc?: ImageSourcePropType;
  imgLeftStyle?: ImageStyle;
  indicatorColor?: string;
  activeOpacity?: number;
  text?: string;
}

function Button(props: Props): React.ReactElement {
  if (props.isDisabled) {
    return (
      <StyledButtonDisabled style={props.disabledStyle}>
        <StyledTextDisabled style={props.textStyle}>
          {props.text}
        </StyledTextDisabled>
      </StyledButtonDisabled>
    );
  }
  if (props.isLoading) {
    return (
      <StyledButton style={props.style}>
        <ActivityIndicator size="small" color={props.indicatorColor} />
      </StyledButton>
    );
  }
  return (
    <TouchableOpacity
      testID={props.testID}
      activeOpacity={props.activeOpacity}
      onPress={props.onClick}
    >
      <StyledButton style={props.style}>
        {props.imgLeftSrc ? (
          <StyledImage style={props.imgLeftStyle} source={props.imgLeftSrc} />
        ) : null}
        <StyledText style={props.textStyle}>{props.text}</StyledText>
      </StyledButton>
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  isLoading: false,
  isDisabled: false,
  indicatorColor: 'white',
  activeOpacity: 0.5,
};

export default Button;

import React from 'react';
import { View } from 'react-native';
import { useThemeContext } from '@dooboo-ui/native-theme';
import Button from '../../components/Button';
import { IC_MASK } from '../../utils/Icons';
import { RootStackNavigationProps } from '../../components/navigation/RootStackNavigator';
import { User } from '../../types';
import { getString } from '../../../STRINGS';
import { useAppContext } from '../../providers/AppProvider';
import { Container, ContentWrapper, ButtonWrapper, StyledText } from './styles';

interface Props {
  navigation: RootStackNavigationProps<'Intro'>;
}

function Intro(props: Props): React.ReactElement {
  let timer: number;
  const {
    state: { user },
    setUser,
  } = useAppContext();
  const { changeThemeType } = useThemeContext();
  const [isLoggingIn, setIsLoggingIn] = React.useState<boolean>(false);

  const onLogin = (): void => {
    setIsLoggingIn(true);
    timer = setTimeout(() => {
      const user: User = {
        displayName: 'David Pears',
        age: 42,
        job: 'Software Developer',
      };
      setUser(user);
      setIsLoggingIn(false);
      clearTimeout(timer);
    }, 1000);
  };

  return (
    <Container>
      <ContentWrapper>
        <StyledText
          style={{
            marginTop: 100,
          }}
        >
          {user ? user.displayName : ''}
        </StyledText>
        <StyledText>{user ? user.age : ''}</StyledText>
        <StyledText>{user ? user.job : ''}</StyledText>
      </ContentWrapper>
      <ButtonWrapper>
        <Button
          testID="btn-login"
          imgLeftSrc={IC_MASK}
          isLoading={isLoggingIn}
          onClick={(): void => onLogin()}
          text={getString('LOGIN')}
        />
        <View style={{ marginTop: 8 }} />
        <Button
          testID="btn-navigate"
          onClick={(): void =>
            props.navigation.navigate('Temp', {
              param: 'GO BACK',
            })
          }
          text={getString('NAVIGATE', { name: 'Temp' })}
        />
        <View style={{ marginTop: 8 }} />
        <Button
          testID="btn-theme"
          onClick={(): void => changeThemeType()}
          text={getString('CHANGE_THEME')}
        />
      </ButtonWrapper>
    </Container>
  );
}

export default Intro;

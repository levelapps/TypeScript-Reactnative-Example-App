import React from 'react';
import { RouteProp } from '@react-navigation/core';
import Button from '../../components/Button';
import {
  RootStackNavigationProps,
  RootStackParamList,
} from '../../components/navigation/RootStackNavigator';

import { Container } from './styles';

interface Props {
  navigation: RootStackNavigationProps<'Temp'>;
  route: RouteProp<RootStackParamList, 'Temp'>;
}

function Page(props: Props): React.ReactElement {
  const {
    route: {
      params: { param },
    },
    navigation,
  } = props;
  return (
    <Container>
      <Button
        testID="btn-back"
        onClick={(): void => navigation.goBack()}
        text={param}
        style={{
          backgroundColor: '#333333',
        }}
      />
    </Container>
  );
}

export default Page;

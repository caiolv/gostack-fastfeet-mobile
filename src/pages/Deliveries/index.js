import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Header,
  Courier,
  Avatar,
  Welcome,
  WelcomeText,
  CourierName,
} from './styles';

export default function Deliveries() {
  const courier = useSelector((state) => state.user.profile);

  function handleLogout() {}

  return (
    <Container>
      <Header>
        <Courier>
          <Avatar />
          <Welcome>
            <WelcomeText>Bem vindo de volta,</WelcomeText>
            <CourierName>Lorem Ipsum</CourierName>
          </Welcome>
        </Courier>
        <Icon
          onPress={handleLogout}
          name="exit-to-app"
          color="#E74040"
          size={25}
        />
      </Header>
    </Container>
  );
}

Deliveries.navigationOptions = {
  tabBarLabel: 'Entregas',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="reorder" size={20} color={tintColor} />
  ),
};

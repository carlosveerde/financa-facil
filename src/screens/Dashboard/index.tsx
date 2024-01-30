import React from "react";
import {Feather} from '@expo/vector-icons'
import { HighlightCard } from "../../components/HighlightCard";
import { 
  Container, 
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UserWrapper,
  Icon,
  HighlightCards
 } from "./style";


export function Dashboard() {
  return (
    <Container>
      <Header>
      <UserWrapper>
        <UserInfo>
          <Photo source={{uri: 'https://avatars.githubusercontent.com/u/131483292?v=4'}}/>
          <User>
            <UserGreeting>Olá,</UserGreeting>
            <UserName>Carlos!</UserName>
          </User>
        </UserInfo>
        <Icon name="power" />
      </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard/>
        <HighlightCard/>
        <HighlightCard/>
      </HighlightCards>
    </Container>
  );
}

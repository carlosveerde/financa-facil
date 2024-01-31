import React from "react";
import {Feather} from '@expo/vector-icons'
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard } from "../../components/TransactionCard";
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
  HighlightCards,
  Transactions,
  Title,
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
        <HighlightCard 
        type="up"
        amount="R$ 17.400,00" 
        title="Entradas" 
        lastTransaction="Última entrada dia 13 de abril" 
        />
        <HighlightCard 
        type="down"
        amount="R$ 1.259,00" 
        title="Saídas" 
        lastTransaction="Última saída dia 03 de abril" 
        />
        <HighlightCard 
        type="total"
        amount="R$ 16.141,00" 
        title="Total" 
        lastTransaction="01 à 16 de abril" 
        />
      </HighlightCards>
      <Transactions>
        <Title>Listagem</Title>
        <TransactionCard />
      </Transactions>
    </Container>
  );
}

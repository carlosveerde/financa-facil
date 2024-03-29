import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize'
import {Feather} from '@expo/vector-icons'

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme})=>theme.colors.background};
    `;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px;
    background-color: ${({theme}) => theme.colors.primary};
    `;

export const UserWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;    
    padding: 0 24px;
    margin-top: ${RFValue(42)}px;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Photo = styled.Image`
    background-color: blue;
    border-radius: 48px;
    height: ${RFValue(48)}px;
    width: ${RFValue(48)}px;
    align-items: center;
    justify-content: center;
`;

export const User = styled.View`
    margin-left: 17px;
`;

export const UserGreeting = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color: ${({theme}) => theme.colors.shape};
    margin-bottom: -5px;
    
`;

export const UserName = styled.Text`
    font-family: ${({theme}) => theme.fonts.bold};
    font-size: ${RFValue(18)}px;
    color: ${({theme}) => theme.colors.shape};
`;

export const Icon = styled(Feather)`
    color: ${({theme}) => theme.colors.secondary};
    font-size: ${RFValue(24)}px;
`;

export const HighlightCards = styled.ScrollView.attrs({

    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {paddingHorizontal: 24}
})`
    width: 100%;
    position: absolute;
    margin-top: ${RFValue(130)}px;
`;

export const Transactions = styled.View`
    flex: 1%;
    padding: 0 24px;
    margin-top: ${RFPercentage(12)}px;
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    margin-bottom: 16px;
`;
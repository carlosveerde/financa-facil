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
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    `;

export const UserWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;    
    padding: 0 24px;
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
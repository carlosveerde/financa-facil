import styled, {css} from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import {Feather} from "@expo/vector-icons"

interface TypeProps {
    type: 'up' | 'down' | 'total',
}


export const Container = styled.View<TypeProps>`
    width: ${RFValue(300)}px;
    background-color: ${({theme, type}) => 
    type === 'total' ? theme.colors.secondary : theme.colors.shape};
    padding: 19px 23px;
    padding-bottom: ${RFValue(42)}px;
    border-radius: 5px;
    margin-right:16px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.Text<TypeProps>`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({theme, type}) => 
    type === 'total' ? theme.colors.shape : theme.colors.title};
`;

export const Icon = styled(Feather)<TypeProps>`
    color: ${({theme}) => theme.colors.success};
    font-size: ${RFValue(40)}px;

    ${(props) => props.type === 'up' && css`
        color: ${({theme}) => theme.colors.success};
    `};
    ${(props) => props.type === 'down' && css`
        color: ${({theme}) => theme.colors.attention};
    `};
    ${(props) => props.type === 'total' && css`
        color: ${({theme}) => theme.colors.shape};
    `};
`;

export const Footer = styled.View`
    padding-top: ${RFValue(35)}px;
`;

export const Amount = styled.Text<TypeProps>`
    font-family: ${({theme}) => theme.fonts.medium};
    font-size: ${RFValue(32)}px;
    color: ${({theme, type}) => 
    type === 'total' ? theme.colors.shape : theme.colors.title};
`;

export const LastTransaction = styled.Text<TypeProps>`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    color: ${({theme, type}) => 
    type === 'total' ? theme.colors.shape : theme.colors.text};
`;

import styled from 'styled-components/native';

interface ContentProps {
    top: number;
}

interface InputProps {
    isFocused: boolean;
}

export const Container = styled.View`
    width: 100%;
    height: 173px;

    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Content = styled.View<ContentProps>`
    top: ${({ top }) => top}px;
`;

export const Row = styled.View`
    top: 56px;

    flex-direction: row;
`;

export const Logo = styled.Image`
    top: 24px;
    width: 110.34px;
    height: 32px;

    align-self: center;
    justify-content: center;
`;

export const Input = styled.TextInput.attrs<InputProps>(({ theme, isFocused }) => ({
    placeholderTextColor: theme.COLORS.GRAY_300,
    borderColor: isFocused ? theme.COLORS.PURPLE_DARK : theme.COLORS.GRAY_500,
}))<InputProps>`
    width: 271px;
    height: 53px;
    border-radius: 6px;
    padding: 0 16px;
    border-width: 1px;


    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const Button = styled.TouchableOpacity`
    width: 52px;
    height: 52px;
    margin-left: 4px;
    border-radius: 6px;

    align-items: center;
    justify-content: center;    

    background-color: ${({ theme }) => theme.COLORS.BLUE_DARK};
`;

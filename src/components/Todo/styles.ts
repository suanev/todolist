import styled from 'styled-components/native';

interface DescriptionProps {
    checked: boolean;
}

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    top: 71px; 
    width: 327px;
    margin: 0 24px;
    border-width: 1px;
    border-radius: 8px;
    padding: 12px 16px;
    margin-bottom: 8px;

    border-color: ${props => props.theme.COLORS.GRAY_400};
    background-color: ${props => props.theme.COLORS.GRAY_500};
`;

export const Content = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Description = styled.Text<DescriptionProps>`
    padding-left: 8px;

    text-decoration-line: ${props => props.checked ? 'line-through' : 'none'};
    color: ${props => props.checked ? props.theme.COLORS.GRAY_300 : props.theme.COLORS.WHITE};

    font-size: ${props => props.theme.FONT_SIZE.SM}px;
`;

export const DeleteButton = styled.TouchableOpacity`
    width: 32px;
    height: 32px;
`;

export const DeleteIcon = styled.Image`
    width: 32px;
    height: 32px;
`;

export const CheckButton = styled.TouchableOpacity`
    width: 32px;
    height: 32px;
`;

export const CheckIcon = styled.Image`
    width: 32px;
    height: 32px;
`;

import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
`;

export const Content = styled.View``;

export const StatusContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    margin: 10px 0;
    width: 100%;
    top: 71px;
`;

export const StatusItem = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const CreatedText = styled.Text`
    color: #4EA8DE;
    font-weight: bold;
    margin-right: 8px;
`;

export const CompletedText = styled.Text`
    color: #8284FA;
    font-weight: bold;
    margin-right: 8px;
`;

export const Counter = styled.View`
    background-color: #333;
    border-radius: 12px;
    padding: 2px 8px;
`;

export const CounterText = styled.Text`
    color: #FFF;
    font-weight: bold;
`;

export const Divider = styled.View`
    height: 1px;
    background-color: #333;
    margin: 0 20px 10px;
    width: 100%;
    top: 71px;
`;

export const EmptyContainer = styled.View`
    top: 119px;
    justify-content: center;
    align-items: center;
`;

export const EmptyImage = styled.Image`
    width: 56px;
    height: 56px;
    margin-bottom: 16px;
`;

export const EmptyTextBold = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-weight: bold;
`;

export const EmptyText = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

import React from 'react';

import { Container, Content, DeleteButton, DeleteIcon, Description, CheckButton, CheckIcon } from './styles';
import deleteIcon from '../../assets/img/trash.png';
import uncheckedIcon from '../../assets/img/unchecked.png';
import checkedIcon from '../../assets/img/checked.png';

interface IProps {
    text: string;
    checked: boolean;
    onToggle: () => void;
    onRemove: () => void;
}

const Todo = ({ text, checked, onToggle, onRemove }: IProps) => (
    <Container>
        <Content>
            <CheckButton onPress={onToggle}>
                <CheckIcon source={checked ? checkedIcon : uncheckedIcon} />
            </CheckButton>
            <Description checked={checked}>{text}</Description>
        </Content>

        <DeleteButton onPress={onRemove}>
            <DeleteIcon source={deleteIcon} />
        </DeleteButton>
    </Container>
);


export default Todo;

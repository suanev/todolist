import React, { useState } from 'react';
import { Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import logo from '../../assets/img/Logo.png';
import plus from '../../assets/img/plus.png';
import { Button, Container, Content, Input, Logo, Row } from './styles';

interface IProps {
  text: string;
  addTodo: () => void;
  onChangeText: (text: string) => void;
}

const Header = ({ text, addTodo, onChangeText }:IProps) => {
  const { top } = useSafeAreaInsets();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container>
      <Content top={top}>
        <Logo source={logo} />

        <Row>
          <Input 
            placeholder='Adicione uma nova tarefa'      
            onChangeText={onChangeText}
            value={text}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            isFocused={isFocused}
          />
          <Button onPress={addTodo}>
              <Image source={plus} />
          </Button>
        </Row>
      </Content>
    </Container>
  );
}

export default Header;

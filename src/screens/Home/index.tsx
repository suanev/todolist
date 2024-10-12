import React, { useCallback, useMemo, useState } from 'react';
import { Alert, FlatList } from 'react-native';

import emptyIcon from '../../assets/img/clipboard.png';
import Header from '../../components/Header';
import Todo from '../../components/Todo';
import { 
  Container, Content, StatusContainer, StatusItem, 
  CreatedText, CompletedText, Counter, CounterText, 
  Divider, EmptyContainer, EmptyImage, EmptyTextBold, EmptyText 
} from './styles';

interface TodoItem {
  id: number;
  text: string;
  checked: boolean;
}

const Home = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [todoText, setTodoText] = useState('');

  const handleAddTodo = useCallback(() => {
    if (!todoText.trim()) {
      return Alert.alert("Texto vazio", "Por favor, digite uma tarefa.");
    }

    if (todos.some(todo => todo.text.trim().toLowerCase() === todoText.trim().toLowerCase())) {
      return Alert.alert("Tarefa já existe", "Já existe essa tarefa na sua lista.");
    }

    setTodos(prevState => [...prevState, { id: Date.now(), text: todoText, checked: false }]);
    setTodoText('');
  }, [todoText, todos]);

  const handleRemoveTodo = useCallback((id: number) => {
    Alert.alert("Remover", "Remover a tarefa?", [
      {
        text: 'Sim',
        onPress: () => setTodos(prevState => prevState.filter(todo => todo.id !== id))
      },
      { text: 'Não', style: 'cancel' }
    ]);
  }, []);

  const toggleTodoChecked = useCallback((id: number) => {
    setTodos(prevState =>
      prevState.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }, []);

  const completedCount = useMemo(
    () => todos.filter(todo => todo.checked).length,
    [todos]
  );

  return (
    <Container>
      <Header text={todoText} addTodo={handleAddTodo} onChangeText={setTodoText} />

      <StatusContainer>
        <StatusItem>
          <CreatedText>Criadas</CreatedText>
          <Counter><CounterText>{todos.length}</CounterText></Counter>
        </StatusItem>
        <StatusItem>
          <CompletedText>Concluídas</CompletedText>
          <Counter><CounterText>{completedCount}</CounterText></Counter>
        </StatusItem>
      </StatusContainer>
      <Divider />

      <Content>
        <FlatList 
          data={todos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Todo
              text={item.text}
              checked={item.checked}
              onToggle={() => toggleTodoChecked(item.id)}
              onRemove={() => handleRemoveTodo(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <EmptyContainer>
              <EmptyImage source={emptyIcon} />
              <EmptyTextBold>Você ainda não tem tarefas cadastradas</EmptyTextBold>
              <EmptyText>Crie tarefas e organize seus itens a fazer</EmptyText>
            </EmptyContainer>
          )}
        />
      </Content>
    </Container>
  );
}

export default Home;

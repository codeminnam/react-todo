import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from '../TodoContext';

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`;

function TodoList() {
    const state = useTodoState();
    console.log(state);
    return (
        <TodoListBlock>
            <TodoItem text="공부 많이 하기" done={true} />
            <TodoItem text="버그 픽스" done={false} />
            <TodoItem text="규칙적인 생활 하기" done={false} />
            <TodoItem text="강아지와 산책하기" done={false} />
        </TodoListBlock>
    );
}

export default TodoList;
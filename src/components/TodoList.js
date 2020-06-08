import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`;

function TodoList() {
    return (
        <TodoListBlock>
            <TodoItem text="공부 많이 하기" done={true} />
            <TodoItem text="다이어트" done={false} />
            <TodoItem text="규칙적인 생활 하기" done={false} />
            <TodoItem text="오리랑 산책하기" done={false} />
        </TodoListBlock>
    );
}

export default TodoList;
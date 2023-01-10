import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {
  render() {
    //接收 父组件传来的todos
    const { todos } = this.props
    return (
      <div>
        <ul className="todo-main">
          {todos.map((todo) => {
            return (
              <Item
                key={todo.id}
                // id={todo.id}
                // name={todo.name}
                // done={todo.done}
                //一个一个传递不现实 进行批量传递
                {...todo}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}

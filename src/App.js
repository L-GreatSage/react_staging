//创建外壳组件
import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {


  //初始话状态
  state = {
    todos: [
      {
        id: '001',
        name: '吃饭',
        done: true //若为真 吃饭这事已经完成
      },
      {
        id: '002',
        name: '睡觉',
        done: true,
      },
      {
        id: '003',
        name: '打代码',
        done: false
      },
      {
        id: '004',
        name: '逛街',
        done: true
      }
    ]
  }

  //addTodo用于添加一个对象，接收的参数是todo对象
  addTodo = (todoObj) => {
    //获取原来的todo
    const { todos } = this.state
    //追加一个todo
    const newTodos = [todoObj, ...todos]
    //更新状态
    this.setState({
      todos: newTodos
    })
  }


  render () {
    return (

      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={this.state.todos} />
          <Footer />
        </div>
      </div>

    )
  }
}

import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import './index.css'
export default class Header extends Component {
  //键盘按完之后抬起的事件 的回调函数
  handleKeyUp = (event) => {
    const { keyCode, target } = event
    //keyCode判断键盘是否输入了回车 回车的code值是13
    if (keyCode !== 13) return
    //判断不能为空
    if (target.value.trim() === '') {
      alert('输入不能为空')
      return
    }
    //获取输入框的值
    console.log(target.value)
    //准备好一个todo对象传过去
    const todoObj = { id: nanoid(), name: target.value, done: false }
    //将todoObj传给App
    this.props.addTodo(todoObj)
    //清空输入
    target.value = ''
  }

  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
          onKeyUp={this.handleKeyUp}
        />
      </div>
    )
  }
}

import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  state = { mouse: false }

  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag })
    }
  }

  //List传了数据 那么Item接收
  render() {
    //解构赋值 接收
    const { name, done } = this.props
    const { mouse } = this.state
    return (
      <div>
        <li
          //样式
          style={{ backgroundColor: this.state.mouse ? '#ddd' : 'white' }}
          //鼠标离开事件
          onMouseLeave={this.handleMouse(false)}
          //鼠标移入事件
          onMouseEnter={this.handleMouse(true)}>
          <label>
            {/* defaultChecked可以改变的 */}
            <input type="checkbox" defaultChecked={done} />
            <span>{name}</span>
          </label>
          <button
            className="btn btn-danger"
            style={{ display: mouse ? 'block' : 'none' }}>
            删除
          </button>
        </li>
      </div>
    )
  }
}

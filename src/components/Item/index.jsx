import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  //List传了数据 那么Item接收
  render() {
    //解构赋值 接收
    const { name, done } = this.props
    return (
      <div>
        <li>
          <label>
            {/* defaultChecked可以改变的 */}
            <input type="checkbox" defaultChecked={done} />
            <span>{name}</span>
          </label>
          <button className="btn btn-danger" style={{ display: 'none' }}>
            删除
          </button>
        </li>
      </div>
    )
  }
}

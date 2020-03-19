import React, { Component } from 'react';

class Comment extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    // this.handleSubmit = this.handleSubmit.bind(this)

  }

  // 箭头函数里this指向实例对象
  // 不加static，实例对象可以访问，
  // 类的内部相当于类的原型（prototype），所有在类中直接定义的方法相当于在原型上定义方法，都会被类的实例继承，但是使用static静态方法定义的不会被实例继承
  // 类内部的this指向的是实例对象
  handleSubmit = () => {
    let person = {}
    person.name = this.input.value
    person.comment = this.textarea.value
    this.props.setData(person)
  }
  render() {
    return (
      <div style={{ flex: '1' }}>
        用户名：
        <br />
        <input type="text" style={{ width: '300px' }} ref={(input) => { this.input = input }} /><br />
        评论内容：
        <br />
        <textarea style={{ width: '300px', height: '200px' }} ref={(textarea) => { this.textarea = textarea }}></textarea><br />
        <input type="button" value="提交" onClick={this.handleSubmit} />
      </div>
    );
  }
}

export default Comment;
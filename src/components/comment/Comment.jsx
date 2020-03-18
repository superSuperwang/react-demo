import React, { Component } from 'react';

class Comment extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.handleSubmit = this.handleSubmit.bind(this)

  }


  handleSubmit() {
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
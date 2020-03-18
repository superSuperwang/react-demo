import React, { Component } from 'react';

class CommentItem extends Component {

  render() {
    return (
      this.props.data.map((item, index) => (
        <div key={index} style={{ width: '400px', height: '100px', border: '1px solid #e5e5e5' }}>
          <p>{item.name}说：</p>
          <span>{item.comment}</span>
          <input type="button" value="删除" onClick={this.props.deleteComment.bind(this, index)} />
        </div>
      ))

    );
  }
}

export default CommentItem;
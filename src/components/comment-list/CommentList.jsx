import React, { Component } from 'react';
import CommentItem from '../comment-item/CommentItem'


class CommentList extends Component {
  // 给组件类添加属性：如果在一个方法前，加上static关键字，
  // 就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。


  render() {
    return (
      <div style={{ flex: '1' }}>
        评论回复:<br />
        <CommentItem data={this.props.data} deleteComment={this.props.deleteComment} />
      </div>
    );
  }
}

export default CommentList;
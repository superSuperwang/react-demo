import React, { Component } from 'react';
import CommentItem from '../comment-item/CommentItem'
class CommentList extends Component {
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
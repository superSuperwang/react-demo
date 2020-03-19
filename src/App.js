import React, { Component } from 'react';
import './App.css';
import Comment from './components/comment/Comment'
import CommentList from './components/comment-list/CommentList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    // this.setData = this.setData.bind(this)
    // this.deleteComment = this.deleteComment.bind(this)
  }

  setData = (obj) => {
    const { data } = this.state
    data.push(obj)
    this.setState({ data })
  }

  deleteComment = (index) => {
    const { data } = this.state
    data.splice(index, 1)
    this.setState({ data })
  }

  render() {
    const { data } = this.state
    return (<div>
      <div style={{ height: '100px', backgroundColor: '#e5e5e5', width: '100 %' }}>REACT评论</div>
      <div className="App">
        <Comment setData={this.setData} />
        <CommentList data={data} deleteComment={this.deleteComment} />
      </div></div>)
  }


}

export default App;

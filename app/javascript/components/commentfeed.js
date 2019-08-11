import React from "react"
import PropTypes from "prop-types"

import Comment from "./comment"

import { getPost } from '../api/index.js'
import { createComment } from '../api/api'

export default class CommentFeed extends React.Component {
    constructor(props){
        super(props)
          this.state = {
            post: [],
            comments: [],
            commentString: "",
            post_id: this.props.match.params.id
          }
          this.handleChange = this.handleChange.bind(this);
          this.commentSubmit = this.commentSubmit.bind(this)
    }

    componentWillMount() {
      const {post_id} = this.state
      getPost(post_id)
        .then(APIpost => {
          this.setState({
            post: APIpost,
            comments: APIpost.comments
          })
        })
    }

    commentSubmit(){
      const {post_id, commentString} = this.state
      createComment(post_id, commentString).then(successPost => {
        alert("Comment Submitted")
      })
    }

    handleChange(event){
      const { commentString } = this.state
      this.setState({commentString: this.commentString.value})
    }



  render () {

    const { post, comments, reply, commentString, post_id } = this.state
    const { current_user } = this.props

        let postcomments = comments.map((comment, index) => {
          return(
            <div className = "comments">
              <div className = "cloudparts">
                <div className = "cloud"></div>
                <div className = "bigcloud"></div>
                <div className = "cloud2"></div>
                <div className = "bigcloud2"></div>
              </div>

              <div className = "comment">
                <h3>
                {comment.updated_at.substring(0, 10)} - {comment.commentstring.comment_string}
                </h3>
              </div>

              <Comment
                current_user = {current_user}
                comment = {comment}
              />

              {comment.subcomments.map((subcomment, index) => {
                return(
                <div className = "subcomment">
                  <h4>{subcomment.updated_at.substring(0, 10)} -{subcomment.commentstring.comment_string}</h4>
                </div>
              )
              })}
          </div>
          )
        })

    return (
      <div className = "commentFeed">
        <h1>{post.poststring}</h1>
        <img src = {current_user.picture_url}></img>
        <form onSubmit = {this.commentSubmit}>
          <input placeholder = "write a comment" onChange={this.handleChange} ref={(commentString) => this.commentString = commentString} value = {commentString}/>
        </form>
        {postcomments.reverse()}
      </div>

       );
     }
   }

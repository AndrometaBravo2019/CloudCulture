import React from "react"
import PropTypes from "prop-types"

import { getPost } from '../api/index.js'

export default class CommentFeed extends React.Component {
    constructor(props){
        super(props)
          this.state = {
            post: [],
            comments: []
          }
    }

    componentWillMount() {
      let id = this.props.match.params.id
      getPost(id)
        .then(APIpost => {
          console.log(APIpost.comments);
          this.setState({
            post: APIpost,
            comments: APIpost.comments
          })
        })
    }

  render () {

    const { post, comments } = this.state
    const { current_user } = this.props
    console.log(post);
        let postcomments = comments.map((comment, index) => {
          return(
            <div>
              <p>{comment.commentstring.comment_string}</p>
          </div>
          )
        })

    return (
      <div className = "commentFeed">
        <h1>{post.poststring}</h1>
        <img src = {current_user.picture_url}></img>
        <input placeholder = "hello"></input>
        {postcomments}
      </div>

       );
     }
   }

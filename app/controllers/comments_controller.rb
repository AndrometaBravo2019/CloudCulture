class CommentsController < ApplicationController
  def create_comment
    @comment_string = Commentstring.create(:comment_string => params[:comment_string])
    if @comment_string.valid?
      @newstring = Commentstring.last.id
      @comment = Comment.create(:commentstring_id => @newstring, :post_id => params[:post_id])
    end
    render json: @comment
  end

  def comment_params
    params.require(:comment).permit(:post_id, :commentstring_id)
  end
end

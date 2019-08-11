class SubcommentsController < ApplicationController
  
  def create_comment
    @comment_string = Commentstring.create(:comment_string => params[:comment_string])
    if @comment_string.valid?
      @newstring = Commentstring.last.id
      @comment = Subcomment.create(:commentstring_id => @newstring, :comment_id => params[:comment_id])
    end
    render json: @comment
  end
end

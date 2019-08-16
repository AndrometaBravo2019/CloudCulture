class UsersController < ApplicationController

  def updateavatar
     user = User.find(params[:id])
     user.update_attributes(user_params)
     user.update_attributes(picture_url: url_for(user.avatar))
    render :show
  end

  def showavatar
    @user = User.find(params[:id])
     render plain: url_for(@user.avatar)
  end

  def user_params
    params.require(:user).permit(:avatar)
  end

  def updatelocation
    user = User.find(current_user.id)
    user.update_attributes(lat: params[:lat], lng: params[:lng])
    # if params[:id] == @user
      render json: user
    # else
    #   render plain: "you cant edit other users location"
    # end
  end
end

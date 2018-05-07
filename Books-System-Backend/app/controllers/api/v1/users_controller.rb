class Api::V1::UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users
  end

  def create
    @user = User.create(user_params)
    if @user.save
      render json: @user
    else
      render json: {error:"nope"}
    end
  end

  private

  def user_params
    params.permit(:username,:name, :password_digest, :password)
  end

end

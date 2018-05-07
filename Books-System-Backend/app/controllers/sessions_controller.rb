class SessionsController < ApplicationController

   def create
     @user = User.find_by(username: params[:username])
     if @user && @user.authenticate(params[:password])
       render json: @user
     else
       render json: {error:"nope"}
     end
   end

   def destroy
     reset_session
     redirect_to login_path
   end
end

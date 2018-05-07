class SessionsController < ActionController::API

   def create
     @user = User.find_by(username: params[:username])
     if @user && @user.authenticate(params[:password])
       render json: @user
     else
       redirect_to login_path
     end
   end

   def destroy
     reset_session
     redirect_to login_path
   end
end

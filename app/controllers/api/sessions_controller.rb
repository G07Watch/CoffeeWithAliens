class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user 
      login(@user)
      render json: current_user.nickname
    else
      render json: ["Invalid email or password"], status: 404
    end
  end

  def destroy
    ensure_logged_in
    if logged_in?
      logout
      render json: {}
    else
      render json: ["No current user"], status: 404
    end
  end

end

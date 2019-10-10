class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
      # render 'api/user/error'
    end

  end

  def show
    @user = User.find_by(id: params[:id])
  end

  def update
    @user = User.new(user_params)
      if @user.update
        render :show
      else
        render json: @user.errors.full_messages, status: 422 
      end
  end

  def delete
    @user = User.new(user_params)
    if @user.delete
      render json: ["Account removal successful.  Come have coffee again sometime!"]
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit( :id, :nickname, :email, :password, :star_system_id, :is_host)
  end

end

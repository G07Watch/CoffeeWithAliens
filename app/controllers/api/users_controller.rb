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
    
    @user = User.find_by(id: params[:id])

    if params[:user][:new_password]
      if @user.is_password?(params[:user][:password])
        @user.password=(params[:user][:new_password])
        @user.update(
         id: params[:user][:id],
         nickname: params[:user][:nickname],
         email: params[:user][:email], 
         first_name: params[:user][:first_name],
         last_name: params[:user][:last_name],
         star_system_id: params[:user][:star_system_id], 
         is_host: params[:user][:is_host],
         phone_number: params[:user][:phone_number]
        )
      else
        render json: ["Invalid password"], status: 422
      end
    else
      if @user.update(
         id: params[:user][:id],
         nickname: params[:user][:nickname],
         email: params[:user][:email], 
         first_name: params[:user][:first_name],
         last_name: params[:user][:last_name],
         star_system_id: params[:user][:star_system_id], 
         is_host: params[:user][:is_host],
         phone_number: params[:user][:phone_number]
        )

          render :show
      else
          render json: @user.errors.full_messages, status: 422 
      end
    end
  end

  def destroy
    @user = User.new(user_params)
    if @user.delete
      render json: ["Account removal successful.  Come have coffee again sometime!"]
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit( 
      :password,
      :id, :nickname, :email, 
      :first_name, :last_name,
      :star_system_id, :is_host,
      :phone_number)
  end

end

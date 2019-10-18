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

    if params[:new_password]
      if @user.is_password?(@user.password)
        @user.password=(params[:new_password])
        @user = User.new(
         id: params[:id],
         nickname: params[:nickname],
         email: params[:email], 
         first_name: params[:first_name],
         last_name: params[:last_name],
         star_system_id: params[:star_system_id], 
         is_host: params[:is_host],
         phone_number: params[:phone_number]
        )
      else
        render json: ["Invalid password"], status: 422
      end
    else
      @user = User.new(
         id: params[:id],
         nickname: params[:nickname],
         email: params[:email], 
         first_name: params[:first_name],
         last_name: params[:last_name],
         star_system_id: params[:star_system_id], 
         is_host: params[:is_host],
         phone_number: params[:phone_number]
        )
      if @user.update
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
      :id, :nickname, :email, 
      :first_name, :last_name,
      :star_system_id, :is_host,
      :phone_number)
  end

end

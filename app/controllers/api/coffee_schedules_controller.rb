class Api::CoffeeSchedulesController < ApplicationController

  def index
    @user = User.find_by(id: params[:user_id])

    if @user
      @user_coffee_times = @user.coffee_times
      render :index
    else
      render json:["No valid user"], status: 404
    end
    
  end

  def update
    @user = User.find_by(id: params[:user_id])
    @coffee_time = CoffeeTime.find_by(id: params[:id])

    @coffee_time.users << @user

    @coffee_signed= @user.coffee_times.find_by(id: params[:id])

    if @coffee_signed
      @user_coffee_times = @user.coffee_times
      render :index
    else
      render json:["Uh oh, something went wrong"], status: 404
    end

  end



end
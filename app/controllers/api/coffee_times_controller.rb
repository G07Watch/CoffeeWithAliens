class Api::CoffeeTimesController < ApplicationController

  def index
    @coffee_times = CoffeeTime.all

    if @coffee_times
      render :index
    else
      render json: ["Uh oh, something went wrong"], status: 404
    end

  end

  def show
    @coffee_time = CoffeeTime.find_by(id: params[:id])

    if @coffee_time
      

  end

  def create
  end

  def update
  end

  def destroy
  end

  private

  def coffee_time_params
    params.require(:coffee_times).permit()
  end

end
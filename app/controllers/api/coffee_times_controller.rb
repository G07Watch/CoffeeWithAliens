class Api::CoffeeTimesController < ApplicationController

  def index
    @coffee_times = CoffeeTimes.all

    if @coffee_times
      render :index
    else
      render json: ["Uh oh, something went wrong"], status: 404
    end

  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end

end
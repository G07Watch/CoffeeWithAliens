class Api::StarSystemsController < ApplicationController

  def index
    @star_systems = StarSystem.all

    if @star_systems
      render :index
    else
      render json: @star_systems.errors.full_messages, status: 404
    end

  end

  def show
    @star_system = StarSystem.find_by(id: params[:starSystemId])

    if @star_system
      render :show
    else
      render json: @star_system.errors.full_messages, status: 404
    end
  end



end
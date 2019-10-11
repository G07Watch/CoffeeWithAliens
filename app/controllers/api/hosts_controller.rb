class Api::HostsController < ApplicationController

  def create
    @host = Host.new(host_params)
    @user = User.find_by(id: params[:user_id])

    if @host.save 
      @user.update(is_host: 'true')
      render :show
    else
      debugger
      render json: @host.errors.full_messages, status: 422
    end
  
  end  


  def show
    @host = Host.find_by(user_id: params[:user_id])
  end



  def update
    @host = Host.new(host_params)
      if @host.update
        render :show
      else
        render json: @host.errors.full_messages, status: 422 
      end
  end



  def destroy
    @host = Host.new(host_params)
    if @host.delete
      render json: ["You are no longer a host. Host again whenever you like!"]
    else
      render json: @host.errors.full_messages, status: 422
    end
  end

  private

  def host_params
    params.require(:host).permit( :user_id, :facebook, :intro, :story, :topics )
  end


end
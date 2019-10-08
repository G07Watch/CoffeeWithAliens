class ApplicationController < ActionController::Base

  helper_method :current_user, :logged_in?, :ensure_logged_in

  # lllec

  def login(user)
    @current_user = user
    session[:session_token] = @current_user.reset_session_token!
  end

  def logout
    session[:session_token] = @current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil 
  end

  def logged_in?
    !!current_user
  end

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def ensure_logged_in
    current_user
  end

end

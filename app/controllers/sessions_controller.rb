class SessionsController < ApplicationController
  # before_action :redirect_signed_in_users, only: :new

  def new
    @user = User.new
    render :new
  end

  def create
    username = params[:user][:username]
    password = params[:user][:password]
    user = User.find_by_credentials(username, password)

    if user.nil?
      @user = User.new(user_params)
      flash.now[:errors] = ["Invalid login"]
      render :new
    else
      log_in!(user)
      redirect_to user_url(user)
    end
  end

  def destroy
    current_user.reset_session_token!
    session[:session_token] = nil
    redirect_to new_session_url
  end

  private

    def user_params
      params.require(:user).permit(:username, :password)
    end
end

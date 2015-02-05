class UsersController < ApplicationController
  # before_action :redirect_signed_in_users, only: :new

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      log_in!(@user)
      render json: @user
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def show
    @user = User.find(params[:id])
    @teams = Team.all
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end

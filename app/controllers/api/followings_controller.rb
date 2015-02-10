class Api::FollowingsController < ApplicationController
  def create
    @following = Following.new(following_params)
    @following.user_id = current_user.id

    if @following.save
      render json: @following
    else
      render json: @following.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @following = Following.find(params[:id])
    @following.destroy
    render json: @following
  end

  private

    def following_params
      params.require(:following).permit(:blog_id)
    end
end

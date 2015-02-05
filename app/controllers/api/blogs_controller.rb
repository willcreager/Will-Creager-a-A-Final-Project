class Api::BlogsController < ApplicationController
  def new
    @blog = Blog.new
    @teams = Team.all
    render :new
  end

  def create
    @blog = Blog.new(blog_params)
    @blog.author_id = current_user.id

    if @blog.save
      render json: @blog
    else
      flash.now[:errors] = @blog.errors.full_messages
      render :new
    end
  end

  def show
    @blog = Blog.includes(:author).find(params[:id])
    render :show
  end

  private

    def blog_params
      params.require(:blog).permit(:title, :team_tag_id)
    end
end

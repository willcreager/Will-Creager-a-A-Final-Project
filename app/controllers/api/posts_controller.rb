class Api::PostsController < ApplicationController
  def new

  end

  def create
    @post = Post.new(post_params)
    # @post.blog_id = params[:id]

    if @post.save
      render json: @post
    else
      render json: @post.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    
  end
  private

    def post_params
      params.require(:post).permit(:title, :body, :blog_id)
    end
end

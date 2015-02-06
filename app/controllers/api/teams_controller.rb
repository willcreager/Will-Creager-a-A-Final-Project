class Api::TeamsController < ApplicationController
  def index
    @teams = Team.all
    render json: @teams
  end

  def show
    @team = Team.includes(:blogs).find(params[:id])
    render :show
  end
end

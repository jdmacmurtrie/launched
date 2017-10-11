class Api::V1::LikesController < ApplicationController
  def create
    @project = Project.find(params[:project_id])
    @like = Like.new(project: @project, user: current_user)
    if @like.save
      render json: { project: @project }, status: :created
    else
      render json: { error: @project.errors.full_messages }, status: :unprocessable_entity
    end
  end
end

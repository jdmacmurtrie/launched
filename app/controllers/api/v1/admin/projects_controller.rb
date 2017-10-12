class Api::V1::Admin::ProjectsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!

  def create
    if current_user.admin
      @project = Project.new(project_params)
      if @project.save
        render json: { project: @project }, status: :created
      else
        render json: { error: @project.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render status: :unprocessable_entity,
      json: { error: "You are unauthorized to execute this action" }.as_json
    end
  end

  protected

  def project_params
    params.require(:project).permit(:title, :url, :screenshot, :description, :project_type)
  end
end

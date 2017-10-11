class Api::V1::ProjectsController < ApplicationController
  def index
    render json: { projects: Project.all }
  end
end

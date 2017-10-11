class ProjectsController < ApplicationController

  def index
    unless current_user.admin
      json: { error: "You are unauthorized to execute this action" }.as_json
      redirect_to root_path
    end
  end

end

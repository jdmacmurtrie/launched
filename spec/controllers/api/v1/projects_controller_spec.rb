require "rails_helper"

RSpec.describe Api::V1::ProjectsController, type: :controller do
  describe "GET #index" do
    let!(:project_1) { create(:project) }
    let!(:project_2) { create(:project) }
    let(:expected_response) {
      { "projects"=>
        [
          {
            "id"=>project_1.id,
            "title"=>project_1.title,
            "description"=>project_1.description,
            "url"=>project_1.url,
            "screenshot"=>project_1.screenshot,
            "project_type"=>project_1.project_type
          },
          {
            "id"=>project_2.id,
            "title"=>project_2.title,
            "description"=>project_2.description,
            "url"=>project_2.url,
            "screenshot"=>project_2.screenshot,
            "project_type"=>project_2.project_type,
          }
        ]
      }
    }
    it "should return a list of projects" do
      get :index
      expect(JSON.parse(response.body)).to eq expected_response
    end
  end
end

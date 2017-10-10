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
            "title"=>"Whale Review Site #1",
            "description"=>"A review site for whales", "url"=>"www.whalereviews.dog",
            "screenshot"=>"https://ichef.bbci.co.uk/news/660/cpsprodpb/115CA/production/_90741117_0bebad60-b644-409a-83cb-5cd96a539a4c.jpg",
            "project_type"=>"Group Project"
          },
          {
            "id"=>project_2.id,
            "title"=>"Whale Review Site #2",
            "description"=>"A review site for whales", "url"=>"www.whalereviews.dog",
            "screenshot"=>"https://ichef.bbci.co.uk/news/660/cpsprodpb/115CA/production/_90741117_0bebad60-b644-409a-83cb-5cd96a539a4c.jpg",
            "project_type"=>"Group Project"
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

require "rails_helper"

RSpec.describe Api::V1::Admin::ProjectsController, type: :controller do
  describe "#create" do
    let(:good_project_params) {
      {
        title: 'Hi Mom',
        description: 'A greeting for ones mother',
        url: 'hellomother.com',
        screenshot: "https://img00.deviantart.net/f2e1/i/2005/198/3/2/hi_mom_by_dracula_vs_werewolf.jpg",
        project_type: "Group Project"
      }
    }
    let(:bad_project_params) {
      {
        title: '',
        url: '',
        project_type: "gp"
      }
    }

    describe 'as an admin' do
      before(:each) {
        user = create(:admin)
        sign_in user
      }

      it 'project is successfully submitted' do
        post :create, params: { project: good_project_params }

        expect(response.status).to eq 201
        expect(Project.count).to eq 1
      end

      it 'project post is unsuccessful' do
        post :create, params: { project: bad_project_params }

        expect(response.status).to eq 422
      end
    end

    describe 'as a non-admin' do
      before(:each) {
        user = create(:user)
        sign_in user
      }

      it 'project post is unsuccessful' do
        post :create, params: { project: good_project_params }

        expect(response.status).to eq 422
        expect(JSON.parse(response.body)).to eq ({ 'error' => 'You are unauthorized to execute this action' })
      end
    end
  end
end

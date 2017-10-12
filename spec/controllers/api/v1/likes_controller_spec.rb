require "rails_helper"

RSpec.describe Api::V1::Admin::LikesController, type: :controller do
  describe "#create" do
    let(:project) { create(:project) }
    let(:user) { create(:user) }
    describe "As an authenticated user" do
      before(:each) {
        sign_in user
      }

      context "unliked project" do
        it 'project is successfully liked' do
          post :create, params: { project_id: project.id }

          expect(response.status).to eq 201
          expect(Like.count).to eq 1
        end
      end

      context "already liked project" do
        it 'project is unsuccessfully liked again' do
          Like.create(project: project, user: user)
          post :create, params: { project_id: project.id }

          expect(response.status).to eq 422
          expect(Like.count).to eq 1
        end
      end
    end
    describe "As an authenticated user" do
      let(:project) { create(:project) }

      context "unliked project" do
        it 'project is unsuccessfully liked' do
          post :create, params: { project_id: project.id }

          expect(response.status).to eq 422
          expect(Like.count).to eq 0
        end
      end
    end
  end
end

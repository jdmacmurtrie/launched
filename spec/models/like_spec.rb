require 'rails_helper'

RSpec.describe Like, type: :model do
  it { should validate_presence_of(:user_id) }
  it { should validate_presence_of(:project_id) }

  it { should belong_to :user }
  it { should belong_to :project }

  it { should validate_uniqueness_of(:user_id).scoped_to(:project_id).with_message("You've already liked this project!") }
end

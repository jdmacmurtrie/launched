require 'rails_helper'

RSpec.describe Project, type: :model do
  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:url) }
  it { should validate_presence_of(:screenshot) }
  it { should validate_presence_of(:project_type) }
  it { should validate_inclusion_of(:project_type).in_array(Project::PROJECT_TYPES) }
end

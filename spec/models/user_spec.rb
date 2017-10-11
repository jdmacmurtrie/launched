require 'rails_helper'

RSpec.describe User, type: :model do
  it { should validate_presence_of(:first_name) }
  it { should validate_presence_of(:last_name) }
  it { should validate_presence_of(:email) }

  it "validates uniqueness of email" do
    expect(create(:user)).to validate_uniqueness_of(:email)
  end
end

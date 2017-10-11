class Like < ApplicationRecord
  validates_presence_of :user_id, :project_id
  validates_uniqueness_of :user_id, scope: [:project_id], message: "You've already liked this project!"

  belongs_to :user
  belongs_to :project
end

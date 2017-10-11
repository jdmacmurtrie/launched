class Project < ApplicationRecord
  PROJECT_TYPES = ["Group Project", "Breakable Toy", "Side Project"]

  validates_presence_of :title, :url, :screenshot, :project_type
  validates_inclusion_of :project_type, in: PROJECT_TYPES

  has_many :likes
end

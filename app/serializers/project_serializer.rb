class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :url, :screenshot, :project_type, :likes

  def likes
    object.likes.count
  end
end

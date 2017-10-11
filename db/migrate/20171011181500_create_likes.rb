class CreateLikes < ActiveRecord::Migration[5.1]
  def change
    create_table :likes do |t|
      t.belongs_to :user
      t.belongs_to :project
    end

    add_index :likes, [:user_id, :project_id], unique: true
  end
end

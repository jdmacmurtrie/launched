class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.string :description
      t.string :url, null: false
      t.string :screenshot, null: false
      t.string :project_type, null: false
    end
  end
end

class CreateBlogs < ActiveRecord::Migration
  def change
    create_table :blogs do |t|
      t.integer :author_id, null: false
      t.integer :team_tag_id, null: false
      t.string :title, null: false

      t.timestamps
    end

    add_index :blogs, :author_id
    add_index :blogs, :team_tag_id
  end
end

class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.integer :blog_id, null: false
      t.string :title, null: false
      t.text :body

      t.timestamps
    end

    add_index :posts, :blog_id
  end
end

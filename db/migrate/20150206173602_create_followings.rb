class CreateFollowings < ActiveRecord::Migration
  def change
    create_table :followings do |t|
      t.integer :blog_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :followings, :blog_id
    add_index :followings, :user_id
  end
end

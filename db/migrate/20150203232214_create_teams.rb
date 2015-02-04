class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |t|
      t.string :name, null: false, unique: true
      t.integer :league_id, null: false

      t.timestamps
    end

    add_index :teams, :league_id
  end
end

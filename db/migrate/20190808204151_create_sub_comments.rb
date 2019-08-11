class CreateSubComments < ActiveRecord::Migration[5.2]
  def change
    create_table :subcomments do |t|
        t.references :commentstring, foreign_key: true
        t.references :comment, foreign_key: true
      t.timestamps
    end
  end
end

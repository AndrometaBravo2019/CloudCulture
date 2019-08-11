class CreateCommentStrings < ActiveRecord::Migration[5.2]
  def change
    create_table :commentstrings do |t|
      t.string :comment_string
      t.timestamps
    end
  end
end

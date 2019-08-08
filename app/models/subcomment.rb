class Subcomment < ApplicationRecord
  belongs_to :commentstring
  belongs_to :comment
end

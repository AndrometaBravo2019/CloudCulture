class Commentstring < ApplicationRecord
  has_many :comments
  has_many :subcomments
end

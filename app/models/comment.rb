class Comment < ApplicationRecord
  belongs_to :commentstring
  belongs_to :post

  has_many :subcomments
end

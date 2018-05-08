class User < ApplicationRecord
  has_secure_password
  validates :name,:username, presence: { strict: true }, uniqueness: true
  has_many :user_books
  has_many :books, through: :user_books
  
end

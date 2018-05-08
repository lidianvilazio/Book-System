class UserBook < ApplicationRecord
  belongs_to :user
  belongs_to :book

  def self.allBooks(user_book=UserBook.all)

    user_book.select{|user_book| user_book.avalible}.map { |user_book| user_book.book}

  end

  def self.userBook(user_book)
    user_book.map { |user_book| user_book.book}
  end


end

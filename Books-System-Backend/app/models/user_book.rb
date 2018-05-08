class UserBook < ApplicationRecord
  belongs_to :user
  belongs_to :book

  def self.allBooks(books)
    book = books.map do |i|
        Book.where(id: i.book_id)[0]
    end
    return book
  end

end

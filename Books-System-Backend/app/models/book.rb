
class Book < ApplicationRecord
  has_many :user_books
  has_many :users, through: :user_books

  def self.get_api(search_term="")
    api =  RestClient.get("https://www.googleapis.com/books/v1/volumes?q=#{search_term}")
    api_hash = JSON.parse(api)
  end

  def self.createBook
    api = self.get_api
    api.each do |k,v|
      if v.is_a?(Array)
        v.each do |i|
          title = i['volumeInfo']['title']
          subtitle = i['volumeInfo']['subtitle']
          author = nil
          publisher = i['volumeInfo']['publisher']
          publishedDate = i['volumeInfo']['publishedDate']
          description = i['volumeInfo']['description']
          pageCount = i['volumeInfo']['pageCount']
          categories = i['volumeInfo']['categories']
          imageLinks = i['volumeInfo']['imageLinks']['thumbnail']
          language = i['volumeInfo']['language']
          i['volumeInfo'].each do |k1, v1|
            if k1 == 'authors' || k1 == 'author'
              author = v1
            end
          end

          Book.create({author: author, title: title, subtitle: subtitle, publisher: publisher, publishedDate: publishedDate, description: description, pageCount: pageCount, categories: categories, imageLinks: imageLinks, language: language})
        end
      end
    end
  end

end

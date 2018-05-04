
class Book < ApplicationRecord
  has_many :user_books
  has_many :users, through: :user_books

  def self.get_api
    api =  RestClient.get("https://www.googleapis.com/books/v1/volumes?q=''")
    api_hash = JSON.parse(api)
  end

  def self.createBook
    api = self.get_api
    api.each do |k,v|
      if v.is_a?(Array)
        v.each do |i|
          title = i['volumeInfo']['title']
          subtitle = i['volumeInfo']['subtitle']
          author = i['volumeInfo']['authors']
          publisher = i['volumeInfo']['publisher']
          publishedDate = i['volumeInfo']['publishedDate']
          description = i['volumeInfo']['description']
          pageCount = i['volumeInfo']['pageCount']
          categories = i['volumeInfo']['categories']
          imageLinks = i['volumeInfo']['imageLinks']
          language = i['volumeInfo']['language']
          # title = ''
          # author = ''
          # i.each do |k1,v1|
          #   if k1 == 'volumeInfo'
          #     v1.each do |k2,v2|
          #       if k2 == "title"
          #         title = v2
          #       end
          #       if k2 == 'author' || k2 == "authors"
          #         author = v2
          #       end
                Book.create({author: author, title: title, subtitle: subtitle, publisher: publisher, publishedDate: publishedDate, description: description, pageCount: pageCount, categories: categories, imageLinks: imageLinks, language: language})
              end
            end
          end
        end
      end
    end
  end

end

class Api::V1::UserBooksController < ApplicationController

  def index
    @allBooks = UserBook.allBooks
    render json: @allBooks.uniq
  end

  def update
    @user_book = UserBook.find_by_book_id(params[:id])
    @user_book.update(avalible: params[:avalible], user_id: params[:user_id])
  end


  def create
    @user_book = UserBook.find_or_create_by(book_id: params[:book_id], user_id: params[:user_id])
    render json: @user_book
  end

  def show
    @user_books = UserBook.where(user_id: params[:id])
    puts @user_books
    @allBooks = UserBook.userBook(@user_books)
    render json: @allBooks.uniq
  end

end

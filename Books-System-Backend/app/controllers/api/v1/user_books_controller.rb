class Api::V1::UserBooksController < ApplicationController

  def index
    @user_books = UserBook.all
    @allBooks = UserBook.allBooks(@user_books)
    puts @allBooks
    render json: @allBooks
  end

  def update
    @user_book = UserBook.find_by_book_id(params[:id])
    @user_book.update(avalible: params[:avalible], user_id: params[:user_id])
  end


  def create
    @user_book = UserBook.create(book_id: params[:book_id], user_id: params[:user_id])
    render json: @user_book
  end

  def show
    @user_books = UserBook.where(user_id: params[:id])
    @allBooks = UserBook.allBooks(@user_books)
    render json: @allBooks
  end

  private

  # def user_books_params
  #   params.permit(:user,:book)
  # end
end

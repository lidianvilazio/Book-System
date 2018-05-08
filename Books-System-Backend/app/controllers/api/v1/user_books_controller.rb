class Api::V1::UserBooksController < ApplicationController
  def index
    @user_books = UserBook.all
    render json: @user_books
  end

  def create
    @user_book = UserBook.create(book_id: params[:book_id], user_id: params[:user_id])
    # if @user_book.errors
    #   byebug
    # end
    render json: @user_book
  end

  def show
    @user_books = UserBook.where(user_id: params[:id])
    @allBooks = UserBook.allBooks(@user_books)
    puts @allBooks
    render json: @allBooks
  end

  private

  # def user_books_params
  #   params.permit(:user,:book)
  # end
end

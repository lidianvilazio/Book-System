class Api::V1::BooksController < ApplicationController


  def index
    @books = Book.all
    render json: @books
  end

  def search
    @book_api = Book.createBook(params[:title])
    @books = Book.all
    render json: @books
  end

  def show
    @book = Book.find(params[:id])
    render json: @book
  end

  private

  def books_params
    params.permit(:id,:title, :author)
  end


end



# api_key: AIzaSyD7gcW_2QEsUsmPaOU1t5TkbK_plR4jcDk

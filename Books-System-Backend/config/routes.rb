Rails.application.routes.draw do


  post '/login', to: "sessions#create"
  post '/signup', to: "api/v1/users#create"

  namespace :api do
    namespace :v1 do
      post '/search', to: 'books#search'
      get '/search', to: 'books#search'
      resources :user_books
      resources :users
      resources :books
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

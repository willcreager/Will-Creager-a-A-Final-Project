Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users, only: [:new, :create, :show, :index]
  resource :session, only: [:new, :create, :destroy]
  namespace :api, defaults: { format: :json } do
    resources :followings
    resources :teams
    resources :blogs, only: [:new, :create, :show]
    resources :posts, only: [:new, :create, :show, :destroy]
  end
end

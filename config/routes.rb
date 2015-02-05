Rails.application.routes.draw do
  root to: 'static_pages#root'


  resources :users, only: [:new, :create, :show]
  resource :session, only: [:new, :create, :destroy]
  namespace :api, defaults: { format: :json } do
    resources :teams
    resources :blogs, only: [:new, :create, :show]
    resources :posts, only: [:new, :create, :show]
  end
end

Rails.application.routes.draw do
  devise_for :users
  root 'static_pages#index'
  
  namespace :api do
    namespace :v1 do
      resources :projects, only: [:index] do
        resources :likes, only: [:create]
      end

      namespace :admin do
        resources :projects, only: [:create]
      end
    end
  end
end

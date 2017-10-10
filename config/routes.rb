Rails.application.routes.draw do
  devise_for :users
  root 'static_pages#welcome'
  namespace :api do
    namespace :v1 do
      resources :projects, only: [:index]
    end
  end
end

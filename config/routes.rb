Rails.application.routes.draw do
  devise_for :users
  root 'static_pages#welcome'
  namespace :api do
    namespace :v1 do
      resources :projects, only: [:index]

      namespace :admin do
        resources :projects, only: [:index, :create]
      end
    end
  end
  namespace :admin do
    resources :projects, only: [:index]
  end
end

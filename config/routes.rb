Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :messages, only: [:index]
    end
  end

  get '*page', to: 'static#index', via: :all
  root 'static#index'
end

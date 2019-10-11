Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [ :show, :create, :update, :destroy ] do
      resources :hosts, only: [ :create, :show, :update, :destroy ]
    end
    resource :session, only: [ :create, :destroy ]
    resources :star_systems, only: [ :index, :show ]
    resources :coffee_times, only: [ :index, :show, :create, :update, :destroy ]
    
  end

  root to: 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

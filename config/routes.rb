Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do 
    resource :session, only: [:new, :create, :destroy, :show]
    resources :users, only: [:new, :create, :index, :show]
  end
  root to: "static_pages#root"
end

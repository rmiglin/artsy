        #            Prefix Verb   URI Pattern                                                                              Controller#Action
        #   new_api_session GET    /api/session/new(.:format)                                                               api/sessions#new {:format=>:json}
        #       api_session GET    /api/session(.:format)                                                                   api/sessions#show {:format=>:json}
        #                   DELETE /api/session(.:format)                                                                   api/sessions#destroy {:format=>:json}
        #                   POST   /api/session(.:format)                                                                   api/sessions#create {:format=>:json}
        # api_user_products POST   /api/users/:user_id/products(.:format)                                                   api/products#create {:format=>:json}
        #         api_users GET    /api/users(.:format)                                                                     api/users#index {:format=>:json}
        #                   POST   /api/users(.:format)                                                                     api/users#create {:format=>:json}
        #      new_api_user GET    /api/users/new(.:format)                                                                 api/users#new {:format=>:json}
        #          api_user GET    /api/users/:id(.:format)                                                                 api/users#show {:format=>:json}
        #      api_products GET    /api/products(.:format)                                                                  api/products#index {:format=>:json}
        #   new_api_product GET    /api/products/new(.:format)                                                              api/products#new {:format=>:json}
        #  edit_api_product GET    /api/products/:id/edit(.:format)                                                         api/products#edit {:format=>:json}
        #       api_product GET    /api/products/:id(.:format)                                                              api/products#show {:format=>:json}
        #                   PATCH  /api/products/:id(.:format)                                                              api/products#update {:format=>:json}
        #                   PUT    /api/products/:id(.:format)                                                              api/products#update {:format=>:json}
        #                   DELETE /api/products/:id(.:format)                                                              api/products#destroy {:format=>:json}

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do 
    resource :session, only: [:new, :create, :destroy, :show] do
      resources :carts, only: [:index, :create, :destroy]
    end
    resources :users, only: [:new, :create, :index, :show] do
      resources :products, only: [:create]
    end
    resources :products, only: [:index, :new, :show, :update, :destroy]
  end
  root to: "static_pages#root"
end

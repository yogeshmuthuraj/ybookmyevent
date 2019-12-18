Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'events#index'

  resources :events, only: [:index, :new, :create, :show, :update, :edit, :destroy] do
  end

  resources :payments, only: [:index, :new, :create, :show, :update, :edit, :destroy] do
  end
end

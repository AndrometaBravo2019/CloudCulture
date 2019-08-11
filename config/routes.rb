Rails.application.routes.draw do

  resources :comments
    post 'newcomment/:post_id/:comment_string' => 'comments#create_comment'

  resources :posts
    get 'onlineusers' => 'posts#onlineusers'
    get 'onlineposts' => 'posts#onlinePosts'
    post 'taggedpost/:tagid' => 'posts#createtagged'

  resource :subcomments
    post 'newreply/:comment_id/:comment_string' => 'subcomments#create_comment'

  resources :tags

  resources :tagnames
    post 'newtagname' => 'tagnames#createtag'

  resources :userstatus
    delete 'destroyfriendship' => 'userstatus#customdelete'

  devise_for :users, controllers: { sessions: 'users/sessions', registrations: 'users/registrations'}
  devise_scope :user do
    get 'allusers' => 'users/sessions#index'
    get 'users/:id' => 'users/sessions#oneuser'
    get 'friends' => 'users/sessions#friends'
    get 'friendid' => 'users/sessions#friendid'
    get 'pendingid' => 'users/sessions#pendingids'
    get 'sentpendingid' => 'users/sessions#sentpendingids'
  end

  get 'avatar/:id' => 'users#showavatar'
  put 'updateavatar/:id' => 'users#updateavatar'


  get '*path', to: 'pages#index', constraints: ->(request){ request.format.html? }


  root to: 'pages#index'

end

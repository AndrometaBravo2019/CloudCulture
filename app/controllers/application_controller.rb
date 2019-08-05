class ApplicationController < ActionController::Base
     protect_from_forgery with: :exception

    before_action :configure_permitted_parameters, if: :devise_controller?
    skip_before_action :verify_authenticity_token

    protected

# after sign in or sign up redirect to map page
    def after_sign_in_path_for(user)
       "/map"
    end

    def after_sign_up_path_for(user)
       "/map"
    end

# strong params
    def configure_permitted_parameters
      keys = [:username, :email, :gender,
        :age, :bio, :password, :password_confirmation,
        :firstname, :lastname, :lat, :lng, :remember_me]
        devise_parameter_sanitizer.permit(:sign_up, keys: keys)
        devise_parameter_sanitizer.permit(:account_update, keys: keys)
    end
end

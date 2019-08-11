# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  # before_action :configure_sign_up_params, only: [:create]
  # before_action :configure_account_update_params, only: [:update]

  # GET /resource/sign_up
  # def new
  #   super
  # end

  # POST /resource
  def create
    params[:user][:firstname].capitalize!
    params[:user][:lastname].capitalize!
    params[:user][:username].capitalize!
    params[:user][:picture_url] = "data:image/png;base64,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"
    super do |resource|

    end
  end

  # GET /resource/edit
  # def edit
  #   super
  # end

  # PUT /resource
  # def update
  #   super
  # end

  # DELETE /resource
  # def destroy
  #   super
  # end

  # GET /resource/cancel
  # Forces the session data which is usually expired after sign
  # in to be expired now. This is useful if the user wants to
  # cancel oauth signing in/up in the middle of the process,
  # removing all OAuth session data.
  # def cancel
  #   super
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_up_params
  #   devise_parameter_sanitizer.permit(:sign_up, keys: [:attribute])
  # end

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_account_update_params
  #   devise_parameter_sanitizer.permit(:account_update, keys: [:attribute])
  # end

  # The path used after sign up.
  # def after_sign_up_path_for(resource)
  #   super(resource)
  # end

  # The path used after sign up for inactive accounts.
  # def after_inactive_sign_up_path_for(resource)
  #   super(resource)
  # end
end

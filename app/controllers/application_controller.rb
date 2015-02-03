class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user

  def log_in!(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
  end

  def current_user
    return nil if session[:session_token].nil?
    @user ||= User.find_by(session_token: session[:session_token])
  end

  def redirect_signed_in_users
    redirect_to cats_url if current_user
  end

  def redirect_unsigned_in_users
    redirect_to cats_url unless current_user
  end

  def must_own_cat
    rental_request = CatRentalRequest.find(params[:id])
    cat = Cat.find(rental_request.cat_id)

    if params[:controller] == "cat_rental_requests"
      flash[:notice] = "Can't accept/deny rental request of someone else's cat!"
    elsif params[:controller] == "cats"
      flash[:notice] = "Can't edit someone else's cat!"
    end

    redirect_to(:back) unless cat.user_id == current_user.id
  end

end

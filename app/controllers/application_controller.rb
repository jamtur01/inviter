class ApplicationController < ActionController::Base
  skip_before_filter :verify_authenticity_token, if: :json_request?
  #protect_from_forgery with: :null_session
end

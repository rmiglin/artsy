class Api::UsersController < ApplicationController
    #before_action :require_signed_in!, only: [:show, :index]

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render "api/users/show"
            #redirect_to users_url
        else
            render json: @user.errors.full_messages, status: 422
            #flash.now[:errors] = @user.errors.full_messages
            #render :new
        end
    end

    # def new
    #     @user = User.new
    #     render :new
    # end

    # def index
    #     @users = User.all
    #     render :index
    # end

    # def show
    #     @user = User.find(params[:id])
    #     render :show
    # end

    private
    def user_params
        params.require(:user).permit(:email, :password, :username)
    end
end

class Api::SessionsController < ApplicationController

    #before_action :require_signed_in!, only: [:destroy]

    #def new
    #    render :new
    #end

    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )
        
        if @user 
            login!(@user)
            render "api/users/show"
            #redirect_to users_url
        else
            #flash.now[:errors] = ['Invalid username or password']
            #render :new
            render json: ["Invalid username/password combination"], status: 401
        end
    end

    def destroy
        #sign_out!
        #redirect_to new_session_url
        @user = current_user
        if @user
            logout!
            render "api/users/show"
        else
            render json: ["Nobody signed in"], status: 404
        end
    end
end
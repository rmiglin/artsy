class Api::CartsController < ApplicationController
    before_action :ensure_logged_in!, only: [:index, :create, :destroy]

    def index
        @carts = Cart.all
        render :index
    end

    def create
        @cart = Cart.new(cart_params)
        if @cart.save
            render :show
        else
            render json: @cart.errors.full_messages, status: 422
        end
    end

    def destroy
        @cart = Cart.find(params[:id])
        @cart.destroy
        render :show
    end

    private
    def cart_params
        params.require(:cart).permit(
            :user_id, :product_id
        )
    end
end
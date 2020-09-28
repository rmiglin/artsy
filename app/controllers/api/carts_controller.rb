class Api::CartsController < ApplicationController
    
    def show
        @cart = Cart.find(params[:id])
        render :show
    end

    def update
        @cart = Cart.find(params[:id])
        if @cart.update(cart_params)
            redirect_to product_url(@cart)
        else
            render json: @cart.errors.full_messages, status: 422
        end

    end

    private
    def cart_params
        params.require(:cart).permit(
            :shopper_id,
            :total
        )
    end
end
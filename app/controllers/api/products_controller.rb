class Api::ProductsController < ApplicationController
    before_action :ensure_logged_in!, only: [:create]

    def index
        @products = Product.all
        render :index
    end

    def show
        @product = Product.find(params[:id])
        render :show
    end

    def create 
        @product = Product.create!(product_params)
        render :show
    end

    def update
        @product = Product.find(params[:id])
        if @product.update(product_params)
            redirect_to product_url(@product)
        else
            render json: @product.errors.full_messages, status: 422
        end
    end

    def destroy
         @product = Product.find(params[:id])
         @product.destroy

         redirect_to products_url
    end

    private
    def product_params
        params.require(:product).permit(
            :product_name, 
            :seller_id,
            :quantity, 
            :price, 
            :description
        )
    end

end
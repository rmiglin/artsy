class Api::ReviewsController < ApplicationController
    before_action :ensure_logged_in!, only: [:create, :destroy]

    def index
        @reviews = Review.all

        render :index
    end

    def create
        @review = Review.new(review_params)

        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find(params[:id])

        if @review.destroy
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    private
    def review_params
        params.require(:review).permit(
            :author_id,
            :product_id,
            :rating,
            :comment
        )
    end

end
class PaymentsController < ApplicationController
  def index
    @payments = Payment.all.order('created_at desc')
    render 'layouts/application', { payments: @payments }
  end

  def create
    @payment = Payment.create!(payment_params)
  end

  private

  def payment_params
    params.permit(*Payment.new.attributes.keys)
  end
end

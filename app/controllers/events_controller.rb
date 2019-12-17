class EventsController < ApplicationController
  def index
    @events = Event.all.order('created_at desc')
    render 'layouts/application', { events: @events }
  end

  def create
    @event = Event.create!(event_params)
  end

  private

  def event_params
    params.permit(*Event.new.attributes.keys)
  end
end

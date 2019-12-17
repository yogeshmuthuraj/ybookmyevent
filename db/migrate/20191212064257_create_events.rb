class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :name
      t.string :description
      t.string :image_url
      t.string :date
      t.string :time
      t.string :event_type
      t.string :ticket_price
      t.string :total_tickets

      t.timestamps
    end
  end
end

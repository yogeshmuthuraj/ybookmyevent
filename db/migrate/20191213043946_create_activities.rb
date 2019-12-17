class CreateActivities < ActiveRecord::Migration[5.2]
  def change
    create_table :activities do |t|
      t.integer :user_id
      t.integer :event_id
      t.integer :payment_id
      t.string :status

      t.timestamps
    end
  end
end

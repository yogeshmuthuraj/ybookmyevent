class CreatePayments < ActiveRecord::Migration[5.2]
  def change
    create_table :payments do |t|
      t.string :status
      t.decimal :amount
      t.string :mode
      t.integer :user_id
      t.integer :event_id
      t.integer :seats

      t.timestamps
    end
  end
end

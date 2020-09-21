class AddIndexToUsers < ActiveRecord::Migration[5.2]
  def change
    add_index :users, :username
    add_index :users, :email
    add_index :users, :session_token
  end
end

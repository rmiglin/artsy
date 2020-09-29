# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Product.destroy_all
user1 = User.create!(email: "demouser@email.com", first_name: "Demo", password: "hunter12")
user2 = User.create!(email: "karenskrafts@email.com", first_name: "Karen", password: "krafts123")
user3 = User.create!(email: "roguewarrior7@email.com", first_name: "Rogue", password: "rogue_warrior7")
user4 = User.create!(email: "johnblonder@email.com", first_name: "John", password: "blondie43")
product1 = Product.create!(
    product_name: "handwoven 11ft X 8ft rug", 
    seller_id: user1.id, 
    price: 300, 
    quantity: 7,
    description: "this beautiful rug woven with 164 count thread will look good in any living space"
)

file1 = open('https://artsy-store-seed.s3.amazonaws.com/handwoven-rug.jpg')
product1.photo.attach(io: file1, filename: 'handwoven-rug.jpg')

product2 = Product.create!(
    product_name: "8in diameter clay planting pot",
    seller_id: user2.id,
    price: 45,
    quantity: 10,
    description: "kiln glazed 8in clay pot for plants and decor"
)

file2 = open('https://artsy-store-seed.s3.amazonaws.com/clay-planting-pot.jpg')
product2.photo.attach(io: file2, filename: 'clay-planting-pot.jpg')


product3 = Product.create!(
    product_name: "set of rubber pencil toppers",
    seller_id: user3.id,
    price: 10,
    quantity: 40,
    description: "these zany rubbers go great on any #2 pencil"
)
file3 = open('https://artsy-store-seed.s3.amazonaws.com/pencil-toppers.jpg')
product3.photo.attach(io: file3, filename: 'pencil-toppers.jpg')

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
user5 = User.create!(email: "madhaatter@email.com", first_name: "MadHat", password: "wonderland")
user6 = User.create!(email: "simplesimon@email.com", first_name: "Simon", password: "pieman")
user7 = User.create!(email: "jackiedaytona@email.com", first_name: "Jackie", password: "vampire")

product1 = Product.create!(
    product_name: "handwoven 11ft X 8ft rug", 
    seller_id: user2.id, 
    price: 300, 
    quantity: 7,
    description: "this beautiful rug woven with 164 count thread will look good in any living space"
)

file1 = open('https://artsy-store-seed.s3.amazonaws.com/handwoven-rug.jpg')
product1.photo.attach(io: file1, filename: 'handwoven-rug.jpg')

product2 = Product.create!(
    product_name: "8in diameter clay planting pot",
    seller_id: user4.id,
    price: 45,
    quantity: 10,
    description: "kiln glazed 8in clay pot for plants and decor"
)

file2 = open('https://artsy-store-seed.s3.amazonaws.com/clay-planting-pot.jpg')
product2.photo.attach(io: file2, filename: 'clay-planting-pot.jpg')


product3 = Product.create!(
    product_name: "set of rubber pencil toppers",
    seller_id: user3.id,
    price: 5,
    quantity: 40,
    description: "these zany rubbers go great on any #2 pencil"
)
file3 = open('https://artsy-store-seed.s3.amazonaws.com/pencil-toppers.jpg')
product3.photo.attach(io: file3, filename: 'pencil-toppers.jpg')

product4 = Product.create!(
    product_name: "monstera deliciosa",
    seller_id: user2.id,
    price: 56,
    quantity: 3,
    description: "beautiful fenstrated full-grown monstera delisiosa"
)
file4 = open('https://artsy-store-seed.s3.amazonaws.com/monstera-deliciosa.jpg')
product4.photo.attach(io: file4, filename: 'monstera-deliciosa.jpg')

product5 = Product.create!(
    product_name: "charm bracelet",
    seller_id: user7.id,
    price: 65,
    quantity: 1,
    description: "pewter-plated charm bracelet. one size fits most"
)
file5 = open('https://artsy-store-seed.s3.amazonaws.com/charm-bracelet.jpg')
product5.photo.attach(io: file5, filename: 'charm-bracelet.jpg')

product6 = Product.create!(
    product_name: "badminton set",
    seller_id: user5.id,
    price: 25,
    quantity: 2,
    description: "handcrafted wooden rackets and net"
)
file6 = open('https://artsy-store-seed.s3.amazonaws.com/badminton.jpg')
product6.photo.attach(io: file6, filename: 'badminton.jpg')

product7 = Product.create!(
    product_name: "cozy candle set",
    seller_id: user6.id,
    price: 7,
    quantity: 40,
    description: "hand-dipped tea candles perfect for cozy settings and mood lighting"
)
file7 = open('https://artsy-store-seed.s3.amazonaws.com/candles.jpg')
product7.photo.attach(io: file7, filename: 'candles.jpg')

product8 = Product.create!(
    product_name: "cornhole set",
    seller_id: user4.id,
    price: 80,
    quantity: 1,
    description: "vintage plywood cornhole set"
)
file8 = open('https://artsy-store-seed.s3.amazonaws.com/cornhole.jpg')
product8.photo.attach(io: file8, filename: 'cornhole.jpg')

product9 = Product.create!(
    product_name: "custom art",
    seller_id: user2.id,
    price: 150,
    quantity: 30,
    description: "I turn pictures into art!"
)
file9 = open('https://artsy-store-seed.s3.amazonaws.com/custom-art.jpg')
product9.photo.attach(io: file9, filename: 'custom-art.jpg')

product10 = Product.create!(
    product_name: "custom banner",
    seller_id: user7.id,
    price: 17,
    quantity: 100,
    description: "I turn pictures into art!"
)
file10 = open('https://artsy-store-seed.s3.amazonaws.com/custom-banner.jpg')
product10.photo.attach(io: file10, filename: 'custom-banner.jpg')

product11 = Product.create!(
    product_name: "floral lamp shades",
    seller_id: user4.id,
    price: 300,
    quantity: 4,
    description: "These floral lamp shades are statement pices for any living space."
)
file11 = open('https://artsy-store-seed.s3.amazonaws.com/floral-lamp-shades.png')
product11.photo.attach(io: file11, filename: 'floral-lamp-shades.png')

product12 = Product.create!(
    product_name: "pokemon vans",
    seller_id: user5.id,
    price: 70,
    quantity: 3,
    description: "Custom painted pokemon vans."
)
file12 = open('https://artsy-store-seed.s3.amazonaws.com/pokemon-vans.jpg')
product12.photo.attach(io: file12, filename: 'pokemon-vans.jpg')

product13 = Product.create!(
    product_name: "starry shawl",
    seller_id: user2.id,
    price: 62,
    quantity: 1,
    description: "Star-studded shawl"
)
file13 = open('https://artsy-store-seed.s3.amazonaws.com/starry-shawl.jpg')
product13.photo.attach(io: file13, filename: 'starry-shawl.jpg')

product14 = Product.create!(
    product_name: "watercolors",
    seller_id: user7.id,
    price: 18,
    quantity: 4,
    description: "Work great on canvases and heavy paper"
)
file14 = open('https://artsy-store-seed.s3.amazonaws.com/watercolors.jpg')
product14.photo.attach(io: file14, filename: 'watercolors.jpg')

product15 = Product.create!(
    product_name: "wedding dress",
    seller_id: user3.id,
    price: 300,
    quantity: 1,
    description: "Lightly worn sequened wedding dress with train"
)
file15 = open('https://artsy-store-seed.s3.amazonaws.com/wedding-dress.jpg')
product15.photo.attach(io: file15, filename: 'wedding-dress.jpg')

product16 = Product.create!(
    product_name: "wooden animals",
    seller_id: user6.id,
    price: 30,
    quantity: 1,
    description: "Great for all ages!"
)
file16 = open('https://artsy-store-seed.s3.amazonaws.com/wooden-animals.jpg')
product16.photo.attach(io: file16, filename: 'wooden-animals.jpg')
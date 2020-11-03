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
Cart.destroy_all
Review.destroy_all

user1 = User.create!(email: "demouser@email.com", first_name: "Demo", password: "hunter12")
user2 = User.create!(email: "karenskrafts@email.com", first_name: "KarensKrafts", password: "krafts123")
user3 = User.create!(email: "roguewarrior7@email.com", first_name: "RogueWarrior16", password: "rogue_warrior7")
user4 = User.create!(email: "johnblonder@email.com", first_name: "BigTexasJohn", password: "blondie43")
user5 = User.create!(email: "madhaatter@email.com", first_name: "JewelryByCynthia", password: "wonderland")
user6 = User.create!(email: "simplesimon@email.com", first_name: "SimonsPrintsAndMore", password: "pieman")
user7 = User.create!(email: "jackiedaytona@email.com", first_name: "JackiesArtsEmporium", password: "vampire")

product1 = Product.create!(
    product_name: "Handwoven 11ft X 8ft Rug", 
    seller_id: user2.id, 
    price: 300, 
    quantity: 7,
    description: "this beautiful rug woven with 164 count thread will look good in any living space"
)

file1 = open('https://artsy-store-seed.s3.amazonaws.com/handwoven-rug.jpg')
product1.photo.attach(io: file1, filename: 'handwoven-rug.jpg')

product2 = Product.create!(
    product_name: "8in Diameter Clay Planting Pot",
    seller_id: user4.id,
    price: 45,
    quantity: 10,
    description: "kiln glazed 8in clay pot for plants and decor"
)

file2 = open('https://artsy-store-seed.s3.amazonaws.com/clay-planting-pot.jpg')
product2.photo.attach(io: file2, filename: 'clay-planting-pot.jpg')


product3 = Product.create!(
    product_name: "Rubber Pencil Toppers Set",
    seller_id: user3.id,
    price: 5,
    quantity: 40,
    description: "these zany rubbers go great on any #2 pencil"
)
file3 = open('https://artsy-store-seed.s3.amazonaws.com/pencil-toppers.jpg')
product3.photo.attach(io: file3, filename: 'pencil-toppers.jpg')

product4 = Product.create!(
    product_name: "Monstera Deliciosa",
    seller_id: user2.id,
    price: 56,
    quantity: 3,
    description: "beautiful fenstrated full-grown monstera delisiosa"
)
file4 = open('https://artsy-store-seed.s3.amazonaws.com/monstera-deliciosa.jpg')
product4.photo.attach(io: file4, filename: 'monstera-deliciosa.jpg')

product5 = Product.create!(
    product_name: "Charm Bracelet",
    seller_id: user5.id,
    price: 65,
    quantity: 1,
    description: "pewter-plated charm bracelet. one size fits most"
)
file5 = open('https://artsy-store-seed.s3.amazonaws.com/charm-bracelet.jpg')
product5.photo.attach(io: file5, filename: 'charm-bracelet.jpg')

product6 = Product.create!(
    product_name: "Badminton Set",
    seller_id: user7.id,
    price: 25,
    quantity: 2,
    description: "handcrafted wooden rackets and net"
)
file6 = open('https://artsy-store-seed.s3.amazonaws.com/badminton.jpg')
product6.photo.attach(io: file6, filename: 'badminton.jpg')

product7 = Product.create!(
    product_name: "Cozy Candle Set",
    seller_id: user6.id,
    price: 7,
    quantity: 40,
    description: "hand-dipped tea candles perfect for cozy settings and mood lighting"
)
file7 = open('https://artsy-store-seed.s3.amazonaws.com/candles.jpg')
product7.photo.attach(io: file7, filename: 'candles.jpg')

product8 = Product.create!(
    product_name: "Cornhole Set",
    seller_id: user4.id,
    price: 80,
    quantity: 1,
    description: "vintage plywood cornhole set"
)
file8 = open('https://artsy-store-seed.s3.amazonaws.com/cornhole.jpg')
product8.photo.attach(io: file8, filename: 'cornhole.jpg')

product9 = Product.create!(
    product_name: "Custom Art",
    seller_id: user2.id,
    price: 150,
    quantity: 30,
    description: "I turn pictures into art!"
)
file9 = open('https://artsy-store-seed.s3.amazonaws.com/custom-art.jpg')
product9.photo.attach(io: file9, filename: 'custom-art.jpg')

product10 = Product.create!(
    product_name: "Custom Banner",
    seller_id: user7.id,
    price: 17,
    quantity: 100,
    description: "I turn pictures into art!"
)
file10 = open('https://artsy-store-seed.s3.amazonaws.com/custom-banner.jpg')
product10.photo.attach(io: file10, filename: 'custom-banner.jpg')

product11 = Product.create!(
    product_name: "Floral Lamp Shades",
    seller_id: user4.id,
    price: 300,
    quantity: 4,
    description: "These floral lamp shades are statement pices for any living space."
)
file11 = open('https://artsy-store-seed.s3.amazonaws.com/floral-lamp-shades.png')
product11.photo.attach(io: file11, filename: 'floral-lamp-shades.png')

product12 = Product.create!(
    product_name: "Custom-painted Pokemon Vans",
    seller_id: user4.id,
    price: 70,
    quantity: 3,
    description: "Custom painted pokemon vans siz 10 mens."
)
file12 = open('https://artsy-store-seed.s3.amazonaws.com/pokemon-vans.jpg')
product12.photo.attach(io: file12, filename: 'pokemon-vans.jpg')

product13 = Product.create!(
    product_name: "Starry Shawl",
    seller_id: user2.id,
    price: 62,
    quantity: 1,
    description: "Star-studded shawl"
)
file13 = open('https://artsy-store-seed.s3.amazonaws.com/starry-shawl.jpg')
product13.photo.attach(io: file13, filename: 'starry-shawl.jpg')

product14 = Product.create!(
    product_name: "Watercolors - Primary Colors",
    seller_id: user7.id,
    price: 18,
    quantity: 4,
    description: "Work great on canvases and heavy paper"
)
file14 = open('https://artsy-store-seed.s3.amazonaws.com/watercolors.jpg')
product14.photo.attach(io: file14, filename: 'watercolors.jpg')

product15 = Product.create!(
    product_name: "Wedding Dress",
    seller_id: user3.id,
    price: 300,
    quantity: 1,
    description: "Lightly worn sequened wedding dress with train"
)
file15 = open('https://artsy-store-seed.s3.amazonaws.com/wedding-dress.jpg')
product15.photo.attach(io: file15, filename: 'wedding-dress.jpg')

product16 = Product.create!(
    product_name: "Wooden Animals",
    seller_id: user6.id,
    price: 30,
    quantity: 1,
    description: "Great for all ages!"
)
file16 = open('https://artsy-store-seed.s3.amazonaws.com/wooden-animals.jpg')
product16.photo.attach(io: file16, filename: 'wooden-animals.jpg')

product17 = Product.create!(
    product_name: "Antique Coke Machine",
    seller_id: user2.id,
    price: 120,
    quantity: 1,
    description: "Excellent piece of decor for the antique coke enthusiast"
)
file17 = open('https://artsy-store-seed.s3.amazonaws.com/antique-coke-machine.jpg')
product17.photo.attach(io: file17, filename: 'antique-coke-machine.jpg')

product18 = Product.create!(
    product_name: "Dog Bandana",
    seller_id: user3.id,
    price: 15,
    quantity: 25,
    description: "Wonderful gift for the dog lover in your life!"
)
file18 = open('https://artsy-store-seed.s3.amazonaws.com/dog-bandana.png')
product18.photo.attach(io: file18, filename: 'dog-bandana.png')

product19 = Product.create!(
    product_name: "Family Quilt",
    seller_id: user7.id,
    price: 75,
    quantity: 1,
    description: "One-of-a-kind gift made custom based on photos you provide"
)
file19 = open('https://artsy-store-seed.s3.amazonaws.com/family-quilt.jpg')
product19.photo.attach(io: file19, filename: 'family-quilt.jpg')

product20 = Product.create!(
    product_name: "Glass Wind Chimes",
    seller_id: user6.id,
    price: 50,
    quantity: 8,
    description: "Made out of reclaimed sea glass"
)
file20 = open('https://artsy-store-seed.s3.amazonaws.com/glass-wind-chimes.jpg')
product20.photo.attach(io: file20, filename: 'glass-wind-chimes.jpg')

product21 = Product.create!(
    product_name: "Orange Earrings",
    seller_id: user5.id,
    price: 14,
    quantity: 40,
    description: "Cute summer vibes!"
)
file21 = open('https://artsy-store-seed.s3.amazonaws.com/orange-earrings.jpg')
product21.photo.attach(io: file21, filename: 'orange-earrings.jpg')

review1 = Review.create!(
    author_id: user3.id,
    product_id: product1.id,
    rating: 4,
    comment: "wonderful handwoven rug, was a little raggedy in places"
)

review2 = Review.create!(
    author_id: user2.id,
    product_id: product1.id,
    rating: 1,
    comment: "I've seen better rugs on the curb for free"
)

review3 = Review.create!(
    author_id: user2.id,
    product_id: product2.id,
    rating: 5,
    comment: "As someone who loves planting...this is THE perfect pot! Look no further."
)

review4 = Review.create!(
    author_id: user3.id,
    product_id: product2.id,
    rating: 3,
    comment: "This pot didn't hold up too well when I put my cactus in it. Worked well for other plants though"
)

review5 = Review.create!(
    author_id: user4.id,
    product_id: product2.id,
    rating: 4,
    comment: "Really quality pot! It's held up in my garden even after several hurricanes swept through"
)

review6 = Review.create!(
    author_id: user2.id,
    product_id: product3.id,
    rating: 1,
    comment: "These are the kind of erasers that leave the BLACK RUB MARKS after you use them >:( 0/10"
)

review7 = Review.create!(
    author_id: user6.id,
    product_id: product3.id,
    rating: 2,
    comment: "I have bought from this seller many times with excellent results. I'm disappointed they didn't carry through with their quality this time."
)

review8 = Review.create!(
    author_id: user7.id,
    product_id: product3.id,
    rating: 3,
    comment: "They smell good! And they work great! I just wish I could EAT them!"
)

review9 = Review.create!(
    author_id: user4.id,
    product_id: product3.id,
    rating: 5,
    comment: "Bought these for my kids. They can't get enough of them!"
)

review10 = Review.create!(
    author_id: user5.id,
    product_id: product4.id,
    rating: 5,
    comment: "I've been hesitant to buy plants online in the past, but this seller was careful and delicate in their packing. This monstera deliciosa looks beautiful in my kitchen."
)

review11 = Review.create!(
    author_id: user2.id,
    product_id: product4.id,
    rating: 5,
    comment: "This lush plant is the statement piece of my living room!"
)

review12 = Review.create!(
    author_id: user3.id,
    product_id: product5.id,
    rating: 4,
    comment: "I love the charms! The fit is a little loose"
)

review13 = Review.create!(
    author_id: user7.id,
    product_id: product5.id,
    rating: 4,
    comment: "I wish they had more charm selections..."
)

review14 = Review.create!(
    author_id: user4.id,
    product_id: product6.id,
    rating: 1,
    comment: "Cheap rackets! The set broke a week after we bought it!"
)

# review4 = Review.create!(
#     author_id: ,
#     product_id: ,
#     rating: ,
#     comment: ""
# )


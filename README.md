# Artsy
![Artsy Screenshot](/app/assets/images/artsy-screenshot.png)

# Summary
[Artsy](https://artsy-store.herokuapp.com/#/) is a single-page, full-stack web application clone of Etsy's e-commerce site built with Ruby on Rails, ReactJS, and Redux. Artsy allows users to: 

* Create an account
* Sign up / Log in / Log out
* Add, edit, and delete products
* View detailed information on each product
* Review (rating and comment) products
* Add products to cart
* View total cost of carted items
* Search all products in store
* View products by category

# Structure

**Back end**

Artsy is built on a Ruby on Rails backend with a postgreSQL databse architecture. The back end is built using RESTful routes and JSON-formatted AJAX requests. The data associations minimize necessary SQL queries and create faster refresh. 

**Front end**

The frontend is built with ReactJS components to allow for page refreshes without server requests. 

**Libraries**

Artsy uses:

* ReactJS
* BCrypt for user authorization
* AWS S3 for updating and displaying product images

# Primary Components 

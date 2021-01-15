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

# Structure

**Back end**

Artsy is built on a Ruby on Rails backend with a postgreSQL databse architecture. The back end is built using RESTful routes and JSON-formatted AJAX requests. The data associations minimize necessary SQL queries and create faster refresh. 

**Front end**

The frontend is built with ReactJS components to allow for page refreshes without server requests. 

**Libraries**

Artsy uses:

* [ReactJS](https://reactjs.org/)
* [BCrypt](https://www.npmjs.com/package/bcrypt) for user authorization
* [AWS S3](https://aws.amazon.com/s3/) for updating and displaying product images

# Primary Components 

**User Authorization**

![](/app/assets/gifs/user_authorization.gif)

**Products**

![](/app/assets/gifs/products.gif)

**Reviews**

![](/app/assets/gifs/reviews.gif)

**Search**

![](/app/assets/gifs/search.gif)

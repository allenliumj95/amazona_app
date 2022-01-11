import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Bob",
      email: "bob@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: "Puma",
        logo: "/images/logo1.png",
        description: "best seller",
        rating: 4.5,
        numReviews: 120,
      },
    },
    {
      name: "John",
      email: "john@gmail.com",
      password: bcrypt.hashSync("1234", 8),
    },
  ],
  products: [
    {
      name: "Nike Slim Shirt",
      category: "Shirts",
      image: "/images/p1.jpg",
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Adidas Fit Shirt",
      category: "Shirts",
      image: "/images/p2.jpg",
      price: 100,
      countInStock: 20,
      brand: "Adidas",
      rating: 3.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Locaste Free Shirt",
      category: "Shirts",
      image: "/images/p3.jpg",
      price: 220,
      countInStock: 0,
      brand: "Locaste",
      rating: 3,
      numReviews: 17,
      description: "high quality product",
    },
    {
      name: "Nike Slim Pant",
      category: "pant",
      image: "/images/p4.jpg",
      price: 78,
      countInStock: 15,
      brand: "Nike",
      rating: 3.8,
      numReviews: 14,
      description: "high quality product",
    },
    {
      name: "Puma Slim Pant",
      category: "puma",
      image: "/images/p5.jpg",
      price: 65,
      countInStock: 5,
      brand: "Puma",
      rating: 4.8,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Adidas Fit Pant",
      category: "Pant",
      image: "/images/p6.jpg",
      price: 139,
      countInStock: 12,
      brand: "Adidas",
      rating: 4.5,
      numReviews: 15,
      description: "high quality product",
    },
  ],
};

export default data;

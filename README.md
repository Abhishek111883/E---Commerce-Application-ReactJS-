# E-Commerce Website

Welcome to our E-Commerce Website repository! This project is a full-stack web application built using React.js for the frontend, and Node.js with MongoDB for the backend. It includes features such as user authentication (login and register), product categories for men's, women's, kids', and jewelry, dark mode functionality, a shopping cart with memory, total bill calculation, free shipping, and discounts via promo codes.

## Installation

1. **Navigate to the project directory:**

    ```bash
    cd e-commerce-website
    ```

2. **Install dependencies for both frontend and backend:**

    ```bash
    cd client && npm install
    cd ../server && npm install
    ```

3. **Set up environment variables:**
   - Create a `.env` file in the `server` directory.
   - Define the following variables:
     - `MONGODB_URI`: MongoDB connection string.
     - `JWT_SECRET`: Secret key for JWT token generation.

4. **Run the frontend and backend concurrently:**

    ```bash
    cd .. && npm run dev
    ```

5. **Access the application in your browser at** `http://localhost:3000`.

## Usage

- Visit the website and explore different categories.
- Register or log in to access additional features like adding items to the cart.
- Browse products, add them to the cart, and proceed to checkout.
- Apply promo codes for discounts.
- Enjoy a seamless shopping experience with dark mode and easy navigation.

## Additional Topics

- **Testing**:
  - Explore and run tests for both frontend and backend to ensure application stability.
  
- **Deployment**:
  - Instructions for deploying the application to production servers or cloud platforms.
  
- **API Documentation**:
  - Detailed documentation of the backend API endpoints for developers to integrate with.
  
- **Contributing Guidelines**:
  - Guidelines for contributing to the project, including code style, issue reporting, and pull request procedures.
  
- **Troubleshooting**:
  - Common issues and their solutions for developers and users encountering problems with the application.

## Contributing

Contributions are welcome! If you have any suggestions, bug fixes, or additional features you'd like to see, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

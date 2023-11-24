# Instagram-Clone

This project is a full-stack Instagram clone implemented using React.js for the front end, Node.js for the back end, and MongoDB for database storage. The application replicates key features of Instagram, including user authentication, image uploading, follow functionality, and the ability to like posts.

## Tech Stack

- **Frontend:**

  - React.js
  - HTML5/CSS3

- **Backend:**

  - Node.js
  - Express.js

- **Database:**
  - MongoDB

## Features

- **User Authentication:** Secure user registration and login functionality.
- **Image Uploading:** Users can upload images with captions.
- **Follow Functionality:** Users can follow/unfollow other users.
- **Like Feature:** Users can like and unlike posts.

## Setup Instructions

1. Clone the repository.

   ```bash
   git clone https://github.com/ShridharKandikatla/Instagram-Clone.git
   cd Instagram-Clone
   ```

2. Install dependencies for the frontend and backend.

   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

3. Set up the MongoDB database and configure the connection in the backend.

   - Create a `.env` file in the `server` directory.
   - Add your PORT Number `PORT=your-port-number`
   - Add your MongoDB connection string as `MONGO_URI=your-mongodb-uri`.

4. Run the application.

   ```bash
   # In the backend directory
   node index.js

   # In the frontend directory
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to access the Instagram clone.

Feel free to explore and contribute to this project! If you encounter any issues or have suggestions, please create an issue in the repository.

# Social Media App

## Overview

This social media app is a platform that allows users to connect, share posts, comment, like, and manage their relationships with other users.

## Features

### 1. User Authentication

- **User Registration:**
  - [x] Checks for unique usernames.
  - [x] Hashes passwords securely.
  - [x] Inserts user details into the database.

- **User Login:**
  - [x] Retrieves user information based on the provided username.
  - [x] Generates JWT for successful logins.
  - [x] Sets JWT as an HTTP-only cookie ("accessToken").

- **User Logout:**
  - [x] Clears the "accessToken" cookie for logout.

### 2. User Profile

- **Get User Details:**
  - [x] Retrieves user details excluding sensitive information.

- **Update User Profile:**
  - [x] Verifies the user's identity using JWT.
  - [x] Updates user profile details in the database.

### 3. Post Management

- **Get Posts:**
  - [x] Retrieves posts with optional filtering based on user ID.
  - [x] Includes posts from followed users.

- **Add a New Post:**
  - [x] Verifies the user's identity using JWT.
  - [x] Inserts a new post into the database.

- **Delete a Post:**
  - [x] Verifies the user's identity using JWT.
  - [x] Deletes a post from the database.

### 4. Comment System

- **Get Comments for a Post:**
  - [x] Retrieves comments for a specific post.
  - [x] Includes user information for each commenter.

- **Add a Comment to a Post:**
  - [x] Verifies the user's identity using JWT.
  - [x] Inserts a new comment into the database.

### 5. Like System

- **Get Likes for a Post:**
  - [x] Retrieves user IDs of users who liked a post.

- **Add a Like to a Post:**
  - [x] Verifies the user's identity using JWT.
  - [x] Inserts a new like into the database.

- **Remove a Like from a Post:**
  - [x] Verifies the user's identity using JWT.
  - [x] Deletes a like from the database.

### 6. User Relationships

- **Get Followers or Following Users:**
  - [x] Retrieves user IDs of followers or following users.

- **Add a New Follower:**
  - [x] Verifies the user's identity using JWT.
  - [x] Inserts a new relationship into the database.

- **Remove a Follower:**
  - [x] Verifies the user's identity using JWT.
  - [x] Deletes a relationship from the database.

### 7. File Upload

- **Supports File Uploads (`/api/upload`):**
  - [x] Handles file uploads using Multer middleware.
  - [x] Responds with the filename of the uploaded file.

### 8. Middleware

- [x] CORS middleware for cross-origin resource sharing.
- [x] Cookie parser middleware for parsing cookies.
- [x] Multer middleware for handling file uploads.

### 9. Database Connection

- **MySQL Database Connection (`connect.js`):**
  - [x] Configures a connection to the MySQL database.

### 10. Security Measures

- **Password Security:**
  - [x] Uses bcrypt for secure password hashing.
- **JWT for Authentication:**
  - [x] Implements JWTs for secure user authentication.
- **Cookie Security:**
  - [x] Sets "httpOnly" flag for cookies to enhance security.

### 11. To Dos

- Enables users to create and view friends' stories
- Add any other missing functionalities for each button/icon


[Last Edited Date: 28/12/2023]

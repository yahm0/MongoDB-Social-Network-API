# MongoDB-Social-Network-API

This is a Social Network API developed using Node.js, Express, and MongoDB. It supports user interactions like posting thoughts, reacting to others' thoughts, and managing friendships. It leverages MongoDB's capabilities to handle large amounts of unstructured data, making it ideal for a scalable social network platform.

## Technologies

- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database designed for scalability and performance.
- **Mongoose**: MongoDB object modeling tool designed to work in an asynchronous environment.

## Getting Started

### Prerequisites

You need to have Node.js and MongoDB installed on your system to run this project. You can download them from:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installation

Clone the repository and install its dependencies:

```bash
git clone git@github.com:yahm0/MongoDB-Social-Network-API.git
cd mongodb-social-network-api
npm install
```

### Running the Application

Start the application with:

```bash
npm start
```

The API will be available at `http://localhost:3000`.

## API Routes

The application supports several routes for managing users and their interactions:

### Users

- **GET `/api/users`**: Find all users.
- **POST `/api/users`**: Create a user.
- **GET `/api/users/{userId}`**: Retrieve a user by ID.
- **PUT `/api/users/{userId}`**: Update a user by ID.
- **DELETE `/api/users/{userId}`**: Delete a user by ID.

### Friends

- **POST `/api/users/{userId}/friends/{friendId}`**: Add a friend.
- **DELETE `/api/users/{userId}/friends/{friendId}`**: Remove a friend.

### Thoughts

- **GET `/api/thoughts`**: Retrieve all thoughts.
- **POST `/api/thoughts`**: Post a new thought.
- **GET `/api/thoughts/{thoughtId}`**: Retrieve a thought by ID.
- **PUT `/api/thoughts/{thoughtId}`**: Update a thought by ID.
- **DELETE `/api/thoughts/{thoughtId}`**: Delete a thought by ID.

### Reactions

- **POST `/api/thoughts/{thoughtId}/reactions`**: React to a thought.
- **DELETE `/api/thoughts/{thoughtId}/reactions/{reactionId}`**: Remove a reaction.

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

## License

Distributed under the MIT License. See `LICENSE` for more information.
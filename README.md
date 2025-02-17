# Mock APIs Task
  -Task Link : (https://syntheia.atlassian.net/browse/SG3-3329)

 ## Overview

This project integrates a mock API to perform CRUD operations on posts. 
The application is built using **React**, with state management handled by **Redux Toolkit (RTK)**, 
and UI components styled using **Material-UI (MUI)**.

## API Integration

- Integrated **JSONPlaceholder** API for CRUD operations.
- **Endpoints Used**:
  - `GET /posts` - Get all posts
  - `GET /posts/:id` - Get a single post
  - `POST /posts` - Create a new post
  - `PUT /posts/:id` - Update a post
  - `DELETE /posts/:id` - Delete a post
- API Documentation: [JSONPlaceholder API](https://jsonplaceholder.typicode.com)

## State Management

- **Redux Toolkit (RTK)** used for managing the posts state.

## UI Components

- Built the UI using **Material-UI (MUI)** components, following Abdalla's design.
- Design reference: [Figma Design](https://www.figma.com/design/hK5Qq5LVPZeSqz0kIfdr79/Form?node-id=0-1&p=f&t=FojJP9Dsm6znBwvu-0)

## Form Handling (Bonus)

- Implemented **React Hook Form** for handling forms when creating and updating posts.

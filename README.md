# Joke API

This is a simple Joke API built with Node.js and Express. It serves random jokes from two categories: dark jokes and general jokes.

Disclaimer: The dark jokes are really dark so dont get offended.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/11William/JokeApi.git
    ```

2. Navigate to the project directory:
    ```sh
    cd JokeApi
    ```

3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the server:
    ```sh
    node main.js
    ```

2. The server will run on port `6921` by default.

## API Endpoints

### Get a Random Dark Joke

- **URL:** `/darkJoke`
- **Method:** `GET`
- **Description:** Returns a random dark joke.
- **Response:**
    ```json
    {
        "id": 1,
        "joke": "Where did Billy go after getting lost on a minefield? Everywhere....."
    }
    ```

### Get a Random General Joke

- **URL:** `/joke`
- **Method:** `GET`
- **Description:** Returns a random general joke.
- **Response:**
    ```json
    {
        "id": 1,
        "joke": "Why did the tomato turn red? Because it saw the salad dressing!"
    }
    ```

## Docker Setup

### Prerequisites
- Docker installed on your system
- Docker Compose (optional, but recommended)

### Building and Running with Docker

#### Option 1: Using Docker directly

1. Build the Docker image:
    ```sh
    docker build -t joke-api .
    ```

2. Run the container:
    ```sh
    docker run -p 6921:6921 joke-api
    ```

#### Option 2: Using Docker Compose (Recommended)

1. Start the application:
    ```sh
    docker-compose up -d
    ```

2. Stop the application:
    ```sh
    docker-compose down
    ```

#### Option 3: Using npm scripts

1. Build the image:
    ```sh
    npm run docker:build
    ```

2. Run the container:
    ```sh
    npm run docker:run
    ```

3. Or use Docker Compose:
    ```sh
    npm run docker:compose
    ```

### Accessing the API

Once the container is running, the API will be available at:
- **Base URL:** `http://localhost:6921`
- **Dark Jokes:** `http://localhost:6921/darkJoke`
- **General Jokes:** `http://localhost:6921/joke`

## File Structure

- [main.js](http://_vscodecontentref_/1): The main server file that contains the API logic.
- [darkJokes.json](http://_vscodecontentref_/2): JSON file containing dark jokes.
- [jokes.json](http://_vscodecontentref_/3): JSON file containing general jokes.
- `Dockerfile`: Docker configuration for building the container image.
- `docker-compose.yml`: Docker Compose configuration for easy deployment.
- `.dockerignore`: Specifies files to exclude from the Docker build context.

## Example

To get a random dark joke, send a GET request to `http://localhost:6921/darkJoke`. The response will be a JSON object containing the joke and its ID.

To get a random general joke, send a GET request to `http://localhost:6921/joke`. The response will be a JSON object containing the joke and its ID.

## License

This project is licensed under the MIT License.

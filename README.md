# SWS-Serverless-Initializr-Tool

This project is a web application built using React.js and Material-UI for the frontend and Node.js for the backend. It allows users to generate a Spring Boot project by selecting various options.

## Features

- Add a custom features here

## Prerequisites

Make sure you have the following installed on your local development environment:

- [Node.js](https://nodejs.org/) (v12.x or later)
- [npm](https://www.npmjs.com/) (v6.x or later) or [yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/dnbr2002/AWS-Serverless-Initializr-Tool.git
   cd spring-initializr-clone
   ```

2. Install dependencies for the backend:

   ```sh
   cd server
   npm install
   ```

3. Install dependencies for the frontend:

   ```sh
   cd ../client
   npm install
   ```

## Running the Application

1. Start the Node.js backend server:

   ```sh
   cd server
   npm start
   ```

   The backend server will start on `http://localhost:5000`.

2. Start the React frontend:

   ```sh
   cd ../client
   npm start
   ```

   The frontend will start on `http://localhost:3000`.

3. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Project Structure

```
AWS-Serverless-Initializr-Tool/
├── client/                     # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── theme.js
│   ├── package.json
│   └── ...
├── server/                     # Node.js backend
│   ├── routes/
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   └── ...
├── README.md
└── ...
```

## Customization

### Changing the Theme

The theme of the Material-UI components can be customized in the `client/src/theme.js` file. Adjust the `palette` property to change colors and other styling options.

### Adding More Fields

To add more fields to the form, update the `Home` component in `client/src/App.js`. Add the necessary state variables and form controls to manage the new fields.

## Contributing

Feel free to open issues or submit pull requests if you have any suggestions or improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

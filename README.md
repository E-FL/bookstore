# Cyber Bookstore Interface Assignment

## Objective
Create a user-friendly web interface for a cyber-themed bookstore using data from the Google Books API.

### API Endpoint
- **Google Books API**

### API Documentation
- [Google Books API Docs](https://developers.google.com/books)

## Requirements

### Catalog Display
- Display books from the Google Books API in your catalog.
- Each catalog item should include a book title and display its cover image if available.
- Implement pagination buttons for navigating through the catalog (previous and next).

### Page Size Options
- Provide users with the ability to select the number of items displayed per page.
- Include page size options: 10, 25, and 50 items. Page size of 50 is mandatory.

### Bonus Features
- Deploy your application to a hosting platform of your choice.
- Implement a shopping cart that allows users to select multiple books.

## Development Guidelines
- Prioritize clean and maintainable code.
- Ensure robustness: Write code that is adaptable and robust to easily integrate future features like a search box or a purchase form. Focus on modularity, clear separation of concerns, and scalability.
- Avoid over-engineering; follow the "Keep It Simple, Stupid" (KISS) principle.
- While a fancy UI design is not necessary, ensure that the interface is visually pleasant.
- You are free to use external libraries as needed, but remember that your code should showcase your skills.

## Suggested Approach
- Begin by creating a function that interacts with the Google Books API and returns relevant data fields.
- Develop a React component that utilizes this function to fetch and render book items. Include an initial state for an empty catalog.

Your task is to build a functional and user-friendly cyber bookstore interface while adhering to these guidelines. Good luck!

#

---

# Running the Project (TBD)
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

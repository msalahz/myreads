# MyReads Project

This is the project for Udacity's React Fundamentals course. 

The application include two pages:
1. main page `/`: It allow listing and moving books between the following categories `Currently Reading` or `Want to Read` or `Read` or `none` to remove book category.
2. search page `/search`: It allow searching books and moving books between the categories mentioned above

## TL;DR

To install and lunch the application:

* clone the repo `git pull git@github.com:msalahz/myreads.git`
* get inside project directory `cd myreads`
* install all project dependencies with `npm install`
* start the development server with `npm start`
* the application should be accessible on `http://localhost:3000/` in any browser 

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE).
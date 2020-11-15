# Hacker News Algolia API Search

## Description

If you've ever wanted a simple React search component for the Hacker News Algolia API, then you'll like this project. As a web user, you can use the app to search and display results from the Hacker News Algolia API. As a developer, you can easily incorporate the included components and the accompanying Redux action creators and reducer in your existing app, or build up your app from here.

## Functionality

The app contains the App, SearchForm, Card and CardList components. It allows the user to enter text in the input of the SearchForm and it returns and displays search results from the Hacker News Algolia API.

## Installation Instructions

### 1. Clone the repo from GitHub

Navigate to the directory where you'd like to store the app, and enter the following command into git bash:

`git clone https://github.com/dvwhite/react-redux-search`

This will copy the repo into a folder in the directory you navigated to in git bash.

### 2. Run Installation Commands

Ensure that you have installed the requirements to run `npm`. The following article will walk you through first time installation:
(Installing Nodejs and npm)[https://docs.npmjs.com/downloading-and-installing-node-js-and-npm].

In the terminal or git bash, run the following command:

`npm install`

This will initiate an installation of the npm packages required to run the React app.

### 3. Start the Dev Server

Once you have installed the project's npm packages, enter the following command into terminal or git bash to start the development server:

`npm start`

The development server will start on the configured port (the default is port 3000, but can be set to a different value by setting the PORT environment variable). The page will load, and once React renders the app, you can begin using it.

You've now completed the installation.

## Technologies Used

The Hacker News Algolia API Search app utilizes the following technologies:

- React - To render the user interface using component-based development
- Redux - To persist search terms entered by the user
- The Hacker News Algolia API ((https://hn.algolia.com/api)[https://hn.algolia.com/api])
- Node/npm - To install and manage npm packages

## Project Requirements

The project specification contains the following requirements:

1. Build an application that lets the user search the Hacker News Algolia API
   The user interface contains a centered search input where the user can enter search terms. Clicking the `submit` button sends the search terms to the API as a `GET` request to `https://hn.algolia.com/api/v1/search?query=[search terms]&tags=story`, with encoded search terms in place of `[search terms]`.

2. The application should display a list of search results from the API
   A list of search results renders once the Hacker News Algolia API returns at least one search result. The results are a series of story objects. The `StoryList` component displays below the search bar with a `Story` component for each search result returned. The `Story` copmonents were styled to closely match the Hacker News interface.

3. Search terms entered by the user should be saved in Redux state
   The application utilizes the `redux` and `react-redux` packages to save the search terms to the `Redux` store after the user submits a search in the search form. The search terms are saved as-is, since whitespace can influence the search results returned. If you wanted to include a list of search terms entered in the app, the data would just need to be retrieved from the `Redux` store.

## Conclusion

I hope that you enjoy this project. It certainly was a lot of fun to create!

This is my second public source project. Feedback is always appreciated!

# How to run Contact Management System from GitHub repository

The Contact Management System is a web application that allows users to manage their contacts. This guide will walk you through the steps to run the application on your local machine or to view the live app hosted on Azure.

## Prerequisites

Before you start, make sure you have the following installed on your machine:

- Node.js (version 14 or later)
- Docker (optional)

## Run the application locally

To run the application on your local machine, follow these steps:

1. Clone the repository from GitHub: git clone https://github.com/mjspk/cms.git
2. Navigate to the client directory: cd cms/client
3. Install the dependencies: npm install
4. Start the application: npm run dev

This will start the back-end API and the front-end client concurrently. You can navigate to [http://172.24.76.197:8080/](http://172.24.76.197:8080/) to view the application in your web browser.

Note: If you are unable to access the application at [http://172.24.76.197:8080/](http://172.24.76.197:8080/) try replacing the IP address with "localhost" instead.

Alternatively, you can run the application using Docker:

1. Navigate to the root directory: cd cms
2. Build the Docker image: docker-compose up --build

This will build and serve the application through nginx. You can navigate to http://localhost:80 to view the application in your web browser.

## View the live app hosted on Azure

You can also view the live app hosted on Azure by visiting [https://cms-tst.azurewebsites.net/](https://cms-tst.azurewebsites.net/). This allows you to use the application without having to run it on your local machine.

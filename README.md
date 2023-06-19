<a name="readme-top"></a>

<!-- ABOUT THE PROJECT -->
## About The Project 


<img width="1440" alt="Screenshot 2023-06-19 at 10 40 00" src="https://github.com/MuhammadMurodbek/next_app/assets/74315406/b556a0ba-b54b-4911-b0b8-60a7466bac78">


This is the web application was build by NextJS framework. The purpose of project that is managing clients as well as show client's profile, changing allowed fields by the user. In that project you will have to create a user to work with clients' data. User allowed to filter the list of users by given fields. Apart from these The user can change the status.


### Built With

This section should list any major frameworks/libraries used to bootstrap my project. Here are a few examples.

* [![Next][Next.js]][Next-url]
* Prisma ORM for database
* React hook form


<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites (optional)

This is an example of how to list things we need to use the software and how to install them. 
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone  https://github.com/MuhammadMurodbek/next_app.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run Prisma database
  ```sh
   npx prisma studio
   ```
4. Run web application on localhost:3000 port
  ```sh
   next dev
   next start --port ${PORT-3000}
   ```
5. You may also start testing.
  ```sh
  npm test
 ```
 

<!-- USAGE EXAMPLES -->
## Usage

1. Page: Creating user. '/user'
   In this section you have to create a user then you will be allowed to create a user. I have used ONE-TO-MANY relationship between user and clients on my database. 
<img width="1437" alt="Screenshot 2023-06-19 at 10 39 27" src="https://github.com/MuhammadMurodbek/next_app/assets/74315406/c0c2e10f-4fb3-4503-bee1-f542e2ec1abc">



2. Page: The list of clients.
   Here we can show the list of clients that are related to selected user.
<img width="1440" alt="Screenshot 2023-06-19 at 10 40 00" src="https://github.com/MuhammadMurodbek/next_app/assets/74315406/21bd3a5c-d6d1-42d9-ac3a-b5a2ce56d603">

3. Page: Create client. 
   Here we can show how to create clients. There are several required fields.  
   - Name, 
   - Organizations
   - Mail
   - Phone
   - Status
   
<img width="1188" alt="Screenshot 2023-06-19 at 11 01 16" src="https://github.com/MuhammadMurodbek/next_app/assets/74315406/4790ac50-4a01-4428-91b0-45b4497ca186">


4. Page: Edit client's status. 
   Here we can show how to edit clients.  
  
   <img width="1185" alt="Screenshot 2023-06-19 at 11 08 25" src="https://github.com/MuhammadMurodbek/next_app/assets/74315406/a83e201e-e267-410f-960f-6946d8dd122a">

## Validations
Used React-hook-form

<img width="1191" alt="Screenshot 2023-06-19 at 11 05 12" src="https://github.com/MuhammadMurodbek/next_app/assets/74315406/c4ad1145-da56-4d52-b0cb-a126bfa524f4">


## Roadmap

-  Add User
-  List of Clients
-  Create client
-  Edit client
-  Show client's info

<!-- CONTRIBUTING -->
## Troubleshoots
There was a troubleshoot with filtering by date range. While writing this documentation I decided to note about troubleshoots in my project.  I couldn't implement this feature. There were some problems with ORM  When I make query for getting filterd list. I got several errors that related to this issue. 'createdAt' field was not exist in response. I've searched on google to solve this issue. Here is a list of some urls.

https://github.com/prisma/prisma/discussions/11443
https://www.prisma.io/docs/concepts/components/prisma-client/filtering-and-sorting
https://lightrun.com/answers/prisma-prisma-groupby-and-aggregate-over-date-ranges

This error may causing after the new version of Next. It seems that issue depends on versions.

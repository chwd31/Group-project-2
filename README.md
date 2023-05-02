# Group-project-2
            
## Description
    
This our second project of our bootcamp. This application is called "My Recipe App," and it is essentially a blog site where users can post recipes and view others' recipes. This application is our first big full stack project, focusing mainly on back-end, and it was an amazing learning experience for us. The idea for this project came from one of our group members who loves to cook. When we were bouncing around ideas to decide what we wanted to do for our project she said that she wanted a space to share her recipes and find others. This application took a good bit of effort, we had a lot of back and forth with errors, but eventually got it snagged out. We hope that this project will help other new developers with their first full stack projects and make it a little easier. Here is a link to the deployed application: 
    
## Table of Contents
[Title](#-group-project-2)

[Description](##-description)

[Visuals](##-visuals)
  
[Installation Instructions](##-installation)

[Usage Information](##-usage)

[License](##-license)

[Contribution](##-contribution)

[Test Instructions](##-tests)

[Questions](##-questions)

## Visuals

Here are some simple visuals of what the application should look like in the browser, and some of examples of what you might need to type in order to get your server running.
    
## Installation
    
To use this application, you will need to have Node.js installed on your desktop. Once in your code editor of choice, you will need to open your terminal and initialize npm with the command: npm init. Once you have npm initialized, you will install npm with the command: npm install. To install all of the dependencies that we have used for this project you will use the command: npm i express sequelize mysql2 express-session bcrypt express-handlebars dotenv connect-session-sequelize handlebars path. In order to install nodemon, you will need to use the command: npm i nodemon --save-dev.
            
## Usage
    
This application is used to post recipes and view others' recipes. Once in your terminal you will type the command `mysql -u root -p`. You will then be prompted to enter your password which you should have also put into your '.env' file. You will then source your schema file, and quit mysql. You will then need to enter your seeds folder and type the command `npm run seed`. This will seed your database and create the tables that you need for your information. Lastly, to get your server running, you will need to type the command: `npm run start`. Your server will then start and you can then go to the deployed site. Once at the site, a user can view posts without logging in; however, they will need to create an account or sign in to post on the site. To post a recipe, they will follow a guideline to enter a title, description, ingredients, and directions. If they go to the profile portion of the application, they will be able to view their own applications, with the option to delete any of them. 
    
## License 

This application is covered under the MIT License. For further explanation of what this license does please visit this provided link:  https://opensource.org/licenses/MIT
    
## Contribution
    
The contributors for this project are [Chad Ward](https://github.com/chwd31), [Buddhasak Vongsavath](https://github.com/SirTumtums), [Matthew Duncan](https://github.com/MTDuncan), [Olivia Gilbert](https://github.com/umhello2020), and [Karim Baptiste](https://github.com/KarimB101). If you click on the names of the individuals, you will be taken to their personal GitHub profiles.
  
## Tests
  
You can run the command "npm run watch" to use nodemon so you can keep the server running while you continue making changes without having to restart the server. Other than that there are no other tests for you to run.
  
## Questions
If you have any additional questions, you may reach us at our individual GitHubs. 
  
# MIMT-Mobile
Java-MEAN-Project2
  App not deployed
* Angular single page app
* Spring Boot back-end
* SQL database
* Auth cookie

* A portal for users to interact with their phone plans

![image](https://user-images.githubusercontent.com/87092340/223790395-843e8a97-1a13-447f-8518-52ee5a39bec0.png)

## Installation
  Clone repo from github, install node and dependencies in the client folder.
  
## Usage
To start the app:
> cd into client, run "ng serve -o" in the command line
>
>> alternatively, run "ng serve" in the command line and visit URL 'http://localhost:4200/'

> cd into server, run "./mvnw spring-boot:run"
>
>> this must be run in a java environment and Maven installed and configured.

> to create local database in MySQL Workbench, copy and run the schema.sql file found in server/src/main/resources
>
>> Also view application.properties to match parameters
>> 

Creating a new user will take you back to the login page. Login using credentials and click on the "Add Plan" button to view the options. Choose the right plan for you and add mobile numbers and device names as necessary.

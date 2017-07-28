# Server_App

This project allows user to access REST methods from Client_APP [https://github.com/PreetamJ/Client_App]. Methods let client app to read and store in MongoDB Hierarchy collection.

## Getting Started
Download/clone projects to local machine from CLient_App and Server_App projects from below URLs
```
Client_App : https://github.com/PreetamJ/Client_App
Server_App : https://github.com/PreetamJ/Server_App
```
Edit application.properties file located under Server_App\src\main\resources for below properties if they do not match local MongoDB 
```
spring.data.mongodb.host=localhost
spring.data.mongodb.port=27017
spring.data.mongodb.database=poc_db
```

### Prerequisites

- Java 1.8
- maven-4.0.0 
- NodeJS-V8
- MongoDB 

### Installing

Once both codes are copied to local machines, they need to be compiled using below steps : 

**Client_App :**

Navigate to project folder and run below commands
```
npm install
ng build
start /b ng serve

```

Fix if it results in any errors while executing above commands

**Server_App :**
 Navigate to project folder and run below commands
 ```
 mvn package
 start /b mvn sprinf-boot:run
 ```

## Running the tests

Steps: 
1. Execute url : 
http://localhost:4200/ 
2. Click "Click me" under Read and Store JSON in MongoDB to read the JSON file stored inside src\main\java\com\poc\controller\HierarchyTest.json folder path.
3. If Json stored successfully!! followed by Show Tree map from DB Hierarchy data
 appears on UI that means JSON is stored without any error. Now click second Click me to display Radial Tree for the JSON data stored.


### Break down into end to end tests

Make changes in the HierarchyTest.json file[requirement:should not contain any syntax errors] such as id change to verify for code working for different document of HierarchyTest type.

## Deployment

Both Server_App and Client_App should be up and running during testing.

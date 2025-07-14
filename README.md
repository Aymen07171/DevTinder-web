# DevTinder 


- Create a Vite + React  application  
- Remove uncessary code & Create a 'Hello-World' app
- Install Tailwindcss - DaisyUI (Change theme )
- Add NavBar Component to App.jsx
- Create a NavBar separate component file  
- Install React Router DOM 
- Create BrowserRouter > Routes  > Route=/ Body > RouteChildren
- Create an Outlet in your Body Componenent
- Create a footer
- Create a Login Page 
- Install axios 
- CORS - install cors in backend => add middleware to with configuration :  origin credentials = true 
- Whenever you're making API call so pass axios  => {withCredential : true}
- Install Redux Toolkit  :  https://redux-toolkit.js.org/introduction/getting-started
- Install react-redux + @reduxjs/toolkit ==> ConfigureStore ==> Provider ==> CreateSlice ==> Add reducer to store

- Add Redux DevTools  == Extension 
- Login & see if your data is coming properly in the store 
- NavBar Should update as soon as user logs in 
- Refactor our code to add constants file + Create a components folder 

- You should not be access other routes without login 
- If token is not present, redirect user to login page 
- LogOut 
- Profile 
- If token is not present , redirect user to login page 

---- --------------- --------------- -------------- ------------- ------------- -------- 
- Get the feed & and add the feed in the store 
- Build the user card on feed 
- Edit Profile Feature 
- Show Toast Meassage on save of profile
- See all my connections 
- New Page - See all my Connections
- New Page - See all my Connections Requests 
- Feature - Accept / Reject connection Request 
- Send -  Ignore the user from Feed 
- Singup New user 
- E2E Testing 

Body 

 - NavBar 
 - Route= / => Feed 
 - Route = /login => Login 
 - Route =  /connections => Connections 
 - Route = /profile => Profile


- Remaining : 


- Deployement : 

- Sing up on AWS 
- Launch Instance 
- Chmod 400 <secret>.pem
- ssh -i "devtindersecret.pem" ubuntu@ec2-16-171-111-168.eu-north-1.compute.amazonaws.com
- Install Node Version : 22.11.0
- install the packages 

- Frontend 
    - npm install -> Dependencies Install 
    - npm run build 
    - sudo apt update : Retrieves the latest info about available software and updates.
    - Nginx is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache
    - Start Nginx : sudo systemctl start nginx
    - Start Nginx : sudo systemctl enable nginx



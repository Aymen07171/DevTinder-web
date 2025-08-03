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
    - Check Nginx Version 


- Backend 
    - npm install -> Dependencies Install 
    - Allow public ip address to access mongodb Network 
    - Allow port access via E2C instance (security)
    - Install PM2 to keep the backend code running behind the scenes 
    - Start PM2 : pm2 start npm -- run dev
    - Check PM2 logs if the application isn't working : pm2 logs 
    - Clear Logs : pm2 flush logs
    - Stop PM2 : PM2 stop


2. Copy Frontend Build to Nginx Directory:

# Remove default nginx content
sudo rm -rf /var/www/html/*

# Copy your built frontend
sudo cp -r ~/DevTinder-web/dist/* /var/www/html/
# OR if your build folder is called 'build':
# sudo cp -r ~/DevTinder-web/build/* /var/www/html/

# Set proper permissions
sudo chown -R www-data:www-data /var/www/html
sudo chmod -R 755 /var/www/html

server {
    listen 80 default_server;
    listen [::]:80 default_server;

    server_name 54.196.224.91;
    root /var/www/html;
    index index.html index.htm;

    # Serve API requests to Node.js backend
    location /api/ {
        proxy_pass http://localhost:3000/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

location / {
        try_files $uri $uri/ /index.html;
    }


}


Frontend : devtinder.com 
Backend : devtinder.com:3000  ==> devtinder.com/api




# Adding a custom domain name 

    - purchased domain name from Namecheap 
    - Signup Cloudflare 
    - Change the nameservers on Namecheap 
    - wait for sometime till your nameserver are updated 
    - Add DNS record : A devtinder.site 
    - Enable SSL for website 


# Sending Emails via SES 

    - Create IAM user 
    - Give Access to AmazonSESFull Access Management 
    - Amazon SES : Create an Identity 
    - Verify your domain name 
    - Verify an email address 
    - Install AWS SDK - V3 :   
        - https://github.com/awsdocs/aws-doc-sdk-examples/tree/main/javascriptv3/example_code/ses#code-examples

    - Set up SESClient
    - Access Credentials should be create in IAM under securityCredentials Tab 
    - Add the credentials to the env file 
    - Write code for SESClient 
    - Write code for sending email address 
    - Make the email dyanmic by passing more params to the run function 


# Razorpay Payment Gateway Integration 

    - Signup on Razorpay & complete KYC 
    - 
























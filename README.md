# Deploying a Node Js Application on AWS EC2

### Testing the project locally

1. Clone this project
```
git clone https://github.com/aman-rawat-01/Dynamic-website.git
```
2. Setup the following environment variables - `(.env)` file
```
DB_USER = <your db_username>
DB_PWD = <your db_password>
PORT = 3000
```
3. Initialise and start the project
```
npm install
npm start
```

### Set up an AWS EC2 instance

1. Create an IAM user & login to your AWS Console
    - Access Type - Password
    - Permissions - Admin
2. Create an EC2 instance
    - Select an OS image - Ubuntu
    - Create a new key pair & download `.pem` file
    - Instance type - t2.micro
3. Connecting to the instance using ssh
```
ssh -i instance.pem ubunutu@<IP_ADDRESS>
```

### Configuring Ubuntu on remote VM

1. Updating the outdated packages and dependencies
```
sudo apt update
```
3. Install Git  
 ```
sudo apt install git
```
4. Configure Node.js and `npm` 
```
sudo apt install nodejs
sudo apt install npm
```
### Deploying the project on AWS

1. Clone this project in the remote VM
```
git clone https://github.com/aman-rawat-01/Dynamic-website.git
```
2. Setup the following environment variables - `(.env)` file
```
DB_USER = <your db_username>
DB_PWD = <your db_password>
PORT = 3000
```

3. Initialise and start the project
```
npm install
npm start
```

> NOTE - Edit the **inbound rules** in the security group of your EC2, in order to allow traffic from our particular port

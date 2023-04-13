//To run this project on your local system follow the following steps.

1. Clone the repository to your local system
git clone <repo_url>

2. install npm to install all the dependencies in package.json
npm install

3. Add .env file with your mongodb credentials

4. To run the project
npm start

5. To see the project open localhost://3000 or the port mentioned in the terminal in your preferred browser

//Deploying a Node Js Application on AWS EC2

//Set up an AWS EC2 instance

1. Create an IAM user & login to your AWS Console
Access Type - Password
Permissions - Admin

2. Create an EC2 instance
Select an OS image - Ubuntu
Create a new key pair & download .pem file
Instance type - t2.micro

//Connecting to the instance using ssh
 ssh -i instance.pem ubunutu@<IP_ADDRESS>

//Configuring Ubuntu on remote VM
1. Updating the outdated packages and dependencies
sudo apt update

2. Install Git
sudo apt install git

3. Configure Node.js and npm
sudo apt install nodejs
sudo apt install npm

//Deploying the project on AWS
1. Clone this project in the remote VM
git clone https://github.com/aman-rawat-01/Dynamic-website.git

2. Setup the following environment variables - (.env) file
DB_USER = <your db_username>
DB_PWD = <your db_password>
PORT = 3000

3. Edit the inbound rules in the security group of your EC2 instance, in order to allow traffic from our particular port

4. Initialise and start the project
npm install
npm run start

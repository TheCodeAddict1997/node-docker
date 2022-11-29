// For building the docker image
// <your username>/node-web-app is repository

docker build . -t <your username>/node-web-app

// To run the image

docker run -p 49160:8080 -d <your username>/node-web-app

// Printing the output 

// retrieves container id and port number if running

docker ps

// then run this command to print logs of app

docker logs <container id>

// As we already have port number we can run localhost:{PORT_NUMBER} from postman or anywhere
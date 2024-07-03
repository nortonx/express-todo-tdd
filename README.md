# To run the content, type:

npm install

# To run the tests:

npm run test

# To run test and watch for changes:

npm run test:watch

## Be sure to run the mongo db instance for testing
### In the root folder, run: 

docker-compose up -d

### If there are docker instances running, you can stop all with:

docker stop $(docker ps -q)

### and run docker again

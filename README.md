# docker build -t devopsproject_1 .
# docker run -dp 3005:3005 devopsproject_1


    "test": "mocha --reporter spec" 
    "test": "NODE_ENV=test nodemon --exec 'mocha -R min'"
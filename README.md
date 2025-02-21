# Match Mania
Japanese study app for Kana, Kanji, vocab and phrases utilizing Spaced Repitition to enhance learning.

### TO-DO:
rename/recase components in src\
gallery view will display whatever cards are passed in 

### Running the app
make sure Node 20.11.1+ and Docker are installed on the machine running this app
will need a .env and config.json configured with the appropriate variables added
config.json is for the postgres user password
.env should have your pguser, pguserpassword, database, host, port

### Run these commands in a terminal from the root directory of this repo


install project dependencies with yarn
```yarn```
run postgres server before starting the app
i wanted to run it in a docker container
build the docker image from the dockerfile
```yarn build```
run the docker container from the image
```docker run --name mm-pg-container -e POSTGRES_PASSWORD=your_pg_password_here -d -p 5432:5432 mm-pg-image```
start the app server
```yarn serve```

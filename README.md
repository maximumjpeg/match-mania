# Match Mania
japanese study app for kana, kanji, vocab and phrases

### TO-DO:
rename/recase components in src
make the gallery view a modular component that just takes in its current, dont need multiple galleries; really can do that with all 3 galleries

### Running the app
make sure Node 20.11.1 and Docker are installed on the machine running this app
will need a .env and config.json configured with the appropriate variables added
config.json is for the postgres user password
.env should have pguser, pguserpassword, database, host, port

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

# FROM postgres
# ARG POSTGRES_PASSWORD

# the syntax $ vs ${}
# use $SECRET for any environment variable defined in the dockerfile
# use ${SECRET} for any externally integrated secrets, like config.js exports
# when building the docker image, pass the env variables ${...} as a build argument
# ex: docker build --build-arg POSTGRES_PASSWORD=$(cat config.js | grep POSTGRES_PASSWORD | cut -d "'" -f 2) -t app-name .
# Although this method isn't fully secure (no PROD builds!), it will work
# To securely use environment variables, the docker file can read the config.js file to get the secret

# ENV POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
# EXPOSE 5432

FROM postgres

# Copy config.js into the container
# COPY config.js /usr/src/app/config.js

# Expose PostgreSQL port
EXPOSE 5432
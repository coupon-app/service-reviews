# Suggested solution for seeding using a separate container from
# https://stackoverflow.com/questions/31210973/how-do-i-seed-a-mongo-database-using-docker-compose
FROM mongo

COPY /sampledata/sample_data.json /sample_data.json
CMD mongoimport --host database --db reviews --collection reviews --type json --file /sample_data.json --jsonArray
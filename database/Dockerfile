FROM mongo

COPY /sampledata/sample_data.json /sample_data.json
CMD mongoimport --host database --db reviews --collection reviews --type json --file /sample_data.json --jsonArray
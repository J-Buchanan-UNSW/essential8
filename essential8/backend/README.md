# DB Creation Steps 

1. Enter in necessary env araibles into .env 
2. docker compose up -d
3. Create Table docker exec -it essential8-db psql -U essential8 -d essential8; CREATE EXTENSION; CREATE TABLE;
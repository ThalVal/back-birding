# Back-Birding

## Description

## Commands

Run mysql server
```bash
docker build -t local-mysql .
docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=my-secret-pw -p 3306:3306 -d local-mysql
```


```bash
npm run start
```

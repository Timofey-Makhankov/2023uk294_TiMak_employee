# üK 294 - React-Employee Webseite

This is a React Project for using the CRUD operators on a JSON Webserver.

## Creating the Project

### Prerequisites

- [Docker](https://docs.docker.com/engine/install/)
- [VScode](https://code.visualstudio.com/download)
- [NodeJS](https://nodejs.org/en/download)

### Instructions

You need to create the JSON Webserver Container erstellen und starten

```bash
docker run -p 3030:3000 --name restdb -d registry.noseryoung.ch/noseryoung/restdb
```

Clone the Project and `npm install`

```bash
git clone https://github.com/Timofey-Makhankov/2023uk294_TiMak_employee.git
cd 2023uk294_TiMak_employee
npm install
```

Start the Project

```bash
npm start
```

# Stage Test

Management tool for company processes and subprocesses.

## Built With

<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white">
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
<img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white">
<img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E">
<img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white">

## How to Run

Follow the instructions to run the app locally

1. Clone this repository.
2. Install all dependencies

```bash
   npm i
```

3. Create a database in PostgreSQL with any name you want
4. Create a .env file and fill it out following the example provided in the .env.example file.
5. Run script to create all tables in your database

```bash
  npm run migration
```

6. Run script

```bash
  npm run dev
```

7. Access http://localhost:PORT, where PORT it's value of your PORT variable in .env file.

## Documentation

### 1. POST /processes

Create a new process.

This is the required format of the body:

```code
  {
    "title": "processe's title",
    "description": "processes's description"
  }
```

Successful response:

- Status code 201

### 2. DELETE /processes/:id

DELETE a process.

The "id" params must be a valid id of a process

Successful response:

- Status code 200

### 3. GET /processes

Get all processes.

```code
  [
    {
      "title": "processe's title",
      "description": "processes's description"
    },
    {
      "title": "processe's title",
      "description": "processes's description"
    }
  ]
```

Successful response:

- Status code 200

### 4. PUT /processes/:id

Update a process, based on the provided title and description.

The "id" params must be a valid id of a process.

This is the required format of the body:

```code
  {
    "title": "processe's title",
    "description": "processes's description"
  }
```

Successful response:

- Status code 200

### 5. POST /subprocesses

Create a new subprocess

This is the required format of the body:

```code
  {
    "process_id": "process's id",
    "title": "processe's title",
    "description": "processes's description"
  }
```

Successful response:

- Status code 201

### 6. GET /subprocesses/:id

Return all subprocesses of a unique process

```code
  [
    {
      "id: "number",
      "title": "processe's title",
      "description": "processes's description",
      "process_id": "number"
    },
    {
      "id: "number",
      "title": "processe's title",
      "description": "processes's description",
      "process_id": "number"
    }
  ]
```

Successful response:

- Status code 200

### 7. POST /events/:subprocess_id

Create a new event associated to a subprocess.

The 'subprocess_id' params must be a valid id.

This is the required format of the body:

```code
  {
    "title": "String , required",
    "notes": "String , not required"
    "date": "Date, required"
    "time": "String, required"
  }
```

Successful response:

- Status code 201

### 8. GET /events/:subprocess_id

Return all events associated to a subprocess.

This is the required format of the body:

```code
[
  {
    "id": number,
    "title": string,
    "subprocess_id": number,
    "notes": null | string,
    "date": date,
    "time": string,
    "completed": boolean
  }
]
```

Successful response:

- Status code 200

### 9. DELETE /events/:event_id

Delete the event.

The params "event_id" must be a valid id.

Successful response:

- Status code 204

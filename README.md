# Stage Test

Management tool for company processes and subprocesses.

## Built With

<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white">
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
<img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white">
<img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E">

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

## API Documentation

API Documentation with all endpoints, status codes, and necessary information for retrieving and creating new data.

## Processes

## POST /processes

Create a new process.

This is the required format of the body:

```code
  {
    "title": "title of process",
    "description "description of process"
  }
```

|             | Type   | Required | Min length | Max length |
| ----------- | ------ | -------- | ---------- | ---------- |
| title       | string | yes      | 2          | 50         |
| description | string | yes      | 2          | 100        |

<br/>

Status code:

- Successful response: 201
- Problems with body received: 422

### DELETE /processes/{id}

DELETE a process.

The "id" params must be a valid number id of a process

Status code:

- Successful response: 201
- The process do not exists: 404

### GET /processes

Get all processes.

Response :

```code
  [
    {
      "id": 10,
      "title": "title of process",
      "description": "description of process"
    },
    {
      "id" : 11,
      "title": "title of process",
      "description": "description of process"
    }
  ]
```

Status code:

- Successful response: 201

### PUT /processes/{id}

Update a process, based on the provided title and description.

The "id" params must be a valid number id of a process.

This is the required format of the body:

```code
  {
    "title": "title of process",
    "description": "description of process"
  }
```

|             | Type   | Required | Min length | Max length |
| ----------- | ------ | -------- | ---------- | ---------- |
| title       | string | yes      | 2          | 50         |
| description | string | yes      | 2          | 100        |

<br/>

Status code:

- Successful response: 200
- Problems with body received: 422
- The process do not exists: 404

### GET /processes/{id}

Get unique process.

The params "id" must be a valid number id.

Response :

```code
{
  "id": 10,
  "title": "title of process",
  "description": "description of process"
}
```

Status code:

- Successful response: 200
- The process do not exists: 404

## Subprocesses

### POST /subprocesses

Create a new subprocess

This is the required format of the body:

```code
  {
    "process_id": 10,
    "title": "title of subprocess",
    "description": "description of subprocess"
  }
```

|             | Type   | Required | Min length | Max length |
| ----------- | ------ | -------- | ---------- | ---------- |
| title       | string | yes      | 2          | 50         |
| description | string | yes      | 2          | 100        |
| process_id  | number | yes      | -          | -          |

<br/>

Status code:

- Successful response: 200
- The process do not exists: 404
- Problems with body received: 422

### GET /subprocesses/{id}

Return all subprocesses of a unique process

Response :

```code
  [
    {
      "id: 10",
      "title": "title of subprocess",
      "description": "description of subprocess",
      "process_id": 3
    },
    {
      "id: 11",
      "title": "title of subprocess",
      "description": "description of subprocess",
      "process_id": 3
    }
  ]
```

Status code:

- Successful response: 200
- The process do not exists: 404

### DELETE /subprocesses/{id}

Delete the subprocess.

The params "id" must be a valid number id.

Status code:

- Successful response: 204
- The subprocess do not exists: 404

## Events

### POST /events/{subprocess_id}

Create a new event associated to a subprocess.

The 'subprocess_id' params must be a valid number id.

This is the required format of the body:

```code
  {
    "title": "title of event",
    "notes": "notes about event"
    "date": "start date of event"
    "time": "start time of event"
  }
```

|       | Type   | Required | Min length | Max length |
| ----- | ------ | -------- | ---------- | ---------- |
| title | string | yes      | 2          | 50         |
| notes | string | no       | 0          | 200        |
| date  | date   | yes      | -          | -          |
| time  | string | yes      | -          | -          |

<br/>

Status code:

- Successful response: 201
- The subprocess do not exists: 404
- Problems with body received: 422

### GET /events/{subprocess_id}

Return all events associated to a subprocess.

Response:

```code
[
  {
    "id": 10,
    "title": "title of event",
    "subprocess_id": 12,
    "notes": "notes about event",
    "date": "2023-09-07T03:00:00.000Z",
    "time": "17:00:00",
    "completed": false
  }
]
```

Status code:

- Successful response: 200
- The subprocess do not exists: 404

### DELETE /events/{event_id}

Delete the event.

The params "event_id" must be a valid number id.

Status code:

- Successful response: 204
- The subprocess do not exists: 404

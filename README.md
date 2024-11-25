# Task Manager

A simple Task Manager application built with Node.js, Express, MongoDB, and vanilla HTML, CSS, and JavaScript. This application allows users to create, view, edit, and delete tasks with support for categories and due dates.

---

## Features

- Add tasks with titles, descriptions, categories, and due dates.
- View a list of all tasks.
- Mark tasks as completed.
- Edit task details.
- Delete tasks.
- Data is persisted in a MongoDB database.
---

## Prerequisites

To run this project, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org) (v16 or later recommended)
- [MongoDB](https://www.mongodb.com/) (Ensure MongoDB is running locally or provide a connection string)
- Git (to clone the repository)

---

## Installation and Usage

### Step 1: Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/Task-Manager.git
```

### Step 2: Set Up Environment Variables

Create a `.env` file in the project root and add the following:

```env
MONGO_URI=mongodb://localhost:27017
PORT=5000
```

Replace `mongodb://localhost:27017` with your MongoDB URI.

### Step 3: Install Dependencies

Run the following command to install all required Node.js packages:

```bash
npm install
```

### Step 4: Start the Application

Start the server with:

```bash
npm start
```

The application will run at `http://localhost:5000`.

---

## How to Use the Application

1. **Access the Application**  
   Open a web browser and navigate to `http://localhost:5000`.

2. **Add a Task**  
   - Enter a title, description, due date, and category in the form.
   - Click "Add Task" to save the task.

3. **View Tasks**  
   - All tasks are listed below the form.
   - Completed tasks will be indicated.

4. **Edit a Task**  
   - Click the "Edit" button next to a task.
   - Update the details and save changes.

5. **Delete a Task**  
   - Click the "Delete" button next to a task to remove it.

---

## Folder Structure

```plaintext
Task-Manager/
├── public/                # Static files (HTML, CSS, JavaScript)
│   ├── index.html         # Main HTML file
│   ├── style.css          # Styling
│   └── script.js          # Frontend logic
├── .env                   # Environment variables
├── package.json           # Node.js metadata and dependencies
├── server.js              # Backend application
└── README.md              # Project instructions
```

---

## API Endpoints

The server exposes the following API endpoints:

- **GET /api/tasks**  
  Retrieve all tasks.

- **POST /api/tasks**  
  Add a new task.  
  **Request Body**: `{ "title": "Task Title", "description": "Task Description", "dueDate": "YYYY-MM-DD", "category": "Category" }`

- **PUT /api/tasks/:id**  
  Update an existing task by ID.  
  **Request Body**: `{ "title": "New Title", "description": "New Description", "completed": true }`

- **DELETE /api/tasks/:id**  
  Delete a task by ID.

---

## Troubleshooting

1. **MongoDB Connection Error**:  
   - Ensure MongoDB is running and the connection string in `.env` is correct.

2. **Port Conflict**:  
   - If port 5000 is in use, update the `PORT` value in `.env`.

3. **Static Files Not Loading**:  
   - Check that the `public` folder contains `index.html` and other static files.

---

## Author

Developed by [Rahul Bhardwaj](https://github.com/rahul-12dwaj).
```



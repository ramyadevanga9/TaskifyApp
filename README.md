Here’s your **GitHub-ready `README.md`** — formatted cleanly with markdown syntax, so you can **copy-paste directly into your GitHub repo**:

---

````markdown
# TaskifyApp – Intelligent Task Planner

TaskifyApp is a full-stack task management application that helps users plan, track, and visualize task progress over time using an intuitive dashboard and date-driven analytics.

**🔗 Live Demo:**  
[https://taskify-work-planner.vercel.app](https://taskify-work-planner.vercel.app)

---

## 🔍 Overview

TaskifyApp allows users to create tasks with a start date and end date, then intelligently calculates progress using the current date.  
It visualizes:

- Completed vs. pending days  
- Task progress percentage  
- Future workload distribution  
- Folder-based task grouping  

All insights are presented through responsive charts in a modern UI.

---

## ✨ Features

- Create, edit, and delete tasks  
- Track task progress based on date intervals  
- Organize tasks using color-coded folders  
- Dark mode / Light mode support  
- Chart-based visual analytics  
- Authentication with backend APIs  

---

## 💻 Tech Stack

### Frontend
- React + Vite  
- TypeScript  
- Tailwind CSS  
- HTML5  

### Backend
- Python 3  
- FastAPI  

### Tools
- Git & GitHub for version control  
- Vercel for frontend deployment  
- RESTful APIs for backend services  

---

## 📸 Screenshots

### Landing Page
**Dark Mode**  
![Landing Dark](https://github.com/Gabrli/Taskify/assets/110058841/030b5434-2656-4214-8fdc-e40a8c4c2e90)

**Light Mode**  
![Landing Light](https://github.com/Gabrli/Taskify/assets/110058841/fe667f16-3698-4486-a772-eb673f67c4d8)

### Dashboard
**Dark Mode**  
![Dashboard Dark](https://github.com/Gabrli/Taskify/assets/110058841/5dcce7b0-5bd4-42d8-a649-566996649ad3)

**With Notifications**  
![Dashboard Notif](https://github.com/Gabrli/Taskify/assets/110058841/9f81a1d5-6ec0-42a6-b923-6ea9d2d46fed)

---

## 📡 API Reference

All responses are in JSON format and follow a standard structure.

### Auth Endpoints

| Endpoint               | Method | Input                            | Success Response             |
|------------------------|--------|----------------------------------|------------------------------|
| `/accounts/login`      | POST   | `username`, `password`           | `uid`                        |
| `/accounts/register`   | POST   | `username`, `password`, `email`  | `uid`                        |
| `/accounts/delete`     | POST   | `uid`                            | —                            |
| `/accounts/changePassword` | POST | `uid`, `new`                 | —                            |
| `/accounts/getAllNames`| GET    | —                                | `names: List[string]`        |

### Task Endpoints

| Endpoint           | Method | Input                                                   | Success Response              |
|--------------------|--------|----------------------------------------------------------|-------------------------------|
| `/tasks/create`    | POST   | `uid`, `name`, `description`, `date_start`, `date_end`, `folder_key?` | `task_id`         |
| `/tasks/edit`      | POST   | `uid`, `task_id`, `name`, `description`, `date_start`, `date_end`    | —                 |
| `/tasks/remove`    | POST   | `uid`, `task_id`                                        | —                               |
| `/tasks/getAll`    | POST   | `uid`                                                   | List of tasks                 |
| `/tasks/getTask`   | POST   | `uid`, `task_id`                                        | Task object                   |

### Folder Endpoints

| Endpoint              | Method | Input                              | Success Response              |
|-----------------------|--------|-------------------------------------|-------------------------------|
| `/folders/create`     | POST   | `uid`, `name`, `color`              | `folder_key`                  |
| `/folders/get_folder` | POST   | `uid`, `folder_key`                 | Folder object                 |
| `/folders/update`     | POST   | `uid`, `folder_key`, `new_name`, `new_color` | —                    |
| `/folders/remove`     | POST   | `uid`, `folder_key`                 | —                             |
| `/folders/add_task`   | POST   | `uid`, `folder_key`, `task_id`      | —                             |
| `/folders/remove_task`| POST   | `uid`, `folder_key`, `task_id`      | —                             |

---

## 🧪 Running Locally

### Backend Setup

1. Install dependencies:
   ```bash
   pip install -r requirements.txt
````

2. Start the API server:

   ```bash
   python3 -m uvicorn api:api
   ```

3. For custom host and port:

   ```bash
   python3 -m uvicorn api:api --host 0.0.0.0 --port 8000
   ```

---

## 📁 Folder Structure

```
TaskifyApp/
├── frontend/     # React + Vite client
├── backend/      # FastAPI server
├── api.py        # Main API file
├── requirements.txt
└── README.md
```

---

## 🧠 Learnings

Through this project, I gained experience in:

* Full-stack development workflows
* Building and consuming RESTful APIs
* Visualizing data dynamically
* Working with FastAPI and React together

---

## 🚀 Deployment

* Frontend: [Vercel](https://vercel.com)
* Backend: Compatible with Railway, Render, or local hosting

---


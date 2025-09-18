# React Login/Register/Dashboard Application

This project is a React-based frontend application demonstrating user authentication, registration, role-based access control, and dashboard features using React Router and JSON Server as a mock backend.

## Features

- User Registration with form validation
- User Login with session management
- Role-based access control (RBAC) for menu permissions (add, edit, delete)
- Protected routes and UI components based on user roles
- Dashboard view with admin and employee specific content
- Customer, Supplier, and Employee management pages
- Mock backend using JSON Server for user and role data
- Toast notifications for feedback (success, error, warnings)

## Technologies Used

- React (functional components, Hooks)
- React Router v6 for SPA routing
- JSON Server as a mock REST API backend
- React Toastify for notifications
- Bootstrap 5 for styling and layout

## Getting Started

### Prerequisites

- Node.js and npm installed
- Git installed to clone and push repository

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/Sanjana1279/React_login_register_dashboard.git
   ```

2. Navigate to project directory and install dependencies:

   ```
   cd React_login_register_dashboard
   npm install
   ```

3. Start JSON Server mock backend:

   ```
   npx json-server --watch db.json --port 8000
   ```

4. Run the React app:

   ```
   npm start
   ```

5. Open browser at `http://localhost:3000`

## Usage

- Register a new user via the register page
- Login with registered credentials
- Dashboard and menu access adjust dynamically based on your user role and permissions from mock backend

## Role-based Access Control

Permissions are defined in `db.json` under `roleaccess`. The app stores these in the session and conditionally renders UI and routes:

```json
{
  "role": "admin",
  "menu": "supplier",
  "haveadd": true,
  "haveedit": true,
  "havedelete": true
}
```



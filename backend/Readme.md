# Lost and Found API (Refactored MVC)

This project serves as the robust backend API for a Lost and Found system. It is built using modern Node.js practices, fully refactored into a scalable **Model-View-Controller (MVC)** architecture.

The core design principle emphasizes **asynchronous safety** and **performance**, utilizing MySQL connection pooling for efficient database operations.

##  Key Architectural Highlights

* **MVC Structure:** Clear separation of concerns into Models (data logic), Controllers (business logic), and Routes/App (entry and routing).
* **Asynchronous Operations:** All database calls utilize `mysql2/promise` for native `async/await` support, preventing blocking operations.
* **Connection Pooling:** The database setup (`src/config/db.js`) uses a connection pool to manage resources efficiently and handle high traffic gracefully.
* **Security:**
    * Passwords are secured using **Bcrypt.js** hashing.
    * Authentication is managed via **JWT (JSON Web Tokens)** middleware.
* **Best Practices:** Configuration is cleanly separated (`src/config`), and environment variables are used exclusively (`.env`).

##  Tech Stack and Dependencies

The project relies on the following core technologies:

| Category | Technology / Library | Purpose |
| :--- | :--- | :--- |
| **Runtime** | Node.js | JavaScript runtime environment. |
| **Framework** | Express.js | Fast, unopinionated, minimalist web framework. |
| **Database** | MySQL | Relational database management system. |
| **DB Driver** | `mysql2/promise` | Optimized, promise-based MySQL driver with pooling. |
| **Authentication** | `jsonwebtoken`, `bcryptjs` | Handling user sessions and secure password storage. |
| **File Handling** | `multer` | Middleware for handling `multipart/form-data` (file uploads). |
| **Email** | `nodemailer` | Sending transactional emails (verification, notifications). |

##  Core Functionalities

The API provides comprehensive features for user management, item reporting, and administrative control.

### 1. User and Authentication Management

* **Secure Registration:** Users can sign up with their details. Passwords are automatically hashed and salted.
* **Email Verification:** A secure JWT-based workflow is implemented to ensure all registered users verify their email address before logging in.
* **User Roles:** Supports distinct user roles (`student`, `admin`) to implement access control for sensitive routes.
* **Login:** Generates a short-lived JWT token upon successful login for subsequent API calls.

### 2. Item Reporting and Status Tracking

* **Report Lost/Found Item:** Authenticated users can submit a new item report, providing details like title, description, category, and type.
* **Image Upload:** Supports uploading an associated image with the report, which is stored in the `uploads/` directory.
* **Personal Item History:** Users can retrieve a list of all items they have personally submitted.
* **Status Update:** Authorized users (or administrators) can update the status of any reported item (e.g., from 'Pending' to 'Found' or 'Closed').

### 3. Administrative Features (Role-Gated)

* **Global Item Retrieval:** Administrators have a dedicated route to fetch *all* reported items, including the contact details of the submitter.
* **User Notification:** Administrators can manually trigger an email notification to the original submitter of an item, typically after a status change or retrieval confirmation.

##  API Endpoints Summary

The API routes are prefixed for logical grouping:

| Group | Prefix | Key Endpoints | Purpose |
| :--- | :--- | :--- | :--- |
| **Authentication** | `/api/auth` | `/register`, `/login`, `/verify/:token` | User lifecycle and session management. |
| **Items** | `/api/items` | `/report`, `/my`, `/status/:id` | Core item submission and tracking. |
| **Admin** | `/api/admin` | `/items`, `/notify/:id` | Administrative oversight and management. |

---

##  Project Setup

1.  **Dependencies:** Ensure you have Node.js and a running MySQL instance.
2.  **Installation:** Run `npm install` in the project root.
3.  **Configuration:** Create and populate a **`.env`** file with the required database credentials, JWT secret, and email server details (as described in the setup section).
4.  **Startup:** Execute the main application file: `node src/app.js`

The server will log its successful connection to MySQL and start listening on the configured port.

Contact Management System
A simple CRUD app for managing contacts using ASP.NET Core (API) + Angular (Frontend)

📝 Project Overview
This project allows you to add, view, and delete contacts through a user-friendly Angular interface or directly via API endpoints. The backend uses an in-memory database, so contacts are not persisted between server restarts (you’ll need to re-add them each time the app runs).

Features
Add Contacts: Submit a form with name, email, and phone number.

View Contacts: See a list of all saved contacts.

Delete Contacts: Remove existing contacts with a single click.

API Integration: Interact directly with the backend using RESTful endpoints.

🛠️ Technologies Used
Backend: ASP.NET Core (REST API)

Frontend: Angular (TypeScript)

Database: In-memory storage (temporary data)

🚀 Getting Started
Prerequisites
.NET SDK (for backend)

Node.js & Angular CLI (for frontend)

Backend Setup
Navigate to the Backend folder.

Restore dependencies:

bash
Copy
dotnet restore  
Run the API:

bash
Copy
dotnet run  
The API will run at http://localhost:5000 (or similar).

Frontend Setup
Navigate to the Frontend folder.

Install dependencies:

bash
Copy
npm install  
Start the Angular app:

bash
Copy
ng serve  
Access the UI at http://localhost:4200.

📌 Usage
Add a Contact:

Fill in the form (name, email, phone).

Click "Submit" to save the contact.

Delete a Contact:

Click the "Delete" button next to any contact.

API Endpoints:

GET /api/contacts: Retrieve all contacts.

POST /api/contacts: Add a new contact (send JSON body).

DELETE /api/contacts/{id}: Delete a contact by ID.

Example API Request (Postman/Curl):

bash
Copy
POST http://localhost:5000/api/contacts  
Content-Type: application/json  
{  
 "name": "John Doe",  
 "email": "john@example.com",  
 "phone": "123-456-7890"  
}  
⚠️ Note
In-Memory Database: Contacts are stored temporarily and reset when the server restarts.

🔗 Contributing
Feel free to fork this repository and enhance it (e.g., add a persistent database like SQL Server or MongoDB).

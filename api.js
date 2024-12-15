import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export default api;

// --- .env --- //
DB_USER=your_db_user
DB_PASS=your_db_password
DB_HOST=localhost
DB_NAME=your_db_name
DB_PORT=5432
JWT_SECRET=your_jwt_sec
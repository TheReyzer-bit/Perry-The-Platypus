schedule-app/
├── backend/
│   ├── app.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── schedule.js
│   │   └── users.js
│   └── models/
│       ├── group.js
│       ├── schedule.js
│       ├── user.js
│       └── ...
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── AdminPage.jsx
│   │   │   ├── TeacherPage.jsx
│   │   │   ├── StudentPage.jsx
│   │   │   └── ...
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   ├── package.json
│   └── ...
├── .gitignore
└── README.md

cd C:\Users\admin\Documents\schedule-app\backend
npm install
node app.js

cd C:\Users\admin\Documents\schedule-app\frontend
npm install
npm start

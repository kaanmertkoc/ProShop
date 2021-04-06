import bcrypt from 'bcryptjs';
const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Arın Ozkan',
    email: 'arinozkan@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Kaan Koc',
    email: 'kaankoc@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;

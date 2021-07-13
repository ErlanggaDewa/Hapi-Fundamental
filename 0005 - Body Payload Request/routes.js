const routes = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return `Homepage`;
    },
  },
  {
    method: "*",
    path: "/",
    handler: (request, h) => {
      return `tidak dapat diakses oleh method ${request.method} tersebut 1`;
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (request, h) => {
      return `About me`;
    },
  },
  {
    method: "*",
    path: "/about",
    handler: (request, h) => {
      return `tidak dapat diakses oleh method ${request.method} tersebut 2`;
    },
  },
  {
    method: "GET",
    path: "/hello/{username?}",
    handler: (request, h) => {
      const { username = "Stranger" } = request.params;
      const { lang } = request.query;

      if (lang == "id") return `Selamat datang ${username}`;

      return `Hello ${username}`;
    },
  },
  {
    method: "POST",
    path: "/login",
    handler: (request, h) => {
      const { username, password } = request.payload;
      return `username anda ${username}, password anda : ${password}`;
    },
  },
  {
    method: "*",
    path: "/{any*}",
    handler: (request, h) => {
      return `Halaman tidak ditemukan`;
    },
  },
];

module.exports = routes;

// ! curl -X POST http://localhost:5000/login -H "Content-Type: application/json" -d "{\"username\": \"harrypotter\", \"password\": \"encryptedpassword\"}"

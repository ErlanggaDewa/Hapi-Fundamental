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
      const nama = request.params.username ?? `Stranger`;
      return `Hello ${nama}`;
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
// ! curl -X GET http://localhost:5000/hello/icha

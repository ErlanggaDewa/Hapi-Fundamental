const routes = [
  {
    method: "POST",
    path: "/user",
    handler: (request, h) => {
      const response = h
        .response("created")
        .code(201)
        .type("text/plain")
        .header("X-Custom", "Test Response Bro");
      console.log(response);
      return response;
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

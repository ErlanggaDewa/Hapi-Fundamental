const { nanoid } = require("nanoid");
const notes = require("./notes");

const addNoteHandler = (request, h) => {
  const { title, tags, body } = request.payload;
  const id = nanoid(20);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newNote = {
    title,
    tags,
    body,
    id,
    createdAt,
    updatedAt,
  };

  notes.push(newNote);
  const isSuccess = (notes.filter((note) => note.id === id).length = 1); // ! to check data success or fail when we push to array notes

  //  ! response handler
  if (isSuccess) {
    return h
      .response({
        status: "success",
        message: "catatan berhasil ditambahkan",
        data: {
          noteId: id,
        },
      })
      .code(201);
  }

  return h
    .response({
      status: "fail",
      message: "Catatan gagal ditambahkan",
    })
    .code(500);
};

const getAllNotesHandler = () => ({
  status: "success",
  data: {
    notes,
  },
});

const getNoteByIdHandler = (request, h) => {
  const { id } = request.params;
  const note = notes.filter((note) => note.id === id)[0];

  if (note !== undefined) {
    return h
      .response({
        status: "success",
        data: {
          note,
        },
      })
      .code(200);
  }

  return h
    .response({
      status: "failed",
      message: "Catatan tidak ditemukan",
    })
    .code(404);
};

const editNoteByIdHandler = (request, h) => {
  const { id } = request.params;
  const { title, tags, body } = request.payload;
  const updatedAt = new Date().toISOString();

  const index = notes.findIndex((note) => note.id === id);

  if (index !== -1) {
    notes[index] = {
      ...notes[index],
      title,
      tags,
      body,
      updatedAt,
    };

    return h
      .response({
        status: "success",
        message: "Catatan berhasil diperbarui",
      })
      .code(200);
  }

  return h
    .response({
      status: "fail",
      message: "Gagal memperbarui catatan. Id tidak ditemukan",
    })
    .code(400);
};

const deleteNoteByIdHandler = (request, h) => {
  const { id } = request.params;
  const index = notes.findIndex((note) => note.id === id);

  if (index !== -1) {
    notes.splice(index, 1);
    return h
      .response({
        status: "success",
        message: "Catatan berhasil dihapus",
      })
      .code(200);
  }

  return h
    .response({
      status: "failed",
      message: "Catatan gagal dihapus. Id tidak ditemukan",
    })
    .code(404);
};
module.exports = {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
};

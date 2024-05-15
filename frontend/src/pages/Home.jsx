import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note";
import "../styles/Home.css";

function Home() {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = () => {
    api
      .get("/api/notes/")
      .then((res) => res.data)
      .then((data) => {
        setNotes(data);
        console.log(data);
      })
      .catch((err) => alert(err));
  };

  const updateNote = (id, data) => {
    api
      .patch(`/api/notes/${id}/update/`, data)
      .then((res) => {
        if (res.status === 200) {
          getNotes();
        } else {
          alert("Erro ao editar nota!");
        }
      })
      .catch((err) => alert(err));
  };

  const deleteNote = (id) => {
    api
      .delete(`/api/notes/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) {
          alert("Nota deletada com sucesso!");
        } else {
          alert("Erro ao deletar nota!");
        }
        getNotes();
      })
      .catch((err) => alert(err));
  };

  const createNote = (e) => {
    e.preventDefault();
    api
      .post("api/notes/", { content, title })
      .then((res) => {
        if (res.status === 201) {
          alert("Nota criada com sucesso!");
        } else {
          alert("Erro ao criar nota!");
        }
        getNotes();
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <form onSubmit={createNote}>
        <label htmlFor="title">Nome:</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          required
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <label htmlFor="content">Conteudo:</label>
        <br />
        <textarea
          id="content"
          name="content"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <br />
        <input type="submit" value="Criar nota"></input>
      </form>
      <div>
        <h2 className="title-notes">Notas</h2>
        {notes.map((note) => (
          <Note 
          note={note} 
          onDelete={deleteNote} 
          onUpdate={updateNote} 
          key={note.id} />
        ))}
      </div>
    </div>
  );
}
export default Home;

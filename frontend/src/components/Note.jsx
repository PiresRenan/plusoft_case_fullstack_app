import { useState } from "react";
import "../styles/Note.css";

function Note({ note, onDelete, onUpdate }) {
    const [editing, setEditing] = useState(false);
    const [updatedTitle, setUpdatedTitle] = useState(note.title);
    const [updatedContent, setUpdatedContent] = useState(note.content);
    const formattedDate = new Date(note.created_at).toLocaleString("pt-br");

    const handleUpdate = () => {
        const updatedData = {
            title: updatedTitle.trim() === "" ? note.title : updatedTitle,
            content: updatedContent.trim() === "" ? note.content : updatedContent
        };
        onUpdate(note.id, updatedData);
        setEditing(false);
    };

    return (
        <div className="note-container">
            {editing ? (
                <div className="editing-container">
                    <p className="editing-title">Editando nota</p>
                    <label className="title-editing" htmlFor="title">Título:</label>
                    <input
                        type="text"
                        className="note-editing-title"
                        value={updatedTitle}
                        onChange={(e) => setUpdatedTitle(e.target.value)}
                    />
                    <label className="content-editing" htmlFor="content">Conteúdo:</label>
                    <textarea
                        value={updatedContent}
                        className="note-editing-content"
                        onChange={(e) => setUpdatedContent(e.target.value)}
                    />
                    <button className="editing-save-btn" onClick={handleUpdate}>Salvar</button>
                </div>
            ) : (
                <div>
                    <p className="note-title">{note.title}</p>
                    <p className="note-content">{note.content}</p>
                    <p className="note-date">{formattedDate}</p>
                    <button className="delete-button" onClick={() => onDelete(note.id)}>
                        Deletar
                    </button>
                    <button className="edit-button" onClick={() => setEditing(true)}>Editar</button>
                </div>
            )}
        </div>
    );
}

export default Note;
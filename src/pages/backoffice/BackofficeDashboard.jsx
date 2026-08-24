import { useState } from "react";
import { useMembers } from "./useMembers.js";

const emptyForm = { name: "", email: "", phone: "", membership: "Basis" };

// Dashboard til at oprette, redigere og slette medlemmer
function BackofficeDashboard({ onLogout }) {
  const { members, addMember, updateMember, deleteMember } = useMembers();
  const [formData, setFormData] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editingId) {
      updateMember(editingId, formData);
      setEditingId(null);
    } else {
      addMember(formData);
    }
    setFormData(emptyForm);
  };

  const startEdit = (member) => {
    setEditingId(member.id);
    setFormData({
      name: member.name,
      email: member.email,
      phone: member.phone,
      membership: member.membership,
    });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setFormData(emptyForm);
  };

  return (
    <div className="backoffice">
      <header className="backoffice__header">
        <h1>XtremeFitness - Backoffice</h1>
        <button className="btn" onClick={onLogout}>
          Log ud
        </button>
      </header>

      <section className="backoffice__section">
        <h2>{editingId ? "Rediger medlem" : "Opret medlem"}</h2>
        <form className="backoffice__form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Navn"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Telefon"
            value={formData.phone}
            onChange={handleChange}
          />
          <select
            name="membership"
            value={formData.membership}
            onChange={handleChange}
          >
            <option value="Basis">Basis</option>
            <option value="Premium">Premium</option>
            <option value="VIP">VIP</option>
          </select>
          <div className="backoffice__form-actions">
            <button type="submit" className="btn">
              {editingId ? "Gem aendringer" : "Tilfoej medlem"}
            </button>
            {editingId && (
              <button
                type="button"
                className="btn btn--secondary"
                onClick={cancelEdit}
              >
                Annuller
              </button>
            )}
          </div>
        </form>
      </section>

      <section className="backoffice__section">
        <h2>Medlemmer ({members.length})</h2>
        <table className="backoffice__table">
          <thead>
            <tr>
              <th>Navn</th>
              <th>Email</th>
              <th>Telefon</th>
              <th>Medlemskab</th>
              <th>Handlinger</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id}>
                <td>{member.name}</td>
                <td>{member.email}</td>
                <td>{member.phone}</td>
                <td>{member.membership}</td>
                <td>
                  <button
                    className="btn btn--small"
                    onClick={() => startEdit(member)}
                  >
                    Rediger
                  </button>
                  <button
                    className="btn btn--small btn--danger"
                    onClick={() => deleteMember(member.id)}
                  >
                    Slet
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default BackofficeDashboard;

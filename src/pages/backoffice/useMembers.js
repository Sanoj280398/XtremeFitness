import { useEffect, useState } from "react";

const STORAGE_KEY = "xf_members";

// Startdata hvis der ikke findes noget i localStorage endnu
const initialMembers = [
  {
    id: 1,
    name: "Anders Jensen",
    email: "anders@mail.dk",
    phone: "12345678",
    membership: "Premium",
  },
  {
    id: 2,
    name: "Mette Nielsen",
    email: "mette@mail.dk",
    phone: "87654321",
    membership: "Basis",
  },
];

// Genbrugelig hook der laeser/skriver medlemmer til localStorage
export function useMembers() {
  const [members, setMembers] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : initialMembers;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(members));
  }, [members]);

  const addMember = (member) => {
    setMembers((prev) => [...prev, { ...member, id: Date.now() }]);
  };

  const updateMember = (id, updatedFields) => {
    setMembers((prev) =>
      prev.map((member) =>
        member.id === id ? { ...member, ...updatedFields } : member,
      ),
    );
  };

  const deleteMember = (id) => {
    setMembers((prev) => prev.filter((member) => member.id !== id));
  };

  return { members, addMember, updateMember, deleteMember };
}

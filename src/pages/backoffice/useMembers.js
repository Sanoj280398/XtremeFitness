import { useEffect, useState } from "react";
import {
  createUser,
  deleteUser,
  fetchUsers,
  updateUser,
} from "../../api/api.js";

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
    let isMounted = true;

    fetchUsers()
      .then((users) => {
        if (isMounted && Array.isArray(users)) {
          setMembers(users);
        }
      })
      .catch(() => {
        // Lokal data bruges, når API-serveren ikke er tilgængelig endnu.
      });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(members));
  }, [members]);

  const addMember = (member) => {
    const temporaryMember = { ...member, id: Date.now() };
    setMembers((prev) => [...prev, temporaryMember]);
    createUser(member)
      .then((savedMember) => {
        if (savedMember?.id) {
          setMembers((prev) =>
            prev.map((item) =>
              item.id === temporaryMember.id ? savedMember : item,
            ),
          );
        }
      })
      .catch(() => undefined);
  };

  const updateMember = (id, updatedFields) => {
    setMembers((prev) =>
      prev.map((member) =>
        member.id === id ? { ...member, ...updatedFields } : member,
      ),
    );
    updateUser(id, updatedFields).catch(() => undefined);
  };

  const deleteMember = (id) => {
    setMembers((prev) => prev.filter((member) => member.id !== id));
    deleteUser(id).catch(() => undefined);
  };

  return { members, addMember, updateMember, deleteMember };
}

"use client";

import { FormEvent, useState } from "react";

export default function EditProfile() {
  const [firstName, setFirstName] = useState("Jane");
  const [lastName, setLastName] = useState("Jacobs");
  const [isEditing, setIsEditing] = useState(false);
  const [savedName, setSavedName] = useState({
    firstName: "Jane",
    lastName: "Jacobs",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsEditing((isEditing) => !isEditing);
    setSavedName({ firstName, lastName });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First name: {!isEditing && <b>{firstName}</b>}
        {isEditing && (
          <input
            className="text-zinc-800"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        )}
      </label>
      <label>
        Last name: {!isEditing && <b>{lastName}</b>}
        {isEditing && (
          <input
            className="text-zinc-800"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        )}
      </label>
      <button type="submit">
        {isEditing ? "Save Profile" : "Edit Profile"}
      </button>
      <p>
        <i>
          Hello, {savedName.firstName} {savedName.lastName}!
        </i>
      </p>
    </form>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const AddUsers = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      gender,
    };
    await fetch("/api/addUser", {
      method: "POST",
      body: JSON.stringify(userData),
    });
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center items-center font-inter">
        <div className="container pt-12 px-12">
          <h2 className="text-2xl font-semibold">Add Users</h2>
          <div className="input-container flex justify-between items-end gap-2 mt-6">
            <div className="input flex flex-col flex-grow gap-1">
              <label htmlFor="name" className="text-[18px] font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g John Doe"
                className="rounded-[4px] pl-3 pr-2 py-2 border-[1px] border-black flex-grow"
              />
              <label htmlFor="email" className="text-[18px] font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g john.doe@example.com"
                className="rounded-[4px] pl-3 pr-2 py-2 border-[1px] border-black flex-grow"
              />
              <label className="text-[18px] font-medium">Gender</label>
              <div className="flex items-center gap-2">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={gender === "Male"}
                    onChange={(e) => setGender(e.target.value)}
                    className="mr-2"
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={gender === "Female"}
                    onChange={(e) => setGender(e.target.value)}
                    className="mr-2"
                  />
                  Female
                </label>
              </div>
            </div>
            <button
              type="submit"
              className={`py-[10px] px-4 ${
                !name || !email || !gender
                  ? "bg-[#F4F4F4] common-text-color"
                  : "bg-[#1061C4] text-white"
              } rounded-[4px]`}
              disabled={!name || !email || !gender}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddUsers;

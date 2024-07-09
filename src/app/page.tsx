import AddUsers from "@/components/AddUsers";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function Home() {
  const users = await prisma.user.findMany();

  return (
    <div className="w-[80vw] mx-auto">
      <AddUsers />
      <h1 className="text-2xl text-center my-4">
        We Have following existing users in database
      </h1>
      <div className="mt-4 overflow-auto w-[85%] mx-auto">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex justify-between items-center border-2 py-4 my-1 rounded-sm px-4"
          >
            <div>
              Name: <span className="text-[18px] font-medium">{user.name}</span>
            </div>
            <div>
              Email:{" "}
              <span className="text-[18px] font-medium">{user.email}</span>
            </div>
            <div>
              Gender:{" "}
              <span className="text-[18px] font-medium">{user.gender}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

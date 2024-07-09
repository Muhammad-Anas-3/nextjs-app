import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function Home() {
  // const users: any = [
  //   {
  //     fullName: "Alice Johnson",
  //     email: "alice.johnson@example.com",
  //     password: "alice123",
  //   },
  //   {
  //     fullName: "Bob Brown",
  //     email: "bob.brown@example.com",
  //     password: "bob123",
  //   },
  //   {
  //     fullName: "Carol Clark",
  //     email: "carol.clark@example.com",
  //     password: "carol123",
  //   },
  //   {
  //     fullName: "David Davis",
  //     email: "david.davis@example.com",
  //     password: "david123",
  //   },
  //   {
  //     fullName: "Eve Evans",
  //     email: "eve.evans@example.com",
  //     password: "eve123",
  //   },
  // ];

  // const newUser = await prisma.user.createMany({
  //   data: users,
  // });

  const users = await prisma.user.findMany();

  return (
    <div>
      <h1 className="text-2xl text-center my-4">
        We Have following existing users in database
      </h1>
      <div className="mt-4">
        {users.map((user, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-2 py-4 my-1 rounded-sm px-4"
          >
            <div className="text-xl">
              FullName: <span className="font-bold">{user.fullName}</span>
            </div>
            <div className="text-sm">
              Email: <span className="font-bold">{user.email}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

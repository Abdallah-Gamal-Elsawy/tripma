import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

let users = [];

export async function POST(req) {
  const { name, email, password } = await req.json();

  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return new Response(
      JSON.stringify({ success: false, message: "User already exists" }),
      { status: 400 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = { name, email, password: hashedPassword };

  users.push(newUser);

  const token = jwt.sign(
    { email: newUser.email, name: newUser.name },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  return new Response(JSON.stringify({ success: true, token }), {
    status: 201,
  });
}

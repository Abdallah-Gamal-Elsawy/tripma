import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

let users = [
  { email: "user@example.com", password: "$2a$10$abcdef...", name: "John Doe" },
];

export async function POST(req) {
  const { email, password } = await req.json();

  const user = users.find((u) => u.email === email);

  if (!user) {
    return new Response(
      JSON.stringify({ success: false, message: "User not found" }),
      { status: 404 }
    );
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return new Response(
      JSON.stringify({ success: false, message: "Invalid credentials" }),
      { status: 401 }
    );
  }

  const token = jwt.sign(
    { email: user.email, name: user.name },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  return new Response(JSON.stringify({ success: true, token }), {
    status: 200,
  });
}

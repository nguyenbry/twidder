import Login from "@/pages_/Login.client";
import { redirectIfAuthed } from "@/hooks/redirectIfAuthed";

export default async function LoginPage() {
  await redirectIfAuthed();
  return <Login />;
}

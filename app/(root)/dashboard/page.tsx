import Image from "next/image";
import TaskPage from "../_components/tasks";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <TaskPage />
    </main>
  );
}

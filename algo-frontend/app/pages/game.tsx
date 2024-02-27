"use client";
import { useRouter } from "next/navigation";
import NavBar from "../components/navbar";

export default function Game() {
  const router = useRouter();

  return (
    <div>
      <NavBar></NavBar>
    </div>
  );
}

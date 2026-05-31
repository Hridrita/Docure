// src/app/loading.js
import { Spinner } from "@heroui/react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#DDE6D8]">
      <div className="text-center">
        <Spinner size="lg" color="success" />
        <p className="mt-4 text-[#4A6B6F] font-semibold">Loading...</p>
      </div>
    </div>
  );
}
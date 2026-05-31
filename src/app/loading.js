// src/app/loading.js
import { Spinner } from "@heroui/react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="text-center">
        <Spinner size="md" color="accent" />
        <p className="mt-4 text-[#4A6B6F] font-semibold">Loading...</p>
      </div>
    </div>
  );
}
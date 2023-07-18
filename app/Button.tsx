"use client";

import Cookie from "js-cookie";
import { UID_COOKIE } from "@/lib/constants";
import { useRouter } from "next/navigation";

export default function Button() {
  const router = useRouter();

  function resetBucket() {
    Cookie.remove(UID_COOKIE);
    router.refresh();
  }
  return (
    <button
      onClick={resetBucket}
      className="mt-4 py-2 px-4 border-2 rounded-lg hover:text-slate-400"
    >
      Reset Cookie
    </button>
  );
}

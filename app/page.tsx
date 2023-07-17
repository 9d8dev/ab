"use client";

import { useRouter } from "next/navigation";
import { Statsig } from "statsig-react";
import Image from "next/image";
import Cookie from "js-cookie";
import { EXPERIMENT, UID_COOKIE, GROUP_PARAM_FALLBACK } from "@/lib/constants";
import api from "@/lib/statsig-api";

export async function generateStaticParams() {
  const groups: string[] = (await api.getBuckets(EXPERIMENT))
    .concat(GROUP_PARAM_FALLBACK)
    .filter(Boolean);

  return groups.map((group) => ({ bucket: group }));
}

function Page({ params }: { params: { bucket: string } }) {
  const { refresh } = useRouter();
  const bucket = params?.bucket as string;

  function resetBucket() {
    Cookie.remove(UID_COOKIE);
    Statsig.logEvent("reset-bucket");
    refresh();
  }

  return (
    <main className="flex min-h-screen flex-col container divide-y">
      <section className="mt-6 py-4">
        <div className="space-y-1">
          <h1 className="text-xl font-bold uppercase">
            Design and development Studio
          </h1>
          <p className="text-slate-400">Rooted in innovation and creativity</p>
        </div>
      </section>
    </main>
  );
}

"use client"

import { TextInput } from "@repo/ui/text-input";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    return <div className="flex flex-col w-full h-screen">
        <div className="flex flex-col w-full h-screen items-center justify-center">
            <TextInput placeholder="Room Name" size="md" />
            <button onClick={() => router.push("/chat/123")}>Join Room</button>
        </div>
    </div>;
}

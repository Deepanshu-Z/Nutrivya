"use client";
import SkeletonCard from "@/app/(profile)/profile/components/Skeleton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { Loader } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type Chat = {
  id: string;
  content: string;
  createdAt: string;
  role: string;
  userEmail: string;
};

export default function Page() {
  const [chats, setChats] = useState<Chat[]>([]);
  const [content, setContent] = useState("");
  const [btnLoading, setBtnLoading] = useState<boolean>();
  const [loading, setLoading] = useState<boolean>(true);
  const params = useParams();
  const ticketId = params.id;

  const fetchAllChats = async () => {
    setLoading(true);
    const { data } = await axios.get(
      `/api/userprofile/chats?ticketId=${ticketId}`
    );
    setChats(data.chats);
    setLoading(false);
  };

  //TO BE UPDATED
  const sendMail = async (content: any) => {
    setChats((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        content,
        createdAt: new Date().toISOString(),
        role: "admin",
        userEmail: "nutrivya@admin.com",
      },
    ]);

    setBtnLoading(true);
    console.log("EMAIL IS: ", chats[0].userEmail);
    const response = await axios.post("/api/email/send/auth", {
      ticketId,
      userEmail: chats[0].userEmail,
      content,
      role: "admin",
    });
    setBtnLoading(false);
    setContent("");
  };

  useEffect(() => {
    fetchAllChats();
  }, []);

  if (loading) return <SkeletonCard />;
  return (
    <div className="flex flex-col h-[90%]">
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4">
        {chats.map((c, i) => (
          <div
            key={c.id}
            className={`flex  ${
              c.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[70%] rounded-lg px-4 py-2 text-sm ${
                c.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {c.content}
            </div>
          </div>
        ))}
      </div>

      {/* Input area */}
      <div className="flex gap-2 border-t p-3">
        <Input
          onChange={(e) => setContent(e.target.value)}
          placeholder="Send message"
          className="flex-1"
          value={content}
        />
        <Button className="w-20" onClick={() => sendMail(content)}>
          {btnLoading ? <Loader className="animate-spin" /> : "Send"}
        </Button>
      </div>
    </div>
  );
}

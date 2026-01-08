"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

type Tickets = {
  id: string;
  userId: string;
  subject: string;
  status: string;
  createdAt: string;
}[];

export default function TicketsTable() {
  const [tickets, setTickets] = useState<Tickets>([]);

  const fetchAllTickets = async () => {
    const data = await axios.get("/api/admin/tickets/fetchtickets");
    console.log(data.data.result);
    setTickets(data.data.result);
  };
  useEffect(() => {
    fetchAllTickets();
  }, []);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Subject</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Created At</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {tickets.map((ticket) => (
          <TableRow key={ticket.id}>
            <Link href={`/admin/ticket/chats/${ticket.id}`}>
              <TableCell className="font-medium cursor-pointer">
                {ticket.subject}
              </TableCell>
            </Link>

            <TableCell>
              <Badge
                variant={ticket.status === "PENDING" ? "secondary" : "default"}
              >
                {ticket.status}
              </Badge>
            </TableCell>

            <TableCell>
              {new Date(ticket.createdAt).toLocaleDateString()}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

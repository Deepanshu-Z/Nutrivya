"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

import SkeletonCard from "../components/Skeleton";
import { DialogDemo } from "../components/Dialog";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone } from "lucide-react";

export type Address = {
  phoneNumber: string;
  houseNumber: string;
  area: string;
  pincode: string;
  city: string;
  state: string;
  nearby: string;
  isDefault: boolean;
};

export default function AddressPage() {
  const { data: session, status } = useSession();
  const [address, setAddress] = useState<Address[]>([]);
  const [loading, setLoading] = useState(true);

  const userId = (session?.user as any)?.id;

  const fetchAddress = async () => {
    setLoading(true);
    const res = await axios.get("/api/userprofile/fetchaddress");
    setAddress(res.data.response ?? []);
    setLoading(false);
  };

  useEffect(() => {
    if (status === "authenticated") fetchAddress();
  }, [status]);

  /* -------------------- LOADING -------------------- */
  if (loading) return <SkeletonCard />;

  /* -------------------- EMPTY STATE -------------------- */
  if (!loading && address.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6">
        <h2 className="text-3xl font-semibold text-muted-foreground">
          No addresses saved
        </h2>

        <DialogDemo id={userId} address={address} setAddress={setAddress} />
      </div>
    );
  }

  /* -------------------- MAIN UI -------------------- */
  return (
    <div className="min-h-[90%] w-full bg-muted/30 py-10">
      <div className="mx-auto max-w-5xl px-6 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Saved Addresses</h1>

          <DialogDemo id={userId} address={address} setAddress={setAddress} />
        </div>

        {/* Address Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {address.map((addr, idx) => (
            <Card
              key={idx}
              className="rounded-xl border bg-background shadow-sm hover:shadow-md transition"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-semibold flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  Delivery Address
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4 text-sm">
                {/* Address Info */}
                <div className="leading-relaxed">
                  <p className="font-medium">House No: {addr.houseNumber}</p>
                  <p>{addr.area}</p>
                  <p>
                    {addr.city}, {addr.state} – {addr.pincode}
                  </p>
                  {addr.nearby && (
                    <p className="text-muted-foreground">Near {addr.nearby}</p>
                  )}
                </div>

                <div className="h-px bg-border" />

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{addr.phoneNumber}</span>
                  </div>

                  <Badge variant="secondary">
                    {addr.isDefault ? "Default" : "Saved"}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

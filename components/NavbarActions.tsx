"use client";

import Button from "@/components/ui/Button";
import useCart from "@/hook/useCart";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface NavbarActionsProps {}
const NavbarActions: React.FC<NavbarActionsProps> = () => {
  const router = useRouter();
  const cart = useCart();

  // Mounted trick for hydration problems
  // hydrations happens because of useCart hook which deals with
  // client local storage
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        className="flex items-center rounded-full bg-black px-4 py-2"
        onClick={() => router.push("/cart")}
      >
        <ShoppingBag className="20" color="#fff" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;

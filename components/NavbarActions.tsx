"use client";

import Button from "@/components/ui/Button";
import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";

interface NavbarActionsProps {}
const NavbarActions: React.FC<NavbarActionsProps> = () => {
  // Mounted trick for hydration propblems
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="flex items-center rounded-full bg-black px-4 py-2">
        <ShoppingBag className="20" color="#fff" />
        <span className="ml-2 text-sm font-medium text-white">0</span>
      </Button>
    </div>
  );
};

export default NavbarActions;

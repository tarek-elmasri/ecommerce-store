"use client";

import { priceFormatter } from "@/libs/utils";
import { useEffect, useState } from "react";

interface CurrencyProps {
  value?: string | number;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  // Mounted trick for hydration propblems
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const price = priceFormatter.format(Number(value));
  return <p className="font-semibold">{price}</p>;
};

export default Currency;

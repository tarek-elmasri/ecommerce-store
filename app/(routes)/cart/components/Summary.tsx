"use client";

import Button from "@/components/ui/Button";
import Currency from "@/components/ui/Currency";
import { Product } from "@/types";

interface SummaryProps {
  items: Product[];
  onCheckout: () => void;
}

const Summary: React.FC<SummaryProps> = ({ items, onCheckout }) => {
  const totalPrice = items.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  return (
    <div
      className="
    mt-16
    rounded-lg 
    bg-gray-50 
    px-4
    py-6
    sm:p-6
    lg:col-span-5
    lg:mt-0
    lg:p-8
  "
    >
      <h2 className="text-lg font-medium text-gray-500">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">
            Order Total:
          </div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        disabled={items.length === 0}
        className="w-full mt-6"
        onClick={onCheckout}
      >
        Checkout
      </Button>
    </div>
  );
};

export default Summary;

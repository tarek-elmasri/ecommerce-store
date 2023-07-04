"use client";

import Currency from "@/components/ui/Currency";
import IconButton from "@/components/ui/IconButton";
import { Product } from "@/types";
import { X } from "lucide-react";
import Image from "next/image";

interface CartItemProps {
  data: Product;
  onRemove: () => void;
}
const CartItem: React.FC<CartItemProps> = ({ data: item, onRemove }) => {

  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          alt=""
          fill
          sizes="(max-width: 12rem)"
          src={item.images[0].url}
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{item.name}</p>
          </div>

          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{item.color.name}</p>
            <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">
              {item.size.name}
            </p>
          </div>
          <Currency value={item.price} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;

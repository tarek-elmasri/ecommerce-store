"use client";

import useCart from "@/hook/useCart";
import CartItem from "./CartItem";
import Summary from "./Summary";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const Cart = () => {
  const searchParams = useSearchParams();
  const cart = useCart();

  const removeAll = cart.removeAll;

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed successfully.");
      removeAll();
    } else if (searchParams.get("canceled")) {
      toast.error("Something went wrong!");
    }
  }, [searchParams, removeAll]);

  const onCheckout = async () => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
        {
          productIds: cart.items.map((item) => item.id),
        }
      );

      window.location = res.data.url;
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <>
      <div className="lg:col-span-7">
        {cart.items.length === 0 && (
          <p className="text-neutral-500">No items added</p>
        )}
        <ul>
          {cart.items.map((item) => (
            <CartItem
              key={item.id}
              data={item}
              onRemove={() => cart.removeItem(item.id)}
            />
          ))}
        </ul>
      </div>

      <Summary
        items={cart.items}
        // removeAll={cart.removeAll}
        onCheckout={onCheckout}
      />
    </>
  );
};

export default Cart;

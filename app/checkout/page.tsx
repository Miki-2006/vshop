"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCartStore } from "@/store/cart-store";
import { checkoutAction } from "./checkout-action";

export default function CheckoutPage() {
  const { items, removeItem, addItem, clearCart } = useCartStore();
  const total = items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0,
  );
  if (total === 0 || items.length === 0) {
    return (
      <div className="w-full">
        <h1 className="text-center text-2xl font-bold">Your Cart is Empty!</h1>
      </div>
    );
  }

  const onClearCart = () => {
    clearCart()
    window.location.reload()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>
      <Card className="max-w-md mx-auto mb-8">
        <CardHeader className="flex justify-between">
          <CardTitle className="text-xl font-bold">Order Summary</CardTitle>
          <span className="text-gray-700 underline" onClick={onClearCart}>Clear all</span>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li key={index} className="flex flex-col gap-2 border-b pb-2">
                <div className="flex justify-between">
                  <span className="font-medium">{item.name}</span>
                  <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => removeItem(item.id)}
                  >
                    -
                  </Button>
                  <span className="text-lg font-semibold">{item.quantity}</span>
                  <Button variant={"outline"} className="bg-black text-white" size="sm" onClick={() => addItem({...item, quantity: 1})}>+</Button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-4 border-t pt-2 text-lg font-semibold">
            Total : ${total.toFixed(2)}
          </div>
        </CardContent>
      </Card>
      <form action={checkoutAction} className="max-w-md mx-auto">
        <input type="hidden" name="items" value={JSON.stringify(items)}/>
        <Button type="submit" variant={"default"} className="w-full bg-black text-white">Proceed to Payment</Button>
      </form>
    </div>
  );
}

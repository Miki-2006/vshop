import { ProductDetail } from "@/components/product-detail";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

interface Props {
    params: Promise<{id: string}>
}

export default async function ProductPage({params}: Props) {
  const {id} = await params;

    
  const product = await stripe.products.retrieve(id, {
    expand: ["default_price"],
  });

  const priceObj = product.default_price as Stripe.Price;

  const plainProduct = {
    id: product.id,
    name: product.name,
    description: product.description ?? null,
    image: product.images[0] ?? null,
    price: priceObj?.unit_amount ? priceObj.unit_amount / 100 : 0
  }

  return <ProductDetail product={plainProduct} />
}

'use server'

import { getTokenAuth } from "@/utlitis/getTokenAuth"


type shippingAddressType = {
    "details": string,
    "phone": string,
    "city": string
}

export async function getAdress({ cartId, shippingAddress }: { cartId: string, shippingAddress: shippingAddressType }) {

    const token = await getTokenAuth()
    if (!token)
        throw new Error('Unathuorized!, login first')

    const res = await fetch(`${process.env.API}/orders/checkout-session/${cartId}?url=http://localhost:3000`, {
        method: 'POST',
        body: JSON.stringify({
            shippingAddress
        }),
        headers: {
            token,
            'Content-type': 'application/json'
        }
    })

    const payload = await res.json()
    return payload
}



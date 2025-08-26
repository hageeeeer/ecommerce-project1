import * as z from 'zod'

export const adressSchema=  z.object({
    city:z.string().nonempty('required'),
    phone:z.string().nonempty('required'),
    details:z.string().nonempty('required'),
   
})

export type adressSchemaForm = z.infer<typeof adressSchema>
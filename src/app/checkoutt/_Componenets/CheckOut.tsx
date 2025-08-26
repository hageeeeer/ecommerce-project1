'use client'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { useForm } from 'react-hook-form'
import { getAdress } from '../_actions/address.action'
import { adressSchema, adressSchemaForm } from '@/schema/adress.schema'
import { zodResolver } from '@hookform/resolvers/zod'

export default function CheckOut({id}:{id:string}) {

    const {data,mutate} = useMutation({mutationFn:getAdress})
    const form = useForm<adressSchemaForm>({
        resolver: zodResolver(adressSchema),
        defaultValues:{
            city:'',
            details:'',
            phone:''
        }
    })

   
    function handleCheckOut(data:adressSchemaForm)
    {

         mutate({shippingAddress:data,cartId:id})
    }
   
    if(data?.status=='success')
        window.location.href=data?.session?.url
 

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleCheckOut)} className="w-2/3 mx-auto my-5">
                <FormField
                    control={form.control}
                    name="details"
                    render={({ field }) => (
                        <FormItem className="my-4">
                            <FormLabel>details</FormLabel>
                            <FormControl>
                                <Input  {...field} />
                            </FormControl>


                        </FormItem>
                    )
                    }
                />
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem className="my-4">
                            <FormLabel>phone</FormLabel>
                            <FormControl>
                                <Input type='tel' {...field} />
                            </FormControl>


                        </FormItem>
                    )
                    }
                />
                <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                        <FormItem className="my-4">
                            <FormLabel>city</FormLabel>
                            <FormControl>
                                <Input  {...field} />
                            </FormControl>


                        </FormItem>
                    )
                    }
                />
                <Button>Submit</Button>
            </form>
        </Form>
    )


}

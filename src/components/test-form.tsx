"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import {  useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  field1: z.string().min(1),
  field2: z.string().min(1),
  field3: z.string().min(1),
  field4: z.string().min(1),
  field5: z.string().min(1),
  field6: z.string().min(1),
  field7: z.string().min(1),
  field8: z.string().min(1),
  field9: z.string().min(1),
  field10: z.string().min(1)
})

  
export function TestForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      field1: "abc",
      field2: "abc",
      field3: "",
      field4: "a",
      field5: "s",
      field6: "d",
      field7: "d",
      field8: "f",
      field9: "s",
      field10: "s",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 my-12">

        <FormField
          control={form.control}
          name="field1"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Field: {field.name}</FormLabel>
              <FormControl>
                <Input placeholder={field.name} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="field2"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Field: {field.name}</FormLabel>
              <FormControl>
                <Input placeholder={field.name} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
        
          control={form.control}
          name="field3"
          render={({ field }) => (
            <FormItem className="scroll-mt-36">
              <FormLabel>Field: {field.name}</FormLabel>
              <FormControl>
                <Input placeholder={field.name} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="field4"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Field: {field.name}</FormLabel>
              <FormControl>
                <Input placeholder={field.name} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="field5"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Field: {field.name}</FormLabel>
              <FormControl>
                <Input placeholder={field.name} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="field6"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Field: {field.name}</FormLabel>
              <FormControl>
                <Input placeholder={field.name} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="field7"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Field: {field.name}</FormLabel>
              <FormControl>
                <Input placeholder={field.name} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="field8"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Field: {field.name}</FormLabel>
              <FormControl>
                <Input placeholder={field.name} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="field9"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Field: {field.name}</FormLabel>
              <FormControl>
                <Input placeholder={field.name} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="field10"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Field: {field.name}</FormLabel>
              <FormControl>
                <Input placeholder={field.name} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
       
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

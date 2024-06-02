"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  image: z.any(),
});

export default function ProfileForm() {
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      // image: "",
    },
  });

  const { register, setValue } = form;

  // 2. Define a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const data = {
    username: "pmk",
    image:
      "https://firebasestorage.googleapis.com/v0/b/msl-blogs.appspot.com/o/1717071834814711093.jpg?alt=media&token=64dd1184-1495-4533-90d0-471e6a890271",
    quill: "<p>whats up </p>",
  };

  useEffect(() => {
    if (data) {
      setValue("username", data.username);
      // setValue("image", data.image);
    }
  }, []);

  return (
    <Form {...form}>
      <img src={data.image} alt="" />
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  // {...register("username")}
                  placeholder="shadcn"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  // {...register("username")}
                  placeholder="shadcn"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <ReactQuill theme="snow" value={data.quill} />;
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

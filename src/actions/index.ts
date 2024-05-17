// src/actions/index.ts
import { defineAction, z } from "astro:actions";
import { Contact, db } from "astro:db";

export const server = {
  contact: defineAction({
    accept: "form",
    input: z.object({
      first_name: z.string().max(20, {
        message: "First name must be 20 characters or less.",
      }),
      last_name: z.string().max(20, {
        message: "Last name must be 20 characters or less.",
      }),
      email_address: z.string().email(),
      query_type: z.enum(["general-enquiry", "support-request"]),
      message: z.string(),
      consent: z.boolean(),
    }),
    handler: async (data) => {
      await db.insert(Contact).values(data);
      return { success: true };
    },
  }),
};

import { column, defineDb, defineTable } from "astro:db";

const Contact = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    first_name: column.text(),
    last_name: column.text(),
    email_address: column.text(),
    query_type: column.text(),
    message: column.text(),
    consent: column.boolean(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Contact },
});

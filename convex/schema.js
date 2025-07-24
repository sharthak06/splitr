import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
     email: v.optional(v.string()),
    // Corrected the typo on this line
    tokenIdentifier: v.string(), 
    imageUrl: v.optional(v.string()),
  })
    .index("by_token", ["tokenIdentifier"]) // Also correct it here
    .index("by_email", ["email"])
    .searchIndex("search_name", { searchField: "name" })
    .searchIndex("search_email", { searchField: "email" }),
});


import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { db } from "./db";
import { products } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get(api.products.list.path, async (req, res) => {
    try {
      const allProducts = await storage.getProducts();
      res.json(allProducts);
    } catch (err) {
      console.error("Error fetching products:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post(api.contacts.create.path, async (req, res) => {
    try {
      const input = api.contacts.create.input.parse(req.body);
      await storage.createContact(input);
      res.status(201).json({ success: true });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      console.error("Error creating contact:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Seed data function to be run once
  seedDatabase().catch(console.error);

  return httpServer;
}

async function seedDatabase() {
  try {
    const existingProducts = await storage.getProducts();
    if (existingProducts.length === 0) {
      console.log("Seeding database with products...");
      await db.insert(products).values([
        {
          name: "Organic Avocados",
          description: "Freshly picked, creamy Hass avocados perfect for toast or guacamole.",
          price: "5.99",
          category: "Fruits",
          imageUrl: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=500&q=80"
        },
        {
          name: "Farm Fresh Tomatoes",
          description: "Juicy, vine-ripened tomatoes grown without pesticides.",
          price: "3.49",
          category: "Vegetables",
          imageUrl: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=500&q=80"
        },
        {
          name: "Organic Spinach",
          description: "Crisp and nutritious spinach leaves, great for salads and smoothies.",
          price: "4.29",
          category: "Vegetables",
          imageUrl: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&q=80"
        },
        {
          name: "Fresh Strawberry Basket",
          description: "Sweet, ruby-red strawberries straight from the berry patch.",
          price: "6.99",
          category: "Fruits",
          imageUrl: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=500&q=80"
        },
        {
          name: "Harvest Veggie Bundle",
          description: "A seasonal mix of our best carrots, bell peppers, and cucumbers.",
          price: "15.99",
          category: "Bundles",
          imageUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&q=80"
        },
        {
          name: "Citrus Refresh Pack",
          description: "Zesty lemons, oranges, and grapefruits to brighten your day.",
          price: "12.49",
          category: "Bundles",
          imageUrl: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=500&q=80"
        }
      ]);
      console.log("Database seeded successfully.");
    }
  } catch (error) {
    console.error("Failed to seed database:", error);
  }
}

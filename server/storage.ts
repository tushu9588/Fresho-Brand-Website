import { db } from "./db";
import {
  products, contacts,
  type Product, type InsertProduct,
  type Contact, type InsertContact
} from "@shared/schema";

export interface IStorage {
  getProducts(): Promise<Product[]>;
  createContact(contact: InsertContact): Promise<Contact>;
}

export class DatabaseStorage implements IStorage {
  async getProducts(): Promise<Product[]> {
    return await db.select().from(products);
  }

  async createContact(contact: InsertContact): Promise<Contact> {
    const [created] = await db.insert(contacts).values(contact).returning();
    return created;
  }
}

export const storage = new DatabaseStorage();

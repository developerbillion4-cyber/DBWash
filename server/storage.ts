import { db } from "./db";
import {
  contactMessages,
  type ContactMessage,
  type InsertContactMessage
} from "@shared/schema";

export interface IStorage {
  createContactMessage(msg: InsertContactMessage): Promise<ContactMessage>;
}

export class DatabaseStorage implements IStorage {
  async createContactMessage(msg: InsertContactMessage): Promise<ContactMessage> {
    const [inserted] = await db.insert(contactMessages).values(msg).returning();
    return inserted;
  }
}

export const storage = new DatabaseStorage();

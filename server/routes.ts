import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { sendContactNotification } from "./email";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactSchema.parse(req.body);
      const submission = await storage.createContactSubmission(data);
      
      // Send email notification (don't block response on email failure)
      sendContactNotification(data).catch(err => {
        console.error("Email notification failed:", err);
      });
      
      res.json(submission);
    } catch (err) {
      res.status(400).json({ error: "Ungültige Daten" });
    }
  });

  return httpServer;
}

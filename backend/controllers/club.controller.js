// ponytail: single generic CRUD factory — same {success,data} shape as existing controllers, avoids 9 copy-paste files.
const crud = (Model, label) => ({
  create: async (req, res) => {
    try {
      const row = await Model.create(req.body);
      res.status(201).json({ success: true, message: `${label} created successfully`, data: row });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },
  list: async (req, res) => {
    try {
      const rows = await Model.findAll({ order: [["id", "DESC"]] });
      res.status(200).json({ success: true, count: rows.length, data: rows });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },
  get: async (req, res) => {
    try {
      const row = await Model.findByPk(req.params.id);
      if (!row) return res.status(404).json({ success: false, message: `${label} not found` });
      res.status(200).json({ success: true, data: row });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },
  update: async (req, res) => {
    try {
      const row = await Model.findByPk(req.params.id);
      if (!row) return res.status(404).json({ success: false, message: `${label} not found` });
      await row.update(req.body);
      res.status(200).json({ success: true, message: `${label} updated successfully`, data: row });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },
  remove: async (req, res) => {
    try {
      const row = await Model.findByPk(req.params.id);
      if (!row) return res.status(404).json({ success: false, message: `${label} not found` });
      await row.destroy();
      res.status(200).json({ success: true, message: `${label} deleted successfully` });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },
});

import {
  GamePlay,
  TicketTier,
  TicketOrder,
  NewsArticle,
  Subscriber,
  Booking,
  DraftProspect,
  Broadcast,
  Product,
  Inquiry,
} from "../models/index.js";

export const gamePlays = crud(GamePlay, "Play");
export const ticketTiers = crud(TicketTier, "Ticket tier");
export const ticketOrders = crud(TicketOrder, "Ticket order");
export const news = crud(NewsArticle, "Article");
export const subscribers = crud(Subscriber, "Subscriber");
export const bookings = crud(Booking, "Booking");
export const prospects = crud(DraftProspect, "Prospect");
export const broadcasts = crud(Broadcast, "Broadcast");
export const products = crud(Product, "Product");
export const inquiries = crud(Inquiry, "Inquiry");

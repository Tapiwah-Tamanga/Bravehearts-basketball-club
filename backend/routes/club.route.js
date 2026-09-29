import express from "express";
import {
  gamePlays,
  ticketTiers,
  ticketOrders,
  news,
  subscribers,
  bookings,
  prospects,
  broadcasts,
  products,
  inquiries,
} from "../controllers/club.controller.js";

// ponytail: one router file for all small resources — same REST shape as player/game routes.
const mount = (handlers) => {
  const r = express.Router();
  r.post("/", handlers.create);
  r.get("/", handlers.list);
  r.get("/:id", handlers.get);
  r.put("/:id", handlers.update);
  r.delete("/:id", handlers.remove);
  return r;
};

const router = express.Router();
router.use("/plays", mount(gamePlays));
router.use("/ticket-tiers", mount(ticketTiers));
router.use("/ticket-orders", mount(ticketOrders));
router.use("/news", mount(news));
router.use("/subscribers", mount(subscribers));
router.use("/bookings", mount(bookings));
router.use("/prospects", mount(prospects));
router.use("/broadcasts", mount(broadcasts));
router.use("/products", mount(products));
router.use("/inquiries", mount(inquiries));

export default router;

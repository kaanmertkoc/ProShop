import express, { Router } from "express";
const router = express.Router();
import {
  getProductById,
  getProducts,
  deleteProductById,
  updateProduct,
  createProduct,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getProducts);
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProductById)
  .post(protect, admin, createProduct)
  .put(protect, admin, updateProduct);

export default router;

import { Router } from "express";
import { createBlog, deleteBlog, getBlogById, getBlogs, updateBlog } from "../controllers/blogController.js";
import { auth } from "../middleware/auth.js";

const router = Router()

router.post("/create", auth, createBlog);
router.get("/", getBlogs);
router.get("/:id", getBlogById);
router.put("/:id", auth, updateBlog);
router.delete("/:id", auth, deleteBlog);

export default router
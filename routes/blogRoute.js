import { Router } from "express";
import { createBlog, deleteBlog, getBlogById, getBlogs, updateBlog } from "../controllers/blogController.js";

const router = Router()

router.post("/create", createBlog);
router.get("/", getBlogs);
router.get("/:id", getBlogById);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

export default router
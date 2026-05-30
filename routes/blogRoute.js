import { Router } from "express";
import { createBlog, deleteBlog, getBlogById, getBlogs, updateBlog } from "../controllers/blogController.js";
import { auth } from "../middleware/auth.js";
import { upload } from "../middleware/upload.js";

const router = Router()

router.post("/create", auth, upload.single("image"), createBlog);
router.get("/", getBlogs);
router.get("/:id", getBlogById);
router.put("/:id", auth, upload.single("image"), updateBlog);
router.delete("/:id", auth, deleteBlog);

export default router
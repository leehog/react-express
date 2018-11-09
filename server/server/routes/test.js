import express from 'express'
import testController from "../controllers/test.controller"

const router = express.Router()

// Add new test
router.post('/addTest', (req, res) => {
    testController.addTest(req, res);
});

export default router
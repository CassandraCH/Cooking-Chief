const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
            message: "tout est ok"
        });
});

// Export
module.exports = router;
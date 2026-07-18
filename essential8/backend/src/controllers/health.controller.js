function healthCheck(req, res) {
    res.status(200).json({
        status: "UP",
        message: "Backend server is running smoothly",
    });
}

module.exports = {
    healthCheck,
};
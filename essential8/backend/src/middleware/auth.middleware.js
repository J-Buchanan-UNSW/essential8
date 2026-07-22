const verifier = require("../config/cognito");

async function authenticate(req, res, next) {
    console.log("1. Authenticate middleware entered");

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        console.log("2. No Authorization header");
        return res.status(401).json({
            message: "Missing Authorization header",
        });
    }

    try {
        console.log("3. Extracting token");

        const token = authHeader.replace("Bearer ", "");

        console.log("4. Verifying token...");

        const payload = await verifier.verify(token);

        console.log("5. Token verified");

        req.user = payload;

        next();
    } catch (e) {
        console.error("Authentication failed:", e);

        return res.status(401).json({
            message: "Invalid Token",
        });
    }
}

module.exports = authenticate;
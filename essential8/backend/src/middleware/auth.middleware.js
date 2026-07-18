const verifier = require("../config/cognito");

async function authenticate(req, res, next) {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        return res.status(401).json({
            message: "Missing Authorization header"
        });
    }

    try {
        const token = authHeader.replace("Bearer ", "");
        const payload = await verifier.verify(token);

        req.user = payload;

        next();
    } catch(e) {
        return res.status(401).json({
            message: "INvalid Token"
        })
    }
}

module.exports = authenticate;
require("dotenv").config();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

require("node-pg-migrate/bin/node-pg-migrate");
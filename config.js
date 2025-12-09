// Configuration file
// Updated at 2026-01-10
module.exports = {
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || 'development',
    db: {
        host: process.env.DB_HOST || 'localhost',
// Updated at 2026-01-10
        port: process.env.DB_PORT || 5432,
    },
};

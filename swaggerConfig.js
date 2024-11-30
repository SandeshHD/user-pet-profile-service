const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Pet Health & Care Management API',
        version: '1.0.0',
        description: 'API documentation for Pet Health & Care Management System',
    },
    servers: [
        {
            url: 'http://a487d8b00bc6542ca91c2dd298684952-1223040857.us-east-1.elb.amazonaws.com',
        },
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT', // Optional, indicates that this uses JWT
            },
        },
    },
    security: [
        {
            bearerAuth: [], // Apply this globally to all endpoints requiring auth
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: ['./routes/adminRoutes.js','./routes/userRoutes.js','./routes/petRoutes.js','./routes/preferencesRoutes.js','./routes/healthRecordRoutes.js'], // Path to the API docs
};

module.exports = swaggerJSDoc(options);

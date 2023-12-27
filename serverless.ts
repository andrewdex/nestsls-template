import type { AWS } from '@serverless/typescript';

const serverlessConfiguration: AWS = {
  service: 'nitroxify-api',
  plugins: [
    'serverless-plugin-typescript', // This plugin is required to build the TypeScript project
    'serverless-plugin-optimize', // This plugin is required to optimize the Lambda functions
    'serverless-offline', // This plugin is required to run the API locally
    'serverless-plugin-warmup', // This plugin is required to keep the Lambda functions warm
    'serverless-dotenv-plugin', // This plugin is required to load the environment variables
    'serverless-add-api-key', // This plugin is required to add an API key to the API Gateway
  ],
  provider: {
    name: 'aws',
    runtime: 'nodejs20.x',
  },
  functions: {
    main: {
      handler: 'src/lambda.handler',
      events: [
        {
          http: {
            method: 'ANY',
            path: '/',
            cors: true, // this will enable CORS for the '/api/*' routes
          },
        },
        {
          http: {
            method: 'ANY',
            path: '/{proxy+}', // this will catch any route that wasn't defined previously, like `/api/v1/users`
            private: true, // this will enable CORS for the '/api/*' routes
            cors: true,
          },
        },
      ],
    },
  },
};

module.exports = serverlessConfiguration;

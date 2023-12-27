## NestJS Serverless Rest API with AWS Lambda Template

### Description

This is a sample project template to demonstrate how to use NestJS with Serverless Framework and Create a Rest API with using AWS Lambda. This project is using NestJS with Serverless Framework and AWS Lambda.

### Installation

```bash
$ npm install
```

### Install SLS globally

```bash
$ npm install -g serverless
```

### Running the app with SLS offline

```bash
# development
$ npm run start:offline
```

### Access the Root API Route

```bash
# development
$ http://localhost:3000/dev/api
```

### Access the sample products API Route

```bash
# development
$ http://localhost:3000/dev/api/products
```

### Deploy the app with SLS

> **WARNING!:** Remember you have to have AWS CLI installed and configured with your AWS account, before you deploy the app. It's recommended to use an IAM user with admin access to deploy the app (with provisioning the least needed privileges).

### Under the hood of the NPM command this uses the following SLS command

```bash
sls deploy --aws-profile <your-aws-profile-name>
```

### Run it using NPM Scripts use the following command

```bash
# development
$ npm run deploy-lambda
```

### Running the app with Nest

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

### Stay in touch

- Author - [Dilusha Gonagala](https://dilushagonagala.com)

### License

[MIT licensed](LICENSE).

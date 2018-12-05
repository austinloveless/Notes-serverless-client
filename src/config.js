const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1n0s9brkm6jf9"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://2wpqtf4dpf.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_4tkP5vM23",
    APP_CLIENT_ID: "1v87k83ghs9838cn7np5gkndef",
    IDENTITY_POOL_ID: "us-east-1:b3524eac-6011-413d-ae53-01393b2128b5"
  },
  STRIPE_KEY: "pk_test_nVbUVm9yfmUTX0EzwCoJLYGG"
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-aggtmdhvbcmd"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://h42wvwsvqb.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_dNDE2iseT",
    APP_CLIENT_ID: "5cs686s1mliebkv1s7qvaooqpn",
    IDENTITY_POOL_ID: "us-east-1:5b38dbff-30cc-4fe8-85c9-f06d6d369848"
  },
  STRIPE_KEY: "pk_test_nVbUVm9yfmUTX0EzwCoJLYGG"
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};

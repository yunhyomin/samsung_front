interface Config {
  oauth_uri: string;
  redirect_uri: string;
  client_id: string;
  client_secret: string;
}
const config: Config = {
  oauth_uri: "https://github.com/login/oauth/authorize",
  redirect_uri: "https://biaochenxuying.cn/login", // Please modify it to your information
  client_id: "XXXXXXXXX", // Please modify it to your information
  client_secret: "XXXXXXXXX" // Please modify it to your information
};

// in local development environment （The following information can be used for testing in local development）
if (import.meta.env.MODE === "development") {
  config.redirect_uri = "http://localhost:3001/login";
  config.client_id = "502176cec65773057a9e";
  config.client_secret = "65d444de381a026301a2c7cffb6952b9a86ac235";
}
export default config;

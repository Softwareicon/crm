// Writes capacitor.config.json so the Android app loads the live CRM site.
// Usage: SITE_URL=https://your-crm.vercel.app node configure.mjs
import { writeFileSync } from "node:fs";

const url = process.env.SITE_URL;
if (!url || !/^https:\/\//.test(url)) {
  console.error("SITE_URL must be set to the https:// address of the deployed CRM app");
  process.exit(1);
}

const config = {
  appId: process.env.APP_ID || "com.softwareicon.crm",
  appName: process.env.APP_NAME || "CRM",
  webDir: "www",
  server: {
    url,
    cleartext: false,
    allowNavigation: [new URL(url).hostname, "*.vercel.app", "accounts.google.com"],
  },
  android: { allowMixedContent: false },
};

writeFileSync("capacitor.config.json", `${JSON.stringify(config, null, 2)}\n`);
console.log(`capacitor.config.json -> ${url}`);

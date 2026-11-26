# CRM Android app

A thin Capacitor wrapper that opens the deployed CRM web app in an Android WebView.
It is not part of the Bun/Turborepo workspace.

The APK is built by `.github/workflows/android-apk.yml`:

1. Set the repository variable `SITE_URL` (Settings → Secrets and variables → Actions → Variables)
   to the live app address, e.g. `https://crm-app.vercel.app`.
2. Run the **Android APK** workflow (Actions tab → Android APK → Run workflow), or push a change under `mobile/`.
3. The APK is attached to the `apk-latest` release: `releases/download/apk-latest/crm.apk`.

The build is a debug-signed APK, installable by sideloading (allow "Install unknown apps").
For the Play Store, add a release keystore and switch the build to `assembleRelease`.

Google sign-in note: Google blocks OAuth inside embedded WebViews, so sign-in with Google
may need to be opened in the system browser. Microsoft or your own IdP work inside the WebView.

# ZanaAI WebView App

Welcome to the **ZanaAI WebView App** — a sleek, mobile-first experience for [zanaai.vercel.app](https://zanaai.vercel.app), built and branded by **FLKRD STUDIO** and created by **Zana Faroq**.

---

## 🚀 Overview

This app is a lightweight Expo project designed to wrap the ZanaAI website inside a fast, full-screen native mobile experience. It features:

- **Smooth splash screen** with multiple logos and animated loading
- **Full-screen WebView** (no native header, navbar, or distractions)
- **Brand-first onboarding** (custom studio and author credits)
- **Robust error handling** with friendly retry UX
- **Easy publishing** for the App Store and Google Play via [expo.dev](https://launch.expo.dev/)
- **Customizable assets and branding**
- **Modern Expo/React Native stack**

---

## 🖼️ UI Highlights

- **Splash Screen**: Multiple logo images, studio name, and animated loader.
- **WebView**: Loads [zanaai.vercel.app](https://zanaai.vercel.app) in immersive mode.
- **Error Screen**: Displays network or loading errors with a retry button.

---

## 🛠️ Getting Started

### 1. Clone and Setup

```sh
git clone https://github.com/FLKRDAIv1/zanaai-webview-app.git
cd zanaai-webview-app
npm install
```

### 2. Add Your Logos

Place your logo images (e.g., `logo1.png`, `logo2.png`) in the `assets/` directory.  
Default splash uses `logo1.png` and `logo2.png` — customize these as needed.

### 3. Run Locally

```sh
npm start
```

Use the Expo Go app (Android/iOS) or simulators to preview.

### 4. Publish

Go to [expo.dev/launch](https://launch.expo.dev/) to build and publish your app for iOS and Android.

---

## 🧩 Project Structure

```
zanaai-webview-app/
├── App.js             # App logic, splash, WebView, error handling
├── assets/            # Logo images and screenshots
│   ├── logo1.png
│   ├── logo2.png
│   ├── splash_screenshot.png
│   └── webview_screenshot.png
├── package.json       # Dependencies and scripts
├── app.json           # Expo config (name, icons, splash)
└── README.md          # Project docs
```

---

## ⚙️ Configuration

- **WebView URL**: Change the URL in `App.js` to point to your web app.
- **Splash Screen**: Edit `assets/logo1.png` and `assets/logo2.png` for branding.
- **app.json**: Update the `expo` config for app name, icon, and splash.

---

## 💡 Customization Tips

- Add more logos or animations to the splash screen.
- Localize your splash and error messages.
- Swap the WebView URL for another site or backend.
- Add analytics, push notifications, or deep linking features.

---

## 📸 Screenshots

![Splash Screen](./assets/splash_screenshot.png)
![WebView](./assets/webview_screenshot.png)

*Add your screenshots to `assets/` to showcase your app!*

---

## 🏷️ Credits

**FLKRD STUDIO**  
Created by **Zana Faroq**

---

## 📄 License

MIT License — free to use, modify, and distribute.

---

## 📬 Contact & Support

- Email: [zana.faroq@example.com](mailto:zana.faroq@example.com)
- GitHub: [FLKRDAIv1](https://github.com/FLKRDAIv1)

---

## 🤝 Contributing

Pull requests, issues, and suggestions are welcome!  
Please fork the repo and submit your improvements.

---

## 🌟 Why Use This Template?

- **Instant App Store-Ready WebView wrapper**
- **No unnecessary native UI**
- **Flexible branding**
- **Perfect for MVPs, landing pages, or SaaS dashboards**

---

> **Built with ❤️ by FLKRD STUDIO & Zana Faroq**
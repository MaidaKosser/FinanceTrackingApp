# 🪙 Personal Finance Tracking App

A modern, highly optimized, and clean Personal Finance and Expense Tracker mobile application built using **React Native**, **HeroUI**, and **Firebase**. This application follows strict software engineering principles, completely decoupled architecture (Separation of Concerns), and fluid UI responsiveness.

---

## Application Preview & UI Design

* **Design Language:** Minimalist, clean, and modern mint-to-white responsive theme.
* **Immersive Experience:** Full-screen edge-to-edge layout with a globally hidden status bar for premium user interaction.
* **Accessibility:** Dynamic total balance privacy toggling mask

> **Screenshots, App Logo, and Demo Video can be found in the `/assets/design-spec/` folder.**

---

## Key Features

* **Daily Expense Logging & Income Tracking:** Efficient transaction recording ledger.
* **Privacy Guard:** Mask or reveal account balances with one tap.
* **Modular Navigation Stack:** Custom smooth right-sliding stack combined with responsive bottom tab menus.
* **Budgeting & Goals (In Progress):** Custom financial threshold setups.
* **Analytical Charts & Reports (In Progress):** Visual spending breakdown.

---

## Architecture & Directory Layout

This project avoids massive, unmaintainable file blocks. Each screen context strictly isolates its Layout, Business/Firebase Logic, and View Elements into modular pairs:

```text
src/
├── app/
│   └── _layout.tsx         # Global Expo Root Layout & Status Configs
├── navigation/
│   ├── RootNavigator.tsx    # Native Stack Configuration
│   └── BottomTabNavigator.tsx # Application Core Bottom Tabs Configuration
├── screens/
│   ├── Home/
│   │   ├── index.tsx        # UI Layout / View Layer
│   │   ├── useController.ts # State Actions / Firebase Business Logic Hook
│   │   ├── styles.ts        # Dedicated Layout Styling Tokens
│   │   └── components/      # Isolated Reusable UI Elements
│   └── Profile/
└── config/
    └── firebase.ts          # Backend Configuration Initializer
```

## 🛠️ Tech Stack & Technologies Used

* **Frontend Framework:** React Native (Expo Router workspace)
* **UI Components Design:** HeroUI Library Integration
* **Programming Language:** TypeScript (`.ts`, `.tsx`) for type-safety
* **Navigation:** @react-navigation (Native Stack & Bottom Tabs)
* **Backend Support:** Firebase Integration (Auth & Firestore)
* **Safe Positioning Layouts:** React Native Safe Area Context

---

## 💻 Getting Started / Local Installation

Follow these steps to run the project environment locally:

### 1. Clone the Repository

```bash
git clone [https://github.com/MaidaKosser/FinanceTrackingApp.git](https://github.com/MaidaKosser/FinanceTrackingApp.git)
cd FinanceTrackingApp

```

### 2. Install Project Dependencies

```bash
yarn install

```

### 3. Start the Bundler Server

```bash
yarn start

```

* Press **`a`** to load on an Android Emulator or connected device.
* Press **`r`** to force-reload the Metro server cache.

---

## 📜 Development Safeguards & Git Protocol

* **Repository Hygiene:** All local user system configurations, compilation binaries, temporary APK/AAB outputs, and heavy backend dependencies (`node_modules/`) are strictly untracked via pre-configured `.gitignore` definitions.
* **Anti-Plagiarism Rule:** Completely unique styling tokens, bespoke architectures, and tailored controllers. No cookie-cutter copy-paste blocks used.
* **Security:** Firebase configuration variables are isolated from the repository layer.

---

## ⚖️ License & Compliance

* **Privacy Policy:** Compulsory Play Store deployment Privacy Statement available at `/privacy-policy.md`.
* **Assets Authorization:** Built exclusively with copyright-free vector elements and royalty-free media assets.




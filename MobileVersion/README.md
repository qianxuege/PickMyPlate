# PickMyPlate – React Native (Expo)

React Native version of PickMyPlate, matching the web app flow and features.

## Features

- **Welcome** – App intro and “Get Started”
- **Preferences** – Taste, dietary needs, budget
- **Home** – “Scan a Menu” CTA and recent scans
- **Scan** – Camera placeholder and “Upload from gallery”
- **Results** – Dish list (Recommended, Top Picks, Other) with filter chips and “More Filters”
- **Search** – Search dishes, recent searches
- **Adjust Preferences** – Taste profile, dietary, budget, preference mode
- **Dish Detail** – Name, price, spice, tags, summary, ingredients, “Why this matches you”
- **Profile** – Account info, preferences summary, “Adjust Preferences”, “View Favorites”, Log out / Delete account
- **Favorites** – Saved dishes list or empty state

## Run

```bash
cd MobileVersion
npm install
npm start
```

Then press **i** for iOS simulator or **a** for Android emulator (or scan the QR code with Expo Go).

## Stack

- **Expo** (~54) with TypeScript
- **React Navigation** (native stack, no tabs – bottom bar is custom)
- **Context** for app state (preferences, selected dish, etc.)
- **Mock data** in `src/data/mockDishes.ts` (same structure as web)

## Project structure

```
MobileVersion/
├── App.tsx                 # Navigation + AppProvider
├── src/
│   ├── components/         # PrimaryButton, FilterChip, DishCard, BottomNavBar
│   ├── context/           # AppContext (preferences, filters, etc.)
│   ├── data/              # mockDishes, filters, recent searches
│   ├── navigation/        # RootStackParamList
│   ├── screens/           # All 10 screens
│   └── types.ts           # Dish, TabType
```

## Web parity

- Same screens and navigation flow as `WebVersion`
- Same mock dishes, filters, and copy
- Styling aligned to the web wireframe (gray borders, black/white buttons, same sections)

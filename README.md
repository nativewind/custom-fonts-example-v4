# Custom Fonts with Nativewind v4

This example demonstrates how to use custom fonts (Inter) with Nativewind v4 and Expo.

## What this shows

- Loading custom OTF font files via `expo-font`
- Configuring `tailwind.config.js` with PostScript font names
- Using `font-*` className utilities in components

## Key files

- `assets/fonts/` -- Inter font files (OTF format, static weights)
- `app.json` -- expo-font plugin configuration
- `tailwind.config.js` -- fontFamily theme extension
- `App.tsx` -- Demo component using each font weight

## How to run

```bash
bun install
bun run ios    # or bun run android
```

## How it works

1. Font files are placed in `assets/fonts/` using PostScript names (e.g., `Inter-Regular.otf`)
2. `expo-font` loads them at build time via the `app.json` plugin
3. `tailwind.config.js` maps each font to a Tailwind utility class
4. Components use `className="font-inter"` to apply fonts

## Important notes

- **Use OTF or TTF format** -- Variable fonts are not supported on React Native
- **PostScript naming is required for iOS** -- The font file name must match the PostScript name (e.g., `Inter-Regular`, not `inter-regular`)
- **Each weight needs its own file and config entry** -- Unlike web CSS, you cannot use `font-weight` to select weights from a single font family
- **Verify with inline styles first** -- If `<Text style={{ fontFamily: 'Inter-Regular' }}>` doesn't work, the Tailwind config won't fix it

## Docs

See the [Custom Fonts guide](https://www.nativewind.dev/docs/guides/custom-fonts) in the Nativewind docs.

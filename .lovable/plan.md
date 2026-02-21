

## Update Brand Colors and Fonts

The current site uses colors and fonts from the original creative brief that don't match the brand board. This plan updates both to align with the brand board exactly.

### What Changes

**Colors** (5 swaps based on brand board):

| Role | Current Hex | New Hex | HSL (approx) |
|------|------------|---------|---------------|
| Dark background (Obsidian/Near Black) | `#0e0e0c` / `#111110` | `#25271f` | 75 15% 14% |
| Brown (Bronze) | `#9a7d5a` | `#48372a` | 22 27% 22% |
| Olive/Muted | `#6b6458` | `#767159` | 53 13% 41% |
| Cream | `#f5f0e8` | `#dcd5c9` | 35 22% 82% |
| Light/Off-white | `#faf8f4` | `#e8edec` | 160 14% 92% |

The Gold (`#c9a96e`) and Deep Forest (`#1a2318`) colors are not shown in the brand board, but Gold maps closest to the brown `#48372a`, and Deep Forest maps to `#25271f`. Sand will be adjusted to the olive `#767159`.

**Fonts**:
- **Belleza** (headlines) replaces Cormorant Garamond
- **Source Sans Pro** (body) replaces Montserrat

### Files Modified

1. **`src/index.css`**
   - Update Google Fonts import URL to load Belleza and Source Sans 3 (the current Google Fonts name for Source Sans Pro)
   - Recalculate all HSL CSS custom property values to match the 5 new hex colors
   - Update all derived tokens (card, popover, border, muted, accent, primary, sidebar) to use the new palette

2. **`tailwind.config.ts`**
   - Update `fontFamily.heading` to `["Belleza", "Georgia", "serif"]`
   - Update `fontFamily.body` to `["Source Sans 3", "system-ui", "sans-serif"]`

No other files need changes since all components reference CSS variables and Tailwind classes, not hardcoded colors or font names.

### Technical Details

New HSL values (converted from the brand board hex codes):

- `#25271f` -> approximately `75 15% 14%`
- `#48372a` -> approximately `22 27% 22%`
- `#767159` -> approximately `53 13% 41%`
- `#dcd5c9` -> approximately `35 22% 82%`
- `#e8edec` -> approximately `160 14% 92%`

CSS variable mapping:
- `--background`, `--obsidian`, `--near-black`, `--sidebar-background` -> derived from `#25271f`
- `--foreground`, `--cream`, `--card-foreground`, `--popover-foreground` -> derived from `#dcd5c9`
- `--off-white`, `--accent-foreground` -> derived from `#e8edec`
- `--primary`, `--gold`, `--ring` -> derived from `#48372a` (warm brown, used as the accent/gold)
- `--muted-tone`, `--muted` -> derived from `#767159`
- `--bronze`, `--accent` -> derived from `#48372a`
- `--sand`, `--muted-foreground` -> derived from `#767159`
- `--border`, `--input` -> a mid-tone between background and muted
- `--deep-forest`, `--secondary` -> slightly darker variant of `#25271f`


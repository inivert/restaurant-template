# CodeLumus - Brand Guidelines

## Logo
The primary logo of CodeLumus consists of two elements:
1. A code icon (Lucide React `Code2` icon)
2. The brand name in monospace font with code tag styling

### Code Icon
```jsx
// Using Lucide React Code2 icon
<Code2 className="text-primary w-5 h-5" />
```

### Brand Name Display
```jsx
<span className="font-mono font-bold text-lg">
  <span className="text-gray-600">&lt;</span>
  <span className="text-primary">CodeLumus</span>
  <span className="text-gray-600">/&gt;</span>
</span>
```

### Typography
- Brand Name: "CodeLumus"
- Font Family: Monospace
- Font Weight: Bold
- Font Size: Large (text-lg)
- Style: Wrapped in code tags (`<CodeLumus/>`)

### Colors
- Primary Color: Used for brand name and icon
- Text Colors:
  - Brand Name: Primary brand color
  - Code Tags: Gray-600
  - Badge Text: Gray-600

### Badge
- Background: Gray-100
- Text: "dev"
- Style: Rounded full, extra small text
```jsx
<span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full font-medium text-gray-600">dev</span>
```

## Social Media
- X (Twitter): [@codelumus](https://x.com/codelumus)

## Brand Elements
- Signature Text: "/* crafted with ☕️ */"
- Font Style: Monospace
- Text Color: Gray-500

## Usage Guidelines
1. The logo should always include both the code icon and the brand name
2. Maintain the code tag styling around the brand name
3. Keep the monospace font for brand consistency
4. The "dev" badge is optional but recommended for development-related contexts
5. Social media links should use the hover animation with primary color transition 
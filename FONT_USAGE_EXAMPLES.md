# Font Usage Examples

All fonts are now configured in your project. Here are examples of how to use them:

## Available Fonts

1. **Inter Tight** - Modern, condensed sans-serif
2. **Inter** - Clean, readable sans-serif  
3. **Arial** - System sans-serif fallback
4. **Instrument Serif** - Elegant serif font
5. **System Serif fonts** - Georgia, Cambria, Times New Roman, Times

## Usage Methods

### Method 1: Using CSS Classes (Recommended)

```tsx
// Inter Tight
<h1 className="font-inter-tight text-black/80 text-[15px] font-medium text-center">
  Events & Summits
</h1>

// Inter
<p className="font-inter text-lg">This is Inter font</p>

// Instrument Serif
<h2 className="font-instrument-serif text-2xl">Elegant Serif Heading</h2>

// System Serif
<p className="font-serif text-base">Traditional serif text</p>

// Arial
<span className="font-arial text-sm">Arial font text</span>
```

### Method 2: Using Inline Styles

```tsx
<h1 style={{ fontFamily: 'var(--font-inter-tight-face), Arial, sans-serif' }}>
  Inter Tight Heading
</h1>
```

### Method 3: Using Tailwind Arbitrary Values

```tsx
<h1 className="text-[15px]" style={{ fontFamily: 'var(--font-inter-tight-face), Arial, sans-serif' }}>
  Events & Summits
</h1>
```

## Complete Example Component

```tsx
export default function FontExamples() {
  return (
    <div className="space-y-8 p-8">
      {/* Inter Tight */}
      <div>
        <h1 className="font-inter-tight text-black/80 text-[15px] font-medium text-center">
          Events & Summits
        </h1>
        <p className="font-inter-tight text-gray-600 mt-2">
          This is Inter Tight font - perfect for headings and UI elements
        </p>
      </div>

      {/* Inter */}
      <div>
        <h2 className="font-inter text-2xl font-bold">Inter Font Heading</h2>
        <p className="font-inter text-base">
          Inter is a clean, readable sans-serif font ideal for body text
        </p>
      </div>

      {/* Instrument Serif */}
      <div>
        <h2 className="font-instrument-serif text-3xl font-bold">
          Instrument Serif
        </h2>
        <p className="font-instrument-serif text-lg italic">
          Elegant serif font for sophisticated typography
        </p>
      </div>

      {/* System Serif */}
      <div>
        <h2 className="font-serif text-2xl">System Serif</h2>
        <p className="font-serif text-base">
          Traditional serif fonts: Georgia, Cambria, Times New Roman
        </p>
      </div>

      {/* Arial */}
      <div>
        <p className="font-arial text-base">
          Arial - a reliable system font fallback
        </p>
      </div>
    </div>
  );
}
```

## Font Weights Available

- **Inter Tight**: 400, 500, 600, 700
- **Inter**: 400, 500, 600, 700
- **Instrument Serif**: 400 (normal, italic)

## Your Example (Fixed)

```tsx
<h1 className="text-black/80 text-[15px] font-medium text-center font-inter-tight">
  Events & Summits
</h1>
```

This should now display correctly with Inter Tight font!


# GSAP ScrollTrigger Opacity Fix

## Use Case
Fix the common GSAP + ScrollTrigger bug where content becomes invisible on scroll (opacity set to 0 on reverse). Universal pattern for any GSAP-powered site.

## The Problem
When using `gsap.from()` with `opacity: 0` and default `toggleActions`, ScrollTrigger sets `opacity: 0` on reverse, hiding content permanently.

## The Fix — Three-Part Pattern

### 1. Set opacity to 1 FIRST
```tsx
gsap.set('#my-element', { opacity: 1 });
```

### 2. Animate FROM (not TO) with explicit start
```tsx
gsap.from('#my-element', {
  y: 40, duration: 0.7, ease: 'power2.out',
  scrollTrigger: {
    trigger: '#my-element',
    start: 'top 85%',
    toggleActions: 'play none none none',  // ← KEY: never reverse
  },
});
```

### 3. Clean up in useEffect
```tsx
useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.set('.my-class', { opacity: 1 });
    gsap.from('.my-class', { /* ... */ });
  }, sectionRef);
  return () => ctx.revert();
}, []);
```

## Rules
- Always use `toggleActions: 'play none none none'` for visibility animations
- Never set `opacity: 0` in CSS on animated elements
- Use `gsap.context()` for proper cleanup
- For staggered elements, set all to opacity 1, then stagger: `gsap.set('.items', { opacity: 1 })` + `gsap.from('.items', { stagger: 0.1 })`

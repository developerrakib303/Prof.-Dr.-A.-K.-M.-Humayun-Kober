# Website Template Structure

## File Organization
```
project-root/
├── assets/
│   ├── css/
│   │   └── style.css (extracted from v3.html)
│   └── js/
│       └── main.js (extracted + enhanced menu functionality)
├── index.html (homepage from v3.html)
├── about.html
├── professional.html
├── highlights-archive.html
├── highlight-single.html
├── media.html
├── blog-archive.html
└── blog-single.html
```

## Navigation Structure

```mermaid
graph TD
    A[Homepage - index.html] --> B[About Me Dropdown]
    A --> C[Professional & Highlights Dropdown]
    A --> D[Media Dropdown]
    A --> E[Blog - Direct Link]
    
    B --> B1[Qualifications Section]
    B --> B2[Honors Section]
    B --> B3[Publications Section]
    B --> B4[Funding Section]
    
    C --> C1[Editorial Activity]
    C --> C2[National Committee]
    C --> C3[Other University Selection Board]
    C --> C4[Pharma Training]
    C --> C5[Professional Membership]
    C --> C6[Achievement Highlights]
    C --> C7[Honors & Award]
    C --> C8[Pharma Training and Entrepreneurship]
    
    D --> D1[TV Program Section]
    D --> D2[Daily News Section]
    D --> D3[Radio Section]
    
    E --> E1[Blog Archive Page]
    E1 --> E2[Individual Blog Posts]
    
    C6 --> F[Highlights Archive]
    F --> G[Individual Highlight Pages]
```

## Key Design Principles
1. **Strict Design Preservation**: All components from v3.html remain unchanged
2. **Component Reuse**: Cards, headers, footers, and navigation patterns from v3.html
3. **Responsive Behavior**: Maintaining exact responsive behavior from v3.html
4. **Professional Content**: Using realistic sample content throughout
5. **Enhanced UX**: Click-to-open menus with click-elsewhere-to-close functionality
6. **Rich Single Pages**: Sidebar and social sharing on blog/highlight single pages
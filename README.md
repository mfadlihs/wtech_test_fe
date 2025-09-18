# Picture Gallery Frontend

A modern, responsive picture gallery application built with Next.js, React Query, and Tailwind CSS. This project demonstrates best practices for frontend architecture, API integration, and user interface design.

## 🚀 Features

- **Responsive Gallery**: Beautiful grid layout that adapts to all screen sizes
- **Lazy Loading**: Optimized image loading with Next.js Image component
- **Interactive Hover Effects**: Elegant overlay displaying picture metadata on hover
- **React Query Integration**: Efficient data fetching with caching and error handling
- **TypeScript Support**: Full type safety throughout the application
- **Modern UI**: Clean design with Tailwind CSS

## 🏗️ Architecture

### Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with React Query provider
│   ├── page.tsx           # Home page
│   └── pictures/          # Pictures gallery page
│       └── page.tsx
├── components/            # Reusable UI components
│   ├── layout.tsx         # Main layout with navigation
│   ├── pictures/          # Picture-specific components
│   │   └── picture.tsx    # Individual picture card component
│   └── providers/         # Context providers
│       └── QueryProvider.tsx
├── hooks/                 # Custom React hooks
│   └── usePicture.ts      # React Query hooks for pictures
├── lib/                   # Utility libraries
│   └── axios.ts           # HTTP client configuration
└── services/              # API service layer
    └── picture.ts         # Picture API service
```

### Key Components

#### API Layer (`src/lib/axios.ts`)

- **ApiService**: Generic HTTP client wrapper around Axios
- **Standardized Response**: All API responses follow `{ message, status, data }` format
- **Error Handling**: Centralized error normalization and handling
- **Type Safety**: Generic types for request/response data

#### Service Layer (`src/services/picture.ts`)

- **PictureApiService**: Handles all picture-related API calls
- **Type Definitions**: `Picture` type with `id`, `name`, and `url` fields
- **Endpoints**: `/api/images` for listing, `/api/images/{id}` for details

#### Data Layer (`src/hooks/usePicture.ts`)

- **usePictures()**: Fetches list of pictures with React Query
- **usePictureDetail(id)**: Fetches individual picture details
- **Caching**: 5-minute stale time with automatic background refetching
- **Error States**: Proper error handling and loading states

#### UI Components

- **Picture Component**: Individual picture card with hover overlay
- **Layout Component**: Navigation and page structure
- **QueryProvider**: React Query client configuration

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.3 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **State Management**: React Query (TanStack Query) 5.89.0
- **HTTP Client**: Axios 1.12.2
- **Image Optimization**: Next.js Image component
- **Font**: Geist font family

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd fe
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file:

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:8000
   ```

4. **Run development server**

   ```bash
   npm run dev
   ```

5. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### API Configuration

The application expects a backend API with the following endpoints:

- `GET /api/images` - Returns list of pictures
- `GET /api/images/{id}` - Returns specific picture details

Expected API response format:

```json
{
  "message": "Success",
  "status": 200,
  "data": [
    {
      "id": "1",
      "name": "Beautiful Landscape",
      "url": "https://example.com/image.jpg"
    }
  ]
}
```

### React Query Configuration

- **Stale Time**: 5 minutes
- **Retry**: 1 attempt on failure
- **Background Refetching**: Enabled

## 🎨 UI Features

### Picture Gallery

- **Grid Layout**: Responsive grid (1-4 columns based on screen size)
- **Image Optimization**: Next.js Image with proper sizing and lazy loading
- **Hover Effects**:
  - Subtle image scale (105%)
  - Semi-transparent overlay (60% opacity)
  - Picture name and URL display
  - Smooth transitions (300ms)

### Navigation

- **Home**: Welcome page with call-to-action buttons
- **Pictures**: Gallery page with picture grid
- **Responsive**: Mobile-friendly navigation

### Loading States

- **Pictures List**: Loading indicator while fetching
- **Error Handling**: User-friendly error messages
- **Empty States**: Graceful handling of no data

## 🚀 Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack

# Production
npm run build        # Build for production with Turbopack
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- **Mobile**: 1 column grid
- **Tablet**: 2 column grid
- **Desktop**: 3-4 column grid
- **Large Desktop**: 4+ column grid

## 🔍 Best Practices Implemented

### Code Organization

- **Separation of Concerns**: Clear separation between UI, logic, and data layers
- **Type Safety**: Comprehensive TypeScript usage
- **Custom Hooks**: Reusable data fetching logic
- **Component Composition**: Modular, reusable components

### Performance

- **Image Optimization**: Next.js Image with proper sizing
- **Lazy Loading**: Images load only when needed
- **React Query Caching**: Efficient data management
- **Code Splitting**: Automatic with Next.js App Router

### User Experience

- **Loading States**: Clear feedback during data fetching
- **Error Handling**: Graceful error messages
- **Smooth Animations**: CSS transitions for hover effects
- **Accessibility**: Proper alt text and semantic HTML

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Troubleshooting

### Common Issues

**React Query Error**: Ensure `QueryProvider` is properly set up in the root layout.

**API Connection Issues**: Check that `NEXT_PUBLIC_API_URL` environment variable is set correctly.

**Image Loading Issues**: Verify images exist in `public/images/` directory (1.jpg through 5.jpg).

**TypeScript Errors**: Run `npm run lint` to check for type issues.

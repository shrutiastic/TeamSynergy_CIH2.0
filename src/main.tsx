import { createRoot } from 'react-dom/client'
import { ClerkProvider } from '@clerk/clerk-react'
import { dark } from '@clerk/themes'
import App from './App.tsx'
import './index.css'

// Get the publishable key from environment variables
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// Check if the key is available
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key. Set VITE_CLERK_PUBLISHABLE_KEY in your .env file.");
}

createRoot(document.getElementById("root")!).render(
  <ClerkProvider 
    publishableKey={PUBLISHABLE_KEY}
    appearance={{
      baseTheme: dark,
      elements: {
        card: 'bg-black/60 backdrop-blur-xl border border-white/10 shadow-xl rounded-lg',
        formButtonPrimary: 'bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 transition-opacity',
        formFieldInput: 'bg-gray-900/50 border-gray-800 text-white',
        footerActionLink: 'text-purple-500 hover:text-blue-500',
        headerTitle: 'text-white',
        headerSubtitle: 'text-gray-300',
        socialButtonsIconButton: 'bg-gray-800/50 hover:bg-gray-700/50 transition-colors border border-white/10',
        formFieldLabel: 'text-gray-300',
        identityPreview: 'bg-gray-900/50 border-gray-800',
        avatarBox: 'bg-gradient-to-r from-purple-600 to-blue-600',
      }
    }}
  >
    <App />
  </ClerkProvider>
);

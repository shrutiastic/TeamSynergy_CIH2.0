
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SignIn, SignUp, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import { AuthProvider } from "@/contexts/ClerkAuthAdapter";

import Index from "./pages/Index";
// Clerk handles authentication pages
import Dashboard from "./pages/Dashboard";
import SmartContracts from "./pages/SmartContracts";
import PriceTrends from "./pages/PriceTrends";
import RiskVisualization from "./pages/RiskVisualization";
import Portfolio from "./pages/Portfolio";
import HybridRisk from "./pages/HybridRisk";
import NotFound from "./pages/NotFound";

// Contract Analysis Pages
import Contracts from "./pages/Contracts";
import ContractScanner from "./pages/ContractScanner";
import ComplianceChecker from "./pages/ComplianceChecker";
import CreditScoreNFT from "./pages/CreditScoreNFT";

// Risk Analysis Pages
import WalletRiskProfile from "./pages/WalletRiskProfile";
import TokenVolatility from "./pages/TokenVolatility";
import HybridRiskAnalysis from "./pages/HybridRiskAnalysis";

// Banking Pages
import BankingAccounts from "./pages/BankingAccounts";
import PrivacyCenter from "./pages/PrivacyCenter";
import ApiDocs from "./pages/ApiDocs";

// Immersive Dashboard
import ImmersiveDashboard from "./pages/ImmersiveDashboard";

const queryClient = new QueryClient();

import { useAuth } from "@clerk/clerk-react";

const App = () => {
  const { isLoaded } = useAuth();
  if (!isLoaded) {
    return (
      <div style={{
        color: "white",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 32,
        background: "black"
      }}>
        Loading authentication...
      </div>
    );
  }
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
            <Routes>
            {/* Public routes */}
            <Route path="/" element={<Index />} />
            <Route path="/sign-in/*" element={
              <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900">
                <div className="w-full max-w-md">
                  <SignIn routing="path" path="/sign-in" redirectUrl="/dashboard" />
                </div>
              </div>
            } />
            <Route path="/sign-up/*" element={
              <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900">
                <div className="w-full max-w-md">
                  <SignUp routing="path" path="/sign-up" redirectUrl="/dashboard" />
                </div>
              </div>
            } />
            
            {/* Protected routes */}
            <Route path="/dashboard" element={
              <>
                <SignedIn>
                  <Dashboard />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn redirectUrl="/" />
                </SignedOut>
              </>
            } />
            <Route path="/smart-contracts" element={
              <SignedIn>
                <SmartContracts />
              </SignedIn>
            } />
            <Route path="/price-trends" element={
              <SignedIn>
                <PriceTrends />
              </SignedIn>
            } />
            <Route path="/risk-visualization" element={
              <SignedIn>
                <RiskVisualization />
              </SignedIn>
            } />
            <Route path="/portfolio" element={
              <SignedIn>
                <Portfolio />
              </SignedIn>
            } />
            <Route path="/hybrid-risk" element={
              <SignedIn>
                <HybridRisk />
              </SignedIn>
            } />
            
            {/* Contract Analysis Routes */}
            <Route path="/contracts" element={
              <SignedIn>
                <Contracts />
              </SignedIn>
            } />
            <Route path="/contract-scanner" element={
              <SignedIn>
                <ContractScanner />
              </SignedIn>
            } />
            <Route path="/compliance-checker" element={
              <SignedIn>
                <ComplianceChecker />
              </SignedIn>
            } />
            <Route path="/credit-score-nft" element={
              <SignedIn>
                <CreditScoreNFT />
              </SignedIn>
            } />
            
            {/* Risk Analysis Routes */}
            <Route path="/wallet-risk" element={
              <SignedIn>
                <WalletRiskProfile />
              </SignedIn>
            } />
            <Route path="/token-volatility" element={
              <SignedIn>
                <TokenVolatility />
              </SignedIn>
            } />
            <Route path="/hybrid-risk" element={
              <SignedIn>
                <HybridRiskAnalysis />
              </SignedIn>
            } />
            
            {/* Banking Routes */}
            <Route path="/banking-accounts" element={
              <SignedIn>
                <BankingAccounts />
              </SignedIn>
            } />
            
            {/* Privacy Routes */}
            <Route path="/privacy" element={
              <SignedIn>
                <PrivacyCenter />
              </SignedIn>
            } />
            
            {/* Documentation Routes */}
            <Route path="/api-docs" element={
              <SignedIn>
                <ApiDocs />
              </SignedIn>
            } />
            
            {/* Immersive 3D Dashboard */}
            <Route path="/immersive-dashboard" element={
              <SignedIn>
                <ImmersiveDashboard />
              </SignedIn>
            } />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;

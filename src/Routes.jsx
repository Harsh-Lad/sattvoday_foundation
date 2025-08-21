import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import HomepageEducationalImpactFoundation from './pages/homepage-educational-impact-foundation';
import About from './pages/about';
import Impact from './pages/impact';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
  <Route path="/" element={<HomepageEducationalImpactFoundation />} />
  <Route path="/homepage-educational-impact-foundation" element={<HomepageEducationalImpactFoundation />} />
  <Route path="/about" element={<About />} />
  <Route path="/impact" element={<Impact />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;

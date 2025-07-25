import React, { useState, useEffect, Suspense, lazy } from 'react';

import Loading from './components/Looding';
import './App.css';

// تحميل المكونات بشكل ديناميكي باستخدام Lazy Loading
const Hero = lazy(() => import('./components/Hero'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // تقليل وقت محاكاة التحميل إلى 1 ثانية لتحسين تجربة المستخدم
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loading />
      ) : (
        <Suspense fallback={<Loading />}>
          <Hero />
          <Footer />
        </Suspense>
      )}
    </div>
  );
}

export default App;


import { getCLS, getFCP, getFID, getLCP, getTTFB } from 'web-vitals';

const reportWebVitals = (metric: { name: string; value: number }) => {
  console.log(metric);
};

// Track the metrics
getCLS(reportWebVitals);
getFCP(reportWebVitals);
getFID(reportWebVitals);
getLCP(reportWebVitals);
getTTFB(reportWebVitals);

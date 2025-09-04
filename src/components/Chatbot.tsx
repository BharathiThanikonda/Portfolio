import { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = 'https://www.noupe.com/embed/019912470f497126b3c44bf6a4b5528c465c.js';
    script.async = true;
    
    // Append script to document head
    document.head.appendChild(script);
    
    // Cleanup function to remove script when component unmounts
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default Chatbot;


import React from 'react';
import Login from './components/Login';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="hidden lg:block">
          <img 
            src="https://picsum.photos/seed/loginpage/1200/1200" 
            alt="Abstract art" 
            className="w-full h-full object-cover rounded-2xl shadow-2xl"
          />
        </div>
        <div className="flex justify-center">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default App;

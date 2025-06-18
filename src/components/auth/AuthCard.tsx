// src/components/auth/AuthCard.tsx
import React from 'react';

interface AuthCardProps {
  children: React.ReactNode;
}

export default function AuthCard({ children }: AuthCardProps) {
  return (
    <div className="card-container">
      <div className="home_content">
        {children}
      </div>
    </div>
  );
}

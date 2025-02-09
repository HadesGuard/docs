import React from 'react';

export const ServiceCard = ({ title, description, icon }) => (
  <div style={{
    padding: '20px',
    borderRadius: '12px',
    background: '#1a1a2e',
    color: '#fff',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    textAlign: 'center',
    transition: 'transform 0.2s',
  }}
  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
  >
    <div style={{ fontSize: '2.5rem' }}>{icon}</div>
    <h3 style={{ marginTop: '10px' }}>{title}</h3>
    <p style={{ marginTop: '10px', color: '#a3a3c2' }}>{description}</p>
  </div>
);

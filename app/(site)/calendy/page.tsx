"use client";
import React from 'react';
import { InlineWidget } from 'react-calendly';

const CalendlyWidget = () => {
  return (
    <div className="flex items-center justify-center min-h-screen mt-20 bg-gray-100">
      <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-5xl overflow-hidden">
        <div className="calendly-widget-container">
          <InlineWidget url="https://calendly.com/gayathri-g3cyberspace/30min" />
        </div>
      </div>
      <style jsx>{`
        .calendly-widget-container {
          height: 700px;
          overflow: hidden;
        }

        .calendly-widget-container::-webkit-scrollbar {
          width: 0;
          height: 0;
        }

        .calendly-widget-container {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default CalendlyWidget;

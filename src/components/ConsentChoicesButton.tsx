'use client';

import React from 'react';

export default function ConsentChoicesButton() {
  return (
    <button
      type="button"
      onClick={() =>
        window.dispatchEvent(
          new CustomEvent('LightningRevenue:open-consent-preferences')
        )
      }
      className="text-white/60 hover:text-white transition-colors text-sm font-light text-left"
    >
      Consent Choices
    </button>
  );
}

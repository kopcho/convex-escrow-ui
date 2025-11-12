// src/app/layout.js
export const metadata = {
  title: 'Convex Escrow UI',
  description: 'Front-end for the CVM Arbiter-Controlled Digital Asset Escrow Contract',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, backgroundColor: '#f9f9f9' }}>{children}</body>
    </html>
  );
}

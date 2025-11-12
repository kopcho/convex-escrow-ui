// src/app/page.js
// This file contains the complete, static HTML/JSX structure for the Escrow UI.
// NOTE: For a functional application, the complex React hooks and Convex SDK logic
// must be implemented, but this structure is perfect for Vercel deployment and visualization.

export default function EscrowPage() {
  const actorAddress = '#ACTOR_ADDRESS_FROM_VERCEL'; // REPLACE: This will come from Vercel Environment Variable
  const currentAddress = '0xBuyerAddress...';
  const escrowStatus = ':uninitialized'; 
  
  // Simplified Details for static rendering
  const escrowDetails = {
      BUYER: '0xBuyerAddress...',
      SELLER: '0xSellerAddress...',
      ARBITER: '0xArbiterAddress...',
      ASSET_ADDRESS: '#400 (PAI)',
      ASSET_AMOUNT: '1,000,000,000',
      STATUS: escrowStatus
  };

  const sectionStyle = {
    padding: '20px', 
    maxWidth: '800px', 
    margin: '30px auto', 
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  };

  const buttonStyle = (color) => ({
    padding: '10px 15px',
    backgroundColor: color,
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px'
  });

  return (
    <div style={sectionStyle}>
      <h1>Arbitrated Digital Asset Escrow</h1>
      <p>Connected Address: <strong>{currentAddress}</strong></p>
      <p>Escrow Contract Address: <strong>{actorAddress}</strong></p>
      <hr/>
      
      {/* Status Indicator */}
      <div style={{ backgroundColor: '#e9f7ff', padding: '15px', borderLeft: '5px solid #007bff', marginBottom: '20px', borderRadius: '4px' }}>
          <p style={{ margin: 0 }}><strong>Current Escrow Status:</strong> <span style={{ color: '#007bff' }}>{escrowStatus}</span></p>
          <p style={{ margin: '5px 0 0 0', fontSize: '0.9em' }}>Asset: {escrowDetails.ASSET_AMOUNT} from {escrowDetails.ASSET_ADDRESS}</p>
      </div>

      {/* ----- 1. Initialization Form (Step 1) ----- */}
      <div style={{ border: '1px solid #ddd', padding: '15px', marginBottom: '20px', borderRadius: '4px' }}>
          <h2>1. Set Escrow Terms (Called by Buyer)</h2>
          
          <form style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
              <label>Seller Address:</label><input type="text" defaultValue={escrowDetails.SELLER} style={{ padding: '8px' }}/><br/>
              <label>Arbiter Address:</label><input type="text" defaultValue={escrowDetails.ARBITER} style={{ padding: '8px' }}/><br/>
              <label>Asset Address:</label><input type="text" defaultValue={escrowDetails.ASSET_ADDRESS} style={{ padding: '8px' }}/><br/>
              <label>Asset Amount (Coppers/ID):</label><input type="number" defaultValue={escrowDetails.ASSET_AMOUNT} style={{ padding: '8px' }}/><br/>
              
              <button type="button" style={buttonStyle('#007bff')}>
                  Initialize Escrow
              </button>
          </form>
      </div>
      
      {/* ----- 2. Funding Section (Step 2) ----- */}
      <div style={{ border: '1px solid #ddd', padding: '15px', marginBottom: '20px', borderRadius: '4px' }}>
          <h2>2. Fund Escrow (Called by Buyer)</h2>
          
          <div style={{ border: '1px dashed #ccc', padding: '10px', marginBottom: '10px' }}>
              <p><strong>Step 2A: Offer Asset</strong></p>
              <button style={buttonStyle('#ffc107')}>
                  1. Offer Asset to Escrow
              </button>
          </div>
          <div style={{ border: '1px dashed #ccc', padding: '10px' }}>
              <p><strong>Step 2B: Finalize Deposit</strong></p>
              <button style={buttonStyle('#28a745')}>
                  2. Finalize Deposit (Accept)
              </button>
          </div>
      </div>
      
      {/* ----- 3. Finalization Section (Step 3) ----- */}
      <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '4px' }}>
          <h2>3. Finalize Escrow (Called by Arbiter)</h2>
          <div style={{ marginTop: '15px', border: '2px solid #007bff', padding: '15px', textAlign: 'center' }}>
              <p><strong>ARBITRATION PANEL</strong></p>
              <button style={buttonStyle('#28a745')}>
                  ✅ Release to Seller
              </button>
              <button style={buttonStyle('#dc3545')}>
                  ❌ Refund to Buyer
              </button>
          </div>
      </div>
    </div>
  );
}

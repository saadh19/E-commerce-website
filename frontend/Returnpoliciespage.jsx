import React from 'react';
import './index.css'; 
const ReturnPolicy = () => {
  const nonReturnableItems = [
    "Intimate wear and swimwear",
    "Customized or personalized items",
    "Clearance or final-sale items"
  ];

  return (
    <div className="return-policy-container">
      <h1>Return & Exchange Policy</h1>
      <p>
        At <strong>MyProject.com</strong>, your satisfaction is our priority. 
        If you’re not completely happy with your purchase, we’re here to help.
      </p>

      <section>
        <h2>1. Return Window</h2>
        <ul>
          <li>You can return or exchange items within <strong>30 days</strong> of receiving your order.</li>
          <li>Items must be <strong>unused, unwashed, and with original tags and packaging</strong> intact.</li>
        </ul>
      </section>

      <section>
        <h2>2. How to Initiate a Return</h2>
        <ol>
          <li>Log in to your account and go to “My Orders.”</li>
          <li>Select the item you want to return and click “Request Return/Exchange.”</li>
          <li>Follow the instructions to generate a return label (for online orders) or visit our store (for in-store purchases).</li>
        </ol>
      </section>

      <section>
        <h2>3. Refunds</h2>
        <ul>
          <li>Refunds will be processed to your <strong>original payment method</strong> within 7–10 business days after we receive the returned item.</li>
          <li>If the return is approved but no original receipt is available, we may offer <strong>store credit</strong> instead.</li>
        </ul>
      </section>

      <section>
        <h2>4. Exchanges</h2>
        <ul>
          <li>You can exchange items for a <strong>different size, color, or style</strong>, subject to availability.</li>
          <li>For exchanges, shipping charges may apply if applicable.</li>
        </ul>
      </section>

      <section>
        <h2>5. Non-Returnable Items</h2>
        <ul>
          {nonReturnableItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>6. Conditions for Returns</h2>
        <ul>
          <li>Items must be in <strong>original condition</strong> (no stains, signs of wear, or damage).</li>
          <li>All <strong>tags, labels, and packaging</strong> must be intact.</li>
        </ul>
      </section>
    </div>
  );
};

export default ReturnPolicy;

import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';  

const IndexPage = () => {
  return (
    <div style={{
      backgroundColor: '#f0f0f0', 
      padding: '20px', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center'
    }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
        maxWidth: '800px',
        textAlign: 'center'
      }}>
        <h1 style={{ color: '#333' }}>Welcome to My Pet Blog!</h1>
        <p style={{ fontSize: '18px', color: '#555' }}>
          This is a blog about my favorite pet Marshall. He is a 7 year old multi-breed mix 
          with a calm and attentive demeanor. He loves going for walks, getting PupCups, 
          and getting his Bark Box Subscription every month in the mail.
        </p>
        <div style={{ margin: '20px 0' }}>
          <StaticImage
            src="../posts/marsh.jpg"  
            alt="Marshall"
            placeholder="blurred"
            layout="constrained"  // This makes the image responsive and avoids cropping
            width={600}           // Maximum width, adjust this as needed
            style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
          />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

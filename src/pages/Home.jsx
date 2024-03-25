import React from 'react';
import './Home.css'
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div>
        <Navbar/>
      <h1>Welcome to Our Website!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
      <p>Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.</p>
      <p>Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
      <p>Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor.</p>
    </div>
  );
}

export default Home;

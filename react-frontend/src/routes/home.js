import * as React from 'react';
import DIY from '../DIY.jpg';


export default function Home() {
  return (
    <div>
        <img src={DIY} width={500} height={400} alt='DIY Photo' />
        <h1>A better way to maintain your vehicle!</h1>
        <h2>Register above to save your vehicles history all in one place</h2>
    </div>
  );
}
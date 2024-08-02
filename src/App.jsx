import React from 'react';
import './App.css';
import { Card } from './components/card';

const imageNames = [
  "catapultegwent.png",
  "cirigwent.png",
  "doublegwent.png",
  "froidmordant.png",
  "leurregwent.png",
  "medicgwent.png",
  "philippagwent.png",
  "skullgwent.png",
  "spygwent.png",
  "yennefergwent.png",
];

const titles = [
  "Siege card - Northern Kingdoms",
  "Hero card - Ciri",
  "Commander's Horn card - All factions",
  "Weather card - Biting Frost",
  "Decoy card - All factions",
  "Medic card - Northern Kingdoms",
  "Hero card - Phillipa Eilhart",
  "Scorch card - All factions",
  "Spy card - Talar",
  "Hero card - Yennefer of Vengerberg",
];

const descriptions = [
  "Allows you to score 8 points against your opponent",
  "Allows you to score 15 points against your opponent. This card isn't vulnerable to weather cards and its score can not be doubled.",
  "Allows you to double one single faction's score.",
  "Drop the score of one single faction of your opponent to 1 point per card (if they are vulnerable).",
  "Allows you to get one card from your game back in your deck.",
  "Allows you yo score the amount of points on the card and to bring back to life a card from your deck.",
  "Allows you to score 10 points against your opponent. This card isn't vulnerable to weather cards and its score can not be doubled.",
  "Delete the strongest cards on your opponent's deck.",
  "Allows you to get 2 more cards in your game. The amount of points on the card goes to your opponent.",
  "Allows you to score 7 points against your opponent and to bring back to life a card from your deck. This card isn't vulnerable to weather cards and its score can not be doubled.",
];

function App() {
  return (
    <div className="App">
      {imageNames.map((imageName, index) => (
        <Card
          key={index}
          imgSrc={`/images/${imageName}`}
          imgAlt={`Card Image ${index + 1}`}
          title={titles[index]}
          description={descriptions[index]}
        />
      ))}
    </div>
  );
}

export default App;

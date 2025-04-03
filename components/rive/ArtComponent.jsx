'use client'

import { useRive } from '@rive-app/react-canvas';
import { useState } from 'react';
import Image from 'next/image'

const cards = [
  {
    id: 1,
    collection: 'Regular Folk',
    char_name: 'Old Man',
    age: 78,
    species: 'human',
    home_planet: 'Earth',
    faction: 'Good',
    image: './images/roundy 8.png',
    strength: 2,
    height_cm: 180,
    weight_lbs: 160,
    hp: 2,
    energy: 4,
    attack_power: 3,
    intelligence: 5,
    wisdom: 7,
    integrity: 6,
    charisma: 6,
    communication: 5,
    dexterity: 3,
    rhythm: 4,
    problem_solving: 4,
    hope: 5,
    faith: 7,
    perseverance: 5,
    resilience: 4,
    grit: 5,
    favorite_quote: 'Do or do not, there is no try',
    favorite_song: '',
    favorite_food: '',
    favorite_movie: '',
    favorite_game: '',
    favorite_book: '',
    favorite_sport: '',
    celebrity_crush: '',
    bio: 'Old fashioned romantic, waiting to give a beautiful rose to his lovely sweetheart'


  },
  {
    id: 2,
    collection: 'Regular Folk',
    char_name: 'Critter',
    age: 78,
    species: 'human',
    home_planet: 'Earth',
    faction: 'Good',
    image: './images/CritterCreature.png',
    strength: 2,
    height_cm: 180,
    weight_lbs: 160,
    hp: 2,
    energy: 4,
    attack_power: 3,
    intelligence: 5,
    wisdom: 7,
    integrity: 6,
    charisma: 6,
    communication: 5,
    dexterity: 3,
    rhythm: 4,
    problem_solving: 4,
    hope: 5,
    faith: 7,
    perseverance: 5,
    resilience: 4,
    grit: 5,
    favorite_quote: 'Do or do not, there is no try',
    favorite_song: '',
    favorite_food: '',
    favorite_movie: '',
    favorite_game: '',
    favorite_book: '',
    favorite_sport: '',
    celebrity_crush: '',
    bio: 'This critter can shift appearance in unusual ways.  He can even appear like a sketch'
  },
  {
    id: 3,
    collection: 'Regular Folk',
    char_name: 'Silly Head',
    age: 78,
    species: 'human',
    home_planet: 'Earth',
    faction: 'Good',
    image: './images/head Skewed.png',
    strength: 2,
    height_cm: 180,
    weight_lbs: 160,
    hp: 2,
    energy: 4,
    attack_power: 3,
    intelligence: 5,
    wisdom: 7,
    integrity: 6,
    charisma: 6,
    communication: 5,
    dexterity: 3,
    rhythm: 4,
    problem_solving: 4,
    hope: 5,
    faith: 7,
    perseverance: 5,
    resilience: 4,
    grit: 5,
    favorite_quote: 'Do or do not, there is no try',
    favorite_song: '',
    favorite_food: '',
    favorite_movie: '',
    favorite_game: '',
    favorite_book: '',
    favorite_sport: '',
    celebrity_crush: '',
    bio: "This confused man doesn't know if he's coming or going, flying or falling, or even twisting or flipping"
  },
  {
    id: 4,
    collection: 'Regular Folk',
    char_name: 'Leo the CEO',
    age: 78,
    species: 'human',
    home_planet: 'Earth',
    faction: 'Good',
    image: './images/Leo.png',
    strength: 2,
    height_cm: 180,
    weight_lbs: 160,
    hp: 2,
    energy: 4,
    attack_power: 3,
    intelligence: 5,
    wisdom: 7,
    integrity: 6,
    charisma: 6,
    communication: 5,
    dexterity: 3,
    rhythm: 4,
    problem_solving: 4,
    hope: 5,
    faith: 7,
    perseverance: 5,
    resilience: 4,
    grit: 5,
    favorite_quote: 'Do or do not, there is no try',
    favorite_song: '',
    favorite_food: '',
    favorite_movie: '',
    favorite_game: '',
    favorite_book: '',
    favorite_sport: '',
    celebrity_crush: '',
    bio: "Leo innovated the dump and hold management method, but unfortunately, wasn't able to adapt to new strategies."
  },
  {
    id: 5,
    collection: 'Regular Folk',
    char_name: 'Super G',
    age: 78,
    species: 'human',
    home_planet: 'Earth',
    faction: 'Good',
    image: './images/Head3.png',
    strength: 2,
    height_cm: 180,
    weight_lbs: 160,
    hp: 2,
    energy: 4,
    attack_power: 3,
    intelligence: 5,
    wisdom: 7,
    integrity: 6,
    charisma: 6,
    communication: 5,
    dexterity: 3,
    rhythm: 4,
    problem_solving: 4,
    hope: 5,
    faith: 7,
    perseverance: 5,
    resilience: 4,
    grit: 5,
    favorite_quote: 'Do or do not, there is no try',
    favorite_song: '',
    favorite_food: '',
    favorite_movie: '',
    favorite_game: '',
    favorite_book: '',
    favorite_sport: '',
    celebrity_crush: '',
    bio: 'Super G is the smoothest cat in the world'
  },
  {
    id: 6,
    collection: 'Regular Folk',
    char_name: 'Jogger Joe',
    age: 78,
    species: 'human',
    home_planet: 'Earth',
    faction: 'Good',
    image: './images/Jogger.png',
    strength: 2,
    height_cm: 180,
    weight_lbs: 160,
    hp: 2,
    energy: 4,
    attack_power: 3,
    intelligence: 5,
    wisdom: 7,
    integrity: 6,
    charisma: 6,
    communication: 5,
    dexterity: 3,
    rhythm: 4,
    problem_solving: 4,
    hope: 5,
    faith: 7,
    perseverance: 5,
    resilience: 4,
    grit: 5,
    favorite_quote: 'Do or do not, there is no try',
    favorite_song: '',
    favorite_food: '',
    favorite_movie: '',
    favorite_game: '',
    favorite_book: '',
    favorite_sport: '',
    celebrity_crush: '',
    bio: "Joe lives to jog. He spends 70% of his waking hours jogging the neighborhood.  He doesn't go too fast beacuse of his chronic plantar fascaitis"
  },
  {
    id: 7,
    collection: 'Aliens',
    char_name: 'Momo',
    age: 28,
    species: 'Ubunamite',
    home_planet: 'Ubunium',
    faction: 'Neutral',
    image: './images/Monster.png',
    strength: 5,
    height_cm: 280,
    weight_lbs: 3104,
    hp: 5,
    energy: 5,
    attack_power: 6,
    intelligence: 3,
    wisdom: 4,
    integrity: 76,
    charisma: 3,
    communication: 5,
    dexterity: 3,
    rhythm: 4,
    problem_solving: 4,
    hope: 5,
    faith: 7,
    perseverance: 5,
    resilience: 4,
    grit: 5,
    favorite_quote: 'Do or do not, there is no try',
    favorite_song: '',
    favorite_food: '',
    favorite_movie: '',
    favorite_game: '',
    favorite_book: '',
    favorite_sport: '',
    celebrity_crush: '',
    bio: "Momo is an incredibly scary monster, but he's secretly very friendly"
  },
  {
    id: 8,
    collection: 'Regular Folk',
    char_name: 'Custard Carney',
    age: 78,
    species: 'human',
    home_planet: 'Earth',
    faction: 'Good',
    image: './images/OlderMan.png',
    strength: 2,
    height_cm: 180,
    weight_lbs: 160,
    hp: 2,
    energy: 4,
    attack_power: 3,
    intelligence: 5,
    wisdom: 7,
    integrity: 6,
    charisma: 6,
    communication: 5,
    dexterity: 3,
    rhythm: 4,
    problem_solving: 4,
    hope: 5,
    faith: 7,
    perseverance: 5,
    resilience: 4,
    grit: 5,
    favorite_quote: 'Do or do not, there is no try',
    favorite_song: '',
    favorite_food: '',
    favorite_movie: '',
    favorite_game: '',
    favorite_book: '',
    favorite_sport: '',
    celebrity_crush: '',
    bio: "Custard Carney has learnt nothing so far in life.  He didn't learn anything new today and he probably won't tomorrow either.  Poor Bo."
  },
  {
    id: 9,
    collection: 'Regular Folk',
    char_name: 'Treeman',
    age: 78,
    species: 'human',
    home_planet: 'Earth',
    faction: 'Good',
    image: './images/treeman.png',
    strength: 2,
    height_cm: 180,
    weight_lbs: 160,
    hp: 2,
    energy: 4,
    attack_power: 3,
    intelligence: 5,
    wisdom: 7,
    integrity: 6,
    charisma: 6,
    communication: 5,
    dexterity: 3,
    rhythm: 4,
    problem_solving: 4,
    hope: 5,
    faith: 7,
    perseverance: 5,
    resilience: 4,
    grit: 5,
    favorite_quote: 'Do or do not, there is no try',
    favorite_song: '',
    favorite_food: '',
    favorite_movie: '',
    favorite_game: '',
    favorite_book: '',
    favorite_sport: '',
    celebrity_crush: '',
    bio: 'Treeman is the kindest, purest hearted creature ever created.  He loves everyone, whether they deserve it or not'
  },
];

export default function ArtComponent() {
  return (
    <div>
      <RiveSimple /> 
      <List cards={cards} />
      <Card cards={cards} />
    </div>
  )
}

function RiveSimple() {
  const { rive, RiveComponent } = useRive({
    src: './rive/fc_reveal_a.riv',
    stateMachines: "bumpy",
    autoplay: false,
  });

  return (
    <div style={{height: '400px', width: '400px', margin: 'auto'}}>

      <RiveComponent
        onMouseEnter={() => rive && rive.play()}
        onMouseLeave={() => rive && rive.pause()}
        id="rive"
        />
    </div>
  );
}

function List({cards}) {
  const [featuredCardId, setFeaturedCardId] = useState(1);
  return (
    <div className=''>
      <div className=''>
      <label>Card Names: </label>
      <select value={featuredCardId} default={featuredCardId} onChange={e => setFeaturedCardId(e.target.value)}>
        {cards.map((card)=> 
          <option key={card.id} value={card.id}>{card.char_name}</option>)}
      </select>
      </div>
      <FeatureCard cards={cards} featuredCardId={featuredCardId} />
    </div>
  );
}

function FeatureCard({cards, featuredCardId}) {
  console.log(cards);
  //const cardsList = cards;
  const [cardToFeature, setCardToFeature] = useState(cards[0]);
  console.log(featuredCardId);
  function handleClick (){
    let featuredCard = cards.filter(card => card.id === featuredCardId);
    //console.log('Feature cards from handleClick :' );
    //console.log(cards[featuredCardId-1]);
    setCardToFeature(cards[featuredCardId-1]);
    //console.log(cardToFeature); //1st time - array of length 1 contains 1 card object matching the id# //2nd time -  
}  
  return (
    <>
      <button className='bg-neutral-500 text-white font-bold p-3 rounded hover:bg-orange-400' onClick={handleClick}>Update</button>
      <div className='stats-box'>
        <img className='feature-image' src={cardToFeature.image} />
        <ul>
          <li><label className='stat-category'>Series: </label>{cardToFeature.collection}</li>        
          <li><label className='stat-category'>Name: </label>{cardToFeature.char_name}</li>
          <li><label className='stat-category'>Age: </label>{cardToFeature.age}</li>
          <li><label className='stat-category'>Species: </label>{cardToFeature.species}</li>
          <li><label className='stat-category'>Planet: </label>{cardToFeature.home_planet}</li>
          <li><label className='stat-category'>Allegiance: </label>{cardToFeature.faction}</li>
          <li><label className='stat-category'>Strength: </label>{cardToFeature.strength}</li>
        </ul>
      </div>
    </>
  );
}

function Card( {cards}) {
  //console.log(cards)
  return (
    <div className='container'>
      {cards.map((card)=>
        <div key={card.id} className='card'>
          <h2>{card.char_name}</h2>
          <img src={card.image} alt='image' />
          <p>{card.bio}</p>
      </div>

      )}
      
    </div>
  )
}




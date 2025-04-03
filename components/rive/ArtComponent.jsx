'use client'

import { useRive } from '@rive-app/react-canvas';
import { useState } from 'react';

const cards = [
  {
    id: 1,
    collection: 'Regular Folk',
    char_name: 'Old Man',
    age: 78,
    species: 'human',
    home_planet: 'Earth',
    faction: 'Good',
    image: './illustrations/roundy 8.png',
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
    image: './illustrations/CritterCreature.png',
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
    image: './illustrations/head Skewed.png',
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
    image: './illustrations/Leo.png',
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
    image: './illustrations/Head3.png',
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
    image: './illustrations/Jogger.png',
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
    image: './illustrations/Monster.png',
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
    image: './illustrations/OlderMan.png',
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
    image: './illustrations/treeman.png',
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
      <RiveSimple source={'./rive/Zoot.riv'} stateMachine={'Movement'} autoplay={true} />
      <List cards={cards} />
      <Card cards={cards} />
    </div>
  )
}

function RiveSimple({source, stateMachine, autoplay}) {
  const { rive, RiveComponent } = useRive({
    src: './rive/fc_reveal_b.riv',
    stateMachines: "bumpy",
    autoplay: true,
  });

  return (
    <div style={{height: '200px', width: '200px', margin: 'auto'}}>
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
  const [cardToFeature, setCardToFeature] = useState(cards[0]);
  function handleClick (){
    setCardToFeature(cards[featuredCardId - 1])
    console.log(featuredCard)
  } 
  return (
    <div id='list' className=''>       
      <div className='grid grid-cols-1 w-8/12 m-auto md:w-full md:grid-cols-10 gap-2 m-5'>
        <div className='col-start-1 md:col-start-3 col-span-1 md:col-span-3'>
        <select className='bg-slate-200 p-3 rounded-sm w-full' value={featuredCardId} default={featuredCardId} onChange={e => setFeaturedCardId(e.target.value)}>
          {cards.map((card)=> 
            <option key={card.id} value={card.id}>{card.char_name}</option>)}
        </select>
        </div>
        <div className='col-start-1 md:col-start-6 col-span-1 md:col-span-3'>
        <button className='bg-neutral-500 text-white font-bold p-3 rounded hover:bg-orange-400 w-full' onClick={handleClick}>Update</button>
        </div>
      </div>
      <FeatureCard cardToFeature={cardToFeature} />
    </div>  
  );
}

function FeatureCard({cardToFeature}) {  
  return (
      <div className='grid grid-cols-1 lg:grid-cols-5'>
        <img className='col-span-3 rounded-xl w-8/12 justify-center m-auto my-2' src={cardToFeature.image} />
        <ul className='p-4 sm:justify-center m-auto md:justify-start'>
          <li><span><label className='font-bold'>Series: </label></span>{cardToFeature.collection}</li>        
          <li><label className='font-bold'>Name: </label>{cardToFeature.char_name}</li>
          <li><label className='font-bold'>Age: </label>{cardToFeature.age}</li>
          <li><label className='font-bold'>Species: </label>{cardToFeature.species}</li>
          <li><label className='font-bold'>Planet: </label>{cardToFeature.home_planet}</li>
          <li><label className='font-bold'>Allegiance: </label>{cardToFeature.faction}</li>
          <li><label className='font-bold'>Strength: </label>{cardToFeature.strength}</li>
        </ul>
      </div>
    
  );
}

function Card( {cards}) {
  //console.log(cards)
  return (
    <div className='flex'>
    <div className='grid grid-col-1 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-4 m-10'>
      {cards.map((card)=>
        <div key={card.id} className='bg-slate-300 p-4 rounded-xl opacity-50 hover:opacity-100'>
          <h2 className='font-bold'>{card.char_name}</h2>
          <img className='rounded-lg grayscale hover:grayscale-0 hover:z-10' src={card.image} alt='image' />
          <p>{card.bio}</p>
      </div>
     )}
      
    </div>
    </div>
  )
}




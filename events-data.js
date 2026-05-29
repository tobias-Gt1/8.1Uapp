// Festival Events Data
// This file contains all event information and can be easily updated

const LOCATIONS = ['Poton', 'The Lake', 'The Club', 'Hangar'];

const ARTISTS = [
  {
    id: 1,
    name: 'Armin van Buuren',
    description: 'Trance icon',
    descriptionEn: 'Trance icon',
    image: 'assets/arminvanburen.png',
    bio: `Five-time “World’s No. 1 DJ” and trance icon, Armin delivers euphoric, high-energy sets that have headlined festivals from Tomorrowland to Ultra. His uplifting melodies and impeccable mixing keep crowds dancing for hours.`
  },
  {
    id: 2,
    name: 'Martin Garrix',
    description: 'EDM superstar',
    descriptionEn: 'EDM superstar',
    image: 'assets/martingarrix.png',
    bio: `Broke through as a teenager with “Animals,” Martin Garrix has become one of the biggest names in EDM. His anthemic big-room tracks and stadium-sized drops make him a festival favorite across Europe.`
  },
  {
    id: 3,
    name: 'Kensington',
    description: 'Indie rock anthems',
    descriptionEn: 'Indie rock anthems',
    image: 'assets/kensington.png',
    bio: `Rotterdam-born indie rock quintet known for soaring choruses and driving guitar riffs. Hits like “Streets” and “Riddles” showcase their knack for arena-ready hooks and emotionally charged lyricism.`
  },
  {
    id: 4,
    name: 'Within Temptation',
    description: 'Symphonic metal pioneers',
    descriptionEn: 'Symphonic metal pioneers',
    image: 'assets/withintemptation.png',
    bio: `Symphonic metal pioneers fronted by Sharon den Adel. Their cinematic soundscapes and operatic vocals translate into dramatic, visually stunning festival performances.`
  },
  {
    id: 5,
    name: 'De Staat',
    description: 'Experimental rock innovators',
    descriptionEn: 'Experimental rock innovators',
    image: 'assets/destaat.png',
    bio: `Experimental rock outfit from Nijmegen, blending funky grooves with angular guitar work and theatrical stagecraft. Tracks like “Witch Doctor” and “Down Town” highlight their genre-bending approach and infectious energy.`
  },
  {
    id: 6,
    name: 'Chef\'Special',
    description: 'Genre-blending funk-pop',
    descriptionEn: 'Genre-blending funk-pop',
    image: 'assets/chefsspecial.png',
    bio: `A four-piece from Haarlem mixing funk, pop, rock and hip-hop. Their upbeat, genre-fluid sound on songs like “Amigo” and “In Your Arms” makes for joyous, dance-floor-friendly live shows.`
  },
  {
    id: 7,
    name: 'Navarone',
    description: 'Hard-hitting rock four-piece',
    descriptionEn: 'Hard-hitting rock four-piece',
    image: 'assets/navarone.png',
    bio: `Utrecht’s hard-hitting rock four-piece, delivering riff-driven anthems and dynamic vocals. With a live reputation for raw intensity, they’re tailor-made for late-night main stages.`
  },
  {
    id: 8,
    name: 'Dotan',
    description: 'Folk-pop singer-songwriter',
    descriptionEn: 'Folk-pop singer-songwriter',
    image: 'assets/dotan.png',
    bio: `Folk-pop singer-songwriter whose intimate voice and acoustic arrangements (notably on “Home”) have earned him platinum sales and sell-out shows. His heartfelt storytelling connects deeply on festival acoustic stages.`
  },
  {
    id: 9,
    name: 'Eefje de Visser',
    description: 'Atmospheric indie-pop',
    descriptionEn: 'Atmospheric indie-pop',
    image: 'assets/eefjedevisser.png',
    bio: `Indie-pop artist crafting atmospheric, electronic-tinged songs. Her hypnotic vocals and lush production (as heard on “Ongeveer”) create a dreamlike vibe perfect for twilight festival slots.`
  },
  {
    id: 10,
    name: 'Froukje',
    description: 'Candid pop songwriter',
    descriptionEn: 'Candid pop songwriter',
    image: 'assets/froukje.png',
    bio: `Breakthrough pop singer Froukje Veenstra combines candid lyrics with catchy, synth-driven hooks. Since her 2021 debut, she’s become a voice of her generation—ideal for mid-day festival stages.`
  },
  {
    id: 11,
    name: 'Spinvis',
    description: 'Poetic lo-fi surrealist in pop form',
    descriptionEn: 'Poetic lo-fi surrealist in pop form',
    image: 'assets/spinvis.png',
    bio: `Erik de Jong performs under the moniker Spinvis, crafting poetic, collage-like songs that blend spoken-word snippets, lo-fi electronics and wistful pop. His live shows turn everyday observations into shared, dreamlike experiences.`
  }
];

// Generate events randomly distributed across times and locations
const generateEvents = () => {
  const startHour = 10;
  const endHour = 24;
  const events = [];
  let eventId = 1;

  const times = [];
  for (let h = startHour; h < endHour; h++) {
    for (let m = 0; m < 60; m += 15) {
      times.push(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`);
    }
  }

  // Randomly assign artists to time slots and locations
  const usedArtists = new Set();
  const artistsCopy = [...ARTISTS];

  // Shuffle artists
  artistsCopy.sort(() => Math.random() - 0.5);

  artistsCopy.forEach((artist, index) => {
    const randomTimeIndex = Math.floor(Math.random() * (times.length - 3));
    const startTime = times[randomTimeIndex];
    const duration = 30 + Math.floor(Math.random() * 3) * 15; // 30, 45, or 60 minutes
    const location = LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];

    const day = index % 2 === 0 ? 'saturday' : 'sunday';

    events.push({
      id: eventId++,
      artistId: artist.id,
      name: artist.name,
      description: artist.description,
      descriptionEn: artist.descriptionEn,
      startTime: startTime,
      duration: duration,
      location: location,
      day: day,
      image: artist.image,
      isFavorite: false
    });
  });

  return events;
};

const EVENTS = generateEvents();

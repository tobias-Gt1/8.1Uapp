// Festival Events Data
// This file contains all event information and can be easily updated

const LOCATIONS = ['Poton', 'The Lake', 'The Club', 'Hangar'];

const ARTISTS = [
  {
    id: 1,
    name: 'Armin van Buuren',
    description: 'Trance icon',
    descriptionEn: 'Trance icon',
    image: 'https://via.placeholder.com/400x300?text=Armin+van+Buuren'
  },
  {
    id: 2,
    name: 'Martin Garrix',
    description: 'EDM superstar',
    descriptionEn: 'EDM superstar',
    image: 'https://via.placeholder.com/400x300?text=Martin+Garrix'
  },
  {
    id: 3,
    name: 'Kensington',
    description: 'Indie rock anthems',
    descriptionEn: 'Indie rock anthems',
    image: 'https://via.placeholder.com/400x300?text=Kensington'
  },
  {
    id: 4,
    name: 'Within Temptation',
    description: 'Symphonic metal pioneers',
    descriptionEn: 'Symphonic metal pioneers',
    image: 'https://via.placeholder.com/400x300?text=Within+Temptation'
  },
  {
    id: 5,
    name: 'De Staat',
    description: 'Experimental rock innovators',
    descriptionEn: 'Experimental rock innovators',
    image: 'https://via.placeholder.com/400x300?text=De+Staat'
  },
  {
    id: 6,
    name: 'Chef\'Special',
    description: 'Genre-blending funk-pop',
    descriptionEn: 'Genre-blending funk-pop',
    image: 'https://via.placeholder.com/400x300?text=Chef+Special'
  },
  {
    id: 7,
    name: 'Navarone',
    description: 'Hard-hitting rock four-piece',
    descriptionEn: 'Hard-hitting rock four-piece',
    image: 'https://via.placeholder.com/400x300?text=Navarone'
  },
  {
    id: 8,
    name: 'Dotan',
    description: 'Folk-pop singer-songwriter',
    descriptionEn: 'Folk-pop singer-songwriter',
    image: 'https://via.placeholder.com/400x300?text=Dotan'
  },
  {
    id: 9,
    name: 'Eefje de Visser',
    description: 'Atmospheric indie-pop',
    descriptionEn: 'Atmospheric indie-pop',
    image: 'https://via.placeholder.com/400x300?text=Eefje+de+Visser'
  },
  {
    id: 10,
    name: 'Froukje',
    description: 'Candid pop songwriter',
    descriptionEn: 'Candid pop songwriter',
    image: 'https://via.placeholder.com/400x300?text=Froukje'
  },
  {
    id: 11,
    name: 'Spinvis',
    description: 'Poetic lo-fi surrealist in pop form',
    descriptionEn: 'Poetic lo-fi surrealist in pop form',
    image: 'https://via.placeholder.com/400x300?text=Spinvis'
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

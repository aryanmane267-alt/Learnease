/**
 * LearnEase — An Interactive, Accessible Learning Platform
 * Core Application Logic, Audio Synthesizer, Phonics Engine & Study Tools
 */

// ============================================================================
// 1. DATA REPOSITORY: ALPHABET, PHONICS, STORIES, PRESETS, & DECKS
// ============================================================================

const ALPHABET_DATA = [
  { letter: 'A', name: 'Ay', sound: 'æ', phonetic: '/æ/ as in Apple', word: 'Apple', emoji: '🍎', sentence: 'Apples are sweet, crunchy, and delicious.', guide: 'Open your mouth wide like taking a big bite of a juicy apple!' },
  { letter: 'B', name: 'Bee', sound: 'buh', phonetic: '/b/ as in Ball', word: 'Ball', emoji: '⚽', sentence: 'The soccer ball bounced high into the blue sky.', guide: 'Press your lips gently together, then release with a soft puff: /b/.' },
  { letter: 'C', name: 'See', sound: 'kuh', phonetic: '/k/ as in Cat', word: 'Cat', emoji: '🐱', sentence: 'A playful cat purred softly on the warm rug.', guide: 'Make a crisp sound from the back of your throat: /k/.' },
  { letter: 'D', name: 'Dee', sound: 'duh', phonetic: '/d/ as in Dog', word: 'Dog', emoji: '🐶', sentence: 'The friendly dog wagged its tail with joy.', guide: 'Tap the tip of your tongue against the roof of your mouth: /d/.' },
  { letter: 'E', name: 'Ee', sound: 'eh', phonetic: '/e/ as in Elephant', word: 'Elephant', emoji: '🐘', sentence: 'The gentle elephant sprayed water with its trunk.', guide: 'Smile slightly and let the sound out easily: /e/ as in egg.' },
  { letter: 'F', name: 'Eff', sound: 'fff', phonetic: '/f/ as in Fish', word: 'Fish', emoji: '🐟', sentence: 'Goldfish swim gracefully in the clear pond.', guide: 'Touch your top teeth to your bottom lip and blow air: /fff/.' },
  { letter: 'G', name: 'Jee', sound: 'guh', phonetic: '/g/ as in Garden', word: 'Garden', emoji: '🌻', sentence: 'Colourful sunflowers grow tall in the summer garden.', guide: 'Make a deep, gentle tap in the back of your throat: /g/.' },
  { letter: 'H', name: 'Aych', sound: 'huh', phonetic: '/h/ as in Hat', word: 'Hat', emoji: '🎩', sentence: 'The magician pulled a fluffy rabbit out of the hat.', guide: 'Breathe out a warm sigh of air like fogging a mirror: /h/.' },
  { letter: 'I', name: 'Eye', sound: 'ih', phonetic: '/ɪ/ as in Igloo', word: 'Igloo', emoji: '❄️', sentence: 'The snowy igloo stays warm and cozy inside.', guide: 'Keep your mouth slightly open with relaxed lips: /ih/.' },
  { letter: 'J', name: 'Jay', sound: 'juh', phonetic: '/dʒ/ as in Jam', word: 'Jam', emoji: '🍓', sentence: 'We spread sweet strawberry jam on toast.', guide: 'Push your lips forward and make a cheerful jump sound: /j/.' },
  { letter: 'K', name: 'Kay', sound: 'kuh', phonetic: '/k/ as in Kite', word: 'Kite', emoji: '🪁', sentence: 'The diamond kite danced playfully in the wind.', guide: 'Like letter C, a crisp, clean sound in the back: /k/.' },
  { letter: 'L', name: 'El', sound: 'lll', phonetic: '/l/ as in Lion', word: 'Lion', emoji: '🦁', sentence: 'The kind lion rested in the golden grass.', guide: 'Touch the tip of your tongue right behind your top front teeth: /lll/.' },
  { letter: 'M', name: 'Em', sound: 'mmm', phonetic: '/m/ as in Moon', word: 'Moon', emoji: '🌙', sentence: 'The bright moon glowed in the quiet night.', guide: 'Keep your lips closed and hum gently: /mmm/ like yummy food!' },
  { letter: 'N', name: 'En', sound: 'nnn', phonetic: '/n/ as in Nest', word: 'Nest', emoji: '🪺', sentence: 'Baby birds rested safely in the warm nest.', guide: 'Press your tongue to the roof of your mouth and hum: /nnn/.' },
  { letter: 'O', name: 'Oh', sound: 'aw', phonetic: '/ɒ/ as in Octopus', word: 'Octopus', emoji: '🐙', sentence: 'An octopus has eight arms and swims in the deep sea.', guide: 'Make an open round "O" shape with your lips: /aw/.' },
  { letter: 'P', name: 'Pee', sound: 'puh', phonetic: '/p/ as in Pen', word: 'Pen', emoji: '🖊️', sentence: 'We write creative stories with a blue pen.', guide: 'Press your lips together and pop air out softly: /p/.' },
  { letter: 'Q', name: 'Kyoo', sound: 'kwuh', phonetic: '/kw/ as in Queen', word: 'Queen', emoji: '👑', sentence: 'The wise queen wore a sparkling golden crown.', guide: 'Round your lips and combine /k/ and /w/: /kwuh/.' },
  { letter: 'R', name: 'Ar', sound: 'rrr', phonetic: '/r/ as in Rainbow', word: 'Rainbow', emoji: '🌈', sentence: 'A bright rainbow arched across the sunny sky.', guide: 'Curl your tongue slightly back without touching the roof: /rrr/.' },
  { letter: 'S', name: 'Ess', sound: 'sss', phonetic: '/s/ as in Sun', word: 'Sun', emoji: '☀️', sentence: 'The warm sun shone brightly over the green hills.', guide: 'Hiss gently through your teeth like a friendly stream: /sss/.' },
  { letter: 'T', name: 'Tee', sound: 'tuh', phonetic: '/t/ as in Tree', word: 'Tree', emoji: '🌳', sentence: 'Green leaves whispered in the gentle breeze.', guide: 'Quickly tap the tip of your tongue behind your upper teeth: /t/.' },
  { letter: 'U', name: 'Yoo', sound: 'uh', phonetic: '/ʌ/ as in Umbrella', word: 'Umbrella', emoji: '☂️', sentence: 'A colourful umbrella keeps us dry in the rain.', guide: 'Relax your mouth and say a quick, gentle: /uh/.' },
  { letter: 'V', name: 'Vee', sound: 'vvv', phonetic: '/v/ as in Violin', word: 'Violin', emoji: '🎻', sentence: 'The violin made sweet, harmonious music.', guide: 'Touch top teeth to bottom lip and buzz with your voice: /vvv/.' },
  { letter: 'W', name: 'Double-Yoo', sound: 'wuh', phonetic: '/w/ as in Water', word: 'Water', emoji: '💧', sentence: 'Cool water flows peacefully in the mountain river.', guide: 'Pucker your lips like whistling and open into the vowel: /wuh/.' },
  { letter: 'X', name: 'Ex', sound: 'ks', phonetic: '/ks/ as in Fox', word: 'Fox', emoji: '🦊', sentence: 'A clever fox leaped softly over the fallen branch.', guide: 'Combine /k/ and /s/ together quickly: /ks/.' },
  { letter: 'Y', name: 'Wye', sound: 'yuh', phonetic: '/j/ as in Yellow', word: 'Yellow', emoji: '💛', sentence: 'Yellow buttercups bloomed across the meadow.', guide: 'Press the sides of your tongue to your top teeth: /yuh/.' },
  { letter: 'Z', name: 'Zed', sound: 'zzz', phonetic: '/z/ as in Zebra', word: 'Zebra', emoji: '🦓', sentence: 'The zebra walked proudly with black and white stripes.', guide: 'Buzz your voice like a busy bumblebee: /zzz/.' }
];

const PHONICS_PATTERNS = [
  // Short Vowels
  { cat: 'short-vowels', symbol: '/æ/', label: 'Short A', word: 'Apple', emoji: '🍎', sample: 'at, cat, map' },
  { cat: 'short-vowels', symbol: '/e/', label: 'Short E', word: 'Egg', emoji: '🥚', sample: 'pen, red, bed' },
  { cat: 'short-vowels', symbol: '/ɪ/', label: 'Short I', word: 'Igloo', emoji: '❄️', sample: 'sit, pin, big' },
  { cat: 'short-vowels', symbol: '/ɒ/', label: 'Short O', word: 'Orange', emoji: '🍊', sample: 'dog, hot, pot' },
  { cat: 'short-vowels', symbol: '/ʌ/', label: 'Short U', word: 'Sun', emoji: '☀️', sample: 'sun, bus, cup' },
  // Consonants
  { cat: 'consonants', symbol: '/m/', label: 'Consonant M', word: 'Moon', emoji: '🌙', sample: 'man, mom, map' },
  { cat: 'consonants', symbol: '/s/', label: 'Consonant S', word: 'Sun', emoji: '☀️', sample: 'see, star, sea' },
  { cat: 'consonants', symbol: '/t/', label: 'Consonant T', word: 'Tree', emoji: '🌳', sample: 'top, ten, tie' },
  { cat: 'consonants', symbol: '/b/', label: 'Consonant B', word: 'Ball', emoji: '⚽', sample: 'bat, bug, bed' },
  // Digraphs
  { cat: 'digraphs', symbol: '/ʃ/', label: 'SH Digraph', word: 'Ship', emoji: '🚢', sample: 'ship, shell, shoe' },
  { cat: 'digraphs', symbol: '/tʃ/', label: 'CH Digraph', word: 'Chair', emoji: '🪑', sample: 'chin, chips, chat' },
  { cat: 'digraphs', symbol: '/θ/', label: 'TH Digraph', word: 'Thumb', emoji: '👍', sample: 'think, thank, thin' },
  { cat: 'digraphs', symbol: '/ŋ/', label: 'NG Digraph', word: 'Ring', emoji: '💍', sample: 'sing, wing, ring' },
  // Vowel Teams
  { cat: 'vowel-teams', symbol: '/iː/', label: 'EE Vowel Team', word: 'Bee', emoji: '🐝', sample: 'tree, see, seed' },
  { cat: 'vowel-teams', symbol: '/uː/', label: 'OO Vowel Team', word: 'Moon', emoji: '🌙', sample: 'cool, pool, food' },
  { cat: 'vowel-teams', symbol: '/ɑː/', label: 'AR R-Controlled', word: 'Star', emoji: '⭐', sample: 'car, park, dark' }
];

const BLEND_WORDS = {
  cat: { tiles: [{ char: 'c', sound: 'kuh', phoneme: '/k/' }, { char: 'a', sound: 'æ', phoneme: '/æ/' }, { char: 't', sound: 'tuh', phoneme: '/t/' }], word: 'cat', emoji: '🐱' },
  sun: { tiles: [{ char: 's', sound: 'sss', phoneme: '/s/' }, { char: 'u', sound: 'uh', phoneme: '/ʌ/' }, { char: 'n', sound: 'nnn', phoneme: '/n/' }], word: 'sun', emoji: '☀️' },
  pen: { tiles: [{ char: 'p', sound: 'puh', phoneme: '/p/' }, { char: 'e', sound: 'eh', phoneme: '/e/' }, { char: 'n', sound: 'nnn', phoneme: '/n/' }], word: 'pen', emoji: '🖊️' },
  dog: { tiles: [{ char: 'd', sound: 'duh', phoneme: '/d/' }, { char: 'o', sound: 'aw', phoneme: '/ɒ/' }, { char: 'g', sound: 'guh', phoneme: '/g/' }], word: 'dog', emoji: '🐶' },
  bat: { tiles: [{ char: 'b', sound: 'buh', phoneme: '/b/' }, { char: 'a', sound: 'æ', phoneme: '/æ/' }, { char: 't', sound: 'tuh', phoneme: '/t/' }], word: 'bat', emoji: '🦇' },
  fish: { tiles: [{ char: 'f', sound: 'fff', phoneme: '/f/' }, { char: 'i', sound: 'ih', phoneme: '/ɪ/' }, { char: 'sh', sound: 'shhh', phoneme: '/ʃ/' }], word: 'fish', emoji: '🐟' },
  map: { tiles: [{ char: 'm', sound: 'mmm', phoneme: '/m/' }, { char: 'a', sound: 'æ', phoneme: '/æ/' }, { char: 'p', sound: 'puh', phoneme: '/p/' }], word: 'map', emoji: '🗺️' }
};

const VOCAB_WORDS = [
  { word: 'Butterfly', syllables: ['but', 'ter', 'fly'], emoji: '🦋', meaning: 'A colourful flying insect with large, delicate wings that loves garden flowers.', sentence: 'A colourful butterfly rested gently on the sunny flower.' },
  { word: 'Rainbow', syllables: ['rain', 'bow'], emoji: '🌈', meaning: 'A colourful arc of light in the sky produced by sunlight shining through rain drops.', sentence: 'We saw a bright rainbow after the afternoon rain shower.' },
  { word: 'Adventure', syllables: ['ad', 'ven', 'ture'], emoji: '🧭', meaning: 'An exciting and enjoyable new experience or journey of discovery.', sentence: 'Reading good books takes us on a wonderful adventure.' },
  { word: 'Elephant', syllables: ['el', 'e', 'phant'], emoji: '🐘', meaning: 'A very large mammal with a long trunk, big floppy ears, and gentle nature.', sentence: 'The elephant cooled itself by splashing river water with its trunk.' },
  { word: 'Sunshine', syllables: ['sun', 'shine'], emoji: '☀️', meaning: 'The warm, cheerful natural light and warmth given off by the sun.', sentence: 'Warm golden sunshine filled the morning classroom.' },
  { word: 'Kindness', syllables: ['kind', 'ness'], emoji: '💖', meaning: 'The quality of being friendly, generous, and considerate to others.', sentence: 'A simple smile is an act of kindness that brightens everyone\'s day.' }
];

const SENTENCE_PUZZLES = [
  {
    target: ['The', 'cute', 'cat', 'is', 'sleeping', 'peacefully.'],
    hint: 'The cute cat is sleeping peacefully.',
    emoji: '🐱💤',
    scrambled: ['cat', 'The', 'peacefully.', 'cute', 'sleeping', 'is']
  },
  {
    target: ['Birds', 'sing', 'happily', 'in', 'green', 'trees.'],
    hint: 'Birds sing happily in green trees.',
    emoji: '🐦🌿',
    scrambled: ['in', 'happily', 'trees.', 'sing', 'Birds', 'green']
  },
  {
    target: ['I', 'love', 'reading', 'fun', 'new', 'books.'],
    hint: 'I love reading fun new books.',
    emoji: '📚⭐',
    scrambled: ['new', 'love', 'I', 'books.', 'reading', 'fun']
  }
];

const STORIES_DATA = {
  seed: {
    title: "The Little Seed's Journey 🌱",
    paragraphs: [
      "Deep in the soft brown soil, a tiny brown seed was fast asleep. Gentle drops of spring rain watered the garden earth.",
      "Soon, the bright golden sun warmed the ground. The little seed felt the gentle warmth and began to stretch its tiny green roots.",
      "Up, up, up it reached toward the warm sky. In a few days, a green sprout burst into the open air and blossomed into a beautiful sunflower!"
    ],
    questions: [
      {
        q: "What helped the little seed wake up and grow?",
        options: ["Cold snow and hail", "Spring rain and warm sunshine", "Strong winds and thunder", "A dark wooden box"],
        correct: 1,
        explanation: "Spring raindrops and warm sunshine gave the seed the water and warmth it needed to grow."
      },
      {
        q: "Where did the little seed begin its journey?",
        options: ["In a river boat", "On top of a cloud", "Deep in the soft brown soil", "Inside a bird's nest"],
        correct: 2,
        explanation: "The story explains that the seed started asleep deep in the soft brown soil."
      },
      {
        q: "What flower did the little seed grow into?",
        options: ["A red rose", "A prickly cactus", "A tall green fern", "A beautiful sunflower"],
        correct: 3,
        explanation: "At the end of the journey, the little seed blossomed into a bright, beautiful sunflower!"
      }
    ]
  },
  dolphin: {
    title: "The Friendly Ocean Dolphin 🐬",
    paragraphs: [
      "Pip was a curious young dolphin who loved swimming in the azure ocean waves. He leaped high into the air, splashing salty water.",
      "One sunny afternoon, Pip noticed a lonely sea turtle looking for tasty sea grass. Pip swam by her side and guided her to a safe, colourful coral reef.",
      "The turtle smiled with joy and thanked Pip. From that day on, the two ocean friends explored the wonders of the blue sea together."
    ],
    questions: [
      {
        q: "Who was Pip in the story?",
        options: ["A curious young dolphin", "A golden seahorse", "A wise old pelican", "A sea otter"],
        correct: 0,
        explanation: "Pip is the playful and curious dolphin who loves leaping in ocean waves."
      },
      {
        q: "How did Pip show kindness to the turtle?",
        options: ["He gave her a shiny shell", "He guided her to a safe coral reef", "He built her a sandcastle", "He raced away quickly"],
        correct: 1,
        explanation: "Pip swam alongside the sea turtle and guided her safely to a colourful coral reef with sea grass."
      },
      {
        q: "What is the main message of Pip's story?",
        options: ["Swimming fast is all that matters", "Ocean storms are scary", "Helping others creates wonderful friendships", "Turtles always swim alone"],
        correct: 2,
        explanation: "Pip's kindness helped him make a lifelong friend and brought happiness to both of them."
      }
    ]
  },
  stars: {
    title: "Leo's Telescope Night ⭐",
    paragraphs: [
      "On a crisp autumn evening, Leo set up his small brass telescope in the quiet backyard. The moon shone like a pearl in the dark sky.",
      "Leo adjusted the focus wheel. Suddenly, craters on the moon appeared sharp and close! Next, he spotted the bright red glow of planet Mars.",
      "Leo smiled with awe. He realized that the vast universe is full of mysteries waiting for curious learners to explore."
    ],
    questions: [
      {
        q: "What tool did Leo use to view the night sky?",
        options: ["A magnifying glass", "A brass telescope", "A pair of sunglasses", "A camera drone"],
        correct: 1,
        explanation: "Leo set up his brass telescope in the backyard to observe the moon and planets."
      },
      {
        q: "Which planet did Leo see with a bright red glow?",
        options: ["Jupiter", "Venus", "Mars", "Neptune"],
        correct: 2,
        explanation: "Leo observed the distinctive bright red glow of planet Mars."
      },
      {
        q: "What did Leo realize at the end of the story?",
        options: ["Space is too far away to care about", "The universe is full of mysteries to explore", "Telescopes are difficult to use", "The moon is made of cheese"],
        correct: 1,
        explanation: "Leo felt awe and realized the universe is filled with incredible discoveries for curious learners."
      }
    ]
  }
};

const STUDY_PRESETS = {
  photosynthesis: {
    title: "Photosynthesis: How Plants Make Food",
    raw: "Photosynthesis is the process that green plants use to create their own food energy. Plants take in sunlight through green pigments called chlorophyll inside their leaves. They absorb water from the soil through their roots and breathe in carbon dioxide from the surrounding air through tiny pores called stomata. Using the energy from sunlight, plants convert water and carbon dioxide into glucose, which is a sweet sugar that fuels plant growth, and release fresh oxygen into the air for humans and animals to breathe.",
    simplified: `
      <p><strong>What is Photosynthesis?</strong> Think of a green leaf as a tiny solar-powered kitchen! 🌿☀️</p>
      <p>Plants can't go to the grocery store, so they prepare their own delicious meals using three simple ingredients:</p>
      <ul>
        <li><strong>Sunlight:</strong> Warm solar energy collected by green leaf pigments called <em>chlorophyll</em>.</li>
        <li><strong>Water:</strong> Cool hydration pulled up from the ground through underground roots.</li>
        <li><strong>Carbon Dioxide:</strong> Air absorbed through microscopic pores on leaves called <em>stomata</em>.</li>
      </ul>
      <p><strong>The Delicious Result:</strong> The plant turns these into sweet sugar (glucose) to grow tall and strong, and generously puffs out clean, fresh oxygen for us to breathe!</p>
    `,
    keyPoints: [
      "Plants use sunlight, water, and carbon dioxide to make food.",
      "Chlorophyll is the green pigment in leaves that catches sunlight.",
      "Glucose is the sugar plants eat for energy and growth.",
      "Oxygen is released as a beneficial byproduct for people and animals."
    ],
    branches: [
      { title: "Inputs 📥", desc: "Sunlight (Sun) + Water (Roots) + Carbon Dioxide (Air)" },
      { title: "Factory 🏭", desc: "Chloroplasts containing Chlorophyll inside green leaves" },
      { title: "Outputs 📤", desc: "Glucose (Food for Plant) + Oxygen (Air for Us)" }
    ],
    quiz: [
      { q: "What green substance absorbs sunlight in plant leaves?", options: ["Chlorophyll", "Stomata", "Glucose", "Nitrogen"], correct: 0, exp: "Chlorophyll gives leaves their green colour and catches light energy." },
      { q: "What gas do plants release that humans need to breathe?", options: ["Carbon Dioxide", "Helium", "Oxygen", "Methane"], correct: 2, exp: "Plants release fresh oxygen as a wonderful gift to our planet." },
      { q: "What do plants create to use as food energy?", options: ["Salt crystals", "Glucose sugar", "Ice cubes", "Sand"], correct: 1, exp: "Glucose is the simple sugar that provides energy for plant growth." }
    ],
    flashcards: [
      { term: "Photosynthesis", meaning: "The natural process where green plants turn sunlight, water, and carbon dioxide into food and oxygen.", example: "Leaves perform photosynthesis every sunny day." },
      { term: "Chlorophyll", meaning: "The green pigment in plant leaves that absorbs solar energy from sunlight.", example: "Chlorophyll makes healthy grass and tree leaves look emerald green." },
      { term: "Glucose", meaning: "A simple sugar produced by plants that provides nourishment and growth energy.", example: "Plants store glucose to grow fruits and flowers." },
      { term: "Stomata", meaning: "Microscopic openings on leaves that allow carbon dioxide to enter and oxygen to leave.", example: "Stomata act like tiny breathing nostrils for leaves." }
    ]
  },
  watercycle: {
    title: "The Water Cycle: Earth's Endless Journey",
    raw: "The water cycle describes how water continuously moves across Earth and its atmosphere. The sun warms water in oceans, lakes, and rivers, causing it to turn from liquid into invisible water vapor in a process called evaporation. As warm vapor rises into the cooler atmosphere, it condenses to form clouds in a step known as condensation. When clouds become heavy with condensed moisture, water returns to Earth as rain, snow, or hail through precipitation. This water gathers in rivers, soil, and oceans, ready for the cycle to begin all over again.",
    simplified: `
      <p><strong>Earth's Infinite Water Loop:</strong> Water on our planet is billions of years old and constantly recycled! 💧🔄</p>
      <p>The water cycle has four key steps you can easily remember:</p>
      <ul>
        <li><strong>Evaporation:</strong> The warm sun heats puddles and oceans, turning liquid water into rising vapor.</li>
        <li><strong>Condensation:</strong> High in the cool sky, water vapor chills and gathers together into fluffy clouds.</li>
        <li><strong>Precipitation:</strong> When clouds get too full and heavy, water falls back down as rain or snow.</li>
        <li><strong>Collection:</strong> Rivers and streams carry water back to lakes and oceans to restart!</li>
      </ul>
    `,
    keyPoints: [
      "The sun is the engine powering the entire water cycle.",
      "Evaporation turns liquid water into rising invisible vapor.",
      "Condensation gathers vapor into fluffy overhead clouds.",
      "Precipitation brings water back down as rain, sleet, or snow."
    ],
    branches: [
      { title: "1. Evaporation ☀️", desc: "Liquid water heats up and rises into the air as invisible vapor." },
      { title: "2. Condensation ☁️", desc: "Cool air turns vapor into microscopic droplets that form clouds." },
      { title: "3. Precipitation 🌧️", desc: "Water falls back to the ground as raindrops, snowflakes, or hail." }
    ],
    quiz: [
      { q: "What heats water to cause evaporation?", options: ["The Moon", "The Sun", "Wind", "Lightning"], correct: 1, exp: "Solar heat from the sun warms water bodies, causing evaporation." },
      { q: "What process turns water vapor into clouds?", options: ["Freezing", "Condensation", "Digestion", "Melting"], correct: 1, exp: "Condensation happens when warm vapor cools down and forms clouds." },
      { q: "Rain, snow, and hail are all forms of what?", options: ["Evaporation", "Photosynthesis", "Precipitation", "Sediment"], correct: 2, exp: "Precipitation is any moisture that falls from clouds back to earth." }
    ],
    flashcards: [
      { term: "Evaporation", meaning: "When liquid water is warmed and transforms into invisible vapor gas that rises.", example: "A puddle drying on a sunny sidewalk is undergoing evaporation." },
      { term: "Condensation", meaning: "When water vapor cools down and changes back into liquid droplets, creating clouds.", example: "Water droplets forming on a cold glass of lemonade is condensation." },
      { term: "Precipitation", meaning: "Water falling from clouds down to Earth in the form of rain, snow, sleet, or hail.", example: "Yesterday's gentle afternoon rain was precipitation." }
    ]
  },
  solarsystem: {
    title: "Our Solar System: The Sun and Eight Planets",
    raw: "Our solar system consists of the Sun and everything bound to it by gravity, including eight major planets, dozens of moons, and millions of asteroids. The Sun is a massive ball of glowing hydrogen and helium at the very center. The four inner rocky planets are Mercury, Venus, Earth, and Mars. Beyond the asteroid belt lie the four outer giant planets: Jupiter and Saturn, which are gas giants, and Uranus and Neptune, which are ice giants. Earth is the only known planet that supports flourishing life.",
    simplified: `
      <p><strong>Our Cosmic Neighborhood:</strong> Our solar system is our cozy corner of the galaxy! 🪐✨</p>
      <p>At the center sits our Sun—a massive, shining star whose gravity gently keeps eight planets in steady orbit:</p>
      <ul>
        <li><strong>The Rocky Inner Planets:</strong> Mercury (fastest), Venus (hottest), Earth (our home!), and Mars (the red planet).</li>
        <li><strong>The Gas Giants:</strong> Jupiter (the biggest planet with a Great Red Spot) and Saturn (famous for dazzling rings).</li>
        <li><strong>The Ice Giants:</strong> Uranus and Neptune (deep blue, icy cold worlds far out in space).</li>
      </ul>
    `,
    keyPoints: [
      "The Sun is a star at the center holding all planets with gravity.",
      "There are 8 planets divided into 4 inner rocky worlds and 4 outer giant worlds.",
      "Earth has liquid water, an atmosphere, and is home to all known life.",
      "Saturn has iconic glowing rings made of ice and rock fragments."
    ],
    branches: [
      { title: "Inner Planets 🪨", desc: "Mercury, Venus, Earth, Mars — solid rock surfaces with thin atmospheres." },
      { title: "Gas Giants 🪐", desc: "Jupiter and Saturn — massive worlds primarily made of hydrogen and helium." },
      { title: "Ice Giants ❄️", desc: "Uranus and Neptune — cold, windy worlds rich in water, ammonia, and methane ice." }
    ],
    quiz: [
      { q: "What is at the center of our solar system?", options: ["The Moon", "The Sun", "Earth", "Jupiter"], correct: 1, exp: "The Sun sits at the center, providing light, heat, and gravitational pull." },
      { q: "Which planet is famous for having large, beautiful rings?", options: ["Mars", "Saturn", "Mercury", "Venus"], correct: 1, exp: "Saturn is world-famous for its majestic rings of ice and rock particles." },
      { q: "How many major planets are in our solar system?", options: ["6", "8", "10", "12"], correct: 1, exp: "There are eight recognized major planets orbiting the Sun." }
    ],
    flashcards: [
      { term: "Solar System", meaning: "The collection of eight planets and their moons in orbit around the Sun.", example: "Our solar system travels together through the Milky Way galaxy." },
      { term: "Orbit", meaning: "The curved, repeating path that an object in space takes around a star or planet.", example: "Earth takes 365 days to complete one orbit around the Sun." },
      { term: "Gas Giant", meaning: "A huge planet made mostly of gases like hydrogen and helium rather than solid rock.", example: "Jupiter is the largest gas giant in our solar system." }
    ]
  }
};

const DEFAULT_FLASHCARDS = {
  'sight-words': [
    { term: 'Because', meaning: 'For the reason that; introduces an explanation for why something occurs.', example: 'I took an umbrella because raindrops were falling.' },
    { term: 'Friend', meaning: 'A person with whom one has a bond of mutual affection, trust, and fun.', example: 'Maya is a kind friend who shares her colored pencils.' },
    { term: 'Through', meaning: 'Moving in one side and out of the other side of an opening or space.', example: 'The friendly train chugged smoothly through the mountain tunnel.' },
    { term: 'Beautiful', meaning: 'Pleasing the senses or mind aesthetically; lovely to look at.', example: 'We watched a beautiful sunrise paint the sky in pink and gold.' },
    { term: 'Together', meaning: 'With or in proximity to another person or people; united in action.', example: 'We can achieve great learning when we read together.' }
  ],
  'science-nature': [
    { term: 'Habitat', meaning: 'The natural home or environment where an animal, plant, or organism lives.', example: 'A coral reef is a bustling ocean habitat for clownfish.' },
    { term: 'Metamorphosis', meaning: 'The profound transformation an insect or amphibian undergoes from egg to adult.', example: 'A caterpillar undergoes metamorphosis inside a chrysalis to become a butterfly.' },
    { term: 'Ecosystem', meaning: 'A biological community of interacting organisms and their physical environment.', example: 'A lush forest is a balanced ecosystem where plants and animals thrive.' }
  ],
  'phonics-blends': [
    { term: 'Digraph', meaning: 'Two letters that join together to make one distinct single sound (like SH, CH, or TH).', example: 'The word "ship" starts with the digraph SH.' },
    { term: 'Phoneme', meaning: 'The smallest unit of sound in speech that distinguishes one word from another.', example: 'The word "cat" has three distinct phonemes: /k/, /æ/, and /t/.' },
    { term: 'Syllable', meaning: 'A single unit of unbroken spoken sound within a word containing a vowel sound.', example: 'The word "ba-na-na" has three distinct syllables.' }
  ],
  'custom': []
};

// ============================================================================
// 2. AUDIO SYNTHESIZER & SPEECH ENGINE (WEB AUDIO API + TTS)
// ============================================================================

class SoundEngine {
  constructor() {
    this.audioCtx = null;
    this.soundFxEnabled = true;
    this.synth = window.speechSynthesis || null;
    this.voices = [];
    this.selectedVoice = null;
    
    // Load voices
    if (this.synth) {
      this.loadVoices();
      if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  initAudioContext() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  loadVoices() {
    if (!this.synth) return;
    this.voices = this.synth.getVoices().filter(v => v.lang.startsWith('en'));
    const voiceSelect = document.getElementById('voiceSelect');
    if (voiceSelect && this.voices.length > 0) {
      voiceSelect.innerHTML = '';
      this.voices.forEach((v, idx) => {
        const opt = document.createElement('option');
        opt.value = idx;
        opt.textContent = `${v.name} (${v.lang})`;
        if (v.default || v.name.includes('Natural') || v.name.includes('Google') || idx === 0) {
          opt.selected = true;
          this.selectedVoice = v;
        }
        voiceSelect.appendChild(opt);
      });
    }
  }

  // Synthesized Sound Effects (Self-contained Web Audio API)
  playChime() {
    if (!this.soundFxEnabled) return;
    this.initAudioContext();
    if (!this.audioCtx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime + idx * 0.08);

      gain.gain.setValueAtTime(0, this.audioCtx.currentTime + idx * 0.08);
      gain.gain.linearRampToValueAtTime(0.2, this.audioCtx.currentTime + idx * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + idx * 0.08 + 0.4);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(this.audioCtx.currentTime + idx * 0.08);
      osc.stop(this.audioCtx.currentTime + idx * 0.08 + 0.45);
    });
  }

  playPop() {
    if (!this.soundFxEnabled) return;
    this.initAudioContext();
    if (!this.audioCtx) return;

    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(440, this.audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, this.audioCtx.currentTime + 0.06);

    gain.gain.setValueAtTime(0.15, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);
    osc.start();
    osc.stop(this.audioCtx.currentTime + 0.09);
  }

  playGentleBonk() {
    if (!this.soundFxEnabled) return;
    this.initAudioContext();
    if (!this.audioCtx) return;

    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(260, this.audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(180, this.audioCtx.currentTime + 0.15);

    gain.gain.setValueAtTime(0.2, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.2);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);
    osc.start();
    osc.stop(this.audioCtx.currentTime + 0.22);
  }

  // Web Speech Text to Speech
  speak(text, options = {}) {
    if (!this.synth) {
      console.warn('SpeechSynthesis not available in this browser environment.');
      return;
    }
    this.synth.cancel(); // Stop any pending utterance

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = options.rate || 0.95;
    utterance.pitch = options.pitch || 1.1; // Friendly slightly higher pitch for educational warmth
    utterance.volume = options.volume !== undefined ? options.volume : 1.0;

    if (this.selectedVoice) {
      utterance.voice = this.selectedVoice;
    }

    if (options.onstart) utterance.onstart = options.onstart;
    if (options.onend) utterance.onend = options.onend;
    if (options.onerror) utterance.onerror = options.onerror;

    this.synth.speak(utterance);
  }

  speakLetterSound(letter) {
    this.playPop();
    const item = ALPHABET_DATA.find(l => l.letter.toUpperCase() === letter.toUpperCase());
    if (!item) return;

    // Pronounce the phonetic sound naturally
    const phoneticPhrasings = {
      'A': 'ah',
      'B': 'buh',
      'C': 'kuh',
      'D': 'duh',
      'E': 'eh',
      'F': 'ffff',
      'G': 'guh',
      'H': 'huh',
      'I': 'ih',
      'J': 'juh',
      'K': 'kuh',
      'L': 'llll',
      'M': 'mmmm',
      'N': 'nnnn',
      'O': 'aw',
      'P': 'puh',
      'Q': 'kwuh',
      'R': 'rrrr',
      'S': 'ssss',
      'T': 'tuh',
      'U': 'uh',
      'V': 'vvvv',
      'W': 'wuh',
      'X': 'ks',
      'Y': 'yuh',
      'Z': 'zzzz'
    };
    const soundText = phoneticPhrasings[item.letter] || item.sound;
    this.speak(soundText, { rate: 0.8, pitch: 1.15 });
  }

  speakLetterName(letter) {
    this.playPop();
    const item = ALPHABET_DATA.find(l => l.letter.toUpperCase() === letter.toUpperCase());
    const name = item ? item.name : letter;
    this.speak(`Letter ${name}`, { rate: 0.9, pitch: 1.1 });
  }

  speakWord(word, slow = false) {
    this.playPop();
    this.speak(word, { rate: slow ? 0.72 : 0.95, pitch: 1.05 });
  }

  stop() {
    if (this.synth) {
      this.synth.cancel();
    }
  }

  pause() {
    if (this.synth) {
      this.synth.pause();
    }
  }

  resume() {
    if (this.synth) {
      this.synth.resume();
    }
  }
}

// Global Sound Engine Instance
const sound = new SoundEngine();

// ============================================================================
// 3. CONFETTI CELEBRATION SYSTEM (LIGHTWEIGHT VANILLA CANVAS)
// ============================================================================

class ConfettiLauncher {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    this.particles = [];
    this.animating = false;
    this.colors = ['#FF79B0', '#8B5CF6', '#70D6FF', '#4F7DF3', '#6ED6A5', '#FFD166'];
    
    if (this.canvas) {
      window.addEventListener('resize', () => this.resize());
      this.resize();
    }
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  burst(x = window.innerWidth / 2, y = window.innerHeight * 0.4, count = 75) {
    if (!this.canvas || !this.ctx) return;
    this.resize();
    
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 8 + 4;
      this.particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 3,
        size: Math.random() * 8 + 6,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 12,
        alpha: 1,
        life: 0.985
      });
    }

    if (!this.animating) {
      this.animating = true;
      this.loop();
    }
  }

  loop() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.22; // Gravity
      p.rotation += p.rotSpeed;
      p.alpha *= p.life;

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.globalAlpha = p.alpha;
      this.ctx.fillStyle = p.color;
      this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.4);
      this.ctx.restore();

      if (p.alpha < 0.02 || p.y > this.canvas.height + 20) {
        this.particles.splice(i, 1);
      }
    }

    if (this.particles.length > 0) {
      requestAnimationFrame(() => this.loop());
    } else {
      this.animating = false;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}

const confetti = new ConfettiLauncher('confettiCanvas');

// ============================================================================
// 4. TOAST NOTIFICATIONS & PERSISTENT USER STATE
// ============================================================================

function showToast(message, type = 'success', icon = '✨') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 320);
  }, 3200);
}

// User state in localStorage
const DEFAULT_USER = {
  name: 'Emma',
  fullName: 'Emma Wilson',
  role: 'Early Reader (Age 7)',
  avatar: '🦉',
  streak: 5,
  lessonsCompleted: 8,
  wordsPracticed: 42,
  quizAverage: 92,
  badges: ['Alphabet Explorer', 'Sound Starter', 'Streak Hero']
};

class StateManager {
  constructor() {
    this.user = this.loadUser();
    this.accessibility = this.loadAccessibility();
    this.flashcards = this.loadFlashcards();
    this.recentActivities = this.loadRecentActivities();
  }

  loadUser() {
    try {
      const data = localStorage.getItem('learnease_user');
      return data ? JSON.parse(data) : { ...DEFAULT_USER };
    } catch (e) {
      return { ...DEFAULT_USER };
    }
  }

  saveUser() {
    localStorage.setItem('learnease_user', JSON.stringify(this.user));
    this.syncUserUI();
  }

  loadAccessibility() {
    try {
      const data = localStorage.getItem('learnease_access');
      return data ? JSON.parse(data) : {
        theme: 'light',
        fontSize: 'medium',
        lineSpacing: 'normal',
        letterSpacing: 'normal',
        fontFamily: 'nunito',
        rulerActive: false,
        reducedMotion: false,
        soundFx: true
      };
    } catch (e) {
      return { theme: 'light', fontSize: 'medium', lineSpacing: 'normal', letterSpacing: 'normal', fontFamily: 'nunito', rulerActive: false, reducedMotion: false, soundFx: true };
    }
  }

  saveAccessibility() {
    localStorage.setItem('learnease_access', JSON.stringify(this.accessibility));
    this.applyAccessibility();
  }

  loadFlashcards() {
    try {
      const data = localStorage.getItem('learnease_flashcards');
      return data ? JSON.parse(data) : JSON.parse(JSON.stringify(DEFAULT_FLASHCARDS));
    } catch (e) {
      return JSON.parse(JSON.stringify(DEFAULT_FLASHCARDS));
    }
  }

  saveFlashcards() {
    localStorage.setItem('learnease_flashcards', JSON.stringify(this.flashcards));
  }

  loadRecentActivities() {
    try {
      const data = localStorage.getItem('learnease_activities');
      return data ? JSON.parse(data) : [
        { title: 'Mastered Letter "M" & "S"', source: 'Phonics Playground', time: '15 mins ago', icon: '🅰️' },
        { title: 'Studied "The Water Cycle"', source: 'Help Me Study', time: '1 hour ago', icon: '📄' },
        { title: 'Score 100% on Letter Sound Match', source: 'Mini-Games', time: 'Today', icon: '🎮' }
      ];
    } catch (e) {
      return [];
    }
  }

  logActivity(title, source, icon = '⭐') {
    this.recentActivities.unshift({ title, source, time: 'Just now', icon });
    if (this.recentActivities.length > 8) this.recentActivities.pop();
    localStorage.setItem('learnease_activities', JSON.stringify(this.recentActivities));
    this.renderActivityTimeline();
  }

  syncUserUI() {
    const navName = document.getElementById('navUserName');
    const navAvatar = document.getElementById('navAvatar');
    const dropName = document.getElementById('dropdownUserName');
    const dropAvatar = document.getElementById('dropdownAvatar');
    const dropRole = document.getElementById('dropdownUserRole');
    const sbAvatar = document.getElementById('sbAvatar');
    const sbUserName = document.getElementById('sbUserName');
    const sbUserBadge = document.getElementById('sbUserBadge');

    if (navName) navName.textContent = this.user.name;
    if (navAvatar) navAvatar.textContent = this.user.avatar;
    if (dropName) dropName.textContent = this.user.fullName;
    if (dropAvatar) dropAvatar.textContent = this.user.avatar;
    if (dropRole) dropRole.textContent = this.user.role;
    if (sbAvatar) sbAvatar.textContent = this.user.avatar;
    if (sbUserName) sbUserName.textContent = this.user.name;
    if (sbUserBadge) sbUserBadge.textContent = this.user.role;

    // Progress Dashboard sync
    const pLessons = document.getElementById('progLessonsCount');
    const pWords = document.getElementById('progWordsCount');
    const pStreak = document.getElementById('progStreak');
    const pAvg = document.getElementById('progQuizAvg');
    const dashStreak = document.getElementById('dashStreakCount');

    if (pLessons) pLessons.textContent = this.user.lessonsCompleted;
    if (pWords) pWords.textContent = this.user.wordsPracticed;
    if (pStreak) pStreak.textContent = `${this.user.streak} Days`;
    if (pAvg) pAvg.textContent = `${this.user.quizAverage}%`;
    if (dashStreak) dashStreak.textContent = `${this.user.streak} Days`;
  }

  applyAccessibility() {
    const root = document.documentElement;
    const body = document.body;

    root.setAttribute('data-theme', this.accessibility.theme);
    root.setAttribute('data-font-size', this.accessibility.fontSize);
    root.setAttribute('data-line-spacing', this.accessibility.lineSpacing);
    root.setAttribute('data-letter-spacing', this.accessibility.letterSpacing);
    root.setAttribute('data-reduced-motion', this.accessibility.reducedMotion ? 'true' : 'false');

    // Font Family
    body.classList.remove('font-nunito', 'font-poppins', 'font-lexend');
    body.classList.add(`font-${this.accessibility.fontFamily}`);

    // Reading Ruler
    const ruler = document.getElementById('readingRuler');
    if (ruler) {
      if (this.accessibility.rulerActive) {
        ruler.classList.add('active');
      } else {
        ruler.classList.remove('active');
      }
    }

    // Sound FX
    sound.soundFxEnabled = this.accessibility.soundFx;
    const soundIcon = document.getElementById('soundFxIcon');
    if (soundIcon) soundIcon.textContent = this.accessibility.soundFx ? '🔊' : '🔇';

    // Sync input checkboxes and buttons in Accessibility Tab
    this.syncAccessibilityControls();
  }

  syncAccessibilityControls() {
    // Theme buttons
    document.querySelectorAll('[data-set-theme]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.setTheme === this.accessibility.theme);
    });
    // Font size pills
    document.querySelectorAll('[data-set-font-size]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.setFontSize === this.accessibility.fontSize);
    });
    // Line spacing pills
    document.querySelectorAll('[data-set-line-spacing]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.setLineSpacing === this.accessibility.lineSpacing);
    });
    // Letter spacing pills
    document.querySelectorAll('[data-set-letter-spacing]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.setLetterSpacing === this.accessibility.letterSpacing);
    });
    // Font family pills
    document.querySelectorAll('[data-set-font-family]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.setFontFamily === this.accessibility.fontFamily);
    });
    // Toggles
    const rulerCheck = document.getElementById('toggleRulerCheckbox');
    const drawerRulerCheck = document.getElementById('drawerRulerToggle');
    const motionCheck = document.getElementById('toggleReducedMotionCheckbox');
    const sfxCheck = document.getElementById('toggleSoundFxCheckbox');

    if (rulerCheck) rulerCheck.checked = this.accessibility.rulerActive;
    if (drawerRulerCheck) drawerRulerCheck.checked = this.accessibility.rulerActive;
    if (motionCheck) motionCheck.checked = this.accessibility.reducedMotion;
    if (sfxCheck) sfxCheck.checked = this.accessibility.soundFx;
  }

  renderActivityTimeline() {
    const list = document.getElementById('dashActivityTimeline');
    if (!list) return;
    list.innerHTML = '';
    this.recentActivities.slice(0, 4).forEach(act => {
      const li = document.createElement('li');
      li.className = 'timeline-item';
      li.innerHTML = `
        <span class="timeline-icon bg-purple-light">${act.icon}</span>
        <div class="timeline-info">
          <strong>${act.title}</strong>
          <span>${act.source} • ${act.time}</span>
        </div>
      `;
      list.appendChild(li);
    });
  }
}

const state = new StateManager();

// ============================================================================
// 5. VIEW ROUTER & SPA NAVIGATION
// ============================================================================

class AppRouter {
  constructor() {
    this.landingView = document.getElementById('landingView');
    this.appContainer = document.getElementById('appContainer');
    this.viewToggleBtn = document.getElementById('viewToggleBtn');
    this.viewToggleText = document.getElementById('viewToggleText');
    this.currentView = 'landing';
    this.currentTab = 'dashboard';
    
    this.setupListeners();
  }

  setupListeners() {
    // Top view toggle button (Switch between Landing and App)
    if (this.viewToggleBtn) {
      this.viewToggleBtn.addEventListener('click', () => {
        if (this.currentView === 'landing') {
          this.switchView('app');
        } else {
          this.switchView('landing');
        }
      });
    }

    // Logo click -> go to landing
    const logoBtn = document.getElementById('logoBtn');
    if (logoBtn) {
      logoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.switchView('landing');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Back to landing from sidebar
    const backBtn = document.getElementById('backToLandingBtn');
    if (backBtn) {
      backBtn.addEventListener('click', () => this.switchView('landing'));
    }

    const sbLogo = document.getElementById('sidebarLogoBtn');
    if (sbLogo) {
      sbLogo.addEventListener('click', (e) => {
        e.preventDefault();
        this.switchView('landing');
      });
    }

    // Landing nav scroll-to links
    document.querySelectorAll('[data-scroll-to]').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.dataset.scrollTo;
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Hero and CTA buttons
    const heroStartBtn = document.getElementById('heroStartLearningBtn');
    if (heroStartBtn) {
      heroStartBtn.addEventListener('click', () => {
        this.switchView('app');
        this.switchTab('dashboard');
      });
    }

    const heroExploreBtn = document.getElementById('heroExploreBtn');
    if (heroExploreBtn) {
      heroExploreBtn.addEventListener('click', () => {
        document.getElementById('howItWorks').scrollIntoView({ behavior: 'smooth' });
      });
    }

    const ctaStartBtn = document.getElementById('ctaStartBtn');
    if (ctaStartBtn) {
      ctaStartBtn.addEventListener('click', () => {
        this.switchView('app');
        this.switchTab('dashboard');
      });
    }

    const ctaDemoGuestBtn = document.getElementById('ctaDemoGuestBtn');
    if (ctaDemoGuestBtn) {
      ctaDemoGuestBtn.addEventListener('click', () => {
        openAuthModal();
      });
    }

    // Journey card buttons
    const startReadBtn = document.getElementById('startReadJourneyBtn');
    if (startReadBtn) {
      startReadBtn.addEventListener('click', () => {
        this.switchView('app');
        this.switchTab('learn-to-read');
      });
    }

    const startStudyBtn = document.getElementById('startStudyJourneyBtn');
    if (startStudyBtn) {
      startStudyBtn.addEventListener('click', () => {
        this.switchView('app');
        this.switchTab('help-me-study');
      });
    }

    const previewParentBtn = document.getElementById('previewParentViewBtn');
    if (previewParentBtn) {
      previewParentBtn.addEventListener('click', () => {
        this.switchView('app');
        this.switchTab('parent-teacher');
      });
    }

    // Sidebar navigation tabs
    document.querySelectorAll('.sidebar-item').forEach(item => {
      item.addEventListener('click', () => {
        const tab = item.dataset.appTab;
        this.switchTab(tab);
        // On mobile, close sidebar
        const sidebar = document.getElementById('appSidebar');
        if (sidebar) sidebar.classList.remove('open');
      });
    });

    // Quick switch tab triggers (buttons with data-switch-tab)
    document.querySelectorAll('[data-switch-tab]').forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.dataset.switchTab;
        this.switchView('app');
        this.switchTab(tab);
      });
    });

    // Footer actions
    document.querySelectorAll('.footer-link-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const act = btn.dataset.action;
        if (act === 'go-read') { this.switchView('app'); this.switchTab('learn-to-read'); }
        if (act === 'go-phonics') { this.switchView('app'); this.switchTab('phonics-playground'); }
        if (act === 'go-blending') {
          this.switchView('app');
          this.switchTab('learn-to-read');
          readingManager.switchLevel(3);
        }
        if (act === 'go-study') { this.switchView('app'); this.switchTab('help-me-study'); }
        if (act === 'go-flashcards') { this.switchView('app'); this.switchTab('flashcards'); }
        if (act === 'go-parents') { this.switchView('app'); this.switchTab('parent-teacher'); }
        if (act === 'go-progress') { this.switchView('app'); this.switchTab('my-progress'); }
        if (act === 'open-access') { openAccessDrawer(); }
        if (act === 'toggle-ruler') {
          state.accessibility.rulerActive = !state.accessibility.rulerActive;
          state.saveAccessibility();
        }
      });
    });

    // Mobile sidebar toggle
    const mobileSidebarToggle = document.getElementById('sidebarToggleBtn');
    const sidebarCloseBtn = document.getElementById('sidebarCloseBtn');
    const appSidebar = document.getElementById('appSidebar');

    if (mobileSidebarToggle && appSidebar) {
      mobileSidebarToggle.addEventListener('click', () => appSidebar.classList.add('open'));
    }
    if (sidebarCloseBtn && appSidebar) {
      sidebarCloseBtn.addEventListener('click', () => appSidebar.classList.remove('open'));
    }
  }

  switchView(viewName) {
    this.currentView = viewName;
    if (viewName === 'app') {
      this.landingView.classList.remove('active');
      this.landingView.classList.add('hidden');
      this.appContainer.classList.remove('hidden');
      this.viewToggleText.textContent = 'Landing Page';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      this.appContainer.classList.add('hidden');
      this.landingView.classList.remove('hidden');
      this.landingView.classList.add('active');
      this.viewToggleText.textContent = 'App Dashboard';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  switchTab(tabId) {
    this.currentTab = tabId;

    // Update sidebar items
    document.querySelectorAll('.sidebar-item').forEach(item => {
      item.classList.toggle('active', item.dataset.appTab === tabId);
    });

    // Update tab panes
    document.querySelectorAll('.tab-pane').forEach(pane => {
      pane.classList.remove('active');
    });
    const targetPane = document.getElementById(`tab-${tabId}`);
    if (targetPane) {
      targetPane.classList.add('active');
    }

    // Update mobile bar title
    const mobileTitle = document.getElementById('mobileCurrentSection');
    if (mobileTitle) {
      const titles = {
        'dashboard': 'Dashboard Hub',
        'learn-to-read': 'Learn to Read',
        'phonics-playground': 'Phonics Games',
        'help-me-study': 'Help Me Study',
        'flashcards': 'Flashcards Hub',
        'my-progress': 'My Progress',
        'parent-teacher': 'Parent / Teacher View',
        'accessibility': 'Accessibility Settings'
      };
      mobileTitle.textContent = titles[tabId] || 'LearnEase';
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// ============================================================================
// 6. JOURNEY A: LEARN TO READ ENGINE (7 LEVELS)
// ============================================================================

class ReadingManager {
  constructor() {
    this.currentLevel = 1;
    this.currentLetterIndex = 0;
    this.currentWordIndex = 0;
    this.currentStoryKey = 'seed';
    this.currentCompQuestionIndex = 0;
    this.compScore = 0;
    
    // Sentence builder state
    this.currentPuzzleIndex = 0;
    this.placedWords = [];

    this.init();
  }

  init() {
    this.setupLevelPills();
    this.initLevel1Alphabet();
    this.initLevel2Phonics();
    this.initLevel3Blending();
    this.initLevel4WordReading();
    this.initLevel5SentenceBuilding();
    this.initLevel6ParagraphReading();
    this.initLevel7Comprehension();
  }

  setupLevelPills() {
    document.querySelectorAll('#readingLevelNav .level-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        const level = parseInt(pill.dataset.level, 10);
        this.switchLevel(level);
      });
    });
  }

  switchLevel(levelNum) {
    this.currentLevel = levelNum;
    document.querySelectorAll('#readingLevelNav .level-pill').forEach(pill => {
      pill.classList.toggle('active', parseInt(pill.dataset.level, 10) === levelNum);
    });
    document.querySelectorAll('.read-level-content').forEach(content => {
      content.classList.remove('active');
      content.classList.add('hidden');
    });
    const activeLevelEl = document.getElementById(`readLevel${levelNum}`);
    if (activeLevelEl) {
      activeLevelEl.classList.remove('hidden');
      activeLevelEl.classList.add('active');
    }
  }

  // --- LEVEL 1: ALPHABET & LETTER RECOGNITION ---
  initLevel1Alphabet() {
    const grid = document.getElementById('alphabetGrid');
    if (!grid) return;
    grid.innerHTML = '';

    ALPHABET_DATA.forEach((item, idx) => {
      const tile = document.createElement('button');
      tile.className = `alphabet-card-tile ${idx === 0 ? 'active' : ''}`;
      tile.dataset.index = idx;
      tile.innerHTML = `
        <span class="tile-letter">${item.letter}</span>
        <span class="tile-emoji">${item.emoji}</span>
      `;
      tile.addEventListener('click', () => {
        this.selectLetter(idx);
      });
      grid.appendChild(tile);
    });

    this.renderLetterSpotlight();

    // Nav buttons
    document.getElementById('prevLetterBtn')?.addEventListener('click', () => {
      const prev = (this.currentLetterIndex - 1 + ALPHABET_DATA.length) % ALPHABET_DATA.length;
      this.selectLetter(prev);
    });
    document.getElementById('nextLetterBtn')?.addEventListener('click', () => {
      const next = (this.currentLetterIndex + 1) % ALPHABET_DATA.length;
      this.selectLetter(next);
    });

    // Audio actions on spotlight
    document.getElementById('playLetterSoundBtn')?.addEventListener('click', () => {
      const current = ALPHABET_DATA[this.currentLetterIndex];
      sound.speakLetterSound(current.letter);
    });

    document.getElementById('playLetterNameBtn')?.addEventListener('click', () => {
      const current = ALPHABET_DATA[this.currentLetterIndex];
      sound.speakLetterName(current.letter);
    });

    document.getElementById('playExampleWordBtn')?.addEventListener('click', () => {
      const current = ALPHABET_DATA[this.currentLetterIndex];
      sound.speakWord(current.word);
    });
  }

  selectLetter(idx) {
    this.currentLetterIndex = idx;
    document.querySelectorAll('.alphabet-card-tile').forEach((t, i) => {
      t.classList.toggle('active', i === idx);
    });
    this.renderLetterSpotlight();
    
    // Play sound on selection
    const item = ALPHABET_DATA[idx];
    sound.speakLetterSound(item.letter);

    // Update practiced count
    state.user.wordsPracticed++;
    state.saveUser();
  }

  renderLetterSpotlight() {
    const item = ALPHABET_DATA[this.currentLetterIndex];
    if (!item) return;

    document.getElementById('spotlightLetter').textContent = item.letter;
    document.getElementById('spotlightCase').textContent = `${item.letter}${item.letter.toLowerCase()}`;
    document.getElementById('spotlightPhonetic').textContent = item.phonetic;
    document.getElementById('spotlightEmoji').textContent = item.emoji;
    document.getElementById('spotlightWord').textContent = item.word;
    document.getElementById('spotlightSentence').textContent = `"${item.sentence}"`;
    document.getElementById('spotlightTip').innerHTML = `💡 <strong>Sound Guide:</strong> ${item.guide}`;
    document.getElementById('letterCounter').textContent = `Letter ${this.currentLetterIndex + 1} of 26`;
    
    document.getElementById('playLetterSoundBtn').innerHTML = `<span>🔊 Play Sound (${item.phonetic.split(' ')[0]})</span>`;
    document.getElementById('playLetterNameBtn').innerHTML = `<span>🗣️ Play Name ("${item.name}")</span>`;
    document.getElementById('playExampleWordBtn').innerHTML = `<span>${item.emoji} Play Word ("${item.word}")</span>`;
  }

  // --- LEVEL 2: PHONICS PLAYGROUND ---
  initLevel2Phonics() {
    const grid = document.getElementById('phonicsCardsGrid');
    if (!grid) return;

    this.renderPhonicsCards('short-vowels');

    // Filter category pills
    document.querySelectorAll('.phonics-category-tabs .category-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.phonics-category-tabs .category-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        this.renderPhonicsCards(pill.dataset.phCat);
      });
    });

    // Practice box
    document.getElementById('playPhonicsPracticeBtn')?.addEventListener('click', () => {
      sound.speak('shhh', { rate: 0.8, pitch: 1.1 });
    });
    document.getElementById('playPhonicsWordBtn')?.addEventListener('click', () => {
      sound.speakWord('Ship');
    });
  }

  renderPhonicsCards(category) {
    const grid = document.getElementById('phonicsCardsGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const filtered = PHONICS_PATTERNS.filter(p => p.cat === category);
    filtered.forEach((p, idx) => {
      const card = document.createElement('div');
      card.className = `phonics-card ${idx === 0 ? 'selected' : ''}`;
      card.innerHTML = `
        <span class="ph-sound-symbol">${p.symbol}</span>
        <span class="ph-example-icon">${p.emoji}</span>
        <span class="ph-example-word">${p.word}</span>
        <span class="badge-mini bg-purple-light text-purple">${p.label}</span>
        <p style="font-size:0.75rem; color:var(--text-light); margin-top:6px;">Sample: ${p.sample}</p>
      `;
      card.addEventListener('click', () => {
        document.querySelectorAll('.phonics-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        sound.speakWord(p.word);
        
        // Update challenge box
        const chTag = document.getElementById('challengeSoundTag');
        const chIcon = document.getElementById('challengeIcon');
        const chWord = document.getElementById('challengeWord');
        const chInst = document.getElementById('challengeInstruction');
        if (chTag) chTag.textContent = `Sound: ${p.symbol} (${p.label})`;
        if (chIcon) chIcon.textContent = p.emoji;
        if (chWord) chWord.textContent = p.word;
        if (chInst) chInst.innerHTML = `Listen to the ${p.symbol} sound in <strong>${p.word}</strong>, then practice saying it out loud!`;
      });
      grid.appendChild(card);
    });
  }

  // --- LEVEL 3: SOUND BLENDING ---
  initLevel3Blending() {
    this.activeBlendWord = 'cat';
    this.renderBlenderWord('cat');

    document.querySelectorAll('#blenderWordChips .blend-word-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        document.querySelectorAll('#blenderWordChips .blend-word-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.activeBlendWord = chip.dataset.word;
        this.renderBlenderWord(chip.dataset.word);
      });
    });

    document.getElementById('triggerBlendBtn')?.addEventListener('click', () => {
      this.animateBlendSequence();
    });

    document.getElementById('playFullWordAudioBtn')?.addEventListener('click', () => {
      const data = BLEND_WORDS[this.activeBlendWord];
      if (data) sound.speakWord(data.word);
    });

    // Quick quiz: Find missing final sound
    document.querySelectorAll('#missingSoundOptions .btn-sound-choice').forEach(btn => {
      btn.addEventListener('click', () => {
        const isCorrect = btn.dataset.correct === 'true';
        const feedback = document.getElementById('missingSoundFeedback');
        if (!feedback) return;

        if (isCorrect) {
          btn.classList.add('correct');
          feedback.className = 'challenge-feedback success';
          feedback.innerHTML = '🎉 Terrific! /t/ finishes "c-a-t" to make <strong>cat</strong>!';
          feedback.classList.remove('hidden');
          sound.playChime();
          confetti.burst();
          state.logActivity('Completed Sound Blending Activity', 'Journey A', '🧩');
        } else {
          btn.classList.add('wrong');
          feedback.className = 'challenge-feedback';
          feedback.innerHTML = 'Almost! Try sounding out: /k/ ... /æ/ ... /t/! Tap /t/!';
          feedback.classList.remove('hidden');
          sound.playGentleBonk();
        }
      });
    });
  }

  renderBlenderWord(wordKey) {
    const data = BLEND_WORDS[wordKey];
    if (!data) return;

    const container = document.getElementById('blendTilesContainer');
    if (!container) return;
    container.innerHTML = '';

    data.tiles.forEach(tile => {
      const tileEl = document.createElement('div');
      tileEl.className = 'blend-tile';
      tileEl.dataset.char = tile.char;
      tileEl.dataset.sound = tile.sound;
      tileEl.innerHTML = `
        <span class="tile-char">${tile.char}</span>
        <span class="tile-sound">${tile.phoneme}</span>
      `;
      tileEl.addEventListener('click', () => {
        tileEl.classList.add('blending-active');
        setTimeout(() => tileEl.classList.remove('blending-active'), 400);
        sound.speak(tile.sound, { rate: 0.85 });
      });
      container.appendChild(tileEl);
    });

    document.getElementById('blendResultWord').textContent = data.word;
    document.getElementById('blendResultEmoji').textContent = data.emoji;
    const beam = document.getElementById('blendBeam');
    if (beam) beam.style.width = '0%';
  }

  animateBlendSequence() {
    const data = BLEND_WORDS[this.activeBlendWord];
    if (!data) return;

    const tiles = document.querySelectorAll('#blendTilesContainer .blend-tile');
    const beam = document.getElementById('blendBeam');
    let delay = 0;

    tiles.forEach((tile, idx) => {
      setTimeout(() => {
        tile.classList.add('blending-active');
        const tileData = data.tiles[idx];
        sound.speak(tileData.sound, { rate: 0.85, pitch: 1.15 });

        if (beam) {
          beam.style.width = `${((idx + 1) / tiles.length) * 100}%`;
        }

        setTimeout(() => tile.classList.remove('blending-active'), 650);
      }, delay);
      delay += 850;
    });

    // Final word blending burst
    setTimeout(() => {
      sound.playChime();
      sound.speakWord(data.word);
      confetti.burst(window.innerWidth / 2, window.innerHeight * 0.5, 40);
      showToast(`Blended: ${data.word}! Great job!`, 'success', data.emoji);
      state.user.wordsPracticed++;
      state.saveUser();
    }, delay + 400);
  }

  // --- LEVEL 4: WORD READING & PRONUNCIATION ---
  initLevel4WordReading() {
    this.renderWordReading();

    document.getElementById('playWordNormalBtn')?.addEventListener('click', () => {
      const item = VOCAB_WORDS[this.currentWordIndex];
      sound.speakWord(item.word, false);
    });

    document.getElementById('playWordSlowBtn')?.addEventListener('click', () => {
      const item = VOCAB_WORDS[this.currentWordIndex];
      sound.speakWord(item.word, true);
    });

    document.getElementById('playSentenceAudioBtn')?.addEventListener('click', () => {
      const item = VOCAB_WORDS[this.currentWordIndex];
      sound.speak(item.sentence, { rate: 0.9 });
    });

    document.getElementById('prevWordBtn')?.addEventListener('click', () => {
      this.currentWordIndex = (this.currentWordIndex - 1 + VOCAB_WORDS.length) % VOCAB_WORDS.length;
      this.renderWordReading();
    });

    document.getElementById('nextWordBtn')?.addEventListener('click', () => {
      this.currentWordIndex = (this.currentWordIndex + 1) % VOCAB_WORDS.length;
      this.renderWordReading();
    });

    // Speech Recognition Practice
    const micBtn = document.getElementById('micPracticeBtn');
    if (micBtn) {
      micBtn.addEventListener('click', () => {
        this.testMicrophonePractice();
      });
    }
  }

  renderWordReading() {
    const item = VOCAB_WORDS[this.currentWordIndex];
    if (!item) return;

    document.getElementById('wordReadEmoji').textContent = item.emoji;
    document.getElementById('wordReadTitle').textContent = item.word;
    document.getElementById('wordReadMeaning').textContent = item.meaning;
    document.getElementById('wordReadSentence').innerHTML = `"${item.sentence.replace(item.word, `<strong>${item.word}</strong>`)}"`;
    document.getElementById('wordIndexLabel').textContent = `Word ${this.currentWordIndex + 1} of ${VOCAB_WORDS.length}`;

    const syllablesContainer = document.getElementById('wordSyllables');
    if (syllablesContainer) {
      syllablesContainer.innerHTML = '';
      item.syllables.forEach((syl, i) => {
        const chip = document.createElement('button');
        chip.className = 'syllable-chip';
        chip.textContent = syl;
        chip.title = `Click to hear "${syl}"`;
        chip.addEventListener('click', () => {
          sound.speak(syl, { rate: 0.8 });
        });
        syllablesContainer.appendChild(chip);

        if (i < item.syllables.length - 1) {
          const dot = document.createElement('span');
          dot.className = 'syllable-dot';
          dot.textContent = '•';
          syllablesContainer.appendChild(dot);
        }
      });
    }

    const micBtn = document.getElementById('micPracticeBtn');
    if (micBtn) micBtn.innerHTML = `<span>🎙️ Start Speaking ("${item.word}")</span>`;
    const feedbackBox = document.getElementById('micFeedbackText');
    if (feedbackBox) feedbackBox.classList.add('hidden');
    const statusText = document.getElementById('micStatusText');
    if (statusText) statusText.textContent = 'Ready when you are!';
  }

  testMicrophonePractice() {
    const item = VOCAB_WORDS[this.currentWordIndex];
    const statusText = document.getElementById('micStatusText');
    const feedbackBox = document.getElementById('micFeedbackText');
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      if (statusText) statusText.textContent = 'Speech recognition not supported in this browser.';
      if (feedbackBox) {
        feedbackBox.classList.remove('hidden');
        feedbackBox.innerHTML = `Demo Mode: Say <strong>"${item.word}"</strong> out loud! Try reading it slowly and clearly.`;
      }
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    if (statusText) statusText.textContent = 'Listening... Speak now! 🎧';

    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript.toLowerCase();
      const target = item.word.toLowerCase();

      if (feedbackBox) {
        feedbackBox.classList.remove('hidden');
        if (speechResult.includes(target)) {
          feedbackBox.innerHTML = `🌟 Wonderful pronunciation! Recognized: <strong>"${speechResult}"</strong>. You matched "${item.word}"!`;
          sound.playChime();
          confetti.burst();
        } else {
          feedbackBox.innerHTML = `Heard: "<em>${speechResult}</em>". Keep practicing! Remember to pronounce each syllable: <strong>${item.syllables.join(' - ')}</strong>.`;
          sound.playGentleBonk();
        }
      }
      if (statusText) statusText.textContent = 'Completed!';
    };

    recognition.onerror = (e) => {
      if (statusText) statusText.textContent = 'Microphone ready. Practice aloud anytime!';
      if (feedbackBox) {
        feedbackBox.classList.remove('hidden');
        feedbackBox.innerHTML = `Audio tip: Practice breaking the word into chunks: <strong>${item.syllables.join(' • ')}</strong>.`;
      }
    };

    recognition.start();
  }

  // --- LEVEL 5: SENTENCE BUILDING ---
  initLevel5SentenceBuilding() {
    this.renderSentencePuzzle();

    document.getElementById('checkSentenceBtn')?.addEventListener('click', () => {
      this.checkSentence();
    });

    document.getElementById('resetSentenceBtn')?.addEventListener('click', () => {
      this.resetSentencePuzzle();
    });

    document.getElementById('listenSentenceBtn')?.addEventListener('click', () => {
      const puzzle = SENTENCE_PUZZLES[this.currentPuzzleIndex];
      sound.speak(puzzle.target.join(' '));
    });
  }

  renderSentencePuzzle() {
    const puzzle = SENTENCE_PUZZLES[this.currentPuzzleIndex];
    if (!puzzle) return;

    this.placedWords = [];
    document.getElementById('sbIllustration').textContent = puzzle.emoji;
    document.getElementById('sbHint').textContent = `"${puzzle.hint}"`;

    const dropZone = document.getElementById('sentenceDropZone');
    const wordBank = document.getElementById('wordBankTiles');
    const feedback = document.getElementById('sentenceFeedback');

    if (dropZone) dropZone.innerHTML = '<span class="drop-placeholder" id="dropPlaceholder">Tap words below to place them here in order...</span>';
    if (feedback) feedback.classList.add('hidden');

    if (wordBank) {
      wordBank.innerHTML = '';
      puzzle.scrambled.forEach((word) => {
        const tile = document.createElement('button');
        tile.className = 'word-puzzle-tile';
        tile.textContent = word;
        tile.addEventListener('click', () => {
          sound.playPop();
          this.placeWord(word, tile);
        });
        wordBank.appendChild(tile);
      });
    }
  }

  placeWord(word, sourceTile) {
    const dropZone = document.getElementById('sentenceDropZone');
    const placeholder = document.getElementById('dropPlaceholder');
    if (placeholder) placeholder.remove();

    this.placedWords.push(word);
    sourceTile.style.display = 'none';

    const placedChip = document.createElement('button');
    placedChip.className = 'word-puzzle-tile bg-purple-light text-purple';
    placedChip.textContent = word;
    placedChip.title = 'Click to return to bank';
    placedChip.addEventListener('click', () => {
      sound.playPop();
      placedChip.remove();
      sourceTile.style.display = '';
      const idx = this.placedWords.indexOf(word);
      if (idx !== -1) this.placedWords.splice(idx, 1);
      if (this.placedWords.length === 0 && dropZone) {
        dropZone.innerHTML = '<span class="drop-placeholder" id="dropPlaceholder">Tap words below to place them here in order...</span>';
      }
    });
    dropZone.appendChild(placedChip);
  }

  checkSentence() {
    const puzzle = SENTENCE_PUZZLES[this.currentPuzzleIndex];
    const feedback = document.getElementById('sentenceFeedback');
    if (!feedback) return;

    const isMatch = this.placedWords.join(' ') === puzzle.target.join(' ');
    if (isMatch) {
      feedback.className = 'sentence-feedback success';
      feedback.innerHTML = `🎉 Spot on! You arranged: <strong>"${puzzle.target.join(' ')}"</strong>!`;
      feedback.classList.remove('hidden');
      sound.playChime();
      confetti.burst();
      sound.speak(puzzle.target.join(' '));

      // Advance puzzle after brief pause
      setTimeout(() => {
        this.currentPuzzleIndex = (this.currentPuzzleIndex + 1) % SENTENCE_PUZZLES.length;
        this.renderSentencePuzzle();
      }, 3500);
    } else {
      feedback.className = 'sentence-feedback error';
      feedback.innerHTML = `Not quite right yet. You have: "<em>${this.placedWords.join(' ') || '(empty)'}</em>". Try resetting or rearranging tiles!`;
      feedback.classList.remove('hidden');
      sound.playGentleBonk();
    }
  }

  resetSentencePuzzle() {
    this.renderSentencePuzzle();
  }

  // --- LEVEL 6: PARAGRAPH READING (KARAOKE READ-ALONG) ---
  initLevel6ParagraphReading() {
    const storySelect = document.getElementById('storySelect');
    if (storySelect) {
      storySelect.addEventListener('change', (e) => {
        this.currentStoryKey = e.target.value;
        this.renderStory();
      });
    }

    this.renderStory();

    document.getElementById('playStoryBtn')?.addEventListener('click', () => {
      this.playStoryAudio();
    });

    document.getElementById('pauseStoryBtn')?.addEventListener('click', () => {
      sound.pause();
    });

    document.getElementById('stopStoryBtn')?.addEventListener('click', () => {
      sound.stop();
      this.clearKaraokeHighlights();
    });
  }

  renderStory() {
    const story = STORIES_DATA[this.currentStoryKey];
    if (!story) return;

    document.getElementById('storyTitle').textContent = story.title;
    const container = document.getElementById('storyParagraphs');
    if (!container) return;
    container.innerHTML = '';

    story.paragraphs.forEach((pText) => {
      const p = document.createElement('p');
      const words = pText.split(' ');
      words.forEach((w) => {
        const span = document.createElement('span');
        span.className = 'story-word';
        span.textContent = w + ' ';
        span.addEventListener('click', () => {
          const cleanWord = w.replace(/[.,/#!$%^&*;:{}=\-_`~()?"']/g, '');
          sound.speakWord(cleanWord);
          span.classList.add('karaoke-active');
          setTimeout(() => span.classList.remove('karaoke-active'), 600);
        });
        p.appendChild(span);
      });
      container.appendChild(p);
    });

    // Also update comprehension story
    this.initLevel7Comprehension();
  }

  playStoryAudio() {
    const story = STORIES_DATA[this.currentStoryKey];
    if (!story) return;

    const fullText = story.paragraphs.join(' ');
    const speedSelect = document.getElementById('storySpeedSelect');
    const rate = speedSelect ? parseFloat(speedSelect.value) : 1.0;

    const allWordSpans = document.querySelectorAll('.story-word');
    let wordIdx = 0;

    sound.speak(fullText, {
      rate: rate,
      onstart: () => {
        this.clearKaraokeHighlights();
      },
      onend: () => {
        this.clearKaraokeHighlights();
        showToast('Story completed! Ready for the quiz!', 'success', '📖');
      }
    });

    // Simulated karaoke word pacing
    const intervalTime = (60000 / (130 * rate)); // roughly 130 words per minute scaled by rate
    if (this.storyKaraokeInterval) clearInterval(this.storyKaraokeInterval);
    this.storyKaraokeInterval = setInterval(() => {
      if (wordIdx < allWordSpans.length) {
        allWordSpans.forEach(s => s.classList.remove('karaoke-active'));
        allWordSpans[wordIdx].classList.add('karaoke-active');
        wordIdx++;
      } else {
        clearInterval(this.storyKaraokeInterval);
      }
    }, intervalTime);
  }

  clearKaraokeHighlights() {
    if (this.storyKaraokeInterval) clearInterval(this.storyKaraokeInterval);
    document.querySelectorAll('.story-word').forEach(s => s.classList.remove('karaoke-active'));
  }

  // --- LEVEL 7: READING COMPREHENSION ---
  initLevel7Comprehension() {
    this.currentCompQuestionIndex = 0;
    this.renderCompQuestion();

    document.getElementById('prevCompBtn')?.addEventListener('click', () => {
      if (this.currentCompQuestionIndex > 0) {
        this.currentCompQuestionIndex--;
        this.renderCompQuestion();
      }
    });

    document.getElementById('nextCompBtn')?.addEventListener('click', () => {
      const story = STORIES_DATA[this.currentStoryKey];
      if (this.currentCompQuestionIndex < story.questions.length - 1) {
        this.currentCompQuestionIndex++;
        this.renderCompQuestion();
      } else {
        // Finished all questions for this story!
        sound.playChime();
        confetti.burst();
        showToast('Comprehension completed! +30 XP gained!', 'success', '⭐');
        state.user.lessonsCompleted++;
        state.saveUser();
        state.logActivity(`Completed Reading Comprehension: ${story.title}`, 'Journey A', '⭐');
      }
    });
  }

  renderCompQuestion() {
    const story = STORIES_DATA[this.currentStoryKey];
    if (!story) return;

    const qData = story.questions[this.currentCompQuestionIndex];
    document.getElementById('compStoryBadge').textContent = `Story: ${story.title}`;
    document.getElementById('compQuestionCounter').textContent = `Question ${this.currentCompQuestionIndex + 1} of ${story.questions.length}`;
    document.getElementById('compQuestionText').textContent = qData.q;

    const list = document.getElementById('compAnswersList');
    const feedback = document.getElementById('compFeedback');
    if (!list) return;

    list.innerHTML = '';
    if (feedback) feedback.classList.add('hidden');

    qData.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'comp-answer-btn';
      btn.innerHTML = `<span>${String.fromCharCode(65 + idx)}.</span> <span>${opt}</span>`;
      btn.addEventListener('click', () => {
        const isCorrect = idx === qData.correct;
        list.querySelectorAll('.comp-answer-btn').forEach(b => b.classList.remove('selected-correct', 'selected-wrong'));

        if (isCorrect) {
          btn.classList.add('selected-correct');
          if (feedback) {
            feedback.className = 'comp-feedback-box correct';
            feedback.innerHTML = `✅ <strong>Correct!</strong> ${qData.explanation}`;
            feedback.classList.remove('hidden');
          }
          sound.playChime();
          confetti.burst(window.innerWidth * 0.6, window.innerHeight * 0.4, 30);
        } else {
          btn.classList.add('selected-wrong');
          if (feedback) {
            feedback.className = 'comp-feedback-box wrong';
            feedback.innerHTML = `💡 <em>Not quite.</em> Hint: Think about what happened in the story!`;
            feedback.classList.remove('hidden');
          }
          sound.playGentleBonk();
        }
      });
      list.appendChild(btn);
    });

    const prevBtn = document.getElementById('prevCompBtn');
    const nextBtn = document.getElementById('nextCompBtn');
    if (prevBtn) prevBtn.disabled = this.currentCompQuestionIndex === 0;
    if (nextBtn) {
      nextBtn.textContent = this.currentCompQuestionIndex === story.questions.length - 1 ? 'Finish Quiz ✓' : 'Next Question →';
    }
  }
}

// ============================================================================
// 7. PHONICS PLAYGROUND: 4 PLAYABLE INTERACTIVE MINI-GAMES
// ============================================================================

class PhonicsGamesManager {
  constructor() {
    this.currentGame = 'sound-match';
    this.setupGameTabs();
    this.initGame1SoundMatch();
    this.initGame2BuildWord();
    this.initGame3MatchPicture();
    this.initGame4MissingLetter();
  }

  setupGameTabs() {
    document.querySelectorAll('.game-selector-pills .game-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.game-selector-pills .game-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        this.switchGame(pill.dataset.game);
      });
    });
  }

  switchGame(gameId) {
    this.currentGame = gameId;
    document.querySelectorAll('.game-content').forEach(g => {
      g.classList.remove('active');
      g.classList.add('hidden');
    });
    const target = document.getElementById(`game-${gameId}`);
    if (target) {
      target.classList.remove('hidden');
      target.classList.add('active');
    }
  }

  // --- GAME 1: LETTER SOUND MATCH ---
  initGame1SoundMatch() {
    this.gsmScore = 0;
    this.gsmRound = 1;
    this.gsmStreak = 0;
    this.gsmTargetLetter = null;

    document.getElementById('gsmPlaySoundBtn')?.addEventListener('click', () => {
      if (this.gsmTargetLetter) sound.speakLetterSound(this.gsmTargetLetter.letter);
    });

    this.startGsmRound();
  }

  startGsmRound() {
    // Pick target letter
    const randIdx = Math.floor(Math.random() * ALPHABET_DATA.length);
    this.gsmTargetLetter = ALPHABET_DATA[randIdx];

    // Pick 3 distractors
    const choices = [this.gsmTargetLetter];
    while (choices.length < 4) {
      const distractor = ALPHABET_DATA[Math.floor(Math.random() * ALPHABET_DATA.length)];
      if (!choices.includes(distractor)) choices.push(distractor);
    }
    // Shuffle choices
    choices.sort(() => Math.random() - 0.5);

    const grid = document.getElementById('gsmChoicesGrid');
    const feedback = document.getElementById('gsmFeedback');
    if (!grid) return;
    grid.innerHTML = '';
    if (feedback) feedback.classList.add('hidden');

    choices.forEach(ch => {
      const card = document.createElement('button');
      card.className = 'gsm-choice-card';
      card.textContent = ch.letter;
      card.addEventListener('click', () => {
        if (ch.letter === this.gsmTargetLetter.letter) {
          card.classList.add('correct');
          this.gsmScore += 10;
          this.gsmStreak++;
          sound.playChime();
          confetti.burst();
          if (feedback) {
            feedback.className = 'game-feedback-banner success';
            feedback.innerHTML = `🎉 Excellent! Letter <strong>${ch.letter}</strong> makes the ${ch.phonetic} sound!`;
            feedback.classList.remove('hidden');
          }
          this.updateGsmStats();

          setTimeout(() => {
            if (this.gsmRound < 5) {
              this.gsmRound++;
              this.startGsmRound();
            } else {
              showToast('Round completed! You won the Sound Match Trophy!', 'success', '🏆');
              state.logActivity('Won Letter Sound Match Game', 'Phonics Playground', '🎮');
              this.gsmRound = 1;
              this.startGsmRound();
            }
          }, 1600);
        } else {
          card.classList.add('wrong');
          this.gsmStreak = 0;
          sound.playGentleBonk();
          if (feedback) {
            feedback.className = 'game-feedback-banner wrong';
            feedback.innerHTML = `Listen closely! That was <strong>${ch.letter}</strong>. Press "Hear Sound Again" to listen!`;
            feedback.classList.remove('hidden');
          }
          this.updateGsmStats();
        }
      });
      grid.appendChild(card);
    });

    this.updateGsmStats();
    // Play sound automatically
    setTimeout(() => {
      sound.speakLetterSound(this.gsmTargetLetter.letter);
    }, 400);
  }

  updateGsmStats() {
    const sc = document.getElementById('gsmScore');
    const rd = document.getElementById('gsmRound');
    const st = document.getElementById('gsmStreak');
    if (sc) sc.textContent = this.gsmScore;
    if (rd) rd.textContent = `${this.gsmRound}/5`;
    if (st) st.textContent = `${this.gsmStreak} 🔥`;
  }

  // --- GAME 2: BUILD THE WORD ---
  initGame2BuildWord() {
    this.gbwWords = [
      { word: 'CAT', emoji: '🐱' },
      { word: 'SUN', emoji: '☀️' },
      { word: 'DOG', emoji: '🐶' },
      { word: 'PEN', emoji: '🖊️' },
      { word: 'BAT', emoji: '🦇' }
    ];
    this.gbwIndex = 0;
    this.gbwScore = 0;
    this.gbwPlacedLetters = [];

    document.getElementById('gbwResetBtn')?.addEventListener('click', () => {
      this.resetGbwRound();
    });

    document.getElementById('gbwCheckBtn')?.addEventListener('click', () => {
      this.checkGbwWord();
    });

    document.getElementById('gbwAudioHintBtn')?.addEventListener('click', () => {
      const current = this.gbwWords[this.gbwIndex];
      sound.speakWord(current.word);
    });

    this.renderGbwRound();
  }

  renderGbwRound() {
    const current = this.gbwWords[this.gbwIndex];
    if (!current) return;

    this.gbwPlacedLetters = [];
    document.getElementById('gbwIllustration').textContent = current.emoji;
    document.getElementById('gbwPromptText').innerHTML = `Spell the word: <span class="text-purple">"${current.word}"</span>`;

    const slotsRow = document.getElementById('gbwSlotsRow');
    const bank = document.getElementById('gbwTilesBank');
    const feedback = document.getElementById('gbwFeedback');

    if (slotsRow) {
      slotsRow.innerHTML = '';
      for (let i = 0; i < current.word.length; i++) {
        const slot = document.createElement('div');
        slot.className = 'build-slot';
        slot.id = `gbwSlot${i}`;
        slotsRow.appendChild(slot);
      }
    }

    if (feedback) feedback.classList.add('hidden');

    if (bank) {
      bank.innerHTML = '';
      // Scramble letters
      const letters = current.word.split('').sort(() => Math.random() - 0.5);
      letters.forEach((char) => {
        const tile = document.createElement('button');
        tile.className = 'build-tile-btn';
        tile.textContent = char;
        tile.addEventListener('click', () => {
          sound.playPop();
          if (this.gbwPlacedLetters.length < current.word.length) {
            const nextSlotIdx = this.gbwPlacedLetters.length;
            this.gbwPlacedLetters.push({ char, tileRef: tile });
            tile.classList.add('placed');
            const targetSlot = document.getElementById(`gbwSlot${nextSlotIdx}`);
            if (targetSlot) targetSlot.textContent = char;
          }
        });
        bank.appendChild(tile);
      });
    }

    const sc = document.getElementById('gbwScore');
    const rd = document.getElementById('gbwRound');
    if (sc) sc.textContent = this.gbwScore;
    if (rd) rd.textContent = `${this.gbwIndex + 1}/${this.gbwWords.length}`;
  }

  resetGbwRound() {
    this.renderGbwRound();
  }

  checkGbwWord() {
    const current = this.gbwWords[this.gbwIndex];
    const userSpelling = this.gbwPlacedLetters.map(p => p.char).join('');
    const feedback = document.getElementById('gbwFeedback');

    if (userSpelling === current.word) {
      this.gbwScore += 20;
      sound.playChime();
      confetti.burst();
      if (feedback) {
        feedback.className = 'game-feedback-banner success';
        feedback.innerHTML = `🎉 Correct! You spelled <strong>${current.word}</strong> ${current.emoji}!`;
        feedback.classList.remove('hidden');
      }

      setTimeout(() => {
        this.gbwIndex = (this.gbwIndex + 1) % this.gbwWords.length;
        this.renderGbwRound();
      }, 1800);
    } else {
      sound.playGentleBonk();
      if (feedback) {
        feedback.className = 'game-feedback-banner wrong';
        feedback.innerHTML = `Spelled: "${userSpelling || '___'}". Try clicking Reset to arrange again!`;
        feedback.classList.remove('hidden');
      }
    }
  }

  // --- GAME 3: MATCH WORD TO PICTURE ---
  initGame3MatchPicture() {
    this.gmpPairs = [
      { word: 'Apple', emoji: '🍎' },
      { word: 'Sun', emoji: '☀️' },
      { word: 'Dolphin', emoji: '🐬' },
      { word: 'Star', emoji: '⭐' }
    ];
    this.gmpSelectedWord = null;
    this.gmpMatchesCount = 0;

    document.getElementById('gmpRestartBtn')?.addEventListener('click', () => {
      this.renderGmpGame();
    });

    this.renderGmpGame();
  }

  renderGmpGame() {
    this.gmpMatchesCount = 0;
    this.gmpSelectedWord = null;
    document.getElementById('gmpScore').textContent = `0/${this.gmpPairs.length}`;
    const feedback = document.getElementById('gmpFeedback');
    if (feedback) feedback.classList.add('hidden');

    const wordsCol = document.getElementById('gmpWordsColumn');
    const picsCol = document.getElementById('gmpPicturesColumn');
    if (!wordsCol || !picsCol) return;

    wordsCol.innerHTML = '';
    picsCol.innerHTML = '';

    // Shuffle words and pictures separately
    const wordsShuffled = [...this.gmpPairs].sort(() => Math.random() - 0.5);
    const picsShuffled = [...this.gmpPairs].sort(() => Math.random() - 0.5);

    wordsShuffled.forEach(pair => {
      const card = document.createElement('button');
      card.className = 'gmp-item-card';
      card.dataset.word = pair.word;
      card.textContent = pair.word;
      card.addEventListener('click', () => {
        sound.speakWord(pair.word);
        document.querySelectorAll('#gmpWordsColumn .gmp-item-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        this.gmpSelectedWord = pair.word;
      });
      wordsCol.appendChild(card);
    });

    picsShuffled.forEach(pair => {
      const card = document.createElement('button');
      card.className = 'gmp-item-card';
      card.dataset.word = pair.word;
      card.innerHTML = `<span style="font-size:2.2rem;">${pair.emoji}</span> <span>${pair.emoji === '🍎' ? 'Red Fruit' : pair.emoji === '☀️' ? 'Bright Sun' : pair.emoji === '🐬' ? 'Ocean Friend' : 'Night Star'}</span>`;
      card.addEventListener('click', () => {
        if (!this.gmpSelectedWord) {
          showToast('Please select a word on the left first!', 'info', '👈');
          return;
        }

        if (this.gmpSelectedWord === pair.word) {
          // Matched!
          sound.playChime();
          confetti.burst();
          card.classList.add('matched');
          const matchingWordCard = document.querySelector(`#gmpWordsColumn .gmp-item-card[data-word="${pair.word}"]`);
          if (matchingWordCard) matchingWordCard.classList.add('matched');

          this.gmpMatchesCount++;
          document.getElementById('gmpScore').textContent = `${this.gmpMatchesCount}/${this.gmpPairs.length}`;
          this.gmpSelectedWord = null;

          if (this.gmpMatchesCount === this.gmpPairs.length) {
            if (feedback) {
              feedback.className = 'game-feedback-banner success';
              feedback.innerHTML = '🎉 Superb! All pairs matched correctly!';
              feedback.classList.remove('hidden');
            }
            state.logActivity('Completed Match Picture to Word', 'Phonics Playground', '🖼️');
          }
        } else {
          sound.playGentleBonk();
          showToast('Not a match, try again!', 'info', '🔄');
        }
      });
      picsCol.appendChild(card);
    });
  }

  // --- GAME 4: MISSING LETTER DETECTIVE ---
  initGame4MissingLetter() {
    this.gmlCases = [
      { template: ['S', '?', 'N'], missing: 'U', emoji: '☀️', word: 'SUN' },
      { template: ['C', '?', 'T'], missing: 'A', emoji: '🐱', word: 'CAT' },
      { template: ['P', '?', 'N'], missing: 'E', emoji: '🖊️', word: 'PEN' },
      { template: ['D', '?', 'G'], missing: 'O', emoji: '🐶', word: 'DOG' },
      { template: ['B', '?', 'T'], missing: 'A', emoji: '🦇', word: 'BAT' }
    ];
    this.gmlIndex = 0;
    this.gmlScore = 0;

    this.renderGmlRound();

    document.querySelectorAll('#gmlChoicesRow .vowel-choice-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const chosen = btn.textContent.trim();
        const current = this.gmlCases[this.gmlIndex];
        const feedback = document.getElementById('gmlFeedback');

        if (chosen === current.missing) {
          this.gmlScore += 15;
          sound.playChime();
          confetti.burst();
          if (feedback) {
            feedback.className = 'game-feedback-banner success';
            feedback.innerHTML = `🕵️ Brilliant Detective! <strong>${current.word}</strong> is spelled with <strong>${current.missing}</strong>!`;
            feedback.classList.remove('hidden');
          }

          document.getElementById('gmlScore').textContent = this.gmlScore;

          setTimeout(() => {
            this.gmlIndex = (this.gmlIndex + 1) % this.gmlCases.length;
            this.renderGmlRound();
          }, 1800);
        } else {
          sound.playGentleBonk();
          if (feedback) {
            feedback.className = 'game-feedback-banner wrong';
            feedback.innerHTML = `Detective, "${chosen}" doesn't make "${current.word}". Try another vowel!`;
            feedback.classList.remove('hidden');
          }
        }
      });
    });
  }

  renderGmlRound() {
    const current = this.gmlCases[this.gmlIndex];
    if (!current) return;

    document.getElementById('gmlIllustration').textContent = current.emoji;
    document.getElementById('gmlRound').textContent = `${this.gmlIndex + 1}/${this.gmlCases.length}`;
    const feedback = document.getElementById('gmlFeedback');
    if (feedback) feedback.classList.add('hidden');

    const display = document.getElementById('gmlWordDisplay');
    if (display) {
      display.innerHTML = `
        <span class="char-box">${current.template[0]}</span>
        <span class="char-box missing">?</span>
        <span class="char-box">${current.template[2]}</span>
      `;
    }
  }
}

// ============================================================================
// 8. JOURNEY B: HELP ME STUDY ASSISTANT STUDIO
// ============================================================================

class StudyStudioManager {
  constructor() {
    this.activePresetKey = 'photosynthesis';
    this.currentData = STUDY_PRESETS.photosynthesis;
    this.setupListeners();
  }

  setupListeners() {
    // Preset buttons
    document.querySelectorAll('.preset-picker .preset-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        const key = pill.dataset.preset;
        this.activePresetKey = key;
        const preset = STUDY_PRESETS[key];
        if (preset) {
          const textarea = document.getElementById('studyTextInput');
          if (textarea) textarea.value = preset.raw;
          this.processMaterial(preset);
        }
      });
    });

    // File drop & input
    const fileInput = document.getElementById('studyFileInput');
    if (fileInput) {
      fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (file.name.endsWith('.txt') || file.name.endsWith('.md')) {
          const reader = new FileReader();
          reader.onload = (event) => {
            const text = event.target.result;
            const textarea = document.getElementById('studyTextInput');
            if (textarea) textarea.value = text;
            showToast(`Loaded ${file.name} successfully!`, 'success', '📄');
          };
          reader.readAsText(file);
        } else {
          showToast(`Extracted text preview from ${file.name} (Simulated Client OCR)`, 'info', '📄');
          const textarea = document.getElementById('studyTextInput');
          if (textarea) textarea.value = STUDY_PRESETS.photosynthesis.raw;
        }
      });
    }

    // Process button
    document.getElementById('processMaterialBtn')?.addEventListener('click', () => {
      const textarea = document.getElementById('studyTextInput');
      const text = textarea ? textarea.value.trim() : '';
      if (!text) {
        showToast('Please paste or type study notes first!', 'info', '✏️');
        return;
      }
      this.generateFromCustomText(text);
    });

    // Clear button
    document.getElementById('clearStudyTextBtn')?.addEventListener('click', () => {
      const textarea = document.getElementById('studyTextInput');
      if (textarea) textarea.value = '';
    });

    // Tools sub-tabs
    document.querySelectorAll('.study-tools-nav .study-tool-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.study-tools-nav .study-tool-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.switchTool(tab.dataset.tool);
      });
    });

    // Audio player controls
    document.getElementById('apPlayBtn')?.addEventListener('click', () => {
      this.playStudyAudio();
    });
    document.getElementById('apPauseBtn')?.addEventListener('click', () => {
      sound.pause();
      document.getElementById('audioPlayerStatus').textContent = 'Paused';
    });
    document.getElementById('apStopBtn')?.addEventListener('click', () => {
      sound.stop();
      document.getElementById('audioPlayerStatus').textContent = 'Stopped';
    });

    const speedRange = document.getElementById('apSpeedRate');
    if (speedRange) {
      speedRange.addEventListener('input', (e) => {
        const val = document.getElementById('apSpeedVal');
        if (val) val.textContent = `${e.target.value}x`;
      });
    }

    // Save generated cards to Flashcards Hub
    document.getElementById('exportToFlashcardsBtn')?.addEventListener('click', () => {
      if (this.currentData && this.currentData.flashcards) {
        state.flashcards.custom.push(...this.currentData.flashcards);
        state.saveFlashcards();
        sound.playChime();
        confetti.burst();
        showToast('Saved all cards to "My Custom Cards" deck!', 'success', '🗂️');
      }
    });

    // Initialize with default preset
    this.processMaterial(STUDY_PRESETS.photosynthesis);
  }

  switchTool(toolId) {
    document.querySelectorAll('.study-tool-pane').forEach(p => {
      p.classList.remove('active');
      p.classList.add('hidden');
    });
    const pane = document.getElementById(`tool-${toolId}`);
    if (pane) {
      pane.classList.remove('hidden');
      pane.classList.add('active');
    }
  }

  processMaterial(data) {
    this.currentData = data;

    // 1. Easy explanation
    const explTitle = document.getElementById('studyExplTitle');
    const explBody = document.getElementById('studyExplBody');
    if (explTitle) explTitle.textContent = data.title;
    if (explBody) explBody.innerHTML = data.simplified;

    // 2. Audio Readout
    const audioTitle = document.getElementById('audioPlayerTitle');
    const textReadout = document.getElementById('apTextReadout');
    if (audioTitle) audioTitle.textContent = `Audio Lesson: ${data.title}`;
    if (textReadout) {
      const sentences = data.raw.split('. ');
      textReadout.innerHTML = sentences.map((s, idx) => `<span class="ap-sentence" id="apSent${idx}">${s.trim()}${idx < sentences.length - 1 ? '.' : ''}</span> `).join('');
    }

    // 3. Key Points
    const kpList = document.getElementById('studyKeyPointsList');
    if (kpList) {
      kpList.innerHTML = data.keyPoints.map((pt, idx) => `
        <div class="kp-item">
          <span class="kp-num">${idx + 1}</span>
          <span class="kp-text">${pt}</span>
        </div>
      `).join('');
    }

    // 4. Visual Concept Map
    const map = document.getElementById('studyConceptMap');
    if (map) {
      map.innerHTML = `
        <div class="concept-node-root">🌟 ${data.title}</div>
        <div class="concept-branches-grid">
          ${data.branches.map(b => `
            <div class="concept-branch-card">
              <span class="branch-title">${b.title}</span>
              <p class="branch-desc">${b.desc}</p>
            </div>
          `).join('')}
        </div>
      `;
    }

    // 5. Quiz Generator
    const quizContainer = document.getElementById('generatedQuizContainer');
    if (quizContainer) {
      quizContainer.innerHTML = '';
      data.quiz.forEach((qItem, qIdx) => {
        const card = document.createElement('div');
        card.className = 'gen-quiz-card';
        card.innerHTML = `
          <h4 class="gen-quiz-q">${qIdx + 1}. ${qItem.q}</h4>
          <div class="gen-quiz-options">
            ${qItem.options.map((opt, oIdx) => `
              <button class="quiz-option-btn" data-qidx="${qIdx}" data-oidx="${oIdx}">
                ${opt}
              </button>
            `).join('')}
          </div>
          <div class="quiz-feedback hidden" id="genQuizFeedback${qIdx}"></div>
        `;
        quizContainer.appendChild(card);
      });

      // Hook up options
      quizContainer.querySelectorAll('.quiz-option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const qIdx = parseInt(btn.dataset.qidx, 10);
          const oIdx = parseInt(btn.dataset.oidx, 10);
          const qObj = data.quiz[qIdx];
          const feedback = document.getElementById(`genQuizFeedback${qIdx}`);

          const parent = btn.closest('.gen-quiz-options');
          parent.querySelectorAll('.quiz-option-btn').forEach(b => b.classList.remove('correct', 'wrong'));

          if (oIdx === qObj.correct) {
            btn.classList.add('correct');
            sound.playChime();
            confetti.burst();
            if (feedback) {
              feedback.className = 'quiz-feedback success';
              feedback.innerHTML = `✓ Correct! ${qObj.exp}`;
              feedback.classList.remove('hidden');
            }
          } else {
            btn.classList.add('wrong');
            sound.playGentleBonk();
            if (feedback) {
              feedback.className = 'quiz-feedback';
              feedback.innerHTML = `Not quite. Hint: Read through the easy explanation again!`;
              feedback.classList.remove('hidden');
            }
          }
        });
      });
    }

    // 6. Flashcard Generator
    const fcGrid = document.getElementById('genFlashcardsGrid');
    if (fcGrid) {
      fcGrid.innerHTML = data.flashcards.map(fc => `
        <div class="gen-fc-card" title="Click to hear pronunciation">
          <strong style="font-size:1.4rem; color:var(--purple); margin-bottom:8px;">${fc.term}</strong>
          <p style="font-size:0.92rem; color:var(--text);">${fc.meaning}</p>
        </div>
      `).join('');

      fcGrid.querySelectorAll('.gen-fc-card').forEach((card, idx) => {
        card.addEventListener('click', () => {
          const term = data.flashcards[idx].term;
          sound.speakWord(term);
        });
      });
    }

    state.logActivity(`Processed Study Material: ${data.title}`, 'Journey B', '💡');
  }

  generateFromCustomText(text) {
    showToast('Analyzing and generating simplified study materials...', 'info', '⚡');
    const firstSentence = text.split('.')[0] || 'Study Material';
    const cleanTitle = firstSentence.substring(0, 45);

    const customStudy = {
      title: cleanTitle,
      raw: text,
      simplified: `
        <p><strong>Simplified Key Idea:</strong> Here is a gentle plain-language breakdown of your notes:</p>
        <p>${text.slice(0, 320)}...</p>
        <p><em>💡 Learning Tip: Listen to the audio reading below and flip through the key terms.</em></p>
      `,
      keyPoints: [
        "Core Theme: " + cleanTitle,
        "Read notes in bite-sized chunks for better memory retention.",
        "Practice answering the generated quiz to test your recall."
      ],
      branches: [
        { title: "Main Topic", desc: cleanTitle },
        { title: "Key Focus", desc: "Foundational concepts and essential vocabulary" },
        { title: "Action Step", desc: "Flip through study flashcards and take the quick quiz" }
      ],
      quiz: [
        { q: `What is the primary topic of this study note?`, options: [cleanTitle, "Outer Space", "Ancient History", "Grammar Rules"], correct: 0, exp: "The note centers around " + cleanTitle }
      ],
      flashcards: [
        { term: cleanTitle.split(' ')[0] || 'Concept', meaning: "Key term extracted from your study notes.", example: text.slice(0, 80) }
      ]
    };

    this.processMaterial(customStudy);
  }

  playStudyAudio() {
    if (!this.currentData) return;
    const speedRange = document.getElementById('apSpeedRate');
    const rate = speedRange ? parseFloat(speedRange.value) : 1.0;
    const status = document.getElementById('audioPlayerStatus');

    if (status) status.textContent = 'Playing narration...';

    sound.speak(this.currentData.raw, {
      rate: rate,
      onstart: () => {
        if (status) status.textContent = 'Playing audio lesson...';
      },
      onend: () => {
        if (status) status.textContent = 'Finished audio lesson.';
      }
    });
  }
}

// ============================================================================
// 9. FLASHCARDS HUB (3D FLIP & PERSISTENCE)
// ============================================================================

class FlashcardDeckManager {
  constructor() {
    this.currentDeckKey = 'sight-words';
    this.currentIndex = 0;
    this.masteredCount = 0;
    this.reviewCount = 0;
    this.isFlipped = false;

    this.setupListeners();
    this.renderCard();
  }

  setupListeners() {
    const cardEl = document.getElementById('activeFlashcard');
    if (cardEl) {
      cardEl.addEventListener('click', () => this.flip());
      cardEl.addEventListener('keydown', (e) => {
        if (e.code === 'Space' || e.code === 'Enter') {
          e.preventDefault();
          this.flip();
        }
      });
    }

    document.getElementById('flashcardDeckSelect')?.addEventListener('change', (e) => {
      this.currentDeckKey = e.target.value;
      this.currentIndex = 0;
      this.renderCard();
    });

    document.getElementById('fcPrevBtn')?.addEventListener('click', () => this.prev());
    document.getElementById('fcNextBtn')?.addEventListener('click', () => this.next());
    document.getElementById('fcShuffleBtn')?.addEventListener('click', () => this.shuffle());

    document.getElementById('fcMasteredBtn')?.addEventListener('click', () => {
      this.masteredCount++;
      sound.playChime();
      confetti.burst(window.innerWidth * 0.5, window.innerHeight * 0.6, 25);
      this.updateCounts();
      this.next();
    });

    document.getElementById('fcNeedPracticeBtn')?.addEventListener('click', () => {
      this.reviewCount++;
      sound.playGentleBonk();
      this.updateCounts();
      this.next();
    });

    // Pronunciation on cards
    document.getElementById('fcAudioFrontBtn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      const deck = state.flashcards[this.currentDeckKey] || [];
      if (deck[this.currentIndex]) {
        sound.speakWord(deck[this.currentIndex].term);
      }
    });

    document.getElementById('fcAudioBackBtn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      const deck = state.flashcards[this.currentDeckKey] || [];
      if (deck[this.currentIndex]) {
        sound.speak(deck[this.currentIndex].meaning);
      }
    });

    // Create Card Modal
    const createBtn = document.getElementById('openCreateCardModalBtn');
    const modal = document.getElementById('createCardModal');
    const closeBtn = document.getElementById('createCardCloseBtn');
    const cancelBtn = document.getElementById('cancelCreateCardBtn');

    if (createBtn && modal) {
      createBtn.addEventListener('click', () => modal.classList.remove('hidden'));
    }
    if (closeBtn && modal) {
      closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
    }
    if (cancelBtn && modal) {
      cancelBtn.addEventListener('click', () => modal.classList.add('hidden'));
    }

    const form = document.getElementById('createCardForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const deckKey = document.getElementById('newCardDeck').value;
        const term = document.getElementById('newCardTerm').value.trim();
        const meaning = document.getElementById('newCardMeaning').value.trim();
        const example = document.getElementById('newCardExample').value.trim();

        if (term && meaning) {
          if (!state.flashcards[deckKey]) state.flashcards[deckKey] = [];
          state.flashcards[deckKey].push({ term, meaning, example });
          state.saveFlashcards();

          sound.playChime();
          showToast(`Saved "${term}" to flashcard deck!`, 'success', '🗂️');
          modal.classList.add('hidden');
          form.reset();

          // Switch to that deck and render
          this.currentDeckKey = deckKey;
          const select = document.getElementById('flashcardDeckSelect');
          if (select) select.value = deckKey;
          this.currentIndex = state.flashcards[deckKey].length - 1;
          this.renderCard();
        }
      });
    }
  }

  flip() {
    const cardEl = document.getElementById('activeFlashcard');
    if (!cardEl) return;
    this.isFlipped = !this.isFlipped;
    cardEl.classList.toggle('flipped', this.isFlipped);
    sound.playPop();
  }

  prev() {
    const deck = state.flashcards[this.currentDeckKey] || [];
    if (deck.length === 0) return;
    this.currentIndex = (this.currentIndex - 1 + deck.length) % deck.length;
    this.renderCard();
  }

  next() {
    const deck = state.flashcards[this.currentDeckKey] || [];
    if (deck.length === 0) return;
    this.currentIndex = (this.currentIndex + 1) % deck.length;
    this.renderCard();
  }

  shuffle() {
    const deck = state.flashcards[this.currentDeckKey] || [];
    if (deck.length > 1) {
      deck.sort(() => Math.random() - 0.5);
      this.currentIndex = 0;
      sound.playPop();
      showToast('Deck shuffled!', 'info', '🔀');
      this.renderCard();
    }
  }

  renderCard() {
    const cardEl = document.getElementById('activeFlashcard');
    if (cardEl) {
      this.isFlipped = false;
      cardEl.classList.remove('flipped');
    }

    const deck = state.flashcards[this.currentDeckKey] || [];
    const totalEl = document.getElementById('fcTotalCards');
    const currEl = document.getElementById('fcCurrentIndex');

    if (totalEl) totalEl.textContent = deck.length;
    if (currEl) currEl.textContent = deck.length > 0 ? this.currentIndex + 1 : 0;

    if (deck.length === 0) {
      document.getElementById('fcFrontTerm').textContent = 'Deck is Empty';
      document.getElementById('fcBackMeaning').textContent = 'Click "+ Create Flashcard" to add cards to this deck!';
      document.getElementById('fcBackExample').textContent = '';
      return;
    }

    const cardData = deck[this.currentIndex];
    document.getElementById('fcFrontTerm').textContent = cardData.term;
    document.getElementById('fcBackMeaning').textContent = cardData.meaning;
    document.getElementById('fcBackExample').textContent = cardData.example ? `"${cardData.example}"` : '';

    const catBadge = document.getElementById('fcFrontCategory');
    if (catBadge) {
      const labels = {
        'sight-words': 'Sight Word',
        'science-nature': 'Science Concept',
        'phonics-blends': 'Phonics Pattern',
        'custom': 'Custom Card'
      };
      catBadge.textContent = labels[this.currentDeckKey] || 'Flashcard';
    }
  }

  updateCounts() {
    const mEl = document.getElementById('fcMasteredCount');
    const rEl = document.getElementById('fcReviewCount');
    if (mEl) mEl.textContent = this.masteredCount;
    if (rEl) rEl.textContent = this.reviewCount;
  }
}

// ============================================================================
// 10. ACCESSIBILITY, READING RULER & MODAL SYSTEM
// ============================================================================

function setupAccessibilityControls() {
  // Reading Ruler cursor follower
  const ruler = document.getElementById('readingRuler');
  window.addEventListener('mousemove', (e) => {
    if (ruler && state.accessibility.rulerActive) {
      ruler.style.top = `${e.clientY - 24}px`;
    }
  });

  window.addEventListener('touchmove', (e) => {
    if (ruler && state.accessibility.rulerActive && e.touches[0]) {
      ruler.style.top = `${e.touches[0].clientY - 24}px`;
    }
  });

  // Top header accessibility button
  const topAccessBtn = document.getElementById('accessibilityBtn');
  const mobileAccessBtn = document.getElementById('mobileAccessBtn');
  if (topAccessBtn) topAccessBtn.addEventListener('click', () => openAccessDrawer());
  if (mobileAccessBtn) mobileAccessBtn.addEventListener('click', () => openAccessDrawer());

  // Close drawer
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const drawer = document.getElementById('accessibilityDrawer');
  if (closeDrawerBtn && drawer) {
    closeDrawerBtn.addEventListener('click', () => drawer.classList.add('hidden'));
  }

  // Sound FX toggle button in top bar
  const soundFxBtn = document.getElementById('soundFxToggleBtn');
  if (soundFxBtn) {
    soundFxBtn.addEventListener('click', () => {
      state.accessibility.soundFx = !state.accessibility.soundFx;
      state.saveAccessibility();
      showToast(state.accessibility.soundFx ? 'Sound Effects Enabled' : 'Sound Effects Muted', 'info', state.accessibility.soundFx ? '🔊' : '🔇');
    });
  }

  // Drawer quick actions
  document.querySelectorAll('#accessibilityDrawer [data-set-theme]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.accessibility.theme = btn.dataset.setTheme;
      state.saveAccessibility();
    });
  });

  document.querySelectorAll('#accessibilityDrawer [data-set-font-size]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.accessibility.fontSize = btn.dataset.setFontSize;
      state.saveAccessibility();
    });
  });

  const drawerRuler = document.getElementById('drawerRulerToggle');
  if (drawerRuler) {
    drawerRuler.addEventListener('change', (e) => {
      state.accessibility.rulerActive = e.target.checked;
      state.saveAccessibility();
    });
  }

  const drawerFullBtn = document.getElementById('drawerOpenFullAccessBtn');
  if (drawerFullBtn) {
    drawerFullBtn.addEventListener('click', () => {
      if (drawer) drawer.classList.add('hidden');
      router.switchView('app');
      router.switchTab('accessibility');
    });
  }

  // Full Accessibility tab controls
  document.querySelectorAll('#tab-accessibility [data-set-theme]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.accessibility.theme = btn.dataset.setTheme;
      state.saveAccessibility();
    });
  });

  document.querySelectorAll('#tab-accessibility [data-set-font-size]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.accessibility.fontSize = btn.dataset.setFontSize;
      state.saveAccessibility();
    });
  });

  document.querySelectorAll('#tab-accessibility [data-set-line-spacing]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.accessibility.lineSpacing = btn.dataset.setLineSpacing;
      state.saveAccessibility();
    });
  });

  document.querySelectorAll('#tab-accessibility [data-set-letter-spacing]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.accessibility.letterSpacing = btn.dataset.setLetterSpacing;
      state.saveAccessibility();
    });
  });

  document.querySelectorAll('#tab-accessibility [data-set-font-family]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.accessibility.fontFamily = btn.dataset.setFontFamily;
      state.saveAccessibility();
    });
  });

  document.getElementById('toggleRulerCheckbox')?.addEventListener('change', (e) => {
    state.accessibility.rulerActive = e.target.checked;
    state.saveAccessibility();
  });

  document.getElementById('toggleReducedMotionCheckbox')?.addEventListener('change', (e) => {
    state.accessibility.reducedMotion = e.target.checked;
    state.saveAccessibility();
  });

  document.getElementById('toggleSoundFxCheckbox')?.addEventListener('change', (e) => {
    state.accessibility.soundFx = e.target.checked;
    state.saveAccessibility();
  });

  document.getElementById('resetAccessSettingsBtn')?.addEventListener('click', () => {
    state.accessibility = {
      theme: 'light',
      fontSize: 'medium',
      lineSpacing: 'normal',
      letterSpacing: 'normal',
      fontFamily: 'nunito',
      rulerActive: false,
      reducedMotion: false,
      soundFx: true
    };
    state.saveAccessibility();
    showToast('Reset accessibility settings to default', 'info', '🔄');
  });
}

function openAccessDrawer() {
  const drawer = document.getElementById('accessibilityDrawer');
  if (drawer) drawer.classList.remove('hidden');
}

// ============================================================================
// 11. AUTHENTICATION & DEMO PROFILES MODAL
// ============================================================================

function setupAuthModal() {
  const modal = document.getElementById('authModal');
  const userBtn = document.getElementById('userProfileBtn');
  const userDropdown = document.getElementById('userProfileDropdown');
  const closeBtn = document.getElementById('authModalCloseBtn');

  // Profile dropdown toggle
  if (userBtn && userDropdown) {
    userBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      userDropdown.classList.toggle('hidden');
    });
    document.addEventListener('click', () => {
      userDropdown.classList.add('hidden');
    });
  }

  // Notification dropdown toggle
  const notifBtn = document.getElementById('notificationBtn');
  const notifDropdown = document.getElementById('notificationDropdown');
  if (notifBtn && notifDropdown) {
    notifBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      notifDropdown.classList.toggle('hidden');
    });
    document.addEventListener('click', () => {
      notifDropdown.classList.add('hidden');
    });
  }

  // Clear notifs
  document.getElementById('clearNotifsBtn')?.addEventListener('click', () => {
    const list = document.getElementById('notifList');
    if (list) list.innerHTML = '<li style="padding:10px; color:var(--text-light); text-align:center;">No new notifications</li>';
    const indicator = document.querySelector('.notification-indicator');
    if (indicator) indicator.style.display = 'none';
  });

  // Switch learner / sign out
  document.getElementById('logoutBtn')?.addEventListener('click', () => {
    if (userDropdown) userDropdown.classList.add('hidden');
    openAuthModal();
  });

  // Auth Modal close
  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
  }

  // 1-Click Demo Profile Logins
  document.getElementById('demoLoginEmma')?.addEventListener('click', () => {
    state.user = {
      name: 'Emma',
      fullName: 'Emma Wilson',
      role: 'Early Reader (Age 7)',
      avatar: '🦉',
      streak: 5,
      lessonsCompleted: 8,
      wordsPracticed: 42,
      quizAverage: 92,
      badges: ['Alphabet Explorer', 'Sound Starter', 'Streak Hero']
    };
    state.saveUser();
    sound.playChime();
    showToast('Signed in as Emma (Early Reader)', 'success', '🦉');
    if (modal) modal.classList.add('hidden');
  });

  document.getElementById('demoLoginTeacher')?.addEventListener('click', () => {
    state.user = {
      name: 'Mrs. Wilson',
      fullName: 'Sarah Wilson, M.Ed',
      role: 'Reading Specialist / Educator',
      avatar: '👩‍🏫',
      streak: 12,
      lessonsCompleted: 24,
      wordsPracticed: 180,
      quizAverage: 96,
      badges: ['Alphabet Explorer', 'Phonics Pioneer', 'Blending Master', 'Study Hero']
    };
    state.saveUser();
    sound.playChime();
    showToast('Signed in as Mrs. Wilson (Teacher)', 'success', '👩‍🏫');
    if (modal) modal.classList.add('hidden');
    router.switchView('app');
    router.switchTab('parent-teacher');
  });

  // Tabs Login vs Register
  const tabLogin = document.getElementById('tabLoginBtn');
  const tabReg = document.getElementById('tabRegisterBtn');
  const loginForm = document.getElementById('loginForm');
  const regForm = document.getElementById('registerForm');

  if (tabLogin && tabReg) {
    tabLogin.addEventListener('click', () => {
      tabLogin.classList.add('active');
      tabReg.classList.remove('active');
      loginForm.classList.remove('hidden');
      regForm.classList.add('hidden');
    });

    tabReg.addEventListener('click', () => {
      tabReg.classList.add('active');
      tabLogin.classList.remove('active');
      regForm.classList.remove('hidden');
      loginForm.classList.add('hidden');
    });
  }

  // Password toggle
  document.getElementById('toggleLoginPwBtn')?.addEventListener('click', () => {
    const pwInput = document.getElementById('loginPassword');
    if (pwInput) {
      pwInput.type = pwInput.type === 'password' ? 'text' : 'password';
    }
  });

  // Avatar picker
  let selectedAvatar = '🦉';
  document.querySelectorAll('#regAvatarPicker .avatar-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('#regAvatarPicker .avatar-opt').forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      selectedAvatar = opt.dataset.avatar;
    });
  });

  // Submit Register
  document.getElementById('submitRegisterBtn')?.addEventListener('click', () => {
    const name = document.getElementById('regName').value.trim() || 'Learner';
    const role = document.getElementById('regRole').value;
    state.user.name = name;
    state.user.fullName = name;
    state.user.role = role;
    state.user.avatar = selectedAvatar;
    state.saveUser();
    sound.playChime();
    showToast(`Welcome to LearnEase, ${name}!`, 'success', selectedAvatar);
    if (modal) modal.classList.add('hidden');
    router.switchView('app');
  });

  // Submit Login
  document.getElementById('submitLoginBtn')?.addEventListener('click', () => {
    sound.playChime();
    showToast(`Welcome back, ${state.user.name}!`, 'success', state.user.avatar);
    if (modal) modal.classList.add('hidden');
    router.switchView('app');
  });

  // Dropdown menu links
  document.querySelectorAll('.profile-dropdown [data-action]').forEach(btn => {
    btn.addEventListener('click', () => {
      const act = btn.dataset.action;
      if (userDropdown) userDropdown.classList.add('hidden');
      router.switchView('app');
      if (act === 'go-progress') router.switchTab('my-progress');
      if (act === 'go-parents') router.switchTab('parent-teacher');
      if (act === 'go-access') router.switchTab('accessibility');
    });
  });
}

function openAuthModal() {
  const modal = document.getElementById('authModal');
  if (modal) modal.classList.remove('hidden');
}

// ============================================================================
// 12. PARENT & TEACHER VIEW PORTAL
// ============================================================================

function setupParentTeacherPortal() {
  const select = document.getElementById('learnerProfileSelect');
  if (select) {
    select.addEventListener('change', (e) => {
      const val = e.target.value;
      const bAvatar = document.getElementById('ptBannerAvatar');
      const bName = document.getElementById('ptBannerName');
      const bDetails = document.getElementById('ptBannerDetails');

      if (val === 'emma') {
        if (bAvatar) bAvatar.textContent = '🦉';
        if (bName) bName.textContent = 'Emma Wilson';
        if (bDetails) bDetails.innerHTML = '<strong>Current Focus:</strong> Early Phonics & Short Vowel Blending • <strong>Total Activity:</strong> 4.5 hours this month';
      } else if (val === 'leo') {
        if (bAvatar) bAvatar.textContent = '🦊';
        if (bName) bName.textContent = 'Leo Miller';
        if (bDetails) bDetails.innerHTML = '<strong>Current Focus:</strong> Grade 4 Science Notes & Reading Fluency • <strong>Total Activity:</strong> 7.2 hours this month';
      } else {
        if (bAvatar) bAvatar.textContent = '⭐';
        if (bName) bName.textContent = 'Guest Learner';
        if (bDetails) bDetails.innerHTML = '<strong>Current Focus:</strong> Exploring Alphabet & Phonics Playground • <strong>Total Activity:</strong> 1.1 hours this month';
      }
      sound.playPop();
    });
  }

  document.getElementById('printReportBtn')?.addEventListener('click', () => {
    window.print();
  });
}

// ============================================================================
// 13. DASHBOARD WIDGETS: DAILY QUIZ & GOALS
// ============================================================================

function setupDashboardWidgets() {
  // Daily quiz option buttons
  document.querySelectorAll('#dailyQuizOptions .quiz-option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const isCorrect = btn.dataset.correct === 'true';
      const feedback = document.getElementById('dailyQuizFeedback');
      document.querySelectorAll('#dailyQuizOptions .quiz-option-btn').forEach(b => b.classList.remove('correct', 'wrong'));

      if (isCorrect) {
        btn.classList.add('correct');
        sound.playChime();
        confetti.burst();
        if (feedback) {
          feedback.className = 'quiz-feedback success';
          feedback.innerHTML = '🎉 Excellent! "Sun" starts with the /s/ sound! +15 XP';
          feedback.classList.remove('hidden');
        }
        state.logActivity('Answered Daily Phonics Quiz correctly', 'Dashboard Hub', '⭐');
      } else {
        btn.classList.add('wrong');
        sound.playGentleBonk();
        if (feedback) {
          feedback.className = 'quiz-feedback';
          feedback.innerHTML = 'Try sounding it out: "s-u-n" starts with /s/!';
          feedback.classList.remove('hidden');
        }
      }
    });
  });

  // Hero Mini Audio Card demonstration
  const heroPlayBtn = document.getElementById('heroMiniPlayBtn');
  if (heroPlayBtn) {
    heroPlayBtn.addEventListener('click', () => {
      sound.speakLetterSound('A');
      sound.speakWord('Apple');
    });
  }

  // Reset Progress demo button
  document.getElementById('resetProgressDemoBtn')?.addEventListener('click', () => {
    if (confirm('Reset your demo progress statistics?')) {
      state.user.lessonsCompleted = 0;
      state.user.wordsPracticed = 0;
      state.user.quizAverage = 100;
      state.saveUser();
      showToast('Progress statistics reset for demonstration', 'info', '🔄');
    }
  });
}

// ============================================================================
// 14. APPLICATION INITIALIZATION (ON DOM READY)
// ============================================================================

let router, readingManager, gamesManager, studyManager, flashcardManager;

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize State & Accessibility
  state.syncUserUI();
  state.applyAccessibility();
  state.renderActivityTimeline();

  // 2. Initialize Navigation Router
  router = new AppRouter();

  // 3. Initialize Learning Engines
  readingManager = new ReadingManager();
  gamesManager = new PhonicsGamesManager();
  studyManager = new StudyStudioManager();
  flashcardManager = new FlashcardDeckManager();

  // 4. Initialize Accessibility, Auth, and Portal
  setupAccessibilityControls();
  setupAuthModal();
  setupParentTeacherPortal();
  setupDashboardWidgets();

  console.log('LearnEase EdTech Platform initialized successfully.');
});

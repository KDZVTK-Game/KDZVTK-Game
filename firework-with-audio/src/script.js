/* =========================================
    FIREWORKS DATA (the main show)
========================================= */

const fireworksData = [
    // Initial Launches
    { left: '10%', color: '#FF5733', explosionType: 'circle', size: 'large',  launchTime: 0 },
    { left: '90%', color: '#FFC300', explosionType: 'star', size: 'medium', launchTime: 400 },

    // T = 3,000 ms (Quad Launch)
    { left: '15%', color: '#DAF7A6', explosionType: 'double-spiral', size: 'small', launchTime: 3000 },
    { left: '25%', color: '#33FF57', explosionType: 'wave', size: 'medium', launchTime: 3400 },
    { left: '35%', color: '#33FFF5', explosionType: 'heart', size: 'medium', launchTime: 3800 },
    { left: '45%', color: '#3357FF', explosionType: 'swirl', size: 'large', launchTime: 4200 },

    // T = 6,000 ms (Triple Launch)
    { left: '20%', color: '#8E44AD', explosionType: 'flower', size: 'large', launchTime: 6000 },
    { left: '50%', color: '#FF33A8', explosionType: 'random-burst', size: 'small', launchTime: 6400 },
    { left: '80%', color: '#FF8C33', explosionType: 'circle', size: 'medium', launchTime: 6800 },

    // T = 9,000 ms (Pair Launch)
    { left: '30%', color: '#33FFBD', explosionType: 'ring-of-rings', size: 'medium', launchTime: 9000 },
    { left: '70%', color: '#FF3333', explosionType: 'spiral', size: 'large', launchTime: 9400 },

    // T = 12,000 ms (Triple Launch)
    { left: '35%', color: '#FF33F6', explosionType: 'triple-star', size: 'large', launchTime: 12000 },
    { left: '55%', color: '#33FF8C', explosionType: 'flurry', size: 'small', launchTime: 12400 },
    { left: '75%', color: '#FFBD33', explosionType: 'heart', size: 'medium', launchTime: 12800 },

    // T = 15,000 ms (Quad Launch)
    { left: '10%', color: '#3375FF', explosionType: 'random-burst', size: 'large', launchTime: 15000 },
    { left: '30%', color: '#FF33EC', explosionType: 'ring-of-rings', size: 'large', launchTime: 15400 },
    { left: '50%', color: '#33FF8C', explosionType: 'triple-star', size: 'large', launchTime: 15800 },
    { left: '70%', color: '#FFC733', explosionType: 'spiral', size: 'large', launchTime: 16200 },

    // T = 18,000 ms (Pair Launch)
    { left: '20%', color: '#33D4FF', explosionType: 'flower', size: 'medium', launchTime: 18000 },
    { left: '80%', color: '#FF3333', explosionType: 'swirl', size: 'large', launchTime: 18400 },

    // T = 21,000 ms (Triple Launch)
    { left: '25%', color: '#FF5733', explosionType: 'wave', size: 'small', launchTime: 21000 },
    { left: '50%', color: '#FFC300', explosionType: 'spiral', size: 'medium', launchTime: 21400 },
    { left: '75%', color: '#DAF7A6', explosionType: 'heart', size: 'large', launchTime: 21800 },

    // T = 24,000 ms (Pair Launch)
    { left: '15%', color: '#33FF57', explosionType: 'double-spiral', size: 'medium', launchTime: 24000 },
    { left: '85%', color: '#33FFF5', explosionType: 'random-burst', size: 'small', launchTime: 24400 },

    // T = 27,000 ms (Triple Launch)
    { left: '30%', color: '#3357FF', explosionType: 'swirl', size: 'large', launchTime: 27000 },
    { left: '60%', color: '#8E44AD', explosionType: 'flower', size: 'medium', launchTime: 27400 },
    { left: '90%', color: '#FF33A8', explosionType: 'triple-star', size: 'small', launchTime: 27800 },

    // T = 30,000 ms (Quad Launch)
    { left: '10%', color: '#FF8C33', explosionType: 'ring-of-rings', size: 'large', launchTime: 30000 },
    { left: '25%', color: '#33FFBD', explosionType: 'flurry', size: 'medium', launchTime: 30400 },
    { left: '50%', color: '#FF3333', explosionType: 'heart', size: 'large', launchTime: 30800 },
    { left: '75%', color: '#FF33F6', explosionType: 'spiral', size: 'large', launchTime: 31200 },

    // T = 33,000 ms (Triple Launch)
    { left: '15%', color: '#33FF8C', explosionType: 'random-burst', size: 'medium', launchTime: 33000 },
    { left: '50%', color: '#FFBD33', explosionType: 'star', size: 'small', launchTime: 33400 },
    { left: '85%', color: '#3375FF', explosionType: 'double-spiral', size: 'large', launchTime: 33800 },

    // T = 36,000 ms (Pair Launch)
    { left: '20%', color: '#FF33EC', explosionType: 'wave', size: 'medium', launchTime: 36000 },
    { left: '80%', color: '#33D4FF', explosionType: 'flurry', size: 'small', launchTime: 36400 },

    // T = 39,000 ms (Triple Launch)
    { left: '25%', color: '#FF5733', explosionType: 'spiral', size: 'large', launchTime: 39000 },
    { left: '55%', color: '#FFC300', explosionType: 'random-burst', size: 'medium', launchTime: 39400 },
    { left: '75%', color: '#DAF7A6', explosionType: 'flower', size: 'small', launchTime: 39800 },

    // T = 42,000 ms (Pair Launch)
    { left: '10%', color: '#33FF57', explosionType: 'ring-of-rings', size: 'large', launchTime: 42000 },
    { left: '90%', color: '#33FFF5', explosionType: 'triple-star', size: 'large', launchTime: 42400 },

    // T = 45,000 ms (Triple Launch)
    { left: '20%', color: '#3357FF', explosionType: 'swirl', size: 'medium', launchTime: 45000 },
    { left: '50%', color: '#8E44AD', explosionType: 'double-spiral', size: 'large', launchTime: 45400 },
    { left: '80%', color: '#FF33A8', explosionType: 'heart', size: 'small', launchTime: 45800 },

    // T = 48,000 ms (Pair Launch)
    { left: '30%', color: '#FF8C33', explosionType: 'flower', size: 'medium', launchTime: 48000 },
    { left: '70%', color: '#33FFBD', explosionType: 'wave', size: 'large', launchTime: 48400 },

    // T = 51,000 ms (Triple Launch)
    { left: '15%', color: '#FF3333', explosionType: 'circle', size: 'large', launchTime: 51000 },
    { left: '45%', color: '#FF33F6', explosionType: 'star', size: 'medium', launchTime: 51400 },
    { left: '75%', color: '#33FF8C', explosionType: 'double-spiral', size: 'small', launchTime: 51800 },

    // T = 54,000 ms (Pair Launch)
    { left: '25%', color: '#FFBD33', explosionType: 'flurry', size: 'medium', launchTime: 54000 },
    { left: '85%', color: '#3375FF', explosionType: 'spiral', size: 'large', launchTime: 54400 },

    // T = 57,000 ms (Triple Launch)
    { left: '20%', color: '#FF33EC', explosionType: 'heart', size: 'medium', launchTime: 57000 },
    { left: '50%', color: '#33D4FF', explosionType: 'swirl', size: 'large', launchTime: 57400 },
    { left: '80%', color: '#FF5733', explosionType: 'triple-star', size: 'small', launchTime: 57800 },

    // T = 60,000 ms (Quad Launch)
    { left: '10%', color: '#FFC300', explosionType: 'ring-of-rings', size: 'large', launchTime: 60000 },
    { left: '30%', color: '#DAF7A6', explosionType: 'flurry', size: 'medium', launchTime: 60400 },
    { left: '50%', color: '#33FF57', explosionType: 'heart', size: 'large', launchTime: 60800 },
    { left: '70%', color: '#33FFF5', explosionType: 'spiral', size: 'large', launchTime: 61200 },

    // T = 63,000 ms (Grand Finale Begins)
    { left: '15%', color: '#3357FF', explosionType: 'random-burst', size: 'large', launchTime: 63000 },
    { left: '25%', color: '#8E44AD', explosionType: 'ring-of-rings', size: 'large', launchTime: 63400 },
    { left: '40%', color: '#FF33A8', explosionType: 'triple-star', size: 'large', launchTime: 63800 },
    { left: '55%', color: '#FF8C33', explosionType: 'heart', size: 'large', launchTime: 64200 },
    { left: '70%', color: '#33FFBD', explosionType: 'double-spiral', size: 'large', launchTime: 64600 },
    { left: '85%', color: '#33FF57', explosionType: 'star', size: 'large', launchTime: 65000 },
    { left: '95%', color: '#33FFF5', explosionType: 'flurry', size: 'large', launchTime: 65400 },
    
    // T = 66,000 ms (Finale Continuation)
    { left: '5%', color: '#FF5733', explosionType: 'galaxy', size: 'large', launchTime: 66000 },
    { left: '20%', color: '#FFC300', explosionType: 'flower', size: 'large', launchTime: 66400 },
    { left: '40%', color: '#DAF7A6', explosionType: 'ring-of-rings', size: 'large', launchTime: 66800 },
    { left: '60%', color: '#33FF57', explosionType: 'triple-star', size: 'large', launchTime: 67200 },
    { left: '80%', color: '#33FFF5', explosionType: 'swirl', size: 'large', launchTime: 67600 },
    { left: '95%', color: '#3357FF', explosionType: 'double-spiral', size: 'large', launchTime: 68000 },
    
    // T = 69,000 ms (Ultimate Grand Finale)
    { left: '5%', color: '#8E44AD', explosionType: 'galaxy', size: 'large', launchTime: 69000 },
    { left: '25%', color: '#FF33A8', explosionType: 'heart', size: 'large', launchTime: 69400 },
    { left: '45%', color: '#FF8C33', explosionType: 'ring-of-rings', size: 'large', launchTime: 69800 },
    { left: '65%', color: '#33FFBD', explosionType: 'triple-star', size: 'large', launchTime: 70200 },
    { left: '85%', color: '#FF5733', explosionType: 'swirl', size: 'large', launchTime: 70600 },
    { left: '95%', color: '#FFC300', explosionType: 'double-spiral', size: 'large', launchTime: 71000 },
];

/* =========================================
      "RANDOM FIREWORKS" (SILENT)
========================================= */

let randomFireworksInterval;

function startRandomFireworks() {
  // Create interval so that every few seconds we launch a silent rocket
  randomFireworksInterval = setInterval(() => {
    launchRocketSilent();
  }, 2000);
}

// Launch a rocket with random parameters, *no sound*
function launchRocketSilent() {
  const container = document.getElementById('fireworks-container');

  // random left between 10% and 90%
  const leftVal = Math.floor(Math.random() * 80) + 10; 
  // pick a color
  const colors = ['#FF4C4C','#FFD24C','#4CFF4C','#4C4CFF','#FF4CFF','#FFFFFF','#00FFFF','#FFA500'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  // random pattern
  const patterns = ['circle','star','swirl','double-spiral','flower','random-burst'];
  const explosionType = patterns[Math.floor(Math.random() * patterns.length)];
  // random size
  const sizes = ['small','medium','large'];
  const size = sizes[Math.floor(Math.random() * sizes.length)];

  // Create rocket element
  const rocketEl = document.createElement('div');
  rocketEl.className = 'firework-rocket';
  rocketEl.style.left = leftVal + '%';

  const rocketInner = document.createElement('div');
  rocketInner.className = 'firework-rocket-inner';
  rocketInner.style.backgroundColor = color;
  rocketEl.appendChild(rocketInner);
  container.appendChild(rocketEl);

  // random apex between 30vh and 60vh
  const apex = 30 + Math.random() * 30;
  // random travel time
  const travelTime = 1000 + Math.random() * 800;

  rocketEl.animate(
    [
      { transform: 'translate(-50%, 0)' },
      { transform: `translate(-50%, -${apex}vh)` },
    ],
    {
      duration: travelTime,
      easing: 'ease-out',
      fill: 'forwards',
    }
  );

  // Create a trail of sparks behind the rocket
  const trailInterval = setInterval(() => {
    createSpark(container, rocketEl, color);
  }, 60);

  // When rocket reaches apex, explode (SILENT)
  setTimeout(() => {
    clearInterval(trailInterval);
    explodeSilent(container, rocketEl, color, explosionType, size);
  }, travelTime);
}

function explodeSilent(container, rocketEl, color, explosionType, size) {
  const rect = rocketEl.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  rocketEl.remove();

  // No sound here for the silent version

  const pattern = getExplosionPattern(explosionType);
  let fragmentCount = 40;
  if (size === 'small') fragmentCount = 25;
  if (size === 'large') fragmentCount = 60;
  // (medium default is 40)

  for (let i = 0; i < fragmentCount; i++) {
    const angle = pattern.angles && pattern.angles.length
      ? pattern.angles[i % pattern.angles.length]
      : Math.random() * 2 * Math.PI;

    const magnitude = pattern.magnitude && pattern.magnitude.length
      ? pattern.magnitude[i % pattern.magnitude.length]
      : 1;

    createFragment(container, centerX, centerY, color, angle, size, magnitude);
  }
}

/* =========================================
     MAIN FIREWORK SHOW (WITH SOUND)
========================================= */

function startMainFireworkShow() {
  // Remove the random fireworks
  clearInterval(randomFireworksInterval);

  // We'll re-use the same container
  const container = document.getElementById('fireworks-container');

  // For each item in fireworksData, schedule a rocket (with sound)
  fireworksData.forEach((data) => {
    setTimeout(async () => {
      // 1) Fire stage sound
      await playFireStageSound(data.size);
      launchRocketWithSound(container, data);
    }, data.launchTime);
  });

  // Find the max launch time from the data:
  const maxLaunchTime = Math.max(...fireworksData.map((d) => d.launchTime));
  // We'll add an extra 4s for the finale
  const finaleTime = maxLaunchTime + 4000;

  // Launch grand finale rocket
  setTimeout(async () => {
    await playFireStageSound('ultra');
    launchGrandFinaleRocket(container);
  }, finaleTime);
}

/* =========================================
         CORE ROCKET + EXPLOSION
========================================= */

function launchRocketWithSound(container, { left, color, explosionType, size }) {
  const rocketEl = document.createElement('div');
  rocketEl.className = 'firework-rocket';
  rocketEl.style.left = left;

  const rocketInner = document.createElement('div');
  rocketInner.className = 'firework-rocket-inner';
  rocketInner.style.backgroundColor = color;
  rocketEl.appendChild(rocketInner);
  container.appendChild(rocketEl);

  // random apex
  const apex = 40 + Math.random() * 40;
  const travelTime = 1500 + Math.random() * 500;

  rocketEl.animate(
    [
      { transform: 'translate(-50%, 0)' },
      { transform: `translate(-50%, -${apex}vh)` },
    ],
    {
      duration: travelTime,
      easing: 'ease-out',
      fill: 'forwards',
    }
  );

  // Create a trail
  const trailInterval = setInterval(() => {
    createSpark(container, rocketEl, color);
  }, 60);

  // explode
  setTimeout(() => {
    clearInterval(trailInterval);
    explodeWithSound(container, rocketEl, color, explosionType, size);
  }, travelTime);
}

function explodeWithSound(container, rocketEl, color, explosionType, size) {
  const rect = rocketEl.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  rocketEl.remove();

  // Explosion sound
  playExplosionSound(size);

  const pattern = getExplosionPattern(explosionType);
  let fragmentCount = 50;
  if (size === 'small') fragmentCount = 30;
  if (size === 'large') fragmentCount = 80;
  if (size === 'ultra') fragmentCount = 120;
  // (medium default is 50)

  for (let i = 0; i < fragmentCount; i++) {
    const angle = pattern.angles && pattern.angles.length
      ? pattern.angles[i % pattern.angles.length]
      : Math.random() * 2 * Math.PI;

    const magnitude = pattern.magnitude && pattern.magnitude.length
      ? pattern.magnitude[i % pattern.magnitude.length]
      : 1;

    createFragment(container, centerX, centerY, color, angle, size, magnitude);
  }
}

/* ==================
    GRAND FINALE
================== */

function launchGrandFinaleRocket(container) {
  const left = '50%';
  const color = '#FFFFFF';

  const rocketEl = document.createElement('div');
  rocketEl.className = 'firework-rocket';
  rocketEl.style.left = left;

  const rocketInner = document.createElement('div');
  rocketInner.className = 'firework-rocket-inner';
  rocketInner.style.backgroundColor = color;
  rocketEl.appendChild(rocketInner);
  container.appendChild(rocketEl);

  // slight arc
  const driftX = (Math.random() - 0.5) * 40;
  const travelTime = 2200;
  rocketEl.animate(
    [
      { offset: 0,   transform: 'translate(-50%, 0)' },
      { offset: 0.3, transform: `translate(calc(-50% + ${driftX/2}px), -20vh)` },
      { offset: 0.6, transform: `translate(calc(-50% + ${driftX}px), -45vh)` },
      { offset: 1,   transform: 'translate(-50%, -70vh)' },
    ],
    {
      duration: travelTime,
      easing: 'cubic-bezier(0.25, 0.45, 0.45, 0.95)',
      fill: 'forwards',
    }
  );

  const trailInterval = setInterval(() => {
    createSpark(container, rocketEl, color);
  }, 60);

  setTimeout(() => {
    clearInterval(trailInterval);
    bigSlowExplosion(container, rocketEl);
  }, travelTime);
}

function bigSlowExplosion(container, rocketEl) {
  const rect = rocketEl.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  rocketEl.remove();

  // Big "ultra" sound
  playExplosionSound('ultra');

  const fragmentCount = 500;
  for (let i = 0; i < fragmentCount; i++) {
    const angle = Math.random() * 2 * Math.PI;
    const radius = 300 + Math.random() * 400; // large spread
    const rainDistance = 700 + Math.random() * 500; // how far they fall
    const targetX = Math.cos(angle) * radius;
    const targetY = Math.sin(angle) * radius;

    const fragment = document.createElement('div');
    fragment.className = 'firework-fragment';
    fragment.style.backgroundColor = '#FFFFFF';
    fragment.style.left = `${centerX}px`;
    fragment.style.top = `${centerY}px`;
    fragment.style.width = '3px';
    fragment.style.height = '3px';
    fragment.style.borderRadius = '50%';
    container.appendChild(fragment);

    const animDuration = 12000 + Math.random() * 6000;

    fragment.animate(
      [
        {
          offset: 0,
          transform: `translate(0,0) scale(0)`,
          opacity: 0,
        },
        {
          offset: 0.1,
          transform: `translate(${targetX * 0.8}px, ${targetY * 0.8}px) scale(2)`,
          opacity: 1,
        },
        {
          offset: 0.2,
          transform: `translate(${targetX}px, ${targetY}px) scale(1.7)`,
          opacity: 1,
        },
        {
          offset: 0.35,
          transform: `translate(${targetX}px, ${targetY + rainDistance * 0.1}px) scale(1.3)`,
          opacity: 0.95,
        },
        {
          offset: 0.5,
          transform: `translate(${targetX}px, ${targetY + rainDistance * 0.3}px) scale(1.1)`,
          opacity: 0.8,
        },
        {
          offset: 0.65,
          transform: `translate(${targetX}px, ${targetY + rainDistance * 0.55}px) scale(0.9)`,
          opacity: 0.6,
        },
        {
          offset: 0.8,
          transform: `translate(${targetX}px, ${targetY + rainDistance * 0.8}px) scale(0.8)`,
          opacity: 0.3,
        },
        {
          offset: 1,
          transform: `translate(${targetX}px, ${targetY + rainDistance}px) scale(0.6)`,
          opacity: 0,
        },
      ],
      {
        duration: animDuration,
        easing: 'cubic-bezier(0.25, 0.5, 0.25, 1)',
        fill: 'forwards',
      }
    );

    setTimeout(() => {
      fragment.remove();
    }, animDuration + 500);
  }
}

/* =========================================
 SHARED HELPERS (spark, fragment, patterns)
========================================= */

function createSpark(container, rocketEl, color) {
  const rect = rocketEl.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const spark = document.createElement('div');
  spark.className = 'firework-spark';
  spark.style.backgroundColor = color;
  spark.style.left = `${centerX}px`;
  spark.style.top = `${centerY}px`;
  container.appendChild(spark);

  spark.animate(
    [
      { transform: 'translate(0,0)', opacity: 1 },
      { transform: 'translate(0, 15px)', opacity: 0 },
    ],
    {
      duration: 500,
      easing: 'ease-out',
      fill: 'forwards',
    }
  );

  setTimeout(() => {
    spark.remove();
  }, 600);
}

function createFragment(container, x, y, color, angle, size, magnitude) {
  const fragment = document.createElement('div');
  fragment.className = 'firework-fragment';
  fragment.style.backgroundColor = color;
  fragment.style.left = `${x}px`;
  fragment.style.top = `${y}px`;
  container.appendChild(fragment);

  // Speed based on size
  const baseVelocity = size === 'small' ? 2 : size === 'large' ? 4 : 3;
  const velocity = baseVelocity * magnitude;
  const offsetX = Math.cos(angle) * velocity * 100;
  const offsetY = Math.sin(angle) * velocity * 100;
  const duration = 2000 + Math.random() * 800;

  fragment.animate(
    [
      { transform: 'translate(0,0) scale(1)', opacity: 1 },
      { transform: `translate(${offsetX}px, ${offsetY}px) scale(0.3)`, opacity: 0 },
    ],
    {
      duration,
      easing: 'ease-out',
      fill: 'forwards',
    }
  );

  setTimeout(() => {
    fragment.remove();
  }, duration + 100);
}

function getExplosionPattern(type) {
  // Original "circle" pattern
  if (type === 'circle') {
    const angles = Array.from({ length: 30 }, (_, i) => (i / 30) * 2 * Math.PI)
    return { angles }
  }

  // Original "star" pattern
  if (type === 'star') {
    const angles = []
    for (let i = 0; i < 15; i++) {
      angles.push((i / 15) * 2 * Math.PI)
      angles.push(((i + 0.2) / 15) * 2 * Math.PI)
    }
    return { angles }
  }

  if (type === 'double-spiral') {
    // Two interwoven spirals
    const angles = []
    for (let i = 0; i < 40; i++) {
      angles.push((i / 10) * Math.PI)
    }
    const magnitude = angles.map((val, idx) => (idx % 2 === 0 ? 1 : 2))
    return { angles, magnitude }
  }

  if (type === 'cross') {
    // Shots at 0°, 90°, 180°, 270°
    const angles = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2]
    // Duplicate multiple times
    const repeated = []
    const repeats = 10
    for (let r = 0; r < repeats; r++) {
      repeated.push(...angles)
    }
    return { angles: repeated }
  }

  if (type === 'swirl') {
    // Spiral swirl
    const angles = []
    for (let i = 0; i < 60; i++) {
      angles.push(i * 0.2)
    }
    const magnitude = angles.map((_, i) => 0.5 + i * 0.05)
    return { angles, magnitude }
  }

  if (type === 'flower') {
    // Petal-like
    const angles = []
    const magnitude = []
    for (let i = 0; i < 36; i++) {
      angles.push((2 * Math.PI * i) / 36)
      magnitude.push(i % 2 === 0 ? 1.2 : 0.7)
    }
    return { angles, magnitude }
  }

  if (type === 'heart') {
    // Heart shape approximation
    const angles = []
    for (let i = 0; i < 50; i++) {
      const t = (i / 25) * Math.PI
      angles.push(t)
    }
    const magnitude = angles.map(() => 1 + Math.random() * 1)
    return { angles, magnitude }
  }

  if (type === 'ring-of-rings') {
    // Concentric circles
    const angles = []
    const magnitude = []
    for (let ring = 1; ring <= 3; ring++) {
      for (let i = 0; i < 20; i++) {
        angles.push((2 * Math.PI * i) / 20)
        magnitude.push(ring)
      }
    }
    return { angles, magnitude }
  }

  if (type === 'diamond') {
    // Diamond-like pattern
    const baseAngles = [Math.PI / 4, (3 * Math.PI) / 4, (5 * Math.PI) / 4, (7 * Math.PI) / 4]
    const angles = []
    for (let i = 0; i < 10; i++) {
      angles.push(...baseAngles)
    }
    return { angles }
  }

  if (type === 'hexagon') {
    // 6 main angles repeated
    const angles = []
    const baseAngles = [0, Math.PI / 3, (2 * Math.PI) / 3, Math.PI, (4 * Math.PI) / 3, (5 * Math.PI) / 3]
    for (let i = 0; i < 10; i++) {
      angles.push(...baseAngles)
    }
    return { angles }
  }

  if (type === 'spiral') {
    // One continuous spiral
    const angles = []
    for (let i = 0; i < 50; i++) {
      angles.push(i * 0.3)
    }
    const magnitude = angles.map((_, i) => 0.4 + i * 0.1)
    return { angles, magnitude }
  }

  if (type === 'flurry') {
    // Random bursts with slight grouping
    const angles = Array.from({ length: 60 }, () => Math.random() * 2 * Math.PI)
    const magnitude = angles.map(() => 0.5 + Math.random() * 1.5)
    return { angles, magnitude }
  }

  if (type === 'triple-star') {
    // 3 star patterns combined
    const angles = []
    for (let s = 0; s < 3; s++) {
      for (let i = 0; i < 15; i++) {
        angles.push((i / 15) * 2 * Math.PI)
        angles.push(((i + 0.2) / 15) * 2 * Math.PI)
      }
    }
    return { angles }
  }

  if (type === 'random-burst') {
    // 50 random angles + random magnitudes
    const angles = Array.from({ length: 50 }, () => Math.random() * 2 * Math.PI)
    const magnitude = Array.from({ length: 50 }, () => 0.5 + Math.random() * 2)
    return { angles, magnitude }
  }

  if (type === 'wave') {
    // Sine wave distribution of angles
    const angles = []
    const magnitude = []
    for (let i = 0; i < 40; i++) {
      const a = (i / 40) * 2 * Math.PI
      angles.push(a)
      magnitude.push(1 + Math.sin(a * 4))
    }
    return { angles, magnitude }
  }

  // Default random scatter
  const angles = Array.from({ length: 30 }, () => Math.random() * 2 * Math.PI);
  const magnitude = Array.from({ length: 30 }, () => 0.5 + Math.random() * 1.5);
  return { angles, magnitude };
}

/* ====================
    AUDIO: TONE.JS
==================== */

async function playFireStageSound(size) {
  if (Tone.context.state !== 'running') {
    await Tone.start();
  }

  const now = Tone.now();

  // Brown noise (brief rumble)
  const noiseFilter = new Tone.Filter({
    frequency: 80,
    type: 'lowpass',
    rolloff: -12,
  }).toDestination();

  const fireNoise = new Tone.NoiseSynth({
    volume: 20,
    noise: { type: 'brown' },
    envelope: {
      attack: 0.05,
      decay: 0.7,
      sustain: 0.0,
      release: 0.3,
    },
  }).connect(noiseFilter);

  fireNoise.triggerAttackRelease(1, now);

  // Sub oscillator
  const subOsc = new Tone.Oscillator({
    type: 'sine',
    frequency: 60,
    volume: -5,
  });
  const subEnv = new Tone.AmplitudeEnvelope({
    attack: 0.0,
    decay: 0.4,
    sustain: 0.0,
    release: 0.3,
  }).toDestination();

  subOsc.connect(subEnv);
  subOsc.start(now);

  // Adjust for size
  if (size === 'small') {
    subOsc.volume.value = -10;
    subOsc.frequency.setValueAtTime(55, now);
  } else if (size === 'medium') {
    subOsc.volume.value = -5; // original
    subOsc.frequency.setValueAtTime(60, now);
  } else if (size === 'large') {
    subOsc.volume.value = -2;
    subOsc.frequency.setValueAtTime(65, now);
  } else if (size === 'ultra') {
    subOsc.volume.value = 0;
    subOsc.frequency.setValueAtTime(70, now);
  }

  subOsc.frequency.linearRampToValueAtTime(20, now + 0.4);
  subEnv.triggerAttackRelease(1.2, now);
  subOsc.stop(now + 1.2);

  setTimeout(() => {
    fireNoise.dispose();
    noiseFilter.dispose();
    subOsc.dispose();
    subEnv.dispose();
  }, 2000);
}

async function playExplosionSound(size) {
  if (Tone.context.state !== 'running') {
    await Tone.start();
  }

  const now = Tone.now();

  // Reverb
  const mainReverb = new Tone.Reverb({
    decay: 1.8,
    wet: 0.4,
  }).toDestination();

  const subReverb = new Tone.Reverb({
    decay: 2.5,
    wet: 0.5,
  }).toDestination();

  // “Crack” noise
  const explodeSynth = new Tone.NoiseSynth({
    volume: -10,
    noise: { type: 'white' },
    envelope: {
      attack: 0.0,
      decay: 0.3,
      sustain: 0.0,
      release: 0.2,
    },
  }).connect(mainReverb);

  explodeSynth.triggerAttackRelease(0.5, now);

  // Sub-Bass “BOOM”
  const subDistortion = new Tone.Distortion({
    distortion: 0.2,
    wet: 0.5,
  });

  const subOsc = new Tone.Oscillator({
    type: 'sine',
    frequency: 100,
    volume: -6,
  });

  const subEnv = new Tone.AmplitudeEnvelope({
    attack: 0.0,
    decay: 0.5,
    sustain: 0.2,
    release: 1.5,
  });

  subOsc.connect(subDistortion);
  subDistortion.connect(subEnv);
  subEnv.connect(subReverb);

  subOsc.start(now);

  // Adjust for size
  if (size === 'small') {
    subOsc.volume.value = -12;
    subOsc.frequency.setValueAtTime(90, now);
  } else if (size === 'medium') {
    subOsc.volume.value = -6;
    subOsc.frequency.setValueAtTime(100, now);
  } else if (size === 'large') {
    subOsc.volume.value = -3;
    subOsc.frequency.setValueAtTime(110, now);
  } else if (size === 'ultra') {
    subOsc.volume.value = 0;
    subOsc.frequency.setValueAtTime(120, now);
  }

  subOsc.frequency.linearRampToValueAtTime(30, now + 0.3);
  subEnv.triggerAttackRelease(1.8, now);
  subOsc.stop(now + 2.0);

  // Sparkle
  const sparkleFilter = new Tone.Filter({
    frequency: 8000,
    type: 'highpass',
  }).connect(mainReverb);

  const sparkleSynth = new Tone.NoiseSynth({
    volume: -20,
    noise: { type: 'white' },
    envelope: {
      attack: 0.0,
      decay: 0.2,
      sustain: 0.0,
      release: 0.2,
    },
  }).connect(sparkleFilter);

  sparkleSynth.triggerAttackRelease(0.3, now + 0.1);

  setTimeout(() => {
    explodeSynth.dispose();
    sparkleSynth.dispose();
    subDistortion.dispose();
    subOsc.dispose();
    subEnv.dispose();
    mainReverb.dispose();
    subReverb.dispose();
  }, 3000);
}

/* =========================================
    8) PAGE LOAD + BUTTON CLICK
   ========================================= */
window.addEventListener('DOMContentLoaded', () => {
  // 1) Start silent fireworks
  startRandomFireworks();

  // 2) On button click, hide button + start main show
  const btn = document.getElementById('startFireworksBtn');
  btn.addEventListener('click', () => {
    btn.style.display = 'none'; // hide
    startMainFireworkShow();
  });
});

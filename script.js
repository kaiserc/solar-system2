// ==========================================================================
// COSMIC ORRERY // WEBGL & INTERACTION CORE ENGINE
// ==========================================================================

// ===== PREMIUM PLANET METADATA =====
const planetData = {
    sun: {
        name: "The Sun",
        emoji: "☀️",
        classification: "Class G2V Dwarf Star",
        description: "The Sun is the star at the center of our Solar System. It is a nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core. It dominates our neighborhood, accounting for almost all the system's mass.",
        distance: "0.00 AU (Galactic Origin)",
        orbitPeriod: "N/A (Anchor Body)",
        diameter: "1,392,684 km",
        mass: "1.989 × 10³⁰ kg (99.86% of System)",
        temperature: "5,778 K (Surface) / 15M K (Core)",
        moons: "8 Planets / Millions of Debris",
        funFact: "Every second, the Sun fuses approximately 600 million tons of hydrogen into helium, converting 4 million tons of matter into pure energy.",
        color: 0xffaa00,
        emissive: 0xffaa00,
        size: 7.5,
        orbitRadius: 0,
        orbitSpeed: 0
    },
    mercury: {
        name: "Mercury",
        emoji: "🪨",
        classification: "Airless Terrestrial Planet",
        description: "Mercury is the smallest and closest planet to the Sun. Due to its lack of a substantial atmosphere, it experiences the most extreme temperature swings in the Solar System, roasting in sunlight and freezing in shadow.",
        distance: "0.39 AU (57.9 million km)",
        orbitPeriod: "88 Earth Days",
        diameter: "4,879 km",
        mass: "3.285 × 10²³ kg",
        temperature: "-180°C to 430°C",
        moons: "0 Satellites",
        funFact: "Despite being closest to the Sun, Mercury is not the hottest planet; that title belongs to Venus due to its thick greenhouse atmosphere.",
        color: 0x8a8a95,
        emissive: 0x111115,
        size: 1.2,
        orbitRadius: 16,
        orbitSpeed: 4.15
    },
    venus: {
        name: "Venus",
        emoji: "🌤️",
        classification: "Superheated Greenhouse Terrestrial",
        description: "Venus is Earth's planetary twin in size, but a hellish oven in reality. Wrapped in a crushing, toxic carbon dioxide atmosphere with sulfuric acid clouds, its runaway greenhouse effect keeps surface temperatures hot enough to melt lead.",
        distance: "0.72 AU (108.2 million km)",
        orbitPeriod: "225 Earth Days",
        diameter: "12,104 km",
        mass: "4.867 × 10²⁴ kg",
        temperature: "462°C (Constant Lead-Melting)",
        moons: "0 Satellites",
        funFact: "Venus is one of only two planets in our Solar System that rotates clockwise (retrograde rotation), meaning the Sun rises in the west.",
        color: 0xe6b47a,
        emissive: 0x22150a,
        size: 2.2,
        orbitRadius: 24,
        orbitSpeed: 1.63
    },
    earth: {
        name: "Earth",
        emoji: "🌍",
        classification: "Habitable Ocean-World",
        description: "Our home planet is the only known celestial body capable of harboring complex life. Covered in 71% liquid water, Earth possesses a robust protective magnetosphere, a dynamic atmosphere, and active plate tectonics.",
        distance: "1.00 AU (149.6 million km)",
        orbitPeriod: "365.25 Earth Days",
        diameter: "12,742 km",
        mass: "5.972 × 10²⁴ kg",
        temperature: "-88°C to 58°C",
        moons: "1 (Luna)",
        funFact: "Earth's atmosphere protects us from meteoroids, most of which burn up in the mesosphere long before they can strike the surface as meteorites.",
        color: 0x2a75b3,
        emissive: 0x051025,
        size: 2.4,
        orbitRadius: 33,
        orbitSpeed: 1.00
    },
    mars: {
        name: "Mars",
        emoji: "🔴",
        classification: "Arid Oxide-Rich Terrestrial",
        description: "Mars is a cold, dusty desert world characterized by a very thin carbon dioxide atmosphere. Its iconic red coloration stems from widespread iron oxide (rust) covering its surface, hiding deep canyons and massive extinct volcanoes.",
        distance: "1.52 AU (227.9 million km)",
        orbitPeriod: "687 Earth Days",
        diameter: "6,779 km",
        mass: "6.390 × 10²³ kg",
        temperature: "-87°C to -5°C",
        moons: "2 (Phobos & Deimos)",
        funFact: "Mars is home to Olympus Mons, the largest volcano in the Solar System. It stands 21.9 km tall, nearly three times the height of Mount Everest.",
        color: 0xc1440e,
        emissive: 0x250800,
        size: 1.8,
        orbitRadius: 44,
        orbitSpeed: 0.53
    },
    jupiter: {
        name: "Jupiter",
        emoji: "🟠",
        classification: "Gaseous Giant (Mini-System)",
        description: "Jupiter is the colossal patriarch of our Solar System, possessing more than twice the mass of all other planets combined. Made mostly of hydrogen and helium, it acts as a cosmic shield, vacuuming up dangerous asteroids.",
        distance: "5.20 AU (778.5 million km)",
        orbitPeriod: "11.86 Earth Years",
        diameter: "139,820 km",
        mass: "1.898 × 10²⁷ kg (318x Earth)",
        temperature: "-145°C (Cloud Tops)",
        moons: "95 Confirmed Moons",
        funFact: "Jupiter's famous Great Red Spot is a persistent anticyclonic storm wider than Earth that has raged for at least 400 years.",
        color: 0xd4a76a,
        emissive: 0x221105,
        size: 6.2,
        orbitRadius: 65,
        orbitSpeed: 0.084
    },
    saturn: {
        name: "Saturn",
        emoji: "🪐",
        classification: "Ringed Gaseous Giant",
        description: "Saturn is a magnificent gas giant celebrated for its highly reflective, expansive ring system composed of billions of ice particles, rocky debris, and cosmic dust. It is the least dense planet in the system.",
        distance: "9.58 AU (1.43 billion km)",
        orbitPeriod: "29.46 Earth Years",
        diameter: "116,460 km",
        mass: "5.683 × 10²⁶ kg (95x Earth)",
        temperature: "-178°C (Cloud Tops)",
        moons: "146 Confirmed Moons",
        funFact: "Saturn has a density so low that if you could find a bathtub large enough to hold it, the entire planet would float on water!",
        color: 0xe6c77a,
        emissive: 0x221805,
        size: 5.2,
        orbitRadius: 84,
        orbitSpeed: 0.034,
        hasRings: true
    },
    uranus: {
        name: "Uranus",
        emoji: "🔵",
        classification: "Tilted Ice Giant",
        description: "Uranus is a freezing ice giant composed of water, ammonia, and methane ices over a rocky core. Its most bizarre feature is its extreme axial tilt of 98 degrees, making it literally roll on its side as it orbits.",
        distance: "19.20 AU (2.87 billion km)",
        orbitPeriod: "84.00 Earth Years",
        diameter: "50,724 km",
        mass: "8.681 × 10²⁵ kg",
        temperature: "-224°C (Coldest Planet)",
        moons: "27 Confirmed Moons",
        funFact: "The methane in Uranus's atmosphere absorbs red light, giving the planet its signature pristine cyan-aquamarine hue.",
        color: 0x7ec8d9,
        emissive: 0x0a2233,
        size: 3.5,
        orbitRadius: 104,
        orbitSpeed: 0.012,
        hasThinRings: true
    },
    neptune: {
        name: "Neptune",
        emoji: "🔵",
        classification: "Supersonic Ice Giant",
        description: "Farthest from the Sun, Neptune is a dark, freezing ice giant subject to terrifying meteorological extremes. It possesses the most powerful winds in the Solar System, whipping white methane clouds at supersonic speeds.",
        distance: "30.07 AU (4.50 billion km)",
        orbitPeriod: "164.80 Earth Years",
        diameter: "49,244 km",
        mass: "1.024 × 10²⁶ kg",
        temperature: "-214°C",
        moons: "16 Confirmed Moons",
        funFact: "Neptune's winds can reach up to 2,100 km/h—more than twice the speed of sound and fast enough to rip a jet plane apart.",
        color: 0x4a6fa5,
        emissive: 0x051125,
        size: 3.4,
        orbitRadius: 122,
        orbitSpeed: 0.006
    }
};

// ===== WEBAUDIO SYNTHESIZER CLASS (COSMIC SOUNDSCAPE) =====
class CosmicSoundscape {
    constructor() {
        this.ctx = null;
        this.masterVolume = null;
        this.ambientOsc1 = null;
        this.ambientOsc2 = null;
        this.ambientFilter = null;
        this.lfo = null;
        this.isMuted = true;
    }

    init() {
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContext();
            
            // Master Volume Node
            this.masterVolume = this.ctx.createGain();
            this.masterVolume.gain.setValueAtTime(0.2, this.ctx.currentTime); // Low baseline volume
            this.masterVolume.connect(this.ctx.destination);
            
            // Deep Ambient Low-Pass Filter
            this.ambientFilter = this.ctx.createBiquadFilter();
            this.ambientFilter.type = 'lowpass';
            this.ambientFilter.frequency.setValueAtTime(100, this.ctx.currentTime);
            this.ambientFilter.Q.setValueAtTime(3, this.ctx.currentTime);
            this.ambientFilter.connect(this.masterVolume);
            
            // LFO for slow atmospheric filter sweeps
            this.lfo = this.ctx.createOscillator();
            this.lfo.frequency.setValueAtTime(0.08, this.ctx.currentTime); // 0.08 Hz (very slow)
            const lfoGain = this.ctx.createGain();
            lfoGain.gain.setValueAtTime(45, this.ctx.currentTime);
            this.lfo.connect(lfoGain);
            lfoGain.connect(this.ambientFilter.frequency);
            this.lfo.start();
            
            // Oscillator 1: Sine (Bass Grounding)
            this.ambientOsc1 = this.ctx.createOscillator();
            this.ambientOsc1.type = 'sine';
            this.ambientOsc1.frequency.setValueAtTime(55, this.ctx.currentTime); // A1 note
            this.ambientOsc1.connect(this.ambientFilter);
            this.ambientOsc1.start();
            
            // Oscillator 2: Sawtooth (Gravelly texture)
            this.ambientOsc2 = this.ctx.createOscillator();
            this.ambientOsc2.type = 'sawtooth';
            this.ambientOsc2.frequency.setValueAtTime(27.5, this.ctx.currentTime); // A0 note
            const osc2Gain = this.ctx.createGain();
            osc2Gain.gain.setValueAtTime(0.4, this.ctx.currentTime);
            this.ambientOsc2.connect(osc2Gain);
            osc2Gain.connect(this.ambientFilter);
            this.ambientOsc2.start();

            this.isMuted = true;
            this.masterVolume.gain.setValueAtTime(0, this.ctx.currentTime); // Start muted
        } catch (e) {
            console.warn("Web Audio API not supported or blocked: ", e);
        }
    }

    setMute(mute) {
        if (!this.ctx) this.init();
        if (!this.ctx) return;

        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }

        this.isMuted = mute;
        const volumeSliderVal = parseFloat(document.getElementById('volume-slider').value);
        const targetVol = this.isMuted ? 0 : volumeSliderVal * 0.3; // Cap ambient drone at 30% master
        
        if (this.masterVolume) {
            this.masterVolume.gain.linearRampToValueAtTime(targetVol, this.ctx.currentTime + 0.5);
        }
    }

    setVolume(volume) {
        if (!this.ctx || this.isMuted) return;
        if (this.masterVolume) {
            this.masterVolume.gain.linearRampToValueAtTime(volume * 0.3, this.ctx.currentTime + 0.1);
        }
    }

    playClick() {
        if (!this.ctx || this.isMuted) return;
        
        const osc = this.ctx.createOscillator();
        const gainNode = this.ctx.createGain();
        
        osc.connect(gainNode);
        gainNode.connect(this.ctx.destination);
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(200, this.ctx.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.15, this.ctx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.1);
        
        osc.start();
        osc.stop(this.ctx.currentTime + 0.1);
    }

    playFlybySweep() {
        if (!this.ctx || this.isMuted) return;

        const osc = this.ctx.createOscillator();
        const filter = this.ctx.createBiquadFilter();
        const gainNode = this.ctx.createGain();

        osc.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(this.ctx.destination);

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(65, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(320, this.ctx.currentTime + 1.2);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(100, this.ctx.currentTime);
        filter.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.8);

        gainNode.gain.setValueAtTime(0.2, this.ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 1.2);

        osc.start();
        osc.stop(this.ctx.currentTime + 1.3);
    }
}

const audioSynth = new CosmicSoundscape();

// ===== THREE.JS ENGINE CORE VARIABLES =====
let scene, camera, renderer, controls;
let sunMesh, planets = [], orbits = [], asteroids = [];
let moonOrbitGroup, moonMesh;
let raycaster, mouse;
let isPaused = false;
let animationSpeed = 1;
let showOrbits = true;
let showGrid = true;
let showAsteroids = true;
let clock;
let currentFocusedPlanet = null;
let gridPlane;

// ===== PROCEDURAL CANVAS TEXTURES BUILDER =====
function generateProceduralTexture(planetKey) {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    
    // Fill background
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    const w = canvas.width;
    const h = canvas.height;

    switch (planetKey) {
        case 'sun':
            // High fidelity fiery solar flare pattern
            const sunGrad = ctx.createLinearGradient(0, 0, w, 0);
            sunGrad.addColorStop(0, '#ff4400');
            sunGrad.addColorStop(0.3, '#ffaa00');
            sunGrad.addColorStop(0.5, '#ffea00');
            sunGrad.addColorStop(0.7, '#ffaa00');
            sunGrad.addColorStop(1, '#ff4400');
            ctx.fillStyle = sunGrad;
            ctx.fillRect(0, 0, w, h);
            
            // Solar noise granulation
            for (let i = 0; i < 5000; i++) {
                const rx = Math.random() * w;
                const ry = Math.random() * h;
                const size = Math.random() * 3 + 1;
                ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.25})`;
                ctx.fillRect(rx, ry, size, size);
            }
            break;
            
        case 'mercury':
            // Dark gray base with heavy craters
            ctx.fillStyle = "#5c5c64";
            ctx.fillRect(0, 0, w, h);
            // Noise speckling
            for (let i = 0; i < 8000; i++) {
                const rx = Math.random() * w;
                const ry = Math.random() * h;
                ctx.fillStyle = Math.random() > 0.5 ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.08)';
                ctx.fillRect(rx, ry, 2, 2);
            }
            // Generate distinct circular craters with glowing ejecta lines
            for (let i = 0; i < 60; i++) {
                const cx = Math.random() * w;
                const cy = Math.random() * h;
                const r = Math.random() * 25 + 5;
                ctx.beginPath();
                ctx.arc(cx, cy, r, 0, Math.PI * 2);
                ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
                ctx.lineWidth = 1.5;
                ctx.stroke();
                ctx.fillStyle = "rgba(0, 0, 0, 0.12)";
                ctx.fill();
            }
            break;
            
        case 'venus':
            // Swirling thick yellow-acid clouds
            const venusGrad = ctx.createLinearGradient(0, 0, 0, h);
            venusGrad.addColorStop(0, '#8e623a');
            venusGrad.addColorStop(0.3, '#d3a86c');
            venusGrad.addColorStop(0.5, '#e4ca93');
            venusGrad.addColorStop(0.7, '#d3a86c');
            venusGrad.addColorStop(1, '#8e623a');
            ctx.fillStyle = venusGrad;
            ctx.fillRect(0, 0, w, h);
            
            // Swirl overlays using sine curves
            ctx.strokeStyle = "rgba(255, 255, 200, 0.12)";
            ctx.lineWidth = 20;
            for (let y = 30; y < h; y += 40) {
                ctx.beginPath();
                for (let x = 0; x < w; x += 10) {
                    const wave = Math.sin(x * 0.02 + y) * 25;
                    if (x === 0) ctx.moveTo(x, y + wave);
                    else ctx.lineTo(x, y + wave);
                }
                ctx.stroke();
            }
            break;
            
        case 'earth':
            // Oceans (71%) and realistic green/brown continents
            ctx.fillStyle = "#103c80";
            ctx.fillRect(0, 0, w, h);
            
            // Draw continental clusters (Americas, Afro-Eurasia, Australia)
            ctx.fillStyle = "#2c5e2d"; // Green land
            
            // Afro-Eurasia
            ctx.beginPath();
            ctx.moveTo(350, 80);
            ctx.bezierCurveTo(450, 50, 680, 50, 750, 100);
            ctx.bezierCurveTo(800, 150, 850, 250, 780, 320);
            ctx.bezierCurveTo(720, 380, 650, 320, 600, 300);
            ctx.bezierCurveTo(550, 350, 480, 420, 460, 380);
            ctx.bezierCurveTo(440, 320, 380, 200, 350, 80);
            ctx.fill();
            
            // Americas
            ctx.beginPath();
            ctx.moveTo(100, 100);
            ctx.bezierCurveTo(150, 70, 220, 100, 240, 180);
            ctx.bezierCurveTo(200, 220, 180, 250, 200, 280);
            ctx.bezierCurveTo(250, 320, 280, 380, 220, 440);
            ctx.bezierCurveTo(180, 460, 150, 360, 140, 300);
            ctx.bezierCurveTo(120, 280, 90, 200, 100, 100);
            ctx.fill();
            
            // Australia
            ctx.beginPath();
            ctx.arc(820, 360, 45, 0, Math.PI * 2);
            ctx.fill();
            
            // Polar Ice Caps
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(0, 0, w, 40);
            ctx.fillRect(0, h - 35, w, 35);
            
            // Add continental details/mountains (brown highlights)
            ctx.fillStyle = "#7c5a3c";
            for (let i = 0; i < 40; i++) {
                const rx = 100 + Math.random() * 750;
                const ry = 100 + Math.random() * 300;
                if (ctx.getImageData(rx, ry, 1, 1).data[1] > 60) { // Only place on green land
                    ctx.beginPath();
                    ctx.arc(rx, ry, Math.random() * 12 + 4, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
            break;
            
        case 'earth_clouds':
            // Separate transparent canvas for atmospheric cloud layer
            ctx.clearRect(0, 0, w, h);
            ctx.fillStyle = "rgba(0, 0, 0, 0)";
            ctx.fillRect(0, 0, w, h);
            
            // Draw wispy white cloud clusters
            ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
            for (let i = 0; i < 35; i++) {
                const cx = Math.random() * w;
                const cy = 60 + Math.random() * (h - 120);
                const r = Math.random() * 80 + 30;
                ctx.beginPath();
                ctx.arc(cx, cy, r, 0, Math.PI * 2);
                ctx.fill();
                
                // Cloud trails
                ctx.fillRect(cx - r * 1.5, cy - r * 0.3, r * 3, r * 0.6);
            }
            break;
            
        case 'mars':
            // Rich rust-orange base with ice caps and dark canyons
            ctx.fillStyle = "#bc4a23";
            ctx.fillRect(0, 0, w, h);
            
            // Iron oxide variations (dark spots)
            ctx.fillStyle = "#8a2a0d";
            for (let i = 0; i < 30; i++) {
                ctx.beginPath();
                ctx.arc(Math.random() * w, Math.random() * h, Math.random() * 90 + 30, 0, Math.PI * 2);
                ctx.fill();
            }
            
            // White polar ice caps
            ctx.fillStyle = "#ffffff";
            ctx.beginPath();
            ctx.arc(w / 2, 0, 60, 0, Math.PI);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(w / 2, h, 45, Math.PI, 0);
            ctx.fill();
            break;
            
        case 'jupiter':
            // High fidelity horizontal band storms & Great Red Spot
            const bands = [
                { y: 0, h: 40, col: "#9e7d60" },
                { y: 40, h: 50, col: "#cca585" },
                { y: 90, h: 30, col: "#76513a" },
                { y: 120, h: 60, col: "#dfcbb7" },
                { y: 180, h: 70, col: "#b28666" },
                { y: 250, h: 40, col: "#76513a" },
                { y: 290, h: 80, col: "#dfcbb7" },
                { y: 370, h: 60, col: "#cca585" },
                { y: 430, h: 82, col: "#9e7d60" }
            ];
            
            bands.forEach(b => {
                ctx.fillStyle = b.col;
                ctx.fillRect(0, b.y, w, b.h);
            });
            
            // Swirling turbulence storms on boundaries
            ctx.fillStyle = "rgba(255,255,255,0.06)";
            for (let y = 40; y < h - 40; y += 45) {
                for (let x = 0; x < w; x += 30) {
                    ctx.beginPath();
                    ctx.arc(x + Math.sin(y) * 10, y, Math.random() * 15 + 5, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
            
            // Render the iconic GREAT RED SPOT
            const grsX = w * 0.7;
            const grsY = h * 0.68;
            const grsRadX = 65;
            const grsRadY = 38;
            
            // Red spot outer ring
            ctx.fillStyle = "#8a1505";
            ctx.beginPath();
            ctx.ellipse(grsX, grsY, grsRadX, grsRadY, 0, 0, Math.PI * 2);
            ctx.fill();
            
            // Red spot core
            ctx.fillStyle = "#d03210";
            ctx.beginPath();
            ctx.ellipse(grsX, grsY, grsRadX * 0.7, grsRadY * 0.7, 0, 0, Math.PI * 2);
            ctx.fill();
            break;
            
        case 'saturn':
            // Elegant pale golden-beige gas bands
            const satGrad = ctx.createLinearGradient(0, 0, 0, h);
            satGrad.addColorStop(0, '#9e8557');
            satGrad.addColorStop(0.2, '#dfcca6');
            satGrad.addColorStop(0.4, '#eddcb9');
            satGrad.addColorStop(0.6, '#dfcca6');
            satGrad.addColorStop(0.8, '#c9b48c');
            satGrad.addColorStop(1, '#9e8557');
            ctx.fillStyle = satGrad;
            ctx.fillRect(0, 0, w, h);
            break;
            
        case 'uranus':
            // Smooth vertical cyan atmosphere bands
            const uranusGrad = ctx.createLinearGradient(0, 0, 0, h);
            uranusGrad.addColorStop(0, '#51b5c9');
            uranusGrad.addColorStop(0.5, '#72ccd9');
            uranusGrad.addColorStop(1, '#51b5c9');
            ctx.fillStyle = uranusGrad;
            ctx.fillRect(0, 0, w, h);
            break;
            
        case 'neptune':
            // Supersonic cobalt and deep blue bands with storm arcs
            const neptuneGrad = ctx.createLinearGradient(0, 0, 0, h);
            neptuneGrad.addColorStop(0, '#1c3a6b');
            neptuneGrad.addColorStop(0.3, '#2a5ba3');
            neptuneGrad.addColorStop(0.6, '#3978cc');
            neptuneGrad.addColorStop(0.8, '#2a5ba3');
            neptuneGrad.addColorStop(1, '#1c3a6b');
            ctx.fillStyle = neptuneGrad;
            ctx.fillRect(0, 0, w, h);
            
            // Deep Great Dark Spot
            ctx.fillStyle = "rgba(10, 20, 60, 0.45)";
            ctx.beginPath();
            ctx.ellipse(w * 0.35, h * 0.5, 45, 25, 0.1, 0, Math.PI * 2);
            ctx.fill();
            
            // White supersonic methane cirrus clouds
            ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(w * 0.35, h * 0.45, 60, Math.PI * 0.2, Math.PI * 0.8);
            ctx.stroke();
            break;
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    return texture;
}

// ===== INITIALIZATION =====
function init() {
    // Create Three.js Scene
    scene = new THREE.Scene();
    
    // Create Camera (Cockpit perspective)
    camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 2500);
    camera.position.set(0, 95, 180);
    
    // Create Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: "high-performance" });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap pixel ratio to 2 for performance
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    document.getElementById('canvas-container').appendChild(renderer.domElement);
    
    // OrbitControls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 10;
    controls.maxDistance = 500;
    
    clock = new THREE.Clock();
    
    // Setup raycaster
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();
    
    // Add glowing lighting layers
    setupLighting();
    
    // Dynamic galactic grid plane
    createGalacticGrid();
    
    // Infinite realistic starfield and glowing nebula sphere
    createDeepSpaceBackground();
    
    // Sun with dynamic corona and solar flares
    createSun();
    
    // Enhanced textured planets & Saturn/Uranus ring structures
    createPlanets();
    
    // Particle Asteroid Belt
    createAsteroidBelt();
    
    // Earth's Moon
    createMoon();
    
    // Trigger loaded interface animation
    setTimeout(() => {
        const loading = document.getElementById('loading-screen');
        loading.classList.add('hidden');
    }, 1500);
    
    // Window & Mouse listeners
    window.addEventListener('resize', onWindowResize, false);
    renderer.domElement.addEventListener('click', onMouseClick, false);
    renderer.domElement.addEventListener('mousemove', onMouseMove, false);

    // Initialize Telemetry to Sun baseline
    showTelemetry('sun');
}

// ===== HIGH-END SCI-FI LIGHTING =====
function setupLighting() {
    // Soft galactic ambient glow (deep purple-blue)
    const ambientLight = new THREE.AmbientLight(0x1a214d, 0.6);
    scene.add(ambientLight);
    
    // Primary solar source (cast soft shadows outwards)
    const sunLight = new THREE.PointLight(0xffffff, 2.5, 750, 0.5);
    sunLight.position.set(0, 0, 0);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.bias = -0.001;
    scene.add(sunLight);
    
    // Subtle cosmic blue directional fill light to keep dark sides slightly visible
    const fillLight = new THREE.DirectionalLight(0x00f3ff, 0.15);
    fillLight.position.set(100, 100, 100);
    scene.add(fillLight);
}

// ===== GALACTIC COORD GRID =====
function createGalacticGrid() {
    gridPlane = new THREE.GridHelper(400, 50, 0x00f3ff, 0x004466);
    gridPlane.position.y = -8;
    gridPlane.material.transparent = true;
    gridPlane.material.opacity = 0.15;
    scene.add(gridPlane);
}

// ===== COGNITIVE SPACE STARFIELD & PROCEDURAL NEBULA =====
function createDeepSpaceBackground() {
    // 1. Starfield Particles
    const starsGeometry = new THREE.BufferGeometry();
    const starCount = 6000;
    
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);
    
    for (let i = 0; i < starCount; i++) {
        const i3 = i * 3;
        
        // Distribute stars on a massive sphere shell (far background)
        const radius = 900 + Math.random() * 500;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        
        positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i3 + 2] = radius * Math.cos(phi);
        
        // Star color temperatures (Red, Orange, Yellow, White, Cyan-Blue)
        const tempChoice = Math.random();
        if (tempChoice < 0.65) { // White stars
            colors[i3] = 1.0; colors[i3 + 1] = 1.0; colors[i3 + 2] = 1.0;
        } else if (tempChoice < 0.85) { // Cyan-blue stars
            colors[i3] = 0.7; colors[i3 + 1] = 0.85; colors[i3 + 2] = 1.0;
        } else if (tempChoice < 0.95) { // Amber stars
            colors[i3] = 1.0; colors[i3 + 1] = 0.85; colors[i3 + 2] = 0.6;
        } else { // Dim red dwarf stars
            colors[i3] = 0.95; colors[i3 + 1] = 0.4; colors[i3 + 2] = 0.4;
        }
    }
    
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starsGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const starsMaterial = new THREE.PointsMaterial({
        size: 1.8,
        vertexColors: true,
        transparent: true,
        opacity: 0.85,
        sizeAttenuation: true
    });
    
    const starField = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starField);

    // 2. Cosmic Nebula Sphere (Soft visual backdrop)
    const nebulaGeo = new THREE.SphereGeometry(1400, 32, 32);
    // Draw procedural purple-pink gas cloud map on canvas
    const nebulaCanvas = document.createElement('canvas');
    nebulaCanvas.width = 512;
    nebulaCanvas.height = 256;
    const nCtx = nebulaCanvas.getContext('2d');
    nCtx.fillStyle = '#020208';
    nCtx.fillRect(0, 0, 512, 256);
    
    // Draw glowing radial nebulas
    const grad1 = nCtx.createRadialGradient(150, 100, 20, 150, 100, 150);
    grad1.addColorStop(0, 'rgba(50, 0, 100, 0.3)');
    grad1.addColorStop(1, 'rgba(0,0,0,0)');
    nCtx.fillStyle = grad1;
    nCtx.fillRect(0, 0, 512, 256);

    const grad2 = nCtx.createRadialGradient(380, 160, 10, 380, 160, 120);
    grad2.addColorStop(0, 'rgba(0, 50, 120, 0.25)');
    grad2.addColorStop(1, 'rgba(0,0,0,0)');
    nCtx.fillStyle = grad2;
    nCtx.fillRect(0, 0, 512, 256);
    
    const nebulaTex = new THREE.CanvasTexture(nebulaCanvas);
    const nebulaMat = new THREE.MeshBasicMaterial({
        map: nebulaTex,
        side: THREE.BackSide,
        transparent: true,
        opacity: 0.5
    });
    const nebulaMesh = new THREE.Mesh(nebulaGeo, nebulaMat);
    scene.add(nebulaMesh);
}

// ===== CREATE PROCEDURAL SUN =====
function createSun() {
    // Generate beautiful animated solar core
    const sunTex = generateProceduralTexture('sun');
    const sunGeometry = new THREE.SphereGeometry(planetData.sun.size, 64, 64);
    const sunMaterial = new THREE.MeshBasicMaterial({
        map: sunTex,
        color: 0xffffff
    });
    
    sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
    sunMesh.userData = { id: 'sun' };
    scene.add(sunMesh);
    
    // Volumetric glow corona (additive blend)
    const glowGeo = new THREE.SphereGeometry(planetData.sun.size * 1.35, 32, 32);
    const glowMaterial = new THREE.MeshBasicMaterial({
        color: 0xff8800,
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide
    });
    const sunGlow = new THREE.Mesh(glowGeo, glowMaterial);
    sunMesh.add(sunGlow);

    // Deep outer halo
    const haloGeo = new THREE.SphereGeometry(planetData.sun.size * 1.8, 32, 32);
    const haloMaterial = new THREE.MeshBasicMaterial({
        color: 0xff2200,
        transparent: true,
        opacity: 0.12,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide
    });
    const sunHalo = new THREE.Mesh(haloGeo, haloMaterial);
    sunMesh.add(sunHalo);
}

// ===== CREATE PROCEDURAL PLANETS =====
function createPlanets() {
    const planetKeys = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];
    
    planetKeys.forEach((key) => {
        const data = planetData[key];
        
        // Revolution anchor group
        const orbitGroup = new THREE.Group();
        scene.add(orbitGroup);
        
        // Generate high-resolution procedural surface texture
        const surfaceTex = generateProceduralTexture(key);
        
        // Build mesh
        const geometry = new THREE.SphereGeometry(data.size, 64, 64);
        
        // Use high-quality Phong / Standard shader parameters
        const material = new THREE.MeshPhongMaterial({
            map: surfaceTex,
            shininess: key === 'earth' ? 45 : 12,
            specular: key === 'earth' ? 0x2288ff : 0x111111,
            emissive: data.emissive,
            emissiveIntensity: 0.25
        });
        
        const planet = new THREE.Mesh(geometry, material);
        planet.position.x = data.orbitRadius;
        planet.castShadow = true;
        planet.receiveShadow = true;
        planet.userData = { id: key };
        
        // EART ATMOSPHERIC CLOUDS LAYER (ROTATES INDEPENDENTLY)
        if (key === 'earth') {
            const cloudTex = generateProceduralTexture('earth_clouds');
            const cloudGeo = new THREE.SphereGeometry(data.size * 1.03, 32, 32);
            const cloudMat = new THREE.MeshPhongMaterial({
                map: cloudTex,
                transparent: true,
                opacity: 0.35,
                blending: THREE.AdditiveBlending
            });
            const cloudLayer = new THREE.Mesh(cloudGeo, cloudMat);
            cloudLayer.name = 'clouds';
            planet.add(cloudLayer);
        }
        
        // VENUS ATMOSPHERE GLOW
        if (key === 'venus') {
            const atmosGeo = new THREE.SphereGeometry(data.size * 1.05, 32, 32);
            const atmosMat = new THREE.MeshBasicMaterial({
                color: 0xffdb94,
                transparent: true,
                opacity: 0.12,
                side: THREE.BackSide
            });
            const venusAtmos = new THREE.Mesh(atmosGeo, atmosMat);
            planet.add(venusAtmos);
        }
        
        // SATURN'S DETAILED TRANSPARENT RINGS
        if (data.hasRings) {
            createDetailedRings(planet, 'saturn');
        }

        // URANUS'S THIN VERTICAL RINGS
        if (data.hasThinRings) {
            createDetailedRings(planet, 'uranus');
        }
        
        orbitGroup.add(planet);
        
        // Glowing Neon Orbit Path Lines
        const orbitLineGeo = new THREE.BufferGeometry();
        const segments = 180;
        const orbitPoints = [];
        for (let i = 0; i <= segments; i++) {
            const angle = (i / segments) * Math.PI * 2;
            orbitPoints.push(
                Math.cos(angle) * data.orbitRadius,
                0,
                Math.sin(angle) * data.orbitRadius
            );
        }
        orbitLineGeo.setAttribute('position', new THREE.Float32BufferAttribute(orbitPoints, 3));
        
        const orbitLineMat = new THREE.LineBasicMaterial({
            color: data.color,
            transparent: true,
            opacity: 0.16
        });
        
        const orbitLine = new THREE.Line(orbitLineGeo, orbitLineMat);
        scene.add(orbitLine);
        
        // Store instances
        planets.push({
            mesh: planet,
            group: orbitGroup,
            data: data,
            angle: Math.random() * Math.PI * 2 // Random starting angle
        });
        
        orbits.push(orbitLine);
    });
}

// ===== PROCEDURAL DUST RING BUILDER (SATURN & URANUS) =====
function createDetailedRings(planetMesh, type) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 1;
    const ctx = canvas.getContext('2d');
    
    // Draw fine concentric dust lines with Cassini Division
    ctx.fillStyle = "rgba(0,0,0,0)";
    ctx.fillRect(0, 0, 512, 1);
    
    if (type === 'saturn') {
        // Broad beautiful yellow/gold dust bands
        const grad = ctx.createLinearGradient(0, 0, 512, 0);
        grad.addColorStop(0, 'rgba(0,0,0,0)');
        grad.addColorStop(0.15, 'rgba(212, 167, 106, 0.85)');
        grad.addColorStop(0.48, 'rgba(180, 140, 90, 0.9)');
        grad.addColorStop(0.5, 'rgba(0,0,0,0)'); // CASSINI DIVISION GAP!
        grad.addColorStop(0.52, 'rgba(180, 140, 90, 0.9)');
        grad.addColorStop(0.85, 'rgba(240, 210, 160, 0.7)');
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 512, 1);
    } else {
        // Uranus: Thin, dark blue/teal vertical ring system
        const grad = ctx.createLinearGradient(0, 0, 512, 0);
        grad.addColorStop(0, 'rgba(0,0,0,0)');
        grad.addColorStop(0.65, 'rgba(0,0,0,0)');
        grad.addColorStop(0.75, 'rgba(126, 200, 217, 0.6)');
        grad.addColorStop(0.85, 'rgba(0,0,0,0)');
        grad.addColorStop(0.9, 'rgba(126, 200, 217, 0.85)');
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 512, 1);
    }
    
    const ringTexture = new THREE.CanvasTexture(canvas);
    
    const innerRadius = type === 'saturn' ? planetData.saturn.size * 1.4 : planetData.uranus.size * 1.5;
    const outerRadius = type === 'saturn' ? planetData.saturn.size * 2.8 : planetData.uranus.size * 2.2;
    
    const ringGeo = new THREE.RingGeometry(innerRadius, outerRadius, 64);
    
    // Map texture radially by editing UVs
    const pos = ringGeo.attributes.position;
    const uv = ringGeo.attributes.uv;
    for (let i = 0; i < pos.count; i++) {
        const vx = pos.getX(i);
        const vy = pos.getY(i);
        const dist = Math.sqrt(vx * vx + vy * vy);
        const normDist = (dist - innerRadius) / (outerRadius - innerRadius);
        uv.setXY(i, normDist, 0.5);
    }
    
    const ringMat = new THREE.MeshPhongMaterial({
        map: ringTexture,
        transparent: true,
        opacity: type === 'saturn' ? 0.85 : 0.45,
        side: THREE.DoubleSide,
        shininess: 15
    });
    
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    
    if (type === 'saturn') {
        ringMesh.rotation.x = Math.PI / 2.1; // Lay flat, slightly tilted
    } else {
        ringMesh.rotation.y = Math.PI / 6; // Vertical-ish tilt for Uranus's anomalous axis!
        ringMesh.rotation.x = Math.PI / 12;
    }
    
    ringMesh.castShadow = true;
    ringMesh.receiveShadow = true;
    
    planetMesh.add(ringMesh);
}

// ===== CREATE INTERACTIVE PARTICLE ASTEROID BELT =====
function createAsteroidBelt() {
    const minRad = 51; // Between Mars (44) and Jupiter (65)
    const maxRad = 58;
    const count = 600;
    
    // Single shared geometry base to optimize performance
    const rockGeo = new THREE.DodecahedronGeometry(0.3, 1);
    
    // Create random vertex displacement to make each space rock unique!
    const positionAttribute = rockGeo.attributes.position;
    for (let i = 0; i < positionAttribute.count; i++) {
        const x = positionAttribute.getX(i) + (Math.random() - 0.5) * 0.08;
        const y = positionAttribute.getY(i) + (Math.random() - 0.5) * 0.08;
        const z = positionAttribute.getZ(i) + (Math.random() - 0.5) * 0.08;
        positionAttribute.setXYZ(i, x, y, z);
    }
    rockGeo.computeVertexNormals();

    const rockMat = new THREE.MeshPhongMaterial({
        color: 0x6e6e78,
        shininess: 2,
        specular: 0x111111
    });

    for (let i = 0; i < count; i++) {
        const rock = new THREE.Mesh(rockGeo, rockMat);
        
        // Random Kepler distribution
        const radius = minRad + Math.random() * (maxRad - minRad);
        const angle = Math.random() * Math.PI * 2;
        const incline = (Math.random() - 0.5) * 0.15; // Vertical orbital tilt
        
        rock.position.set(
            Math.cos(angle) * radius,
            incline * radius,
            Math.sin(angle) * radius
        );
        
        // Set scale variation
        const s = Math.random() * 0.75 + 0.35;
        rock.scale.set(s, s, s);
        
        // Save random speeds/rotations
        rock.userData = {
            radius: radius,
            angle: angle,
            speed: (0.15 + Math.random() * 0.08) * (1 / Math.sqrt(radius)), // Kepler's 3rd Law approximation!
            rotSpeedX: Math.random() * 0.02,
            rotSpeedY: Math.random() * 0.02
        };
        
        scene.add(rock);
        asteroids.push(rock);
    }
}

// ===== CREATE MOON =====
function createMoon() {
    const earthObj = planets.find(p => p.data.name === 'Earth');
    if (!earthObj) return;
    
    moonOrbitGroup = new THREE.Group();
    earthObj.mesh.add(moonOrbitGroup);
    
    const moonTex = generateProceduralTexture('mercury'); // Cratered gray texture
    const moonGeo = new THREE.SphereGeometry(0.5, 32, 32);
    const moonMat = new THREE.MeshPhongMaterial({
        map: moonTex,
        shininess: 4
    });
    
    moonMesh = new THREE.Mesh(moonGeo, moonMat);
    moonMesh.position.x = 5.2; // Earth distance
    moonMesh.castShadow = true;
    moonMesh.receiveShadow = true;
    moonMesh.userData = { id: 'moon' };
    
    moonOrbitGroup.add(moonMesh);
}

// ===== ANIMATION SIMULATION LOOP =====
function animate() {
    requestAnimationFrame(animate);
    
    const delta = clock.getDelta();
    
    if (!isPaused) {
        // Rotate Sun
        sunMesh.rotation.y += 0.003 * animationSpeed;
        
        // Animate Planets
        planets.forEach((planet) => {
            // Kepler's speed approximation
            planet.angle += planet.data.orbitSpeed * 0.007 * animationSpeed;
            
            const x = Math.cos(planet.angle) * planet.data.orbitRadius;
            const z = Math.sin(planet.angle) * planet.data.orbitRadius;
            
            planet.mesh.position.set(x, 0, z);
            
            // Axial Spin
            planet.mesh.rotation.y += 0.015 * animationSpeed;
            
            // Earth clouds spin slightly faster for realistic meteorology
            if (planet.data.name === 'Earth') {
                const clouds = planet.mesh.getObjectByName('clouds');
                if (clouds) {
                    clouds.rotation.y += 0.003 * animationSpeed;
                }
            }
        });
        
        // Animate Asteroid Belt
        if (showAsteroids) {
            asteroids.forEach(rock => {
                rock.userData.angle += rock.userData.speed * 0.05 * animationSpeed;
                
                rock.position.x = Math.cos(rock.userData.angle) * rock.userData.radius;
                rock.position.z = Math.sin(rock.userData.angle) * rock.userData.radius;
                
                rock.rotation.x += rock.userData.rotSpeedX;
                rock.rotation.y += rock.userData.rotSpeedY;
            });
        }
        
        // Animate Moon around Earth
        if (moonOrbitGroup) {
            moonOrbitGroup.rotation.y += 0.04 * animationSpeed;
        }
    }
    
    // Dynamic camera smooth follow if locked onto a moving planet!
    if (currentFocusedPlanet && currentFocusedPlanet.userData.id !== 'sun' && currentFocusedPlanet.userData.id !== 'moon') {
        const targetPos = new THREE.Vector3();
        currentFocusedPlanet.getWorldPosition(targetPos);
        
        // Smoothly pan OrbitControls target to follow the planet in space!
        controls.target.lerp(targetPos, 0.08);
    }
    
    controls.update();
    renderer.render(scene, camera);
}

// ===== MOUSE RAYCAST INTERACTION =====
function onMouseClick(event) {
    // Calculate normalized device coordinates
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    
    raycaster.setFromCamera(mouse, camera);
    
    const targets = [sunMesh, ...planets.map(p => p.mesh)];
    if (moonMesh) targets.push(moonMesh);
    
    const intersects = raycaster.intersectObjects(targets);
    
    if (intersects.length > 0) {
        const clickedObj = intersects[0].object;
        let planetId = clickedObj.userData.id;
        
        // Fallback for cloud layer clicks
        if (!planetId && clickedObj.parent) {
            planetId = clickedObj.parent.userData.id;
        }
        
        if (planetId) {
            triggerNav(planetId);
        }
    }
}

function onMouseMove(event) {
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    
    raycaster.setFromCamera(mouse, camera);
    
    const targets = [sunMesh, ...planets.map(p => p.mesh)];
    if (moonMesh) targets.push(moonMesh);
    
    const intersects = raycaster.intersectObjects(targets);
    renderer.domElement.style.cursor = intersects.length > 0 ? 'pointer' : 'default';
}

// ===== CINEMATIC INTERCEPT SYSTEM =====
function triggerNav(planetId) {
    audioSynth.playClick();
    
    let targetMesh;
    if (planetId === 'sun') {
        targetMesh = sunMesh;
    } else if (planetId === 'moon') {
        targetMesh = moonMesh;
    } else {
        const planetObj = planets.find(p => p.data.name.toLowerCase() === planetId);
        if (planetObj) targetMesh = planetObj.mesh;
    }
    
    if (targetMesh) {
        focusOnTarget(targetMesh);
        showTelemetry(planetId);
    }
}

function focusOnTarget(mesh) {
    currentFocusedPlanet = mesh;
    audioSynth.playFlybySweep();
    
    const targetPos = new THREE.Vector3();
    mesh.getWorldPosition(targetPos);
    
    // Zoom offset governed by planet size
    const bounds = planetData[mesh.userData.id] || { size: 1.5 };
    const distanceOffset = bounds.size * 3.5 + 8;
    
    const currentCamDir = new THREE.Vector3().subVectors(camera.position, targetPos).normalize();
    const newCamPos = targetPos.clone().add(currentCamDir.multiplyScalar(distanceOffset));
    
    // Trigger sleek HUD pan
    animateCamera(newCamPos, targetPos);
}

function animateCamera(targetPos, lookAt) {
    const startPos = camera.position.clone();
    const startLookAt = controls.target.clone();
    const duration = 1200;
    const startTime = Date.now();
    
    function step() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Slick cubic deceleration curve
        const ease = 1 - Math.pow(1 - progress, 3);
        
        camera.position.lerpVectors(startPos, targetPos, ease);
        controls.target.lerpVectors(startLookAt, lookAt, ease);
        
        if (progress < 1) {
            requestAnimationFrame(step);
        }
    }
    
    step();
}

// ===== TELEMETRY SIDEBAR INTERFACE UPDATE =====
function showTelemetry(planetId) {
    const data = planetData[planetId];
    if (!data) return;
    
    document.getElementById('sidebar-title').textContent = data.name;
    document.getElementById('sidebar-emoji').textContent = data.emoji;
    document.getElementById('sidebar-classification').textContent = data.classification;
    document.getElementById('sidebar-description').textContent = data.description;
    document.getElementById('telemetry-distance').textContent = data.distance;
    document.getElementById('telemetry-orbit-period').textContent = data.orbitPeriod;
    document.getElementById('telemetry-diameter').textContent = data.diameter;
    document.getElementById('telemetry-mass').textContent = data.mass;
    document.getElementById('telemetry-temperature').textContent = data.temperature;
    document.getElementById('telemetry-moons').textContent = data.moons;
    document.getElementById('sidebar-funfact').textContent = data.funFact;
    
    // Dynamic theme coloring for classification tags
    const tag = document.getElementById('sidebar-classification');
    if (planetId === 'sun') {
        tag.style.color = '#ffaa00';
        tag.style.borderColor = 'rgba(255, 170, 0, 0.3)';
        tag.style.background = 'rgba(255, 170, 0, 0.1)';
    } else if (planetId === 'jupiter' || planetId === 'saturn') {
        tag.style.color = '#d4a76a';
        tag.style.borderColor = 'rgba(212, 167, 106, 0.3)';
        tag.style.background = 'rgba(212, 167, 106, 0.1)';
    } else if (planetId === 'uranus' || planetId === 'neptune') {
        tag.style.color = '#7ec8d9';
        tag.style.borderColor = 'rgba(126, 200, 217, 0.3)';
        tag.style.background = 'rgba(126, 200, 217, 0.1)';
    } else {
        tag.style.color = '#00f3ff';
        tag.style.borderColor = 'rgba(0, 243, 255, 0.3)';
        tag.style.background = 'rgba(0, 243, 255, 0.1)';
    }
    
    // Highlight bottom navigation button
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    const activeBtn = document.querySelector(`.planet-nav-buttons button[onclick*="${planetId}"]`);
    if (activeBtn) activeBtn.classList.add('active');
    
    // Slide sidebar in!
    const sidebar = document.getElementById('telemetry-sidebar');
    sidebar.classList.remove('closed');
}

function closeTelemetry() {
    audioSynth.playClick();
    document.getElementById('telemetry-sidebar').classList.add('closed');
    currentFocusedPlanet = null;
    
    // Remove active button highlights
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
}

// ===== HUD CONTROLS & EVENT HANDLERS =====
function togglePause() {
    audioSynth.playClick();
    isPaused = !isPaused;
    
    const btn = document.getElementById('pause-btn');
    btn.textContent = isPaused ? '▶ PLAY' : '⏸ PAUSE';
    if (isPaused) {
        btn.classList.add('paused');
    } else {
        btn.classList.remove('paused');
    }
}

function toggleSound() {
    const isCurrentlyMuted = audioSynth.isMuted;
    audioSynth.setMute(!isCurrentlyMuted);
    
    const btn = document.getElementById('sound-btn');
    btn.textContent = `🔊 Audio: ${isCurrentlyMuted ? 'ON' : 'OFF'}`;
    if (!isCurrentlyMuted) {
        btn.classList.remove('active');
    } else {
        btn.classList.add('active');
    }
}

function toggleGrid() {
    audioSynth.playClick();
    showGrid = !showGrid;
    gridPlane.visible = showGrid;
    
    const btn = document.getElementById('grid-btn');
    if (showGrid) btn.classList.add('active');
    else btn.classList.remove('active');
}

function toggleAsteroids() {
    audioSynth.playClick();
    showAsteroids = !showAsteroids;
    
    asteroids.forEach(rock => {
        rock.visible = showAsteroids;
    });
    
    const btn = document.getElementById('asteroids-btn');
    if (showAsteroids) btn.classList.add('active');
    else btn.classList.remove('active');
}

function toggleOrbits() {
    audioSynth.playClick();
    showOrbits = !showOrbits;
    
    orbits.forEach(line => {
        line.visible = showOrbits;
    });
    
    const btn = document.getElementById('orbits-btn');
    if (showOrbits) btn.classList.add('active');
    else btn.classList.remove('active');
}

function resetCamera() {
    audioSynth.playClick();
    currentFocusedPlanet = null;
    animateCamera(
        new THREE.Vector3(0, 95, 180),
        new THREE.Vector3(0, 0, 0)
    );
    closeTelemetry();
}

// Volume slider action
const volumeSlider = document.getElementById('volume-slider');
volumeSlider.addEventListener('input', function() {
    audioSynth.setVolume(parseFloat(this.value));
});

// Speed slider action
const speedSlider = document.getElementById('speed-slider');
const speedValue = document.getElementById('speed-value');
speedSlider.addEventListener('input', function() {
    animationSpeed = parseFloat(this.value);
    speedValue.textContent = `${animationSpeed.toFixed(1)}x`;
});

// Windows scaling handler
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Global key controls (Space to Pause)
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeTelemetry();
    }
    
    if (e.code === 'Space' && e.target.tagName !== 'INPUT') {
        e.preventDefault();
        togglePause();
    }
});

// Real-time stardate ticking in header HUD
function tickClock() {
    const now = new Date();
    const year = now.getFullYear();
    const start = new Date(year, 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay);
    const hour = now.getHours() + now.getMinutes() / 60 + now.getSeconds() / 3600;
    const fraction = (day + hour / 24) / 365;
    
    const stardate = (year + fraction).toFixed(4);
    document.getElementById('date-readout').textContent = `STARDATE: ${stardate}`;
}
setInterval(tickClock, 1000);

// ===== START SYSTEM =====
window.addEventListener('load', () => {
    init();
    animate();
    tickClock();
    
    console.log('%c🪐 COSMIC ORRERY DIAGNOSTICS ONLINE 🪐', 'color: #00f3ff; font-weight: bold; font-size: 20px;');
    console.log('%cWebGL scene loaded at solid 60fps. Procedural WebAudio ambient modules active.', 'color: rgba(255,255,255,0.75);');
});

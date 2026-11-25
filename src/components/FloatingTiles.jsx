import React, { useEffect, useRef, useState } from 'react';
import { HERO_TOPICS, pickVariant, tileClasses } from './heroTopics';

// A field of rounded icon tiles that tumble in 3D and drift toward the
// viewer, like flying through a starfield. Positions are written straight to
// the DOM every frame; React only re-renders a tile when it respawns with a
// new icon for the current topic.

const Z_FAR = 3.2;     // spawn depth (tiles start ~3.5x smaller than up close)
const Z_NEAR = 0.8;    // depth at which a tile is recycled
const SPEED = 0.17;    // depth units per second
const SPREAD = 3.3;    // half-width of the spawn plane, in projected-screen units
const rand = (a, b) => a + Math.random() * (b - a);

const spawnSim = (initial) => {
  // On first load, place tiles at random depths but still inside the frame for
  // that depth, so the field starts full instead of filling in over time.
  const z = initial ? rand(Z_NEAR + 0.35, Z_FAR) : Z_FAR;
  // Pick an on-screen spot (u, v) outside the headline's ellipse, then convert
  // it to world space for this depth. Tiles only move outward from the centre,
  // so they never drift across the headline afterwards.
  // On phones the copy spans the full width, so clear the whole band instead.
  const narrow = typeof window !== 'undefined' && window.innerWidth < 640;
  const ex = narrow ? SPREAD * 1.1 : 2.0;
  const ey = narrow ? 1.5 : 1.85;
  let u, v;
  do {
    u = rand(-SPREAD, SPREAD);
    v = rand(-SPREAD, SPREAD);
  } while ((u / ex) ** 2 + (v / ey) ** 2 < 1);
  return {
    X: (u * z) / Z_FAR,
    Y: (v * z) / Z_FAR,
    z,
    rz: rand(-28, 28),
    drz: rand(-6, 6),
    ax: rand(10, 32),
    ay: rand(10, 32),
    wx: rand(0.25, 0.6),
    wy: rand(0.25, 0.6),
    px: rand(0, Math.PI * 2),
    py: rand(0, Math.PI * 2),
  };
};

const makeTile = (id, topicIdx) => {
  const topic = HERO_TOPICS[topicIdx];
  return {
    id,
    topicIdx,
    iconIdx: Math.floor(Math.random() * topic.icons.length),
    variant: pickVariant(),
  };
};

export const FloatingTiles = ({ topicIdx = 0, count = 40 }) => {
  const containerRef = useRef(null);
  const els = useRef([]);
  const sims = useRef([]);
  const topicRef = useRef(topicIdx);
  topicRef.current = topicIdx;

  const [n] = useState(() => {
    const narrow = typeof window !== 'undefined' && window.innerWidth < 768;
    return narrow ? Math.round(count * 0.5) : count;
  });
  const [tiles, setTiles] = useState(() =>
    Array.from({ length: n }, (_, i) => {
      // Seed with a mix of topics so the first frame already feels varied.
      sims.current[i] = spawnSim(true);
      return makeTile(i, i % 3 === 0 ? topicIdx : Math.floor(Math.random() * HERO_TOPICS.length));
    })
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let W = 0, H = 0, base = 140;
    const measure = () => {
      W = container.clientWidth;
      H = container.clientHeight;
      base = Math.max(76, Math.min(140, W * 0.095));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(container);

    // Gentle pointer parallax: near tiles shift more than far ones.
    let mx = 0, my = 0, tmx = 0, tmy = 0;
    const onMove = (e) => {
      tmx = (e.clientX / window.innerWidth - 0.5) * 2;
      tmy = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('pointermove', onMove, { passive: true });

    let raf = 0;
    let last = performance.now();
    let t = 0;

    const frame = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      t += dt;
      mx += (tmx - mx) * 0.04;
      my += (tmy - my) * 0.04;

      const respawned = [];
      const size = base / Z_NEAR; // rendered at max size, scaled down => stays crisp
      const k = 0.5 / SPREAD / (1 / Z_FAR); // X=SPREAD at Z_FAR lands on the frame edge
      for (let i = 0; i < sims.current.length; i++) {
        const s = sims.current[i];
        const el = els.current[i];
        if (!el) continue;

        if (!reduce) {
          s.z -= SPEED * dt;
          s.rz += s.drz * dt;
        }
        const p = 1 / s.z;
        const sx = W / 2 + s.X * p * k * W - mx * p * 26;
        const sy = H / 2 + s.Y * p * k * H - my * p * 18;
        const half = (size * Z_NEAR * p) / 2;
        const offscreen = sx < -half * 1.5 || sx > W + half * 1.5 || sy < -half * 1.5 || sy > H + half * 1.5;

        if (s.z <= Z_NEAR || (offscreen && s.z < Z_FAR - 0.3)) {
          sims.current[i] = spawnSim(false);
          respawned.push(i);
          el.style.opacity = '0';
          continue;
        }

        const scale = Z_NEAR / s.z;
        const rx = s.ax * Math.sin(t * s.wx + s.px);
        const ry = s.ay * Math.sin(t * s.wy + s.py);

        // Fade in from the distance, fade out just before passing the camera.
        const fadeIn = Math.min(1, (Z_FAR - s.z) / 0.6);
        const fadeOut = Math.min(1, (s.z - Z_NEAR) / 0.3);
        const opacity = Math.max(0, Math.min(fadeIn, fadeOut));

        if (el._size !== size) {
          el._size = size;
          el.style.width = `${size}px`;
          el.style.height = `${size}px`;
        }
        el.style.opacity = opacity.toFixed(3);
        el.style.zIndex = String(Math.round(1000 - s.z * 100));
        el.style.transform =
          `translate3d(${sx - size / 2}px, ${sy - size / 2}px, 0) ` +
          `scale(${scale.toFixed(4)}) perspective(700px) ` +
          `rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) rotateZ(${s.rz.toFixed(2)}deg)`;
      }

      if (respawned.length) {
        setTiles((prev) => {
          const next = prev.slice();
          for (const i of respawned) next[i] = makeTile(prev[i].id, topicRef.current);
          return next;
        });
      }

      if (!reduce) raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden select-none"
    >
      {tiles.map((tile, i) => {
        const topic = HERO_TOPICS[tile.topicIdx];
        const Icon = topic.icons[tile.iconIdx];
        return (
          <div
            key={tile.id}
            ref={(el) => (els.current[i] = el)}
            className="absolute left-0 top-0 will-change-transform"
            style={{ opacity: 0, transformOrigin: '50% 50%' }}
          >
            <div
              className={`w-full h-full rounded-[26%] border flex items-center justify-center shadow-[0_22px_44px_-22px_rgba(13,13,13,0.45),inset_0_1px_0_rgba(255,255,255,0.55)] dark:shadow-[0_22px_44px_-22px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.08)] ${tileClasses(topic, tile.variant)}`}
            >
              <Icon style={{ width: '42%', height: '42%' }} strokeWidth={1.5} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

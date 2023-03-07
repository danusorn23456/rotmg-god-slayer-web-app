import React, { useRef, useEffect } from 'react';

export function ParticleArea({ width = 640, height = 480, value = 100, src }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = width;
    canvas.height = height;

    const img = new Image();
    img.src = src;
    img.onload = function () {
      const particles = [];
      const particleCount = value;
      const minSize = 10;
      const maxSize = 50;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.floor(Math.random() * (maxSize - minSize + 1) + minSize),
          speed: Math.random() + 0.1,
          angle: Math.random() * 360,
          opacity: Math.random() * 0.5 + 0.5,
        });
      }

      function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle) => {
          ctx.save();
          ctx.globalAlpha = particle.opacity;
          ctx.translate(particle.x, particle.y);
          ctx.rotate((particle.angle * Math.PI) / 180);
          ctx.drawImage(
            img,
            -particle.size / 2,
            -particle.size / 2,
            particle.size,
            particle.size
          );
          ctx.restore();

          particle.y += particle.speed;
          particle.x += Math.sin((particle.angle * Math.PI) / 180) * 2;

          if (particle.y > canvas.height + particle.size) {
            particle.y = -particle.size;
            particle.x = Math.random() * canvas.width;
          }
        });

        requestAnimationFrame(draw);
      }

      draw();
    };
  }, [width, height, src, value]);

  return <canvas ref={canvasRef} className="absolute top-0 left-0"/>;
};
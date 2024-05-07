"use client";

import React, { useRef, useEffect } from "react";

function DataBaseManagement() {
  const canvasRef = useRef(null);

  useEffect(() => {
    let animationPosition = 0;

    function informationAnimation() {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      ctx.clearRect(0, 0, 240, 240);

      // Dibuja las bases de datos (círculos)
      ctx.fillStyle = "#003b00";
      ctx.beginPath();
      ctx.arc(120, 0, 20, 0, 2 * Math.PI);
      ctx.fill();

      // Dibuja el servidor (rectángulo)
      ctx.fillStyle = animationPosition >= 0.5 ? "#008f11" : "#34cceb";
      ctx.fillRect(111, 40, 20, 40);

      // Dibuja la línea que conecta el servidor con las bases de datos
      ctx.strokeStyle = "#00ff41";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(122, 20);
      ctx.lineTo(122, 40);
      ctx.stroke();

      //Lineas a las DB
      ctx.strokeStyle = "#00ff41";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(111, 60);
      ctx.lineTo(20, 60);
      ctx.lineTo(20, 110);
      ctx.stroke();

      ctx.strokeStyle = "#00ff41";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(122, 80);
      ctx.lineTo(122, 110);
      ctx.stroke();

      ctx.strokeStyle = "#00ff41";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(130, 60);
      ctx.lineTo(220, 60);
      ctx.lineTo(220, 110);
      ctx.stroke();

      //DataBases
      ctx.fillStyle = "#ebc334";
      ctx.strokeStyle = "#000";
      ctx.beginPath();
      ctx.arc(20, 130, 20, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "#ebc334";
      ctx.strokeStyle = "#000";
      ctx.beginPath();
      ctx.arc(20, 120, 20, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "#ebc334";
      ctx.strokeStyle = "#000";
      ctx.beginPath();
      ctx.arc(20, 110, 20, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#003b00";
      ctx.strokeStyle = "#000";
      ctx.beginPath();
      ctx.arc(122, 150, 20, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "#003b00";
      ctx.strokeStyle = "#000";
      ctx.beginPath();
      ctx.arc(122, 140, 20, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "#003b00";
      ctx.strokeStyle = "#000";
      ctx.beginPath();
      ctx.arc(122, 130, 20, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#34cceb";
      ctx.strokeStyle = "#000";
      ctx.beginPath();
      ctx.arc(220, 130, 20, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "#34cceb";
      ctx.strokeStyle = "#000";
      ctx.beginPath();
      ctx.arc(220, 120, 20, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "#34cceb";
      ctx.strokeStyle = "#000";
      ctx.beginPath();
      ctx.arc(220, 110, 20, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(
        110 - (animationPosition >= 0.5 ? 90 : 180 * animationPosition),
        60 + (animationPosition >= 0.5 ? 20 * animationPosition : 0),
        10,
        0,
        2 * Math.PI
      );
      ctx.fill();
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(
        120 + (animationPosition >= 0.5 ? 100 : 200 * animationPosition),
        60 + (animationPosition >= 0.5 ? 20 * animationPosition : 0),
        10,
        0,
        2 * Math.PI
      );
      ctx.fill();
      ctx.stroke();

      if (animationPosition < 0.5) {
        ctx.beginPath();
        ctx.arc(122, 90 + 20 * animationPosition, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
      }

      if (animationPosition < 1) {
        animationPosition += 0.005;
      }
      if (animationPosition >= 1) {
        animationPosition = 0.0;
      }
      requestAnimationFrame(informationAnimation);
    }

    informationAnimation();
  }, []);

  return <canvas ref={canvasRef} width={240} height={240}></canvas>;
}

export default DataBaseManagement;

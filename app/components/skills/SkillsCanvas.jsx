"use client";
// components/CanvasConImagenes.js
import React, { useState, useEffect } from "react";

const CanvasConImagenes = () => {
  const [imagenes, setImagenes] = useState([]);
  const [windowWith, setWindowWith] = useState([window.innerWidth]);

  window.onresize = function () {
    setWindowWith(window.innerWidth);
  };

  // Carga las imágenes al estado
  useEffect(() => {
    setImagenes([
      ["/technologies/css-3.png", "https://www.w3.org/Style/CSS/"],
      ["/technologies/html-5.png", "https://html.spec.whatwg.org/"],
      ["/technologies/java.png", "https://www.java.com/"],
      [
        "/technologies/js.png",
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      ],
      ["/technologies/mysql.png", "https://www.mysql.com/"],
      ["/technologies/python.png", "https://www.python.org/"],
      [
        "/technologies/script-de-aplicaciones-de-google.png",
        "https://www.google.com/script/start/",
      ],
      ["/technologies/node.png", "https://nodejs.org/"],
      ["/technologies/mongo.png", "https://www.mongodb.com/"]
    ]);
  }, []);

  useEffect(() => {
    const canvas = document.getElementById("miCanvas");
    const ctx = canvas.getContext("2d");

    //Limpia todos los intervalos para evitar bugs en resize
    var highestTimeoutId = setTimeout(";");
    for (var i = 0; i < highestTimeoutId; i++) {
      clearTimeout(i);
    }

    // Función para dibujar las imágenes en el canvas con efecto de flotación
    function dibujarImagenes() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let cols = Math.floor(canvas.width / 120);
      let currentCol = 0;
      let currentRow = 0;

      imagenes.forEach((imagen, index) => {
        let x,
          y = 0;
        if (currentCol < cols) {
          x = currentCol * 120;
          y = 120 * currentRow;
          currentCol += 1;
          if (currentCol >= cols) {
            currentRow += 1;
            currentCol = 0;
          }
        }

        const img = new Image();
        img.src = imagen[0];
        img.onload = () => {
          // Agregando el efecto de flotación vertical
          let offsetY = 0;
          let direction = 1;
          const oscillateInterval = setInterval(() => {
            ctx.clearRect(x, y, 120, 120);
            ctx.drawImage(img, x, y + offsetY, 100, 100);
            offsetY += direction;
            if (offsetY >= 10 || offsetY <= 0) {
              direction *= -1;
            }
          }, Math.floor(Math.random() * 21) + 80);
        };

        // Agregando hipervinculos a las imagenes
        canvas.addEventListener("click", (event) => {
          const rect = canvas.getBoundingClientRect();
          const clicX = event.clientX - rect.left;
          const clicY = event.clientY - rect.top;

          if (clicX > x && clicX < x + 100 && clicY > y && clicY < y + 100) {
            window.open(imagen[1], "_blank");
          }
        });
      });
    }

    // Inicia la animación
    dibujarImagenes();
  }, [imagenes, windowWith]);

  return (
    <canvas
      id="miCanvas"
      width={windowWith < 720 ? "240" : "600"}
      height={windowWith >= 720 ? "300" : "600"}
      className="mx-auto mt-8"
    ></canvas>
  );
};

export default CanvasConImagenes;

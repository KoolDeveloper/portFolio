"use client";
// components/CanvasConImagenes.js
import React, { useState, useEffect } from "react";

const CanvasConImagenes = () => {
  const [imagenes, setImagenes] = useState([]);

  // Carga las imágenes al estado (reemplaza las rutas con las de tus imágenes)
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
    ]);
  }, []);

  useEffect(() => {
    const canvas = document.getElementById("miCanvas");
    const ctx = canvas.getContext("2d");

    // Función para dibujar las imágenes en el canvas con efecto de flotación
    function dibujarImagenes() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      imagenes.forEach((imagen, index) => {
        let x, y;
        if (index < 4) {
          x = 0;
          y = index * 150;
        } else {
          x = 150;
          y = (index % 4) * 150;
        }
        const img = new Image();
        img.src = imagen[0];
        img.onload = () => {
          // Agrega un efecto de flotación vertical
          let offsetY = 0;
          let direction = 1; // 1 para mover hacia abajo, -1 para mover hacia arriba
          const oscillateInterval = setInterval(() => {
            ctx.clearRect(x, y, 120, 120);
            ctx.drawImage(img, x, y + offsetY, 100, 100);
            offsetY += direction;
            if (offsetY >= 10 || offsetY <= 0) {
              direction *= -1; // Cambia la dirección al llegar al límite
            } // Ajusta la velocidad y rango de flotación
          }, Math.floor(Math.random() * 21) + 80); // Intervalo de actualización (ajusta según tu preferencia)
        };

        // Agrega un evento de clic a la imagen
        canvas.addEventListener("click", (event) => {
          const rect = canvas.getBoundingClientRect();
          const clicX = event.clientX - rect.left;
          const clicY = event.clientY - rect.top;

          if (clicX > x && clicX < x + 100 && clicY > y && clicY < y + 100) {
            // Redirige al hipervínculo deseado (por ejemplo, abre en una nueva pestaña)
            window.open(imagen[1], "_blank");
          }
        });
      });
    }

    // Inicia la animación
    dibujarImagenes();
  }, [imagenes]);

  return (
    <canvas id="miCanvas" width="250" height="600" className="mx-auto"></canvas>
  );
};

export default CanvasConImagenes;

// data-progress debe estar entre 0 y 100 para representar el porcentaje de progreso.
// data-speed representa la velocidad de la animación en milisegundos.

document.addEventListener("DOMContentLoaded", function () {
  // Obtener el contenedor y verificar si la tarjeta debe mostrarse
  const container = document.querySelector(".container");
  const showCard = container.dataset.showCard === "true";

  // Leer los atributos personalizados: progreso, velocidad y fecha objetivo
  const targetProgress = parseInt(container.dataset.progress);
  const speed = parseInt(container.dataset.speed);
  const targetDate = new Date(container.dataset.target).getTime();

  // Variables para controlar la animación
  let startTime;
  let progress = 0;
  const progressBar = document.querySelector(".progress");

  // Función para actualizar el tiempo restante en la tarjeta
  function updateRemainingTime() {
    const currentTime = new Date().getTime();
    const timeRemaining = Math.max(0, targetDate - currentTime);

    // Calcular días, horas y minutos restantes
    const minutes = Math.floor(timeRemaining / (1000 * 60));
    const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

    // Actualizar los elementos en la tarjeta con los valores calculados
    document.getElementById("days-counter").textContent = days;
    document.getElementById("hours-counter").textContent = hours % 24;
    document.getElementById("minute-counter").textContent = minutes % 60;
  }

  // Función para animar el progreso de la barra
  function animate(progressTime) {
    if (!startTime) startTime = progressTime;
    const elapsedTime = progressTime - startTime;
    const duration = speed * 1000; // Convertir la velocidad a milisegundos

    // Calcular el progreso en función del tiempo transcurrido y la duración
    progress = Math.min(1, elapsedTime / duration) * targetProgress;

    // Actualizar el ancho de la barra de progreso y el porcentaje
    progressBar.style.width = `${Math.round(progress)}%`;
    const progressPercentage = container.querySelector(".progress-percentage");
    progressPercentage.textContent = `${Math.round(progress)}%`;

    // Continuar la animación si el progreso es menor que el objetivo
    if (progress < targetProgress) {
      requestAnimationFrame(animate);
    } else {
      // Mostrar el contenedor con opacidad y sin desplazamiento si la tarjeta debe mostrarse
      if (showCard) {
        container.style.opacity = "1";
        container.style.transform = "translateY(0)";
      }
    }
  }

  // Verificar si se debe mostrar la tarjeta y realizar la animación en consecuencia
  if (showCard) {
    // Mostrar la tarjeta y actualizar el tiempo restante
    document.getElementById("time-card").style.display = "block";
    updateRemainingTime();
    // Iniciar la animación y actualizar el tiempo restante cada minuto
    requestAnimationFrame(animate);
    setInterval(updateRemainingTime, 60000);
  } else {
    // Si no se muestra la tarjeta, solo animar el progreso sin actualizaciones adicionales.
    document.getElementById("time-card").style.display = "none";
    requestAnimationFrame(animate);
  }
});











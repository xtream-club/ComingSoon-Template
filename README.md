# Plantilla ComingSoon Template

La plantilla ComingSoon es una página en construcción diseñada para que puedas informar a tus visitantes que estás trabajando en la mejora de tu sitio web o en un futuro lanzamiento. Es una solución sencilla y elegante que proporciona las siguientes características:

- Barra de progreso animada: Muestra el progreso de tu sitio web durante el mantenimiento.
- Logotipo personalizable: Puedes agregar tu propio logotipo para representar tu marca o sitio web.
- Tarjeta con tiempo restante: Opcionalmente, puedes mostrar una tarjeta que indica el tiempo restante hasta el lanzamiento oficial de tu sitio web.
- Integración de iconos de redes sociales: Incluye iconos de redes sociales para mantener a tus visitantes conectados contigo durante el mantenimiento.

## Cómo Usar

1. Descarga los archivos: Descarga los archivos `index.html`, `styles.css` y `script.js` desde este repositorio.

2. Agrega tu logotipo: Reemplaza el logotipo actual con tu propio logotipo. Asegúrate de nombrarlo como `logo_white.png` y colócalo en la misma ubicación que los archivos descargados.

3. Personaliza el porcentaje de progreso: En el archivo HTML (`index.html`), busca el siguiente código:

```html
<div class="container" data-progress="85" data-speed="3" data-show-card="true" data-target="2023-07-28">
```

Cambia el valor del atributo `data-progress` al porcentaje de progreso que desees mostrar. Por ejemplo, si el progreso es del 50%, cambia `data-progress="85"` a `data-progress="50"`.

4. Mostrar u ocultar la tarjeta con el tiempo restante: Puedes elegir si deseas mostrar o ocultar la tarjeta que indica el tiempo restante hasta el lanzamiento. Para ello, cambia el valor del atributo `data-show-card`. Si quieres mostrar la tarjeta, establece `data-show-card="true"`. Si prefieres ocultarla, cambia `data-show-card="true"` a `data-show-card="false"`.

5. Establecer la fecha objetivo (lanzamiento): Si decidiste mostrar la tarjeta con el tiempo restante, puedes establecer la fecha objetivo para el lanzamiento. Para ello, ajusta el atributo `data-target` en el contenedor principal (`div.container`). Utiliza el formato "año-mes-día". Por ejemplo, para el 28 de julio de 2023, establece `data-target="2023-07-28"`.

6. Personaliza el diseño (opcional): Si deseas personalizar el diseño, puedes modificar el archivo `styles.css`. En este archivo, encontrarás reglas CSS que definen los estilos de los elementos, como colores, tamaños, sombras, animaciones, etc.

7. Guarda los cambios: Después de personalizar la plantilla según tus preferencias, guarda los archivos.

8. Visualiza la plantilla: Abre el archivo `index.html` en tu navegador web para ver la página en construcción con tus modificaciones.

9. ¡Listo! Ahora tienes una página en construcción personalizada y lista para usar mientras trabajas en tu sitio web.

## Características

- Plantilla HTML única y sencilla.
- No contiene peso extra innecesario.
- Barra de progreso animada para mostrar el progreso del mantenimiento.
- Opción para mostrar u ocultar una tarjeta con el tiempo restante hasta el lanzamiento.
- Integración de logotipo personalizable para representar tu marca o sitio web.
- Iconos de redes sociales para mantener a tus visitantes conectados durante el mantenimiento.

## Contribución

Si deseas contribuir, ¡te damos la bienvenida! Si encuentras algún problema o tienes ideas para mejorar la plantilla, no dudes en abrir un "Issue" o enviar una "Pull Request".

## Licencia

Este proyecto está bajo la Licencia [MIT](LICENSE).

¡Esperamos que disfrutes utilizando la plantilla ComingSoon para crear una página en construcción llamativa y funcional para tu sitio web! Si tienes alguna pregunta o necesitas más ayuda, no dudes en contactarnos. ¡Buena suerte con tu proyecto! 🚀
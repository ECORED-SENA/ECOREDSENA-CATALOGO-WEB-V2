<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Carrusel de tarjetas
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-6
          img(src="@/assets/curso/temas/Carrusel.svg", alt="alt")
        .col-lg-6
          .crd.bg1.p-4.mb-4
            p.mb-0 El carrusel de tarjetas es un componente web que permite mostrar un grupo de tarjetas de manera secuencial. Las tarjetas están compuestas de iconos y/o imágenes acompañadas de texto.
          p Cuenta con una imagen general sobre el tema y cada tarjeta incluye un ícono (vector sin texto ni mayor detalle dado su tamaño). La interacción con el usuario se da en el momento que se desee avanzar en el carrusel para conocer la información completa. Es otra manera de seccionar información, pero en estas tarjetas se condensan datos muy concisos y pequeños:
          .row.justify-content-center.align-items-center.ps-3
            .col-lg-6
              ul.lista-ul--color
                li
                  i.lista-ul__vineta.txt--green
                  | Tips
                li
                  i.lista-ul__vineta.txt--green
                  | Datos
                li
                  i.lista-ul__vineta.txt--green
                  | Conceptos clave
                li
                  i.lista-ul__vineta.txt--green
                  | Principios
                li
                  i.lista-ul__vineta.txt--green
                  | Fundamentos
            .col-lg-6
              ul.lista-ul--color
                li
                  i.lista-ul__vineta.txt--green
                  | Causas
                li
                  i.lista-ul__vineta.txt--green
                  | Consecuencias /Efectos
                li
                  i.lista-ul__vineta.txt--green
                  | Ventajas
                li
                  i.lista-ul__vineta.txt--green
                  | Desventajas
      Separador
      .titulo-segundo.color-acento-contenido
        h2 Estructura del componente
      h3.titulo-tercero Tipo 1
      SlyderF.mb-4(columnas="col-lg-6 col-xl-4")
        .tarjeta.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/componentes/ej-05.svg' alt='')
          h2.text-center FIRST
          p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.
        .tarjeta.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/componentes/ej-05.svg' alt='')
          h2.text-center 2
          p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.
        .tarjeta.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/componentes/ej-05.svg' alt='')
          h2.text-center 3
          p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.
        .tarjeta.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/componentes/ej-05.svg' alt='')
          h2.text-center 4
          p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.
        .tarjeta.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/componentes/ej-05.svg' alt='')
          h2.text-center 5
          p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.
        .tarjeta.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/componentes/ej-05.svg' alt='')
          h2.text-center 6
          p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.
      .row.justify-content-center.mb-5
        .col-3
          a.boton.color-botones.texto-blanco(:href="obtenerLink('/downloads/t5/Carrusel.txt')" target="_blank" type="application/pdf")
            span Ver código fuente
      hr.my-5
      h3.titulo-tercero Tipo 2
      SlyderF.circl-arrow.mb-4(columnas="col-lg-6 col-xl-4")
        .tarjeta.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/componentes/ej-05.svg' alt='')
          h2.text-center FIRST
          p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.
        .tarjeta.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/componentes/ej-05.svg' alt='')
          h2.text-center 2
          p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.
        .tarjeta.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/componentes/ej-05.svg' alt='')
          h2.text-center 3
          p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.
        .tarjeta.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/componentes/ej-05.svg' alt='')
          h2.text-center 4
          p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.
        .tarjeta.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/componentes/ej-05.svg' alt='')
          h2.text-center 5
          p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.
        .tarjeta.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/componentes/ej-05.svg' alt='')
      .row.justify-content-center.mb-5
        .col-3
          a.boton.color-botones.texto-blanco(:href="obtenerLink('/downloads/t5/Carrusel2.txt')" target="_blank" type="application/pdf")
            span Ver código fuente
      .row.mb-5
        .col-lg-12.order-2.order-lg-1
          TabsA.color-acento-botones
            .tarjeta.clr--gris.p-4(titulo="Requerimientos de información")
              ul.lista-ul.mb-4
                li
                  i.fas.fa-angle-right.txt--green
                  | Titulo corto e ilustrativo (cuando aplica).
                li
                  i.fas.fa-angle-right.txt--green
                  | Cada tarjeta debe ir acompañada de un texto corto de máximo 35 palabras que acompañe a una  foto o ilustración.
                li
                  i.fas.fa-angle-right.txt--green
                  | Se permiten máximo 8 tarjetas por carrusel.

</template>

<script>
export default {
  name: 'Tema5',
  components: {},
  data: () => ({
    datosSlyder: [{}],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Infografía interactiva
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-6
          figure
            img(src="@/assets/curso/temas/infografia/presentaciones.svg", alt="alt")
        .col-lg-6
          .crd.bg1.p-4.mb-4
            p.mb-0 Este tipo de infografía se utilizará en el momento que se requiera o desee interacción con el usuario, ya que aquí se demanda una exploración activa en cada componente de la información presentada a partir de ventanas emergentes.
          p.mb-4 Tenemos dos tipos de infografía interactiva:
          ul.lista-ul--color.ps-3
            li
              i.lista-ul__vineta.txt--green
              | Infografía con puntos calientes
            li
              i.lista-ul__vineta.txt--green
              | Infografía con ventanas modales
      Separador
      #t_3_1.titulo-segundo.color-acento-contenido
        h2 3.1 Infografía puntos calientes
      ImagenInfografica.color-primario.mb-4
        template(v-slot:imagen)
          figure
            img(src='@/assets/template/img-placeholder.svg', alt='')
            figcaption Leyenda de la imagen
        .tarjeta.color-acento-botones.p-3(x="20%" y="20%" numero="1")
          .h5.mb-2 titulo
          p.mb-0 Lorem ipsum dolor Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus
        .tarjeta.color-acento-botones.p-3(x="50%" y="50%" numero="A")
          .h5.mb-2 titulo
          p.mb-0 Lorem ipsum dolor ddasdasd asdasd asdasd a asd sd asdasd sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus
        .tarjeta.color-acento-botones.p-3(x="70%" y="70%" numero="B")
          .h5.mb-2 titulo
          p.mb-0 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus
      .row.justify-content-center.mb-5.me-3
        .col-auto
          a.boton.color-borones.texto-blanco(:href="obtenerLink('/downloads/t3/Infografia_puntos_calientes.txt')" target="_blank" type="application/pdf")
            span Ver código fuente
      .row.mb-5
        .col-lg-12.order-2.order-lg-1
          TabsA.color-acento-botones
            .tarjeta.clr--gris.p-4(titulo="Requerimientos de información")
              p Las infografías puntos calientes están conformadas por cuatro componentes básicos:
              ul.lista-ul.mb-4
                li
                  i.fas.fa-angle-right.txt--green
                  | Título corto de máximo 7 palabras
                li
                  i.fas.fa-angle-right.txt--green
                  | #[strong Texto descriptivo]: colocar una breve descripción del tema que se aborda en la infografía.
                li
                  i.fas.fa-angle-right.txt--green
                  | #[strong Imagen de referencia]: describir y/o colocar una imagen de referencia, de la infografía solicitada.
                li
                  i.fas.fa-angle-right.txt--green
                  | #[strong Puntos calientes]: título y texto que se despliega en cada punto interactivo. #[strong (MÁXIMO 10 PUNTOS INTERACTIVOS)]
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido
        h2 3.2  Infografía ventanas modales
      ImagenInfograficaB.color-primario.mb-4
        template(v-slot:imagen)
          figure
            img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
            figcaption Leyenda de la imagen
        div(x="20%" y="20%" tooltip="tooltip de max 35 caracteres" numero="1")
          h5 titulo
          p Lorem ipsum dolor Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus
          p Lorem ipsum dolor Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus
          p Lorem ipsum dolor Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus
        div(x="50%" y="50%" tooltip="tooltip de max 35 caracteres")
          .h5.mb-2 titulo
          p Lorem ipsum dolor ddasdasd asdasd asdasd a asd sd asdasd sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus
        div(x="70%" y="70%" tooltip="tooltip de max 35 caracteres")
          .h5.mb-2 titulo
          p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus
      .row.justify-content-center.mb-5.me-3
        .col-auto
          a.boton.color-botones.texto-blanco.b--rad(:href="obtenerLink('/downloads/t3/Infografia_ventanas_modales.txt')" target="_blank" type="application/pdf")
            span Ver código fuente
      .row.mb-5
        .col-lg-12.order-2.order-lg-1
          TabsA.color-acento-botones
            .tarjeta.clr--gris.p-4(titulo="Requerimientos de información")
              ul.lista-ul.mb-4
                li
                  i.fas.fa-angle-right.txt--green
                  | Título corto de máximo 8 palabras
                li
                  i.fas.fa-angle-right.txt--green
                  | #[strong Texto descriptivo]: colocar una breve descripción del tema que se aborda en la infografía.
                li
                  i.fas.fa-angle-right.txt--green
                  | #[strong Imagen de referencia]: describir y/o colocar una imagen de referencia, de la infografía solicitada.
                li
                  i.fas.fa-angle-right.txt--green
                  | #[strong Puntos modales]: título y texto que se despliega en cada punto interactivo. #[strong (MÁXIMO 12 PUNTOS MODALES)]

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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

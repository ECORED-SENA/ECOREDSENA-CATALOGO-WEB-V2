<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 6
        h1 Acordeón
      .row.justify-content-center.align-items-center
        .col-lg-6
          figure
            img(src="@/assets/curso/temas/Acordeon.svg", alt="alt")
        .col-lg-6
          .crd.bg1.p-4.mb-4
            p.mb-0 Un acordeón está formado por regiones desplegables que permiten mostrar u ocultar contenido pulsando sobre un botón.
          p Es un recurso que a simple vista no ocupa mayor espacio dado que la información está oculta dentro de botones desplegables. Consta de una imagen general al tema acompañada de las respectivas explicaciones.  
          p Ya que no demanda una imagen para cada botón puede usarse en caso de contar con una explicación muy grande, seccionada en subtítulos, igualmente para tipificaciones, fases, etapas, pasos o procedimientos con definiciones grandes.  
          p Su uso se recomienda cuando las secciones están estrechamente relacionadas con la introducción y se hace necesario que esta esté hilada constantemente.
      Separador
      #t_6_1.titulo-segundo.color-acento-contenido
        h2 6.1 Acordeón (con viñeta en la izquierda) - tipo 1
      AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
        .row(titulo="Titulo item 1")
          .col-md-6.mb-4.mb-md-0
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen
        div(titulo="Titulo item 2")
          figure
            img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
            figcaption Leyenda de la imagen
      .row.mb-3
        .col-lg-12.order-2.order-lg-1
          TabsA.color-acento-botones
            .tarjeta.clr--gris.p-4(titulo="Requerimientos de información")
              ul.lista-ul.mb-4
                li
                  i.fas.fa-angle-right.txt--green
                  | Titulo corto de máximo 8 palabras
                li
                  i.fas.fa-angle-right.txt--green
                  | Cada opción del acordeón debe ir acompañada de un texto de máximo 60 palabras y puede ir acompañado de una  foto o ilustración.
      Separador
      #t_6_2.titulo-segundo.color-acento-contenido
        h2 6.2 Acordeón (con viñeta en la derecha) - tipo 2
      AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
        .row(titulo="Titulo item 1")
          .col-md-6.mb-4.mb-md-0
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen  
        .row(titulo="Titulo item 2")
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen  
          .col-md-6.mb-4.mb-md-0
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      .row
        .col-lg-12.order-2.order-lg-1
          TabsA.color-acento-botones
            .tarjeta.clr--gris.p-4(titulo="Requerimientos de información")
              ul.lista-ul.mb-4
                li
                  i.fas.fa-angle-right.txt--green
                  | Titulo corto de máximo 8 palabras
                li
                  i.fas.fa-angle-right.txt--green
                  | Cada opción del acordeón debe ir acompañada de un texto de máximo 60 palabras y puede ir acompañado de una  foto o ilustración.
      Separador
      #t_6_3.titulo-segundo.color-acento-contenido
        h2 6.3 Acordeón con numeral / pasos
      LineaTiempoD.color-secundario
        .row(numero="1" titulo="Praesent luctus")
          .col-12
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
            ol.lista-ol--cuadro
              li.d-flex
                .lista-ol--cuadro__vineta.v--green
                  span 1
                |
                p.mb-0 Item lista ordenada 1
              li.d-flex
                .lista-ol--cuadro__vineta.v--green
                  span 2
                |
                p.mb-0 Item lista ordenada 2
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-brain.txt--green
                |
                p.mb-0 Item lista no ordenada
              li.d-flex
                ul
                  li.d-flex
                    i.fas.fa-bug.txt--green
                    |
                    p.mb-0 Item lista no ordenada
                  li.d-flex
                    i.fas.fa-car-side.txt--green
                    |
                    p.mb-0 Item lista no ordenada
        .row(numero="2" titulo="Praesent luctus")
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen
          .col-md-6.mb-4.mb-md-0
            pl This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      hr
      .row.justify-content-center.align-items-top.mb-4
        .col-md-4.mb-5.mb-md-0
          img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')  
        .col-md-8.mb-5.mb-md-0
          LineaTiempoD.color-primario
            .row(numero="1" titulo="Praesent luctus")
              .col-md-6.mb-4.mb-md-0
                p.text-small This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
              .col-md-6
                figure
                  img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                  figcaption Leyenda de la imagen  
            .row(numero="2" titulo="Praesent luctus")
              .col-md-6
                figure
                  img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                  figcaption Leyenda de la imagen
              .col-md-6.mb-4.mb-md-0
                p.text-small This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.  
            .row(numero="3" titulo="Praesent luctus")
              .col-md-6
                figure
                  img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                  figcaption Leyenda de la imagen
              .col-md-6.mb-4.mb-md-0
                p.text-small This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      .row.mb-5
        .col-lg-12.order-2.order-lg-1
          TabsA.color-acento-botones
            .tarjeta.clr--gris.p-4(titulo="Requerimientos de información")
              ul.lista-ul.mb-4
                li
                  i.fas.fa-angle-right.txt--green
                  | Titulo corto de máximo 8 palabras asociado a un numeral
                li
                  i.fas.fa-angle-right.txt--green
                  | Cada opción del acordeón debe ir acompañada de un texto de máximo 45 palabras y puede ir acompañado de una  foto o ilustración.

</template>

<script>
export default {
  name: 'Tema6',
  components: {},
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

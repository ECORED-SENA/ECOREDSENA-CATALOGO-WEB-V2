<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Slider de diapositivas
      .row.justify-content-center.align-items-center.mb-3
        .col-lg-6
          figure
            img(src="@/assets/curso/temas/Diapositivas.svg", alt="alt")
        .col-lg-6
          .crd.bg1.p-4.mb-4
            p.mb-0 El Slider de diapositivas es un componente web que permite representar de manera secuencial múltiples escenas o diapositivas, las cuales están compuestas de imágenes y texto. En algunos casos se puede hacer uso de componentes interactivos sencillos dentro de cada una de las diapositivas.
          p Son interactivas con el usuario dado que se requiere que éste deslice la información manualmente permitiendo así que pueda tomarse su tiempo para leer, comprender y regresar a una información anterior en el momento que lo crea conveniente.
          p.mb-4 Su uso está determinado por la extensión del tema o cuando hay:
          ul.lista-ul--color.ps-3
            li
              i.lista-ul__vineta.txt--green
              | Tópicos y subtópicos
            li
              i.lista-ul__vineta.txt--green
              | Secuencia, sucesos o casos
            li
              i.lista-ul__vineta.txt--green
              | Secciones
            li
              i.lista-ul__vineta.txt--green
              | Procedimientos
            li
              i.lista-ul__vineta.txt--green
              | Narraciones o historias
      Separador
      #t_4_1.titulo-segundo.color-acento-contenido
        h2 4.1 Slide navegación simple
      p.mb-5 Provee mayor espacio para la explicación textual así que es óptima para la definición de conceptos completos y extensos. No se asocia a pasos específicos o tipificaciones sino que puede abarcar una temática completa dividida en secciones.
      h3.titulo-tercero Opción 1 - Tipo a
      .tarjeta-slyder-a.tarjeta--azul.p-4.pb-0.mb-4
        SlyderA.pb-lg-5.pb-3(tipo="a")
          .row.justify-content-center.align-items-center.my-lg-4.mb-5
            .col-md-5.mb-4.mb-md-0
              p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
            .col-md-5
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la imagen
          .row.justify-content-center.align-items-center.my-lg-4.mb-5
            .col-md-5
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la imagen
            .col-md-5.mb-4.mb-md-0
              p This is another paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      hr.my-5
      h3.titulo-tercero Opción 1 - Tipo b
      .tarjeta.tarjeta--azul.p-4.mb-4
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-6.mb-4.mb-md-0
              p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
            .col-md-6
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la imagen
          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-6
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la imagen
            .col-md-6.mb-4.mb-md-0
              p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      .row.mb-5.mt-5
        .col-lg-12.order-2.order-lg-1
          TabsA.color-acento-botones
            .tarjeta.clr--gris.p-4(titulo="Requerimientos de información")
              ul.lista-ul.mb-0
                li
                  i.fas.fa-angle-right.txt--green
                  | Título o subtítulo de la temática que se aborda en las diapositivas
                li
                  i.fas.fa-angle-right.txt--green
                  | Se permite un máximo de 8 diapositivas.
                li
                  i.fas.fa-angle-right.txt--green
                  | Por cada diapositiva debe ir un texto de máximo 80 palabras.
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido
        h2 4.2 Slide navegación con numerales
      p Ideal para textos cortos, bien sea para un procedimiento, una historia, definiciones pequeñas o características puntuales. También podría usarse para plantear ejemplos cuando una situación o temática tiene diferentes variables.
      p La composición gráfica puede tomar el protagónico siendo muy explicativa. Los pasos irán numerados, no nombrados.
      p.mb-4 Se recomienda usar máximo 10 pasos y mínimo 4.
      .tarjeta.tarjeta--gris.p-4.mb-4
        PasosB.color-primario
          .row(titulo="")
            .col-md-6.mb-4.mb-md-0
              p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
            .col-md-6
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la imagen
          .row(titulo="")
            .col-md-6
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la imagen
            .col-md-6.mb-4.mb-md-0
              p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      .row.mb-3
        .col-lg-12.order-2.order-lg-1
          TabsA.color-acento-botones
            .tarjeta.clr--gris.p-4(titulo="Requerimientos de información")
              ul.lista-ul.mb-0
                li
                  i.fas.fa-angle-right.txt--green
                  | Título o subtítulo de la temática que se aborda en las diapositivas
                li
                  i.fas.fa-angle-right.txt--green
                  | Se permite un máximo de 8 diapositivas.
                li
                  i.fas.fa-angle-right.txt--green
                  | Por cada diapositiva debe ir un texto de máximo 80 palabras.
      Separador
      #t_4_3.titulo-segundo.color-acento-contenido
        h2 4.3 Slide navegación con títulos
      p.mb-4 Es para textos un poco más extensos que en el tipo anterior y la imagen puede ser más ilustrativa. Ideal para explicar fases, etapas, acontecimientos (línea de tiempo) o procedimientos. Cada diapositiva tendrá un nombre referente a su contenido. Se recomienda usar máximo 10 pasos y mínimo 4.
      h3.titulo-tercero Opción 1
      .tarjeta.tarjeta--gris.p-4.mb-4
        PasosB.color-acento-contenido
          .row(titulo="Titulo 1")
            .col-md-6.mb-4.mb-md-0
              p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
            .col-md-6
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la imagen
          .row(titulo="Titulo 2")
            .col-md-6
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la imagen
            .col-md-6.mb-4.mb-md-0
              p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      hr.my-5
      h3.titulo-tercero Opción 2
      .tarjeta.tarjeta--gris.p-4.mb-4
        LineaTiempoC.color-acento-contenido(text-small)
          .row(titulo="Titulo 3")
            .col-md-6.mb-4.mb-md-0
              p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
            .col-md-6
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la imagen
          .row(titulo="Titulo 4")
            .col-md-6
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la imagen
            .col-md-6.mb-4.mb-md-0
              p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      .row.mb-5
        .col-lg-12.order-2.order-lg-1
          TabsA.color-acento-botones
            .tarjeta.clr--gris.p-4(titulo="Requerimientos de información")
              ul.lista-ul.mb-0
                li
                  i.fas.fa-angle-right.txt--green
                  | Título o subtítulo de la temática que se aborda en las diapositivas
                li
                  i.fas.fa-angle-right.txt--green
                  | Se permite un máximo de 8 diapositivas.
                li
                  i.fas.fa-angle-right.txt--green
                  | Por cada diapositiva debe ir un texto de máximo 80 palabras.
                li
                  i.fas.fa-angle-right.txt--green
                  | Se debe incluir un título en la navegación de la diapositiva de máximo 3 palabras.

</template>

<script>
export default {
  name: 'Tema4',
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

<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 9
        h1 Rutas - Pasos
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-6
          figure
            img(src="@/assets/curso/temas/Pasos.svg", alt="alt")
        .col-lg-6
          .crd.bg1.p-4.mb-4
            p.mb-0 El Slider de diapositivas es un componente web que permite representar de manera secuencial múltiples escenas o diapositivas, las cuales están compuestas de imágenes y texto. En algunos casos se puede hacer uso de componentes interactivos sencillos dentro de cada una de las diapositivas.  
          p Es un recurso similar al de acordeón, presenta la información en modales que se ocultan en el momento que se despliega una nueva información, es decir, siempre se va a presentar la información de uno de los modales. Algunos usos pueden darse en:
          .row.justify-content-center.align-items-center.ps-3
            .col-lg-6
              ul.lista-ul--color
                li
                  i.lista-ul__vineta.txt--green
                  | Procesos
                li
                  i.lista-ul__vineta.txt--green
                  | Secuencias
                li
                  i.lista-ul__vineta.txt--green
                  | Tipificaciones
            .col-lg-6
              ul.lista-ul--color
                li
                  i.lista-ul__vineta.txt--green
                  | Secciones
                li
                  i.lista-ul__vineta.txt--green
                  | Criterios
                li
                  i.lista-ul__vineta.txt--green
                  | Clasificaciones
            p Cuenta con nomenclatura en cada uno de los párrafos con literales o numerales, así que también puede usarse si contamos con un listado.
      Separador
      #t_9_1.titulo-segundo.color-acento-contenido
        h2 9.1 Pasos - verticales
      h3.titulo-tercero Tipo 1
      LineaTiempoD.color-primario.mb-4
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
      .row.justify-content-center.mb-5
        .col-auto
          a.boton.color-botones.texto-blanco(:href="obtenerLink('/downloads/t9/LineaTiempoD.txt')" target="_blank" type="application/pdf")
            span Ver código fuente
      TabsA.color-acento-botones
        .tarjeta.clr--gris.p-4(titulo="Requerimientos de información")
          ul.lista-ul.mb-4
            li
              i.fas.fa-angle-right.txt--green
              | Titulo corto de máximo 6 palabras
            li
              i.fas.fa-angle-right.txt--green
              | Cada bloque debe ir acompañado de un texto corto de máximo 50 palabras y de una  foto o ilustración.
      hr.my-5
      h3.titulo-tercero Tipo 2
      PasosA.color-acento-botones.mb-4(tipo="n")
        .row
          .col-md-6.mb-4.mb-md-0
            h5 Lorem ipsum dolor sit amet.
            p This is another paragraph. I think it needs to be added that the set of elements tested is
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la Imagen
          .col-md-6
            h5 Nullam vulputate mauris eros, ut.
            p This is another paragraph. I think it needs to be added that the set of elements tested
      .row.justify-content-center.mb-5
        .col-auto
          a.boton.color-botones.texto-blanco(:href="obtenerLink('/downloads/t9/PasosA.txt')" target="_blank" type="application/pdf")
            span Ver código fuente
      TabsA.color-acento-botones
        .tarjeta.clr--gris.p-4(titulo="Requerimientos de información")
          ul.lista-ul.mb-4
            li
              i.fas.fa-angle-right.txt--green
              | Titulo corto de máximo 6 palabras
            li
              i.fas.fa-angle-right.txt--green
              | Cada bloque debe ir acompañado de un texto corto de máximo 50 palabras y de una  foto o ilustración.
      Separador      
      #t_9_2.titulo-segundo.color-acento-contenido
        h2 9.2 Pasos - horizontales
      .tarjeta.tarjeta--gris.p-4.mb-4
        PasosB.color-primario
          .row(titulo="Palabra")
            .col-md-6.mb-4.mb-md-0
              p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
            .col-md-6
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la imagen    
          .row(titulo="I think it needs to be")
            .col-md-6.mb-4.mb-md-0
              p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
            .col-md-6
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la imagen
      .row.justify-content-center.mb-5
        .col-auto
          a.boton.color-botones.texto-blanco(:href="obtenerLink('/downloads/t9/PasosB.txt')" target="_blank" type="application/pdf")
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
                  | Cada diapositiva debe ir acompañada de un texto corto que acompañe a una  foto o ilustración.

</template>

<script>
export default {
  name: 'Tema9',
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

<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 8
        h1 Líneas de tiempo
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-6
          figure
            img(src="@/assets/curso/temas/Linea_tiempo.svg", alt="alt")
        .col-lg-6
          .crd.bg1.p-4.mb-4
            p.mb-0 Una línea del tiempo es una representación gráfica de una secuencia cronológica de los eventos de una historia, proceso o narración. Las líneas del tiempo, que se presentan en formato horizontal o vertical, les brinda a los usuarios un medio simplificado para comprender cómo los distintos eventos, personas y acciones desempeñaron un rol, o lo desempeñarán, en un proceso o período determinado. Las líneas del tiempo también se pueden combinar con texto y gráficos para producir infografías, que sirven para presentar fácilmente estadísticas, eventos históricos y otra información.
          p Se presenta la información en una secuencia lineal aportando datos específicos y concretos (con la posibilidad de estar cronológicamente organizados) acompañados, cada uno, de una imagen o ícono. En este recurso es posible clasificar la información a partir de: 
          .row.justify-content-start.align-items-center.ps-3
            .col-lg-6        
              ul.lista-ul--color      
                li
                  i.lista-ul__vineta.txt--green
                  | Palabras clave 
                li
                  i.lista-ul__vineta.txt--green
                  |  Periodos de tiempo 
                li
                  i.lista-ul__vineta.txt--green
                  | Etapas 
                li
                  i.lista-ul__vineta.txt--green
                  | Fases             
      Separador
      #t_8_1.titulo-segundo.color-acento-contenido
        h2 8.1 Línea de tiempo - vertical
      //h3.titulo-tercero Tipo 1
      LineaTiempoE.color-primario.mb-3
        .row(titulo="2014 - Present" subtitulo="Title, Company")
          .col-lg-6.mb-4.mb-lg-0
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
          .col-lg-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen
        .row(titulo="2014 - Present" subtitulo="Title, Company")
          .col-lg-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen      
          .col-lg-6.mb-4.mb-lg-0
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      .row.justify-content-center.mb-5
        .col-auto
          a.boton.color-botones.texto-blanco(:href="obtenerLink('/downloads/t8/LineaTiempoE.txt')" target="_blank" type="application/pdf")
            span Ver código fuente
      .row.mb-5
        .col-lg-12.order-2.order-lg-1
          TabsA.color-acento-botones       
            .tarjeta.clr--gris.p-4(titulo="Requerimientos de información")
              p Las líneas del tiempo están conformados por cuatro componentes básicos:
              ul.lista-ul.mb-4
                li 
                  i.fas.fa-angle-right.txt--green
                  | Fechas: Marcar cuando un evento específico tiene lugar en una línea del tiempo.
                li 
                  i.fas.fa-angle-right.txt--green
                  | Descripciones: Describir un evento determinado.
                li 
                  i.fas.fa-angle-right.txt--green
                  | Encabezados (opcionales): Aportan más contexto en una línea del tiempo cuando se los agrega junto con una descripción.
                li 
                  i.fas.fa-angle-right.txt--green
                  | Imágenes (optativas): Añaden interés gráfico e información adicional.
      Separador
      #t_8_2.titulo-segundo.color-acento-contenido
        h2 8.2 Línea de tiempo - horizontal
      .tarjeta.tarjeta--gris.p-4.mb-4
        LineaTiempoC.color-acento-contenido(text-small)
          .row(titulo="1761")
            .col-md-6.mb-4.mb-md-0
              p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.          
            .col-md-6
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la imagen    
          .row(titulo="1798")
            .col-md-6.mb-4.mb-md-0
              p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.        
            .col-md-6
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la imagen  
          .row(titulo="1887")
            .col-md-6.mb-4.mb-md-0
              p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.          
            .col-md-6
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la imagen
      .row.justify-content-center.mb-5
        .col-auto
          a.boton.color-botones.texto-blanco(:href="obtenerLink('/downloads/t8/LineaTiempoC.txt')" target="_blank" type="application/pdf")
            span Ver código fuente
      .row.mb-5
        .col-lg-12.order-2.order-lg-1
          TabsA.color-acento-botones       
            .tarjeta.clr--gris.p-4(titulo="Requerimientos de información")
              p Las líneas del tiempo están conformados por cuatro componentes básicos:
              ul.lista-ul.mb-4
                li 
                  i.fas.fa-angle-right.txt--green
                  | Fechas: Marcar cuando un evento específico tiene lugar en una línea del tiempo.
                li 
                  i.fas.fa-angle-right.txt--green
                  | Descripciones: Describir un evento determinado.
                li 
                  i.fas.fa-angle-right.txt--green
                  | Encabezados (opcionales): Aportan más contexto en una línea del tiempo cuando se los agrega junto con una descripción.
                li 
                  i.fas.fa-angle-right.txt--green
                  | Imágenes (optativas): Añaden interés gráfico e información adicional.

</template>

<script>
export default {
  name: 'Tema8',
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

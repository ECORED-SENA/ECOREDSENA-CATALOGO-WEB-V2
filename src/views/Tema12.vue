<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 12
        h1 Videos
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-6
          figure
            img(src="@/assets/curso/temas/Video.svg", alt="alt")
        .col-lg-6
          .crd.bg1.p-4.mb-4
            p Cada tema relacionado en los contenidos de un recurso educativo digital puede incluir el desarrollo de los siguientes tipos de recursos audiovisuales: #[strong Spot animado, motion graphics y video clases.]
          p.mb-0 Se realizan #[strong videos temáticos] para reforzar la explicación de tema o concepto del recurso educativo digital y también #[strong videos de oferta] para hacerle publicidad al programa  que se está desarrollando.
      .row
        .col-lg-12.order-2.order-lg-1
          TabsA.color-acento-botones
            .tarjeta.clr--gris.p-4(titulo="Tipos de recursos audiovisuales")
              ul.lista-ul.mb-4
                li
                  i.fas.fa-angle-right.txt--green
                  | Spot animado, incluye la animación de personajes utilizando técnicas tradicionales de animación 2d.
                li
                  i.fas.fa-angle-right.txt--green
                  | Motion graphics, incluyen: animación de imágenes, recursos fotográficos y material pregrabado de audio y video.
                li
                  i.fas.fa-angle-right.txt--green
                  | Video clase, se genera a partir de un video el que el experto temático presenta pantalla con un tema específico o tutorial  y desde el equipo de producción se realizan las actividades de edición de video que incluye procesos como musicalización, limpieza de audio y adición de cortinillas intro/outro.
                li
                  i.fas.fa-angle-right.txt--green
                  | Live Action video en ambientes de aprendizaje y trabajo en exteriores, producción audiovisual generalmente realizada en un ambiente de aprendizaje donde están ubicadas los equipos, mesas de trabajo y/o maquinaria. Se requiere agendar con anticipación las jornadas de grabación.
              p.mb-0 #[strong Para la realización de los anteriores recursos audiovisuales se sugiere entregar solamente el guion con las indicaciones pertinentes y a partir del mismo el equipo de producción define el tipo de video a desarrollar.]
      Separador
      #t_12_1.titulo-segundo.color-acento-contenido
        h2 12.1 Video - Spot animado
      TabsA.color-acento-botones.mb-5
        .tarjeta.color-acento-botones--borde.p-4(titulo="Ejemplo - 1")
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/3KDDv2LrIcE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        .tarjeta.color-acento-botones--borde.p-4(titulo="Ejemplo - 2")
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/-rq4_7xgFLM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        .tarjeta.color-acento-botones--borde.p-4(titulo="Ejemplo - 3")
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/cCxnzKy-hLU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        .tarjeta.color-acento-botones--borde.p-4(titulo="Ejemplo - 4")
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/8gZTBdLt_IM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        .tarjeta.color-acento-botones--borde.p-4(titulo="Ejemplo - 5")
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/MbPhrvkKgH0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .row
        .col-lg-12.order-2.order-lg-1
          TabsA.color-acento-botones
            .tarjeta.clr--gris.p-4(titulo="Requerimientos del guion")
              ul.lista-ul.mb-0
                li
                  i.fas.fa-angle-right.txt--green
                  | El guion debe tener una extensión de máximo 500 palabras (ó 24 líneas de texto en arial 12) que equivalen a 3 minutos, ya que 1 minuto equivale a 166 palabras.
                li
                  i.fas.fa-angle-right.txt--green
                  | Se sugiere que este segmentado por escenas, cada escena con un texto de máximo 25 palabras y dejar palabras destacadas en negrilla.
                li
                  i.fas.fa-angle-right.txt--green
                  | La información debe ser explicada de forma clara y sencilla, que se pueda dar a nivel visual, para esto se requiere imágenes o analogías que aclaren aun concepto cercano.
                li
                  i.fas.fa-angle-right.txt--green
                  | El texto debe estar de forma editable no en imagen, de manera que se pueda copiar y pegar.
                li
                  i.fas.fa-angle-right.txt--green
                  | Si el guion trae tablas no deben ser complejas ni muy largas, dada la naturaleza del recurso.  
      Separador
      #t_12_2.titulo-segundo.color-acento-contenido
        h2 12.2 Video - Motion Graphics
      TabsA.color-acento-botones.mb-5
        .tarjeta.color-acento-botones--borde.p-4(titulo="Ejemplo - 1")
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        .tarjeta.color-acento-botones--borde.p-4(titulo="Ejemplo - 2")
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/8EuGaDjVbjA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)  
        .tarjeta.color-acento-botones--borde.p-4(titulo="Ejemplo - 3")
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/Z9zSnDD46IU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        .tarjeta.color-acento-botones--borde.p-4(titulo="Ejemplo - 4")
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/-G8D2UP9ZiY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)  
        .tarjeta.color-acento-botones--borde.p-4(titulo="Ejemplo - 5")
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/GXTHrucLiac" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)  
      .row.mb-5
        .col-lg-12.order-2.order-lg-1
          TabsA.color-acento-botones
            .tarjeta.clr--gris.p-4(titulo="Requerimientos del guion")
              ul.lista-ul.mb-0
                li
                  i.fas.fa-angle-right.txt--green
                  | Se debe especificar el nombre del experto temático.
                li
                  i.fas.fa-angle-right.txt--green
                  | Todo material de apoyo debe estar realizado en la plantilla institucional - SENA.
                li
                  i.fas.fa-angle-right.txt--green
                  | Los contenidos pertenecientes al material de apoyo deben tener una correcta ortografía, ser legibles y que presenten un  buen uso del color (evitar colores muy contrastantes).
                li
                  i.fas.fa-angle-right.txt--green
                  | Señalar términos o palabras destacadas en negrilla para resaltarlas en pantalla.
                li
                  i.fas.fa-angle-right.txt--green
                  | El material de apoyo deberá ser entregado al equipo de Diseño y Desarrollo RED.
                li
                  i.fas.fa-angle-right.txt--green
                  | Los videos deben ser entregados sin edición alguna, es decir, sin agregar textos, música de fondo, animaciones, etc.  
                li
                  i.fas.fa-angle-right.txt--green
                  | Calidad de video: FHD - 1920*1080. Software recomendado OBS Studio.
      #t_12_3.titulo-segundo.color-acento-contenido
        h2 12.3 Video Clase / Video tutorial
      TabsA.color-acento-botones.mb-5
        .tarjeta.color-acento-botones--borde.p-4(titulo="Ejemplo - 1")
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/1p9t9ymdH6Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)  
        .tarjeta.color-acento-botones--borde.p-4(titulo="Ejemplo - 2")
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/mgvJvJ_OO2o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)  
        .tarjeta.color-acento-botones--borde.p-4(titulo="Ejemplo - 3")
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/j_4Cm4ZZWQ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)  
        .tarjeta.color-acento-botones--borde.p-4(titulo="Ejemplo - 4")
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/xkfoHMVK2Ak" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .row.mb-5
        .col-lg-12.order-2.order-lg-1
          TabsA.color-acento-botones
            .tarjeta.clr--gris.p-4(titulo="Pautas para grabar contenido desde casa")
              ul.lista-ul.mb-0
                li
                  i.fas.fa-angle-right.txt--green
                  | Se debe especificar el nombre del experto temático.
                li
                  i.fas.fa-angle-right.txt--green
                  | Todo material de apoyo debe estar realizado en la plantilla institucional - SENA.
                li
                  i.fas.fa-angle-right.txt--green
                  | Los contenidos pertenecientes al material de apoyo deben tener una correcta ortografía, ser legibles y que presenten un  buen uso del color (evitar colores muy contrastantes).
                li
                  i.fas.fa-angle-right.txt--green
                  | Señalar términos o palabras destacadas en negrilla para resaltarlas en pantalla.
                li
                  i.fas.fa-angle-right.txt--green
                  | El material de apoyo deberá ser entregado al equipo de Diseño y Desarrollo RED.
                li
                  i.fas.fa-angle-right.txt--green
                  | Los videos deben ser entregados sin edición alguna, es decir, sin agregar textos, música de fondo, animaciones, etc.
                li
                  i.fas.fa-angle-right.txt--green
                  | Calidad de video: FHD - 1920*1080. Software recomendado OBS Studio.
      #t_12_4.titulo-segundo.color-acento-contenido
        h2 12.4 Video Información del programa
      .row.justify-content-center
        .col-lg-11
          .crd.crd--border.p-4
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/jASywqOHrQM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .row.my-5
        .col-lg-12.order-2.order-lg-1
          TabsA.color-acento-botones
            .tarjeta.clr--gris.p-4(titulo="Pautas para grabar contenido desde casa")
              ul.lista-ul.mb-0
                li
                  i.fas.fa-angle-right.txt--green
                  | Es un video cuyo objetivo es vender el programa y motivar a la persona a inscribirse.
                li
                  i.fas.fa-angle-right.txt--green
                  | El guión tiene 5 momentos: Saludo, ¿Qué aprenderá el estudiante?, ¿Qué ocupaciones puede desempeñar como egresado?, Duración en meses del programa (si es técnico 15 meses si es tecnólogo 27 meses) o en horas si es complementario y Despedida invitando a inscribirse.
                li
                  i.fas.fa-angle-right.txt--green
                  | Señalar términos o palabras destacadas en negrilla para resaltarlas en pantalla.

</template>

<script>
export default {
  name: 'Tema12',
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

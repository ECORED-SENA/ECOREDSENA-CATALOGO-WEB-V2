<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 10
        h1 Tarjetas
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-6
          figure
            img(src="@/assets/curso/temas/Tarjetas.svg", alt="alt")
        .col-lg-6
          .crd.bg1.p-4.mb-4
            p.mb-0 Las tarjetas se utilizan para agrupar varios contenidos dentro de un contenedor que se puede replicar de manera modular en el contenido del sitio web.
          p Es un forma de seccionar información un poco más amplia que en el carrusel de tarjetas, aunque igualmente se debe ser concreto en la explicación. Al ser tarjetas su intencionalidad está enfocada a dar un dato o definición específica, que el usuario pueda llevarse ese dato fácilmente en su memoria o asociarlo a un hecho rápidamente, puede usarse para:
          .row.justify-content-start.align-items-center.ps-3
            .col-lg-6
              ul.lista-ul--color
                li
                  i.lista-ul__vineta.txt--green
                  | Definir roles específicos
                li
                  i.lista-ul__vineta.txt--green
                  | Aclaraciones y excepciones
                li
                  i.lista-ul__vineta.txt--green
                  | Caracterizaciones
                li
                  i.lista-ul__vineta.txt--green
                  | Ventajas y desventajas
            .col-lg-6
              ul.lista-ul--color
                li
                  i.lista-ul__vineta.txt--green
                  | Datos curiosos
                li
                  i.lista-ul__vineta.txt--green
                  | Explicaciones pequeñas y concretas
                li
                  i.lista-ul__vineta.txt--green
                  | Resultados
                li
                  i.lista-ul__vineta.txt--green
                  | Estadísticas
      Separador
      #t_10_1.titulo-segundo.color-acento-contenido
        h2 10.1 Tarjetas - avatar
      h3.titulo-tercero Tipo 1
      .row.no-pointer.mb-4
        .col-sm-6.col-lg-3.mb-4.mb-lg-0
          .tarjeta--boton.color-primario.p-4
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/componentes/ej-05.svg', alt='Texto que describa la imagen')
            h3.text-center Intuition important
            p.text-center.mb-0 Sed ut perspiciatis unde omnis iste natus error sit vtatem accusa ntium dol.  
        .col-sm-6.col-lg-3.mb-4.mb-lg-0
          .tarjeta--boton.color-secundario.p-4
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/componentes/ej-05.svg', alt='Texto que describa la imagen')  
            h3.text-center Intuition important
            p.text-center.mb-0 Sed ut perspiciatis unde omnis iste natus error sit vtatem accusa ntium dol.  
        .col-sm-6.col-lg-3.mb-4.mb-sm-0
          .tarjeta--boton.color-acento-contenido.text-white--hover.p-4
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/componentes/ej-05.svg', alt='Texto que describa la imagen')  
            h3.text-center Intuition important
            p.text-center.mb-0 Sed ut perspiciatis unde omnis iste natus error sit vtatem accusa ntium dol.  
        .col-sm-6.col-lg-3
          .tarjeta--boton.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/componentes/ej-05.svg', alt='Texto que describa la imagen')  
            h3.text-center Intuition important
            p.text-center.mb-0 Sed ut perspiciatis unde omnis iste natus error sit vtatem accusa ntium dol.
      .row.justify-content-center.mb-5
        p.text-center.fst-italic #[strong Nota:] Revisar los estilos para quitar el cursor pointer
        .col-auto          
          a.boton.color-botones.texto-blanco(:href="obtenerLink('/downloads/t10/Tarjetas_avatar.txt')" target="_blank" type="application/pdf")
            span Ver código fuente
      hr.my-5
      h3.titulo-tercero Tipo 2
      .row
        .col-lg-6
          .tarjeta-avatar-b.mb-4
            .tarjeta-avatar-b__img
              img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
            .tarjeta.tarjeta--azul
              .p-4
                h4 John Doe
                p moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.
        .col-lg-6
          .tarjeta-avatar-b.mb-4
            .tarjeta-avatar-b__img
              img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
            .tarjeta.color-acento-botones
              .p-4
                h4 John Doe
                p moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.
      .row.justify-content-center.mb-5
        .col-auto
          a.boton.color-botones.texto-blanco(:href="obtenerLink('/downloads/t10/Tarjetas_avatar2.txt')" target="_blank" type="application/pdf")
            span Ver código fuente
      hr.my-5
      h3.titulo-tercero Tipo 3
      .row.mb-4
        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/componentes/ej-05.svg' alt='')
            .tarjeta.color-primario
              .p-4
                h4.text-center John Doe
                p.mb-0 moment. K askdnaskjda sjkdn akjsndasd ajshd akjshd kajshd ask djhak sjdha ksjdha kjsdha kjsdha kjsdh akjshda kjshd aksjdh kajsd djkhakjshdka jsak Abandon the shelter of insecurity.
        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/componentes/ej-05.svg' alt='')
            .tarjeta.color-acento-botones
              .p-4
                h4.text-center John Doe
                p.mb-0 moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.
        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/componentes/ej-05.svg' alt='')
            .tarjeta.color-acento-contenido
              .p-4.text-white
                h4.text-center Greatness isn’t the height
                p.mb-0 moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.
      .row.justify-content-center.mb-5
        .col-auto
          a.boton.color-botones.texto-blanco(:href="obtenerLink('/downloads/t10/Tarjetas_avatar3.txt')" target="_blank" type="application/pdf")
            span Ver código fuente
      .row.mb-5
        .col-lg-12.order-2.order-lg-1
          TabsA.color-acento-botones
            .tarjeta.clr--gris.p-4(titulo="Requerimientos de información")
              ul.lista-ul.mb-4
                li
                  i.fas.fa-angle-right.txt--green
                  | Titulo corto de máximo 5 palabras
                li
                  i.fas.fa-angle-right.txt--green
                  | Cada tarjeta debe ir acompañada de un texto corto de máximo 40 palabras que acompañe a una foto o ilustración.  
      Separador
      #t_10_2.titulo-segundo.color-acento-contenido
        h2 10.2 Tarjetas - conectadas
      .tarjeta--container.row.mb-4
        .col-md.tarjeta.color-primario.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/componentes/ej-05.svg', alt='Texto que describa la imagen')  
          h2.text-center Celebrate your<br>failures
          p To surpass others is fucking tough, if you only do as you are told you don’t have it in you to succeed. Think about all the possibilities. You’ve been placed in the crucial moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.
        .col-md.tarjeta.color-acento-botones.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/componentes/ej-05.svg', alt='Texto que describa la imagen')
          h2.text-center Sterility leads to<br>susceptibility
          p Remember it’s called the creative process, it’s not the creative moment. Saul Bass on failure: Failure is built into creativity… the creative act involves this element of ‘newness’ and ‘experimentalism,’ then one must expect and accept the possibility of failure.
        .col-md.tarjeta.color-acento-contenido.text-white.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/componentes/ej-05.svg', alt='Texto que describa la imagen')  
          h2.text-center Sterility leads to<br>susceptibility
          p Remember it’s called the creative process, it’s not the creative moment. Saul Bass on failure: Failure is built into creativity… the creative act involves this element of ‘newness’ and ‘experimentalism,’ then one must expect and accept the possibility of failure.
      .row.justify-content-center.mb-5
        .col-auto
          a.boton.color-botones(:href="obtenerLink('/downloads/t10/Tarjetas_conectadas.txt')" target="_blank" type="application/pdf")
            span Ver código fuente
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Ejemplo
        span tarjetas - conectadas
      .row.justify-content-center.mb-4
        .col-lg-9.position-relative
          .avatar
            figure
              img(src="@/assets/curso/temas/tarjetas/conectada_01.svg", alt="alt").img250
          .crd.crd--avatarHorizontal.crd--first.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/tarjetas/conectada_02.svg", alt="alt").img100
              .col
                h5 Calidad de la información
                p Es importante tener en cuenta las variables, la ponderación de estas refleja la calidad de la información, la cual le permitirá obtener información concreta, clara y medible. Es necesario resaltar las características determinantes desde enfoques cualitativos y cuantitativos del dato obtenido.
          .crd.crd--avatarHorizontal.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/tarjetas/conectada_02.svg", alt="alt").img100
              .col
                h5 Aplicación de técnicas
                p Desarrolle técnicas que le permitan tener un panorama completo de la información que se esté analizando, integrando las variables obtenidas en la medición y contrastando detalladamente los datos.
          .crd.crd--avatarHorizontal.crd--last.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/tarjetas/conectada_03.svg", alt="alt").img100
              .col
                h5 Comunicación correcta de los resultados
                p En los análisis de resultados, el determinante es saber mostrar la información, tenga en cuenta la objetividad, la claridad, la transparencia y la organización de la información.
      .row.justify-content-center.mb-5
        .col-auto
          a.boton.color-botones(:href="obtenerLink('/downloads/t10/Tarjetas_conectadas2.txt')" target="_blank" type="application/pdf")
            span Ver código fuente
      .row.mb-5
        .col-lg-12.order-2.order-lg-1
          TabsA.color-acento-botones
            .tarjeta.clr--gris.p-4(titulo="Requerimientos de información")
              ul.lista-ul.mb-4
                li
                  i.fas.fa-angle-right.txt--green
                  | Titulo corto de máximo 5 palabras
                li
                  i.fas.fa-angle-right.txt--green
                  | Cada tarjeta debe ir acompañada de un texto corto de máximo 40 palabras que acompañe a una foto o ilustración.
      Separador
      #t_10_3.titulo-segundo.color-acento-contenido
        h2 10.3 Tarjetas - animadas
      h3.titulo-tercero Tipo 1 - Tarjetas slide
      .row.mb-4
        .col-sm-6.col-xl-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__contenido.p-4.p-xl-5
                h1 John Doe
                p Lorem ipsum dolor sit amet,
              .tarjeta-slide__img(:style="{'background-image': `url(${require_src('@/assets/curso/temas/tarjetas/avatar.svg')})`}")
        .col-sm-6.col-xl-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.abajo.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require_src('@/assets/curso/temas/tarjetas/avatar.svg')})`}")
              .tarjeta-slide__contenido.p-4.p-xl-5
                h1 John Doe
                p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus id, vulputate turpis.  
        .col-sm-6.col-xl-3.mb-4.mb-sm-0
          .tarjeta.tarjeta-slide.derecha.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require_src('@/assets/curso/temas/tarjetas/avatar.svg')})`}")
              .tarjeta-slide__contenido.p-4.p-xl-5
                h1 John Doe
                p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus id, vulputate turpis.  
        .col-sm-6.col-xl-3
          .tarjeta.tarjeta-slide.izquierda.color-acento-botones(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require_src('@/assets/curso/temas/tarjetas/avatar.svg')})`}")
              .tarjeta-slide__contenido.p-4.p-xl-5
                h1 John Doe
                p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus id, vulputate turpis.
      .row.justify-content-center.mb-5
        .col-auto
          a.boton.color-botones.texto-blanco(:href="obtenerLink('/downloads/t10/Tarjetas_animadas.txt')" target="_blank" type="application/pdf")
            span Ver código fuente
      hr.my-5
      h3.titulo-tercero Tipo 1 - Tarjetas flip
      .row.mb-4
        .col-sm-6.col-xl-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.color-primario
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require_src('@/assets/curso/temas/tarjetas/avatar.svg')})`}")
              .tarjeta-flip__contenido.p-4
                h4 John Doe
                p.mb-0 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus id, vulputate turpis.
        .col-sm-6.col-xl-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require_src('@/assets/curso/temas/tarjetas/avatar.svg')})`}")
              .tarjeta-flip__contenido.p-4
                h4 John Doe
                p.mb-0 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus id, vulputate turpis.
        .col-sm-6.col-xl-3.mb-4.mb-sm-0
          .tarjeta.tarjeta-flip.color-acento-contenido
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require_src('@/assets/curso/temas/tarjetas/avatar.svg')})`}")
              .tarjeta-flip__contenido.p-4
                h4 John Doe
                p.mb-0 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus id, vulputate turpis.
        .col-sm-6.col-xl-3
          .tarjeta.tarjeta-flip.color-acento-botones
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require_src('@/assets/curso/temas/tarjetas/avatar.svg')})`}")
              .tarjeta-flip__contenido.p-4
                h4 John Doe
                p.mb-0 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus id, vulputate turpis.
      .row.justify-content-center.mb-5
        .col-auto
          a.boton.color-botones.texto-blanco(:href="obtenerLink('/downloads/t10/Tarjetas_animadas2.txt')" target="_blank" type="application/pdf")
            span Ver código fuente
      .row.mb-5
        .col-lg-12.order-2.order-lg-1
          TabsA.color-acento-botones
            .tarjeta.clr--gris.p-4(titulo="Requerimientos de información")
              ul.lista-ul.mb-4
                li
                  i.fas.fa-angle-right.txt--green
                  | Titulo corto de máximo 5 palabras
                li
                  i.fas.fa-angle-right.txt--green
                  | Cada tarjeta debe ir acompañada de un texto corto de máximo 40 palabras que acompañe a una foto o ilustración.
      Separador
      #t_10_4.titulo-segundo.color-acento-contenido
        h2 10.4 Tarjetas con número
      .row.mb-4
        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-primario.p-5
            .tarjeta-numerada__numero
              .h2 1
            p.text-center
              b Ruta integral de atención en salud
            p.text-center Acciones realizadas en los entornos donde transcurre la vida y se desarrollan las personas
        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-secundario.p-5
            .tarjeta-numerada__numero
              .h2 2
            p.text-center
              b Ruta integral de atención en salud
            p.text-center Acciones realizadas en los entornos donde transcurre la vida y se desarrollan las personas
        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-contenido.p-5
            .tarjeta-numerada__numero
              .h2 3
            p.text-center
              b Ruta integral de atención en salud
            p.text-center Acciones realizadas en los entornos donde transcurre la vida y se desarrollan las personas
        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-botones.p-5
            .tarjeta-numerada__numero
              .h2 4
            p.text-center
              b Ruta integral de atención en salud
            p.text-center Acciones realizadas en los entornos donde transcurre la vida y se desarrollan las personas
      .row.justify-content-center.mb-5
        .col-auto
          a.boton.color-botones.texto-blanco(:href="obtenerLink('/downloads/t10/Tarjetas_con_numero.txt')" target="_blank" type="application/pdf")
            span Ver código fuente
</template>

<script>
export default {
  name: 'Tema10',
  data: () => ({
    indicadorTarjetaSlide: true,
    indicadorTarjetaFlip: true,
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

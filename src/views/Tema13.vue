<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 13
        h1 Nuevos componentes
      #t_13_1.titulo-segundo.color-acento-contenido
        h2 13.1 Tarjetas
      .row.justify-content-center.cursor-pointer.mb-4
        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt(@mouseover="mostrarIndicador = false")
            .indicador--hover(v-if="mostrarIndicador")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/ejm.png", alt="")
            .crd_hover_txt--body
              h4.mb-3 Titulo 1
              p.mb-0 Con este tipo de reportes, los gerentes podrán supervisar específicamente, la labor de cada vendedor y de esta manera, saber en qué les va bien y en cuáles actos hay que mejorar. Aquí también, va a encontrar si su fuerza de ventas está entendiendo sus estrategias y le sea más fácil incentivarlos a aumentar su productividad.
        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/ejm.png", alt="")
            .crd_hover_txt--body
              h4.mb-3 Titulo 2
              p.mb-0 Con estos reportes semanales, podrá encontrar las dificultades que pueda tener algún o algunos vendedores y evitar que se pierdan los clientes fijos. Reportar semanalmente, le permite tener un equipo de ventas fortalecido y bien direccionado, con las correcciones necesarias para lograr las metas de ventas propuestas.
        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/ejm.png", alt="")
            .crd_hover_txt--body
              h4.mb-3 Titulo 3
              p.mb-0 Con este tipo de reportes usted va a hacer un seguimiento específico a su equipo de ventas respecto a sus objetivos empresariales a largo plazo.
      hr.my-5
      .row.cursor-pointer.mb-4.mb-md-4
        .col-lg-4.col-md-6.mb-3.mb-md-3
          .tarjeta.tarjeta-foto-hover
            .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/ejm.png')
            .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2
              h4.text-center.text-white.mb-0 Bloqueos mentales
            .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
              .p-4.text-center
                h5 Bloqueos mentales
                p.mb-0  Son los que están relacionados con esos pensamientos ya construidos y que bloquean toda idea nueva, para los cuales se pueden tener pensamientos divergentes, rompiendo rutinas y reconfigurando ideas y procesos para avanzar.
        .col-lg-4.col-md-6.mb-3.mb-md-3
          .tarjeta.tarjeta-foto-hover(@mouseover="mostrarIndicador2 = false")
            .indicador--hover(v-if="mostrarIndicador2")
            .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/ejm.png')
            .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2
              h4.text-center.text-white.mb-0 Bloqueos emocionales
            .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
              .p-4.text-center
                h5 Bloqueos emocionales
                p.mb-0 Relacionados con imaginar los peores escenarios, y es acá donde se tiende a pensar en las fatalidades y se considera que renunciar es la mejor opción.
        .col-lg-4.col-md-6.mb-3.mb-md-3
          .tarjeta.tarjeta-foto-hover
            .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/ejm.png')
            .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2
              h4.text-center.text-white.mb-0 Bloqueos perceptivos
            .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
              .p-4.text-center
                h5 Bloqueos perceptivos
                p.mb-0 Limitan la forma de ver el mundo y terminan por acabar con todas las ideas.
      hr.my-5
      .row.justify-content-center.cursor-pointer
        .col-md-5.col-6.mb-4
          .nav-holder.align-items-center.px-0
            figure
              img(src="@/assets/curso/temas/ejm.png", alt="")
            .text.p-lg-2.p-3
              .row.px-3.pt-1.mt-md-4.pt-md-0.mt-lg-3.mt-xl-4
                .h5.mt-4.mt-lg-0.mb-2 La luz natural
                p Producida por los rayos de sol.
        .col-md-5.col-6.mb-4
          .nav-holder.align-items-center.px-0(@mouseover="mostrarIndicador3 = false")
            .indicador--hover(v-if="mostrarIndicador3")
            figure
              img(src="@/assets/curso/temas/ejm.png", alt="")
            .text.p-lg-2.p-3
              .row.px-3.pt-1.mt-md-4.pt-md-0.mt-lg-3.mt-xl-4
                .h5.mt-4.mt-lg-0.mb-2 La luz artificial
                p Producida por fuentes lumínicas artificiales.     
      .row.mb-5
        .col-lg-12.order-2.order-lg-1
          TabsA.color-acento-botones
            .tarjeta.clr--gris.p-4.pb-3(titulo="Requerimientos de información")
              ul.lista-ul.mb-0
                li
                  i.fas.fa-angle-right.txt--green
                  | Usar imagen que acompañe la información escrita.
                li
                  i.fas.fa-angle-right.txt--green
                  | Titulo corto de máximo 8 palabras
                li
                  i.fas.fa-angle-right.txt--green
                  | Colocar una breve descripción del tema que se aborda. (Párrafo corto máximo 30 palabras aprox)
      hr.my-5
      .row.justify-content-center.cursor-pointer
        .col-lg-5.col-md-6.mb-3.mb-md-0
          .content-card4(@mouseover="mostrarIndicador4 = false")
            .indicador--hover(v-if="mostrarIndicador4")
            .content-overlay
            .btn-numero.btn-bottom-right
              h3 A
            img(src="@/assets/curso/temas/ejm.png", alt="") 
            .tarjeta-details.fadeIn-top.p-1
              h3 Titulo
              p Constituyen sus mejores y principales elementos, que les permite cumplir con sus objetivos.
              p Ejemplos: cuáles son mis ventajas, qué hacemos bien.
        .col-lg-5.col-md-6.mb-3.mb-md-0
          .content-card4
            .content-overlay
            .btn-numero.btn-bottom-left
              h3 B
            img(src="@/assets/curso/temas/ejm.png", alt="") 
            .tarjeta-details.fadeIn-top.p-1
              h3.text-right Titulo
              p Son los aspectos negativos de la organización-proyecto que, si no se superan, podrán afectar el desarrollo del mismo.
              p Ejemplos: qué podría ser mejorado, qué se está haciendo mal, qué podría ser evitado. 
      .row.justify-content-center.mb-5
        .col-auto
          a.boton.color-botones.texto-blanco(:href="obtenerLink('/downloads/t13/Tarj4.txt')" target="_blank" type="application/pdf")
            span Ver código fuente
      hr.my-5
      .row.justify-content-center.mb-4
        .col-lg-4
          .tarjetas-up__content.p-4.d-flex.align-items-center(@mouseover="mostrarIndicador6 = false")
            .indicador--hover(v-if="mostrarIndicador6")
            .tarjetas-up__content__image: img(src='@/assets/curso/temas/ejm.png')
            .text-center.p-lg-4
              h5 Tarjeta 1
              p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        .col-lg-4
          .tarjetas-up__content.p-4.d-flex.align-items-center
            .tarjetas-up__content__image: img(src='@/assets/curso/temas/ejm.png')
            .text-center.p-lg-4
              h5 Tarjeta 2
              p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        .col-lg-4
          .tarjetas-up__content.p-4.d-flex.align-items-center
            .tarjetas-up__content__image: img(src='@/assets/curso/temas/ejm.png')
            .text-center.p-lg-4
              h5 Tarjeta 3
              p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      Separador
      #t_13_2.titulo-segundo.color-acento-contenido
        h2 13.2 Texto destacado
      .bg-carrousel.d-flex.justify-content-center.align-items-center.mb-4(@mouseover="mostrarIndicador5 = false")
        .indicador--hover(v-if="mostrarIndicador5")
        h2.h1.text-center.text-white Importante
        .bg-carrousel_content.px-5.py-5.justify-content-center.d-flex.align-items-center
          .text-center.w-75
            p.fw-bold.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      Separador
      #t_13_3.titulo-segundo.color-acento-contenido
        h2 13.3 Pestañas o Tabs
      p.mb-5.fst-italic #[strong Nota:] icono inactivo en escala de grises
      TabsB.color-primario.escala-grises.mb-4
        .py-4.py-md-5(titulo="The splendor of the mystery" :icono="require_src('@/assets/componentes/ej-04.svg')")
          .row.justify-content-center
            .col-md-11
              h4 Celebrate your failures 1
              p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        .py-4.py-md-5(titulo="Don’t lie to yourself" :icono="require_src('@/assets/componentes/ej-04.svg')")
          .row.justify-content-center
            .col-md-11          
              h4 Celebrate your failures 2
              p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      Separador
      #t_13_4.titulo-segundo.color-acento-contenido
        h2 13.4 Imagen Infografica
      ImagenInfografica.color-acento-botones.mb-4
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/ejm.png', alt='')
        .tarjeta.row.img-infog.bg-white.align-items-center(x="50%" y="20%")
          .col-md-4
            img(src='@/assets/curso/temas/t13/tema1-5-ico1.svg', alt='')
          .col-md-8.col-12.px-lg-4.px-3.py-1.contenido
            p.mb-0 Conclusiones y recomendaciones siempre enfocadas al cumplimiento.
        .tarjeta.row.img-infog.bg-white.align-items-center(x="50%" y="55%")
          .col-md-4
            img(src='@/assets/curso/temas/t13/tema1-5-ico1.svg', alt='')
          .col-md-8.col-12.px-lg-4.px-3.py-1.contenido
            p.mb-0 Desviaciones en la ejecución de actividades conforme al plan.
      .row.mb-5
        .col-lg-12.order-2.order-lg-1
          TabsA.color-acento-botones
            .tarjeta.clr--gris.p-4.pb-3(titulo="Requerimientos de información")
              ul.lista-ul.mb-0
                li
                  i.fas.fa-angle-right.txt--green
                  | No se usa ningún titulo.
                li
                  i.fas.fa-angle-right.txt--green
                  | Texto corto de máximo 10 palabras.

</template>

<script>
export default {
  name: 'Tema13',
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
    mostrarIndicador2: true,
    mostrarIndicador3: true,
    mostrarIndicador4: true,
    mostrarIndicador5: true,
    mostrarIndicador6: true,
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

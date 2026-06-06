<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Básicos
      #t_1_1.titulo-segundo.color-acento-contenido
        h2 1.1 Encabezados
      h3.mb-5 #[i.fas.fa-angle-double-right.txt--green] Estilo de título para el índice de contenidos:             
      .titulo-principal.color-primario
        .titulo-principal__numero
          span 1
        h1 Título principal, 30pt        
      .titulo-segundo.color-primario
        h2 1.1  Título de segundo nivel, 24pt
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Título de tercer nivel, 20pt
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido
        h2 1.2 Párrafos
      p.mb-5 Los párrafos mantienen un tamaño regular de 16 pt con interlineado base de 24 pt, sin embargo, existe excepciones para resaltar contenido donde se puede hacer uso de pesos 
        span.text-thin THIN, 
        span.text-bold BOLD, 
        | y 
        span.text-black BLACK 
        | o 
        span.etiqueta etiquetas
        | de color (según paleta del programa). Así mismo, el ancho de los cajones textos permite variación en las doce (12) columnas. 
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido
        h2 1.3 Listados
      p.mb-4 Se debe tener en cuenta que las personas realizan un escaneo del mismo para encontrar elementos de su interés. Las listas deben estar compuestas por elementos relacionados entre sí, con un orden específico o un conteo importante.
      .row.mb-3
        .col-md.mb-5.mb-sm-0
          h4 Listado ordenado básico
          ol.lista-ol
            li.d-flex
              span.text-bold 1. 
              |
              p.mb-0 Item lista ordenada 1
            li.d-flex
              span.text-bold 2. 
              |
              p.mb-0 Item lista ordenada 2
            li.d-flex
              span.text-bold a. 
              |
              p.mb-0 Item lista ordenada a
            li.d-flex
              span.text-bold b. 
              |
              p.mb-0 Item lista ordenada b 
        .col-sm.mb-5.mb-sm-0
          h4 Listado ordenado cuadro color
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
            li.d-flex
              .lista-ol--cuadro__vineta.v--green
                span a
              |
              p.mb-0 Item lista ordenada a
            li.d-flex
              .lista-ol--cuadro__vineta.v--green
                span b
              |
              p.mb-0 Item lista ordenada b
        .col-sm.mb-5.mb-sm-0
          h4 Listado ordenado cuadro color + Separadores
          ol.lista-ol--cuadro.lista-ol--separador
            li.d-flex
              .lista-ol--cuadro__vineta.v--green
                span 1
              |
              p.mb-0 Item lista ordenada 1
            li.d-flex
              .lista-ol--cuadro__vineta.v--green
                span 2
              |
              p.mb-0 Item lista ordenada 3
            li.d-flex
              .lista-ol--cuadro__vineta.v--green
                span a
              |
              p.mb-0 Item lista ordenada a
            li.d-flex
              .lista-ol--cuadro__vineta.v--green
                span b
              |
              p.mb-0 Item lista ordenada b
      .row
        .col-sm.mb-5.mb-sm-0
          h4 Listado no ordenado básico
          ul.lista-ul
            li.d-flex
              i.lista-ul__vineta
              |
              p.mb-0 Item lista no ordenada 1
            li.d-flex
              i.lista-ul__vineta
              |
              p.mb-0 Item lista no ordenada 2
            li.d-flex
              ul
                li.d-flex
                  i.lista-ul__vineta
                  |
                  p.mb-0 Item lista no ordenada 1
                li.d-flex
                  i.lista-ul__vineta
                  |
                  p.mb-0 Item lista no ordenada 2
            li.d-flex
              i.lista-ul__vineta
              |
              p.mb-0 Item lista no ordenada a
            li.d-flex
              i.lista-ul__vineta
              |
              p.mb-0 Item lista no ordenada b
        .col-sm.mb-5.mb-sm-0
          h4 Listado no ordenado color
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
            li.d-flex
              i.fas.fa-compass.txt--green
              |
              p.mb-0 Item lista no ordenada
            li.d-flex
              i.fas.fa-eye.txt--green
              |
              p.mb-0 Item lista no ordenada 
        .col-sm
          h4 Listado no ordenado color + Separadores
          ul.lista-ul--color.lista-ul--separador
            li.d-flex
              i.fas.fa-feather.txt--green
              |
              p.mb-0 Item lista no ordenada
            li.d-flex
              i.fas.fa-hippo.txt--green
              |
              p.mb-0 Item lista no ordenada
            li.d-flex
              i.fas.fa-kiwi-bird.txt--green
              |
              p.mb-0 Item lista no ordenada
      Separador
      #t_1_4.titulo-segundo.color-acento-contenido
        h2 1.4 Bloques de texto destacado
      p.mb-5 Cuando se tiene una información sencilla que se puede explicar en un solo párrafo y acompañada por una imagen es pertinente usar esta herramienta ya que se puede combinar perfectamente con cualquiera de las herramientas anteriormente descritas. Se puede utilizar cuando tenemos un solo bloque de texto, sin subtópicos, listas, ramificaciones y demás divisiones, complementándolo con las demás herramientas. 
      .row
        .col-lg-5
          .cajon.color-acento-contenido.p-4
            .h5 Cajón texto color
            p.mb-0 Se puede usar dos o más columnas para diagramar el texto, estos elementos pueden presentar contenedores que permitan diferenciar ideas o conceptos.
        .col-lg-7
          .cajon-b.color-primario.arriba-izquierda.p-3
            p.mb-0 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel porta justo. Praesent congue nibh a justo ornare, eget vulputate nisl eleifend. Cras interdum finibus lacinia. Fusce dignissim sapien sit amet orci imperdiet, pharetra maximus nisi ullamcorper. Aliquam interdum elit ac nisi viverra, ultrices finibus est ultricies. Fusce tincidunt velit nulla. Aliquam eleifend libero eu neque rhoncus, sed placerat mi ornare.
      hr.my-5
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/ejm.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Think about all the possibilities. A good composition is the result of a hierarchy consisting of clearly contrasting elements set with distinct alignments containing irregular intervals of negative space. Nothing of without working at it. Be impossible to ignore.
            br
            br
            | Stand so tall that they can’t look past you. Saul Bass on failure: Failure is built into creativity… the creative act involves this element of ‘newness’ and ‘experimentalism,’ then one must expect accept possibility of failure.
      hr.my-5
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/ejm.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Think about all the possibilities. A good composition is the result of a hierarchy consisting of clearly contrasting elements set with distinct alignments containing irregular intervals of negative space. Nothing of without working at it. Be impossible to ignore.
            br
            br
            | Stand so tall that they can’t look past you. Saul Bass on failure: Failure is built into creativity… the creative act involves this element of ‘newness’ and ‘experimentalism,’ then one must expect accept possibility of failure.
      hr.my-5
      .row.justify-content-center.align-items-center.mb-5
          .col-12.col-sm-8.col-lg-4
              img(src='@/assets/curso/temas/img1.svg').m-auto
          .col-12.col-sm-12.col-lg-8
            .callout-wrap
              .callout-box.p-4.p-md-5
                p.mb-0 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel porta justo. Praesent congue nibh a justo ornare, eget vulputate nisl eleifend. Cras interdum finibus lacinia. Fusce dignissim sapien sit amet orci imperdiet, pharetra maximus nisi ullamcorper. Aliquam interdum elit ac nisi viverra, ultrices finibus est ultricies. Fusce tincidunt velit nulla. Aliquam eleifend libero eu neque rhoncus, sed placerat mi ornare.
      hr.my-5
      .row.justify-content-center.align-items-center.mb-5
          .col-12.col-sm-12.col-lg-8
            .callout-wrap-inverso
              .callout-box-inverso.p-4.p-md-5
                p.mb-0 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel porta justo. Praesent congue nibh a justo ornare, eget vulputate nisl eleifend. Cras interdum finibus lacinia. Fusce dignissim sapien sit amet orci imperdiet, pharetra maximus nisi ullamcorper. Aliquam interdum elit ac nisi viverra, ultrices finibus est ultricies. Fusce tincidunt velit nulla. Aliquam eleifend libero eu neque rhoncus, sed placerat mi ornare.
          .col-12.col-sm-8.col-lg-4
              img(src='@/assets/curso/temas/img1.svg').m-auto
      Separador
      #t_1_5.titulo-segundo.color-acento-contenido
        h2 1.5 Citas
      .row
        h3.titulo-tercero Cajón texto color A
        .bloque-texto-a.color-secundario.p-4.p-md-5
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              h2.mb-0 Whatever can be captured in words can be conquered with understanding. 
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Think about all the possibilities. A good composition is the result of a hierarchy consisting of clearly contrasting elements set with distinct alignments containing irregular intervals of negative space. Nothing of without working at it. Be impossible to ignore.
                  br
                  br
                  | Stand so tall that they can’t look past you. Saul Bass on failure: Failure is built into creativity… the creative act involves this element of ‘newness’ and ‘experimentalism,’ then one must expect accept possibility of failure.
      hr.my-5
      .row
        .col-lg-6.mb-5.mb-lg-0
          h3.titulo-tercero Cajón texto color B
          .bloque-texto-b.color-primario.p-4
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              h2.mb-0 Can we all just agree as the greater design community to stop talking about Comic Sans altogether?
              i.fas.fa-quote-right
        .col-lg-6
          h3.titulo-tercero Cajón texto color C
          .bloque-texto-c.color-primario.p-4
            i.fas.fa-quote-right
            h2.mb-2 Then you’ll prove to yourself that you can survive anything.
            span - The graphic designer
      hr.my-5
      .row.mb-5
        .col-lg-6.mb-5.mb-lg-0
          h3.titulo-tercero Cajón texto color D
          .bloque-texto-d.color-primario.p-4
            .bloque-texto-d__texto.mb-2
              i.fas.fa-quote-left
              h3.text-regular Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt augue in augue tempus, in dapibus justo interdum. Sed viverra sed odio quis rhoncus. In elementum purus massa, id venenatis purus ullamcorper ut. Vestibulum vel dictum dolor, nec fringilla orci. Nulla vestibulum, metus nec porttitor bibendum, lectus ligula viverra eros, eget tempor risus nulla pretium justo. Nullam turpis dolor, pharetra vel fermentum at, rutrum in elit. Maecenas vitae hendrerit libero, et ornare augue. Vestibulum iaculis, metus et accumsan malesuada, ligula sapien convallis risus, a iaculis velit ante at turpis. Vivamus bibendum tellus sed tincidunt rhoncus. Nam velit massa, porttitor eget quam et, porttitor viverra eros. Donec eget pharetra metus. Cras porta arcu eu mauris iaculis euismod. Sed fringilla vel nisl quis aliquam.
              i.fas.fa-quote-right
            .bloque-texto-d__autor 
              .h5.mb-0 The graphic designer
              .h6.mb-0 Lorem ipsum dolor sit amet
        .col-lg-6
          h3.titulo-tercero Cajón texto color E
          .bloque-texto-e.color-primario.p-4
            .bloque-texto-e__texto
              i.fas.fa-quote-left
              h4.text-regular Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt augue in augue tempus, in dapibus justo interdum. Sed viverra sed odio quis rhoncus. In elementum purus massa, id venenatis purus ullamcorper ut. Vestibulum vel dictum dolor, nec fringilla orci. Nulla vestibulum, metus nec porttitor bibendum, lectus ligula viverra eros, eget tempor risus nulla pretium justo. Nullam turpis dolor, pharetra vel fermentum at, rutrum in elit. Maecenas vitae hendrerit libero, et ornare augue. Vestibulum iaculis, metus et accumsan malesuada.
              i.fas.fa-quote-right
            .row.align-items-end
              .col
                .bloque-texto-e__autor 
                  .h5.mb-0 The graphic designer
                  .h6.mb-0 Lorem ipsum dolor sit amet
              .col-4
                img(src='@/assets/template/img-placeholder-1-1.svg', alt='Texto que describa la imagen')
      hr.my-5
      h3.titulo-tercero Cajón texto color F
      .bloque-texto-f.color-primario.pt-4.px-5.mb-5
        .bloque-texto-f__comillas
          i.fas.fa-quote-left
          i.fas.fa-quote-right
        h4.text-regular.bloque-texto-f__texto Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt augue in augue tempus, in dapibus justo interdum. Sed viverra sed odio quis rhoncus. In elementum purus massa, id venenatis purus ullamcorper ut. Vestibulum vel dictum dolor, nec fringilla orci. Nulla vestibulum, metus nec porttitor bibendum, lectus ligula viverra eros, eget tempor risus nulla pretium justo. Nullam turpis dolor, pharetra vel fermentum at, rutrum in elit. Maecenas vitae hendrerit libero, et ornare augue. Vestibulum iaculis, metus et accumsan malesuada, ligula sapien convallis risus, a iaculis velit ante at turpis. Vivamus bibendum tellus sed tincidunt rhoncus. Nam velit massa, porttitor eget quam et, porttitor viverra eros. Donec eget pharetra metus. Cras porta arcu eu mauris iaculis euismod. Sed fringilla vel nisl quis aliquam.
        .bloque-texto-f__autor.mb-3
          h3.mb-0 The graphic designer
        .bloque-texto-f__avatar
          .bloque-texto-f__avatar__img
            img(src='@/assets/template/img-placeholder-1-1.svg', alt='Texto que describa la imagen')
      Separador
      #t_1_6.titulo-segundo.color-acento-contenido
        h2 1.6 Imágenes 
      .titulo-sexto.color-secundario.mb-3
        h5 Título de sexto nivel, 16pt
        span subtitulo  
      figure.mb-3
        img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
        figcaption Leyenda de la imagen
      hr.my-5
      .row.justify-content-around.mb-4
        .col-md-6.col-lg-4.mb-4
          .imagen-titulo--der.color-secundario
            figure
              img(src='@/assets/template/img-placeholder-1-1.svg', alt='Texto que describa la imagen')
            .imagen-titulo__titulo
              h4.m-0 Titulo de imagen        
        .col-md-6.col-lg-4.mb-4
          .imagen-titulo--izq.color-acento-botones
            figure
              img(src='@/assets/template/img-placeholder-1-1.svg', alt='Texto que describa la imagen')
            .imagen-titulo__titulo
              h4.m-0 Titulo de imagen
      Separador
      #t_1_7.titulo-segundo.color-acento-contenido
        h2 1.7 Video 
      figure.mb-3
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video         
      Separador
      #t_1_8.titulo-segundo.color-acento-contenido
        h2 1.8 Tablas
      .tabla-a.color-primario.mb-4 
        table
          caption Leyenda de la tabla
          thead
            tr
              th Encabezado 1
              th Encabezado 2
              th Encabezado 3
              th Encabezado 4
          tbody
            tr
              td Celda 1
              td Celda 2
              td Celda 3
              td Celda 4
            tr
              td Celda 1
              td Celda 2
              td Celda 3
              td Celda 4
            tr
              td Celda 1
              td Celda 2
              td Celda 3
              td Celda 4
      hr.my-5
      .tabla-b.color-primario.mb-4
        .tabla-b__header
          h4.mb-0 Niveles del lenguaje
        table
          caption Leyenda de la tabla
          tbody
            tr
              th Vulgar
              td Get back to work. Learn from criticism. Creativity is a work-ethic. Design as if your life depended on it. Keep going. It isn’t what you are.
            tr
              th Coloquial
              td It isn’t what you are, but what you’re going to become. Don’t censor yourself.  Sterility leads to susceptibility.It is, in effect, conditioned to prefer bad design.
            tr
              th Convencional o estándar
              td Paul Rand once said, “The public is more familiar with bad design than good design. leassuring. You are not your work. Don’t fucking lie to yourself. Life depended on it. Keep going
            tr
              th Técnico
              td The new becomes threatening, the old reassuring.” You are not your work. Don’t lie to yourself. Never, never assume that what Respect your craft. Widows and orphans are terrible.
            tr
              th Formal
              td Design as if your life depended on it. Keep going. It isn’t what you are, but what you’re going to become. Don’t censor yourself.
      hr.my-5
      .tabla-c.mb-4
        table
          caption Leyenda de la tabla
          tbody
            tr
              th 03 de marzo
              td 
                p.text-small Donec mattis libero quis nisi euismod, a sodales magna porttitor. Morbi nunc elit, feugiat a nisl eu, venenatis ultrices dui. Suspendisse at sodales est
              td
                .h6.mb-0 $12.500.200
              td
                .h6.mb-0 $12.500.200
                span.text-small Textos pequeños
              td
                .h6 FDSD33
            tr
              th 03 de marzo
              td 
                p.text-small Donec mattis libero quis nisi euismod, a sodales magna porttitor. Morbi nunc elit, feugiat a nisl eu, venenatis ultrices dui. Suspendisse at sodales est
              td
                .h6.mb-0 $12.500.200
              td
                .h6.mb-0 $12.500.200
                span.text-small Textos pequeños
              td
                .h6 FDSD33
            tr
              th 03 de marzo
              td 
                p.text-small Donec mattis libero quis nisi euismod, a sodales magna porttitor. Morbi nunc elit, feugiat a nisl eu, venenatis ultrices dui. Suspendisse at sodales est
              td
                .h6.mb-0 $12.500.200
              td
                .h6.mb-0 $12.500.200
                span.text-small Textos pequeños
              td
                .h6 FDSD33
            tr
              th 03 de marzo
              td 
                p.text-small Donec mattis libero quis nisi euismod, a sodales magna porttitor. Morbi nunc elit, feugiat a nisl eu, venenatis ultrices dui. Suspendisse at sodales est
              td
                .h6.mb-0 $12.500.200
              td
                .h6.mb-0 $12.500.200
                span.text-small Textos pequeños
              td
                .h6 FDSD33
      Separador
      #t_1_9.titulo-segundo.color-acento-contenido
        h2 1.9 Llamados a la acción
      h3.mb-5 #[i.fas.fa-angle-double-right.txt--green] Botón modal 
      .row
        .col-auto
          a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
            span Abrir modal
            .indicador--click(v-if="mostrarIndicador")
        .col
          p moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t 
            a.lnk(@click="modal1 = true") Abrir modal 
            |the height of your stature, it’s the heft of your spirit.
      ModalA(v-model:abrir-modal="modal1")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Modal 1
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen
      h3.mb-5 #[i.fas.fa-angle-double-right.txt--green] Recursos y enlaces externos
      .row
        .col-lg-6
          a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p Anexo. Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias
          a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-doc.svg")
            .anexo__texto
              p Anexo. Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias
          a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-xls.svg")
            .anexo__texto
              p Anexo. Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias
        .col-lg-6
          a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-zip.svg")
            .anexo__texto
              p Anexo. Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias
          a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-ppt.svg")
            .anexo__texto
              p Anexo. Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias
          a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p Anexo. Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias
      hr.my-5
      .tarjeta.color-primario.p-3.mb-4
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/componentes/ej-02.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1 Título del recurso
                p.mb-0 Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias  
              .col-sm-auto
                a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download
      Separador
      #t_1_10.titulo-segundo.color-acento-contenido
        h2 1.10 Botones
      .mb-3
        a.boton.indicador__container(
          :href="obtenerLink('/downloads/prueba.pdf')"
          target="_blank"
          type="application/pdf"
          @mouseover="mostrarIndicador = false")
          span Descargar
          i.fas.fa-file-download
          .indicador--click(v-if="mostrarIndicador")
      .mb-3
        a.boton.color-primario.me-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
          span Descargar
          i.fas.fa-file-download
        a.boton.color-secundario.me-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
          span Descargar
          i.fas.fa-file-download
        a.boton.color-acento-contenido.me-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
          span Descargar
          i.fas.fa-file-download
        a.boton.color-acento-botones.me-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
          span Descargar
          i.fas.fa-file-download
      div.mb-4
        a.boton--sm.color-primario.texto-blanco.me-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
          span Descargar
          i.fas.fa-file-download
        a.boton--sm.color-secundario.texto-blanco.me-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
          span Descargar
          i.fas.fa-file-download
        a.boton--sm.color-acento-contenido.texto-blanco.me-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
          span Descargar
          i.fas.fa-file-download
        a.boton--sm.color-acento-botones.texto-blanco.me-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
          span Descargar
          i.fas.fa-file-download
      Separador
      #t_1_11.titulo-segundo.color-acento-contenido
        h2 1.11 Animaciones
      h3.titulo-tercero Fade
      .row.mb-5
        .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
          .tarjeta.color-primario.text-center.p-3(data-aos="fade")
            h3.mb-0 fade
        .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
          .tarjeta.color-secundario.text-center.p-3(data-aos="fade-up")
            h3.mb-0 fade-up
        .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
          .tarjeta.color-acento-contenido.text-center.p-3(data-aos="fade-down")
            h3.mb-0 fade-down
        .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
          .tarjeta.color-acento-botones.text-center.p-3(data-aos="fade-left")
            h3.mb-0 fade-left
        .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
          .tarjeta.color-primario.text-center.p-3(data-aos="fade-right")
            h3.mb-0 fade-right
        .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
          .tarjeta.color-secundario.text-center.p-3(data-aos="fade-up-right")
            h3.mb-0 fade-up-right
        .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
          .tarjeta.color-acento-contenido.text-center.p-3(data-aos="fade-up-left")
            h3.mb-0 fade-up-left
        .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
          .tarjeta.color-acento-botones.text-center.p-3(data-aos="fade-down-right")
            h3.mb-0 fade-down-right
        .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
          .tarjeta.color-primario.text-center.p-3(data-aos="fade-down-left")
            h3.mb-0 fade-down-left

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
  }),
}
</script>

<style lang="sass"></style>

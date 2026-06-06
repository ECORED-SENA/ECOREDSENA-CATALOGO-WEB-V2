<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 15
        h1 Bloques de código
      #t_15_1.titulo-segundo.color-acento-contenido
        h2 15.1 Bloques de código: Python
      .tarjeta-codigo
        pre.language-python(language="python").mb-5
          code
            | edad_actual = 25
            | edad_futura = edad_actual + 5
            | print("Edad dentro de 5 años:", edad_futura)
      #t_15_2.titulo-segundo.color-acento-contenido
        h2 15.2 Bloques de código: Java
      .tarjeta-codigo
        pre.language-java(language="java").mb-5
          code
            | public class Main {
            |   public static void main(String[] args) {
            |     int edad_actual = 25;
            |     int edad_futura = edad_actual + 5;
            |     System.out.println("Edad dentro de 5 a&ntilde;os: " + edad_futura);
            |   }
            | }
      #t_15_3.titulo-segundo.color-acento-contenido
        h2 15.3 Bloques de código: JavaScript
      .tarjeta-codigo.mt-5
        pre.language-javascript(language="javascript").mb-5
          code
            | const express = require('express');
            | const http = require('http');
            | const { Server } = require('socket.io');
            |
            | const app = express();
            | const servidor = http.createServer(app);
            | const io = new Server(servidor);
            |
            | io.on('connection', (socket) => {
            |   console.log(`Nueva conexión establecida. ID: ${socket.id}`);
            |
            |   socket.on('mensaje_chat', (datos) => {
            |     console.log('Mensaje recibido:', datos);
            |     io.emit('mensaje_chat', datos);
            |   });
            |
            |   socket.on('disconnect', () => {
            |     console.log(`Conexión cerrada. ID: ${socket.id}`);
            |   });
            | });
            |
            | servidor.listen(3000, () => {
            |   console.log('Servidor con sockets ejecutándose en el puerto 3000.');
            | });
      separador
      #t_15_4.titulo-segundo.color-acento-contenido
        h2 15.4 Uso de PrismJS
      .row.justify-content-center.align-items-center.mb-5
          .col-lg-12
            p.mb-3 Para usar  #[b PrismJS] en este proyecto, sigue estos pasos.
            ol.lista-ul.mb-0
              li.mb-4
                i.fas.fa-angle-right.txt--green
                | #[b Paso 1: Instala la librería.]
                | #[br] En la terminal ejecuta el siguiente comando para instalar la librería.
                .crd.bg1.p-4.mt-2
                  p.mb-0.fw-bold npm install prismjs
              li.mb-4
                i.fas.fa-angle-right.txt--green
                | #[b Paso 2: Importa Prism, el tema CSS y los lenguajes que necesites.]
                | #[br] En el archivo de TemaX.vue, importa Prism, el tema CSS y los lenguajes que necesites.
                .crd.bg1.p-4.mt-2
                  p.mb-0 import Prism from 'prismjs'
                  p.mb-0 import 'prismjs/themes/prism.css'
                  p.mb-0 import 'prismjs/components/prism-python'
                  p.mb-0 import 'prismjs/components/prism-java'
                  p.mb-0 import 'prismjs/components/prism-javascript'
              li.mb-4
                i.fas.fa-angle-right.txt--green
                | #[b Paso 3: Selecciona el lenguaje de programación.]
                | #[br] En el codigo indica que tipo de lenguajes se van a usar. Por ejemplo:
                .crd.bg1.p-4.mt-2
                  p.mb-0 pre.language-javascript(language="javascript")
                  p.mb-0.ms-2 code
                  p.mb-0.ms-4 | 
                  p.mb-0.ms-4 | console.log('Hola, mundo!');
              li
                i.fas.fa-angle-right.txt--green
                | #[b Paso 4: Ejecuta el resaltado.]
                | #[br] Cuando el contenido se renderice/actualice, ejecuta el resaltado.
                | #[br] En el #[b export default] debe agregar el siguiente codigo:
                | #[br] En el #[b mounted]:
                .crd.bg1.p-4.mt-2
                  p.mb-0 Prism.highlightAllUnder(this.$el)
                | #[br] En el #[b updated]:
                .crd.bg1.p-4.mt-2
                  p.mb-0 Prism.highlightAllUnder(this.$el)

</template>

<script>
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-javascript'
export default {
  name: 'Tema15',
  data() {
    return {
      mostrarIndicador: true,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
      Prism.highlightAllUnder(this.$el)
    })
  },
  updated() {
    this.$aosRefresh()
    Prism.highlightAllUnder(this.$el)
  },
}
</script>

<style lang="sass"></style>

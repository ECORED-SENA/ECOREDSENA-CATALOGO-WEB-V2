<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 14
        h1 Dialogos
      #t_14_4.titulo-segundo.color-acento-contenido
        h2  Diálogos (Relación de términos en un diálogo)
      #t_14_4
      Dialogo.color-primario(:dialogo="dialogo")
        template(#nombre-actividad) Arrastrar y Soltar
        template(#titulo-actividad) Greeting the doctor. / Saludando al doctor.
        template(#descripcion-actividad) Escuche los audios y complete los espacios en blanco de cada una de las frases arrastrando el término correcto.
      .row.justify-content-end.mb-2.me-3
        .col-auto
          a.boton.color-primario.b--rad(:href="obtenerLink('/downloads/Dialogo.txt')" target="_blank" type="application/pdf")
            span Ver código fuente

</template>

<script>
import imgDoctor from '@/assets/curso/temas/doctor.svg'
import imgJonathan from '@/assets/curso/temas/jonathan.svg'
import audio1 from '@/assets/audio/1.mp3'
import audio2 from '@/assets/audio/2.wav'
import audio3 from '@/assets/audio/3.wav'
import audio4 from '@/assets/audio/4.mp3'
import audio5 from '@/assets/audio/5.wav'
import audio6 from '@/assets/audio/6.mp3'
import audio7 from '@/assets/audio/7.wav'
export default {
  name: 'Tema5',
  data() {
    return {
      dialogo: {
        personajes: [
          {
            nombre: 'Doctor',
            img: imgDoctor,
          },
          {
            nombre: 'Jonathan',
            img: imgJonathan,
          },
        ],
        dialogo: [
          {
            personaje: 'Jonathan',
            textoIng: 'Hello, Doctor. How are ***?',
            textoEsp: 'Hola, doctor. ¿Cómo estás?',
            audio: audio1,
            palabra: 'you',
          },
          {
            personaje: 'Doctor',
            textoIng: 'Good *** Jonathan.',
            textoEsp: 'Buenos días Jonathan .',
            audio: audio2,
            palabra: 'morning',
          },
          {
            personaje: 'Doctor',
            textoIng: 'I am ***. How are you doing?.',
            textoEsp: 'Estoy bien, ¿cómo estás?',
            audio: audio3,
            palabra: 'great',
          },
          {
            personaje: 'Jonathan',
            textoIng: 'I&#8217m doing very well. I&#8217m feeling better.',
            textoEsp: 'Estoy muy bien. Me siento mejor.',
            audio: audio4,
          },
          {
            personaje: 'Doctor',
            textoIng: 'It was *** to see you! I am glad you feel better.',
            textoEsp: ' ¡Qué gusto verte! Me alegro de que te sientas mejor.',
            audio: audio5,
            palabra: 'nice',
          },
          {
            personaje: 'Jonathan',
            textoIng: ' Thank you Doctor. *** a great day! ',
            textoEsp: 'Gracias Doctor. ¡Qué tengas un lindo día! ',
            audio: audio6,
            palabra: 'have',
          },
          {
            personaje: 'Doctor',
            textoIng: ' ***.',
            textoEsp: 'Adiós.',
            audio: audio7,
            palabra: ' Goodbye. ',
          },
        ],
      },
    }
  },
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

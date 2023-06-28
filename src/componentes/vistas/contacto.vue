<template>
    <div id="contact-us" class="block-28 space-between-blocks border-top border-bottom">
    <div class="container">
      <div class="row h-100">
        <div class="col-lg-6 h-100 block-28__content-side">
          <div class="contact-info">
            <h5 class="contact-info__title mb-3">CONTACTO</h5>
            <p class="contact-info__paragraph mb-5">
              ¿Tienes alguna duda?
              Dejanos tus datos y nos pondremos en contacto con tigo,
              Tambien respondemos via whatsapp.
            </p>
            <div class="mb-5">
              <h6 class="contact-info__title-2 mb-3"> COLABORACION </h6>
              <p class="d-flex flex-column">
                <span class="contact-info__item mb-2">
                  <i class="fas fa-envelope"></i> contacto@ticsoaxaca.com</span>
                <span class="contact-info__item">
                  <i class="fas fa-phone"></i> <i class="fab fa-whatsapp"></i>  Tel : (951) 185-0348</span>
              </p>
            </div>
            <div class="mb-5">
              <h6 class="contact-info__title-2 mb-3"> VENTAS </h6>
              <p class="d-flex flex-column">
                <span class="contact-info__item mb-2">
                  <i class="fas fa-envelope"></i><span class="mx-2">casanlopz@gmail.com</span>
                </span>
                <span class="contact-info__item">
                  <i class="fas fa-phone"></i> <i class="fab fa-whatsapp"></i> <span class="mx-2">Tel: (951) 222-7061</span>
                </span>
              </p>

              <p class="d-flex flex-column">
                <span class="contact-info__item mb-2">
                  <i class="fas fa-envelope"></i><span class="mx-2">liliana.hasselll@gmail.com</span>
                </span>
                <span class="contact-info__item">
                  <i class="fas fa-phone"></i> <i class="fab fa-whatsapp"></i> <span class="mx-2">Tel: (951) 408-3002</span>
                </span>
              </p>
              
            </div>
          </div>
        </div>
        <div class="col-lg-6 h-100 block-28__form-side">
          <form onsubmit="submitContactForm(event)" class="contact-form text-center">
            <div class="contact-form__header mb-5">
              <h6 class="contact-form__title mb-3">Digitalmenus.club</h6>
              <p class="contact-form__paragraph mb-0 mx-auto">
               Un placer atenderte.
              </p>
            </div>
            <input type="text" class="contact-form__input" placeholder="Nombre Completo">
            <input type="email" class="contact-form__input" placeholder="Email">
            <textarea class="contact-form__input" placeholder="Mensaje"></textarea>
            <button class="btn btn-primary w-100">ENVIAR MENSAJE</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    
}
</script>
import React from "react";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <div id="color">
      <footer id="footer color" class="page-footer font-small teal pt-4">
        <div class="container-fluid text-center text-md-left">
          <div class="row">
            <div class="col-md-6 mt-md-0 mt-3">
              <h5 id="titulo" class="text-uppercase font-weight-bold">
                CONTACTO
              </h5>
              <p id="parrafo">
                <ion-icon name="mail-outline"></ion-icon>
                aromasartesanales@gmail.com
              </p>
              <p id="parrafo">
                <ion-icon name="call-outline"></ion-icon>11 5890 0000
              </p>
              <p id="parrafo">
                <ion-icon name="location-outline"></ion-icon>Profesor Aguer 6151
              </p>
              <p id="parrafo">
                <ion-icon name="logo-facebook"></ion-icon>
                <ion-icon name="logo-instagram"></ion-icon>
              </p>
            </div>

            <hr class="clearfix w-100 d-md-none pb-3" />

            <div class="col-md-6 mb-md-0 mb-3">
              <h5 id="titulo" class="text-uppercase font-weight-bold">
                Horarios
              </h5>
              <p id="parrafo"> Lun - Sab: 8am - 9pm </p>
            </div>
          </div>
        </div>

        <div class="footer-copyright text-center py-3">© 2022</div>
      </footer>
    </div>
  );
};

export default Footer;

import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./contact.css";
import background from "../../Assets/imagenes/fondo.jpg";

function ContactPage(props) {
  return (
    <div>
      <NavBar />

      <div
        className="background-container"
        style={{ backgroundImage: `url(${background})`,
    }}
      >
        <div className="contact-container">
          <div>
            <div className="link-contacto">
              <i className="fa-brands fa-whatsapp fa-2x"></i>{" "}
              <a className="vinculo"
                href="https://api.whatsapp.com/send?phone=5491150436661"
                target="_blank"
              >
                Envíanos un mensaje de WhatsApp
              </a>
            </div>
          </div>

          <div>
            <div className="link-contacto">
              <i className="fas fa-envelope fa-2x"></i>
              <a  className="vinculo" href="mailto:franciscojuanzk@gmail.com">
                franciscojuanzk@gmail.com
              </a>
            </div>
          </div>
          <div>
            <div className="link-contacto">
              <i className="fas fa-map-marker-alt fa-2x"></i>
              <a  className="vinculo"
                href="https://www.google.com.ar/maps/place/Royal+Delft/@52.0014279,4.3670314,20z/data=!4m5!3m4!1s0x47c5b59380afbc87:0xdb231fd4a1e45caa!8m2!3d52.0014506!4d4.3670524"
                target="_blank"
              >
                Marcos Paz XXXX, CABA - Argentina
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "pruebaproyectoswi@gmail.com",
    pass: "jacyavbtzdcrwdtp",
  },
  tls: {
    rejectUnauthorized: false,
  },
  logger: true,
  debug: true,
});



const sendEmail = async(email, subject,html)=>{
    try{
      await transporter.sendMail({
        from: `"Pruebas" <pruebaproyectoswi@gmail.com>`,
        to: email, 
        subject, 
        text: "Hola, correo de prueba", 
        html, 
      });
      
    }catch(error){
    console.log('Error al enviar el corre', error)
    }

}
const getTemplate = (nombre, token)=>{
   return `
   <head>
      <link rel ="stylesheet" href="./style.css">
   </head>
   <div id="email__content">
      <h2>Correo de prueba para ${nombre}</h2>
      <p>Para confirmar tu correo entra al siguiente enlace</p>
      <a
      href="https://dapi-production-ca9b.up.railway.app/api/usuario/confirmarUsuario/${token}"
      >Confirmar cuenta</a>
   </div>
   `;
}

module.exports={
    sendEmail,
    getTemplate
}


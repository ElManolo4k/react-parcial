import { useState } from "react";

const Login = () => { 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Contraseña:", password);
    
        const userData = {
          email: email,
          contrasena: password,
        };
    
        fetch("https://private-ab4c0-login652.apiary-mock.com/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        })
          .then((response) => {
            if (response.status === 200) {
              return response.json();
            } else if (response.status === 401) {
              return response.json();
            } else {
              throw new Error("Error desconocido");
            }
          })
          .then((data) => {
            if (data.mensaje === "Inicio de sesión exitoso") {
              if (
                userData.email === "diego@santoto.edu.co" &&
                userData.contrasena === "123456"
              ) {
                console.log("Inicio de sesión exitoso");
              } else {
                console.log("Inicio de sesió fallido: Datos incorrectos");
              }
            } else if (data.mensaje === "Inicio de sesión fallido") {
              console.log("Inicio de sesión fallido");
            } else {
              console.log("Respuesta inesperada de la API");
            }
          })
          .catch((error) => {
            console.log("Hubo un error en la solicitud" + { error });
          });
      };

      return(
        <div className="bg-[url('./assets/Recurso2.png')] min-h-screen bg-contain bg-no-repeat  ">
            <form onSubmit={handleSubmit}></form>
        </div>
      )
 }

 export default Login;
# Servidor Hola Mundo

Este proyecto crea un servidor donde se ejecuta un programa simple de "Hola mundo". A su vez, crea un servidor asíncrono y otro síncrono para enviar y recibir un archivo de texto.

## Getting Started

Estas instrucciones ayudaran a entender como manejar el proyecto.

### Prerequisites

Antes de ejecutar cualquier prueba, deberás tener instalado los siguientes componentes.
-   Node.js
-   Docker

### Installing

Para instalar el proyecto:
1.  Clona el repositorio a tu máquina local.
2.  Instala las dependencias necesarias utilizando `npm install`.

## Running the tests

Para correr las pruebas sigue los siguientes pasos:

1.  Abre una terminal de comandos.
2.  Ejecuta el siguiente comando para crear el contenedor de docker:

```bash
sudo docker build . -t hello_world:1
```

3. Utiliza el siguiente comando para verificar que la imagen se haya creado:
```bash
sudo docker images
```

4.  Para correr el servidor asíncrono del proyecto, ejecuta el siguiente comando:
```bash
docker run -p 3000:3000 hello_world:1 asincrServer.js
```

5. Para correr el servidor síncrono del proyecto, ejecuta el siguiente comando:
```bash
docker run -p 3000:3000 hello_world:1 sincrServer.js
```

6. Para correr el "Hola mundo" del proyecto, ejecuta el siguiente comando:
```bash
docker run -p 3000:3000 hello_world:1 hello_world.js
```

7. Visita la dirección IP http://localhost:3000/ en tu navegador si estás ejecutando alguno de los servidores y verás el contenido de el archivo correspondiente.

## Authors

* **Luis Melendez** - *Initial work* 

## Acknowledgments

* Este proyecto fue hecho para la clase de Programación para Plataformas Emergentes de la Universidad Autónoma de Chihuahua.
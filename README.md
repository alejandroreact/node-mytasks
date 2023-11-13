[![Moleculer](https://badgen.net/badge/Powered%20by/Moleculer/0e83cd)](https://moleculer.services)

# node-mytasks
# Technical Proof Backend Node Moleculer (microservices)

El reto técnico consta de 2 partes que deben integrarse:

## Reto Backend:
Tendrás que desarrollar una App en NodeJS (solo backend) que permita a un usuario gestionar la típica lista de "cosas por hacer”.
No hace falta que la "lista" se persista en ninguna base de datos, puedes simplemente gestionarlo en memoria y mostrar el estado en la terminal.
La App debe estar compuesta por 3 servicios sencillos:
1) Un servicio “Listas”, que se encarga de gestionar las listas.
2) Un servicio “Tareas”, que se encarga de recibir una tarea y añadirla a una lista.
3) Un servicio “ApiGateway”, que simplemente se encarga de recibir las peticiones REST y enviarlas al servicio correspondiente.
Los servicios de “Listas” y “Tareas” no exponen un API Rest al público, sino que deben realizar sus operaciones a través de eventos. La única puerta de entrada por REST, será el servicio “ApiGateway”.
Para simplificar el reto, solo es necesario que los servicios permitan "crear" y "leer" elementos, no hace falta que "actualicen" o "borren" nada.
La forma en la que se producen y se consumen los eventos para que se comuniquen los servicios, es totalmente abierta y a tu criterio.
Puedes utilizar las librerías que veas convenientes. Por si quieres echarle un vistazo, nosotros vamos a empezar a utilizar esta https://moleculer.services, pero eres libre de hacerlo lo más sencillo posible si lo prefieres.
Puedes plantear los servicios dentro de un monorepo o hacerlo como repos separados.

## Reto frontend:
Tendrás que desarrollar una App en React (solo frontend) que permita al usuario gestionar la lista de "cosas por hacer” realizada en el Reto Backend.
Para simplificar el reto, el usuario únicamente debe poder realizar las acciones de "crear" y "leer" sobre su lista de “cosas por hacer”. Las acciones de "actualizar" y "borrar" queda fuera del scope del reto.
Puedes utilizar las librerías/paquetes javascript con las que te sientas más a gusto trabajando para consultar el API realizado en el Reto Backend.  Por si te animas, nosotros utilizamos “React Query”: https://tanstack.com/query/v4/docs/react/quick-start
Del mismo modo, puedes utilizar la librería de componentes UI con la que te sientas más a gusto.
Si quieres echar un ojo, nosotros hemos creado la nuestra propia llamada “Bubbles”: https://leemonade.github.io/bubbles/components, que está basada en https://v5.mantine.dev.
El diseño de la interfaz es completamente a tu criterio y no lo tendremos en cuenta para el reto técnico. Vamos que puedes utilizar un diseño que encuentres en https://dribbble.com o simplemente utilizar el estilo que viene por defecto en la librería de componentes UI que vayas a utilizar.


# Technical Proof Backend Node Moleculer (microservices)
This is a [Moleculer](https://moleculer.services/)-based microservices project. Generated with the [Moleculer CLI](https://moleculer.services/docs/0.14/moleculer-cli.html).

## Usage
Start the project with `npm run dev` command. 
After starting, open the http://localhost:3000/ URL in your browser. 
On the welcome page you can test the generated services via API Gateway and check the nodes & services.

In the terminal, try the following commands:
- `nodes` - List all connected nodes.
- `actions` - List all registered service actions.
- `call greeter.hello` - Call the `greeter.hello` action.
- `call greeter.welcome --name John` - Call the `greeter.welcome` action with the `name` parameter.



## Services
- **api**: API Gateway services
- **greeter**: Sample service with `hello` and `welcome` actions.


## Useful links

* Moleculer website: https://moleculer.services/
* Moleculer Documentation: https://moleculer.services/docs/0.14/

## NPM scripts

- `npm run dev`: Start development mode (load all services locally with hot-reload & REPL)
- `npm run start`: Start production mode (set `SERVICES` env variable to load certain services)
- `npm run cli`: Start a CLI and connect to production. Don't forget to set production namespace with `--ns` argument in script
- `npm run lint`: Run ESLint
- `npm run ci`: Run continuous test mode with watching
- `npm test`: Run tests & generate coverage report

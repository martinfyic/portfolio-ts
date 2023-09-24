import { IProyect } from '@/interfaces';

export const proyects: IProyect[] = [
	{
		name: 'Backend Ecommers NodeJs',
		description:
			'El proyecto final del curso de Backend en Coderhouse consistió en el desarrollo de un backend para una aplicación de e-commerce, con el objetivo de ofrecer a los usuarios la posibilidad de comprar y vender productos en línea de manera sencilla y segura.',
		image: '/web-images/ecommer-nodejs-proyect.webp',
		github: 'https://github.com/martinfyic/proyecto-nodejs-ecommerce.git',
		link: 'https://proyecto-nodejs-ecommerce.onrender.com/',
	},
	{
		name: 'H.D.P Burguer',
		description:
			'Este es mi segundo proyecto Front-End y mi primero con React Js. Se trata de un e-commerce ficticio realizado para el tercer curso de Coderhouse; completando así la carrera de Front-End. Es posible ampliar el detalle de cada producto sin recargar la página utilizando el routing de React. A partir de ahí, estos se pueden agregar al carrito. En la vista del carrito, se pueden eliminar artículos y hay un formulario de compra. Luego, la información se sube a firebase.',
		image: '/web-images/burguer-react-proyect.webp',
		github: 'https://github.com/martinfyic/app-hamburguesas-reactjs.git',
		link: 'https://proyecto-reactjs-martin.netlify.app/',
	},
	{
		name: 'Zara Proyect ',
		description:
			'Este proyecto fue realizado durante el curso de Javascript en Coderhouse, es mi primer proyecto donde aprendi JS. La consigna fue generar un ecommers donde se aplicaran la mayor cantidad de conceptos aprendidos en el curso.',
		image: '/web-images/zara-js-proyect.webp',
		github: 'https://github.com/martinfyic/simulador-ecommerce-jsvanilla.git',
		link: 'https://simulador-ecommerce-js.netlify.app/',
	},
];

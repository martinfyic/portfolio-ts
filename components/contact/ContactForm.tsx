'use client';
import { useState } from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { ToastContainer, toast } from 'react-toastify';

import { validationSchema } from '@/helpers/validations';
import { IFormValues } from '@/interfaces';

export const ContactForm = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handleSubmit = async (
		values: IFormValues,
		{
			setSubmitting,
			resetForm,
		}: {
			setSubmitting: (isSubmitting: boolean) => void;
			resetForm: () => void;
		},
	) => {
		try {
			setIsLoading(true);
			await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(values),
			});

			resetForm();
		} catch (error) {
			console.error('Failed to send email:', error);
		} finally {
			setSubmitting(false);
			toast.success('Mensaje enviado correctamente!');
			setIsLoading(false);
		}
	};

	return (
		<>
			<Formik
				initialValues={{ name: '', email: '', message: '' }}
				validationSchema={toFormikValidationSchema(validationSchema)}
				onSubmit={handleSubmit}
			>
				<Form>
					<div className="w-3/4 mx-auto">
						<div className="flex flex-wrap -m-2">
							<div className="p-2 w-1/2">
								<div className="relative">
									<label className="leading-7 text-sm font-semibold">
										Nombre
									</label>
									<Field
										type="text"
										id="name"
										name="name"
										className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
									/>
									<ErrorMessage
										name="name"
										component="div"
										className="text-red-500 text-sm"
									/>
								</div>
							</div>
							<div className="p-2 w-1/2">
								<div className="relative">
									<label className="leading-7 text-sm font-semibold">
										Email
									</label>
									<Field
										type="email"
										id="email"
										name="email"
										className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
									/>
									<ErrorMessage
										name="email"
										component="div"
										className="text-red-500 text-sm"
									/>
								</div>
							</div>
							<div className="p-2 w-full">
								<div className="relative">
									<label className="leading-7 text-sm font-semibold">
										Mensaje
									</label>
									<Field
										id="message"
										name="message"
										as="textarea"
										className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
									/>
									<ErrorMessage
										name="message"
										component="div"
										className="text-red-500 text-sm"
									/>
								</div>
							</div>
							<div className="p-2 w-full flex justify-center items-center">
								<button
									disabled={isLoading}
									className="text-white font-semibold px-6 py-3 bg-primary rounded shadow hover:-translate-y-1 transition-transform cursor-pointer hover:opacity-70"
								>
									Enviar
								</button>
							</div>
						</div>
					</div>
				</Form>
			</Formik>
			<ToastContainer
				position="bottom-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
		</>
	);
};

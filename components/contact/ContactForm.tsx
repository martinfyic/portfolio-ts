"use client";
import { useState } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { ToastContainer, toast } from "react-toastify";

import { validationSchema } from "@/helpers/validations";
import { IFormValues } from "@/interfaces";
import { ContactFormSkeleton } from "./ContactFormSkeleton";

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

      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      resetForm();
    } catch (error) {
      console.error("Failed to send email:", error);
    } finally {
      setSubmitting(false);
      toast.success("Mensaje enviado correctamente!");
      setIsLoading(false);
    }
  };

  return (
    <>
      {!isLoading ? (
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={toFormikValidationSchema(validationSchema)}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mx-auto w-3/4">
              <div className="-m-2 flex flex-wrap">
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <label className="text-sm font-semibold leading-7">
                      Nombre
                    </label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-light focus:ring-2 focus:ring-indigo-200"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-sm text-red-500"
                    />
                  </div>
                </div>
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <label className="text-sm font-semibold leading-7">
                      Email
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-light focus:ring-2 focus:ring-indigo-200"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-sm text-red-500"
                    />
                  </div>
                </div>
                <div className="w-full p-2">
                  <div className="relative">
                    <label className="text-sm font-semibold leading-7">
                      Mensaje
                    </label>
                    <Field
                      id="message"
                      name="message"
                      as="textarea"
                      className="h-32 w-full resize-none rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-light focus:ring-2 focus:ring-indigo-200"
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-sm text-red-500"
                    />
                  </div>
                </div>
                <div className="flex w-full items-center justify-center p-2">
                  <button
                    disabled={isLoading}
                    className="cursor-pointer rounded border-2 border-black bg-gradient-to-tl from-primary via-purple-500 to-pink-500  px-6 py-3 font-semibold text-light shadow transition-transform hover:-translate-y-1"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      ) : (
        <ContactFormSkeleton />
      )}
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

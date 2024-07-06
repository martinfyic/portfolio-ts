export const DownLoadCvButton = () => {
  return (
    <a
      className="cursor-pointer rounded border-2 border-black bg-gradient-to-tl from-pink-500 via-purple-500 to-primary px-6 py-3 font-semibold text-light shadow-md transition-transform hover:-translate-y-1"
      href="./CV-Martin_Ferreira.pdf"
      download="Martin-Ferreira-CV.pdf"
      title="Descargar curriculum"
      aria-label="Descargar curriculum"
    >
      Descargar CV
    </a>
  );
};

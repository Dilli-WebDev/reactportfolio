const Contact = () => {
  return (
    <footer
      id="contact"
      className="w-full flex items-center pt-6 border-t border-light-gray/20 pb-1 mt-5"
    >
      <div className="flex items-center gap-2 text-light-gray hover:text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 16 16"
        >
          <path
            fill="white"
            fill-rule="evenodd"
            d="M14.95 3.684L8.637 8.912a1 1 0 0 1-1.276 0l-6.31-5.228A.999.999 0 0 0 1 4v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a.999.999 0 0 0-.05-.316M2 2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m-.21 1l5.576 4.603a1 1 0 0 0 1.27.003L14.268 3z"
          />
        </svg>
        <a href="mailto:dilliwebdev218@gmail.com">dilliwebdev218@gmail.com</a>
      </div>
    </footer>
  );
};

export default Contact;

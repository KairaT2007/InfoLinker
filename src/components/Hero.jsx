import React from "react";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <p className='text-3xl blue_gradient'>Ai Project</p>
        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/KairaT2007", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Добро пожаловать в<br className='max-md:hidden' />
        <span className='blue_gradient'>InfoLinker</span>
      </h1>
      <h2 className='desc'>
      Этот проект представляет собой систему искусственного интеллекта, способную анализировать и "читать" информацию на веб-сайтах. Так как это тестовый проект, отвечать он будет на английском языке и в месяц можно сделать не больше 50 запросов !
      </h2>
    </header>
  );
};

export default Hero;

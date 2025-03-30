const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 px-6">
      <div className="text-center">
        <div className="flex justify-center item-center ">
          <p className="text-8xl font-extrabold bg-gradient-to-r from-blue-300 to-pink-300 text-transparent bg-clip-text uppercase tracking-wider drop-shadow-xl transition-transform duration-300 hover:scale-110">
            ALL 
          </p>
          <p className="text-5xl font-extrabold bg-gradient-to-r from-pink-300 to-purple-400 text-transparent bg-clip-text uppercase tracking-wider drop-shadow-xl transition-transform duration-300 hover:scale-110">
            IN
          </p>
          <p className="text-8xl font-extrabold bg-gradient-to-r from-purple-400 to-green-300 text-transparent bg-clip-text uppercase tracking-wider drop-shadow-xl transition-transform duration-300 hover:scale-110">
            ONE
          </p>
        </div>
        <p className="mt-6 text-xl text-gray-800 font-semibold max-w-3xl">
          Welcome to the **ultimate** React experience! This platform is
          designed to help you explore various **React components**, UI
          elements, and powerful features—all in **one** place. Whether you're a
          beginner or an expert, you'll find useful resources to enhance your
          **development journey**.
        </p>
        <p className="mt-4 text-lg text-gray-700 font-medium">
          Select an option above for a different React component and dive into
          the world of **React**!
        </p>
      </div>
    </div>
  );
};

export default HomePage;

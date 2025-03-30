const ProgressBar = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 px-6">
        <p className="mb-4 text-lg text-gray-700 font-medium">progress Bar</p>
        <div className="rounded-xl overflow-hidden w-xl h-10">
        <progress value="30" max="100" className="w-xl h-10">
        </progress>
        </div>

      </div>
    </>
  );
};
export default ProgressBar;

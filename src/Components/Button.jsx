// eslint-disable-next-line react/prop-types
const Button = ({ text }) => {
  return (
    <div
      className="flex justify-center items-center bg-blue-500 rounded-3xl px-7 
      py-3 text-white hover:bg-blue-400 hover:cursor-pointer  text-txt capitalize"
    >
      {text}
    </div>
  );
};
export default Button;

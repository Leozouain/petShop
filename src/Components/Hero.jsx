import Button from "./Button";

const Hero = () => {
  return (
    <div className=" flex  justify-center md:h-auto pt-[20px] px-15px ">
      <div className="flex flex-col md:flex-row   md:max-w-[80%] ">
        <div
          className=" flex flex-col  justify-center items-center md:items-start 
         md:w-[45vw] "
        >
          <h1
            className="lg:w-[60%] w-auto flex text-h1sm md:text-h1 leading-none
          max-w-[90%] "
          >
            Mobile Dog Grooming in Santa Ana
          </h1>
          <br />
          <h3>Book a mobile dog groomer in Santa Ana and nearby areas.</h3>
          <div className="py-10 self-auto ]">
            <Button text={"booking now"} />
          </div>
        </div>
        {/* <div
          className="bg-gray-500  md:w-[45vw]  bg-center bg-no-repeat bg-cover h-[80vh]"
          style={{
            backgroundImage:
              "url(https://www.animalbehaviorcollege.com/wp-content/uploads/2022/06/AdobeStock_220817820-1024x683.jpeg)",
          }}
        ></div> */}
        <div className="flex justify-center items-center md:max-w-[45vw] mt-[20px] md:mt-0">
          <img
            className=" w-auto"
            src="https://assets-global.website-files.com/5f99c7dfbbc17623931b16c2/6237805d5cf09553e4d33932_BB_05.jpg"
            alt="photo"
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;

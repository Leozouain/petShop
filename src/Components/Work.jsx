const Work = () => {
  return (
    <div className="flex md:max-h-[60vh]  justify-center items-center mt-5">
      <div className="">
        <div className="flex flex-col md:flex-row gap-10 justify-center items-center ">
          <img
            className="inline-block md:max-w-[35%] rounded-xl"
            src="https://assets-global.website-files.com/5f99c7dfbbc17623931b16c2/6224c541ceb04609a8158735_Untitled-9-p-1080.jpeg"
            alt="dog work"
          />
          <div
            className="flex flex-col text-center justify-center items-center gap-5 
          md:max-w-[40%]  "
          >
            <h4>We love what we do!</h4>
            <h3 className=" max-w-[80%]">
              At Barkbus, we all love dogs, love people and love people who love
              their dogs. We are ending traumatic trips to the salon by
              providing a stress-free on demand dog grooming service at your
              doorstep. While we may be on demand, this is far from just a gig
              as all Barkbus pet stylists have years of experience in complex
              grooming, dog safety and breed specific haircuts so we can ensure
              your fur babies will feel right at home with us.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Work;

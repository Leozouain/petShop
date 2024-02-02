import Button from "./Button";

const Service = () => {
  const services = {
    1: {
      txt: "Warm Filtered Water Bath",
      img: "https://assets-global.website-files.com/5f99c7dfbbc17623931b16c2/622265150208fb9ed1f480c2_bath-p-500.jpeg",
    },
    2: {
      txt: "All Natural Products",
      img: "https://assets-global.website-files.com/5f99c7dfbbc17623931b16c2/6222653c85f08adf789ee1ed_products-p-500.jpeg",
    },
    3: {
      txt: "Gentle Brush & Blowout",
      img: "https://assets-global.website-files.com/5f99c7dfbbc17623931b16c2/62226529c7d2ef291d533c73_blower-p-500.jpeg",
    },
    4: {
      txt: "Clean Teeth & Ears",
      img: "https://assets-global.website-files.com/5f99c7dfbbc17623931b16c2/6222654dcebfa3f337c77eb6_teeth-p-500.jpeg",
    },
    5: {
      txt: "Breed Specific Pro Groom",
      img: "https://assets-global.website-files.com/5f99c7dfbbc17623931b16c2/62226559d7582524ec4eeda7_scissors-p-500.jpeg",
    },
    6: {
      txt: "Trim & File Nails",
      img: "https://assets-global.website-files.com/5f99c7dfbbc17623931b16c2/622265621ad4f9077053e50b_nails-p-500.jpeg",
    },
  };

  return (
    <div className="flex flex-col justify-center items-center gap-28 overflow-hidden">
      <div
        className="flex flex-col justify-center gap-5  items-center mt-[60px] 
      text-center md:max-w-[60%]"
      >
        <h4 className="text-h1sm  max-w-[80%] md:text-h2">
          The Barkbus Signature Service
        </h4>
        <h3 className="  max-w-[80%] md:text-sub">
          Barkbus provides mobile dog grooming in the Orange County area,
          including the Santa Ana neighborhood. Whether you live near Costa Mesa
          Fwy, closer to Fairview St, or anywhere in-between, we can save you
          time with our one-on-one doorstep dog grooming service. Our pet
          stylists will come straight to you and provide your pup with a fun,
          stress-free grooming experience that will leave them happy and
          healthy. If you're looking for Santa Ana dog grooming services, give
          us a call or schedule online today!
        </h3>
      </div>
      <div
        className="flex  flex-col md:grid md:grid-cols-3 md:gap-10 xl:gap-32
        justify-around md:max-w-[80vw]
      "
      >
        {Object.values(services).map((service, index) => (
          <div
            key={index}
            className="flex h-36 justify-between px-5 md:px-0 md:justify-center items-center gap-5 w-[100%]
        md:flex-col  md:max-w-[325px] md:h-[335px]"
          >
            <img
              className=" max-w-[20%] md:max-w-[80%]"
              src={service.img}
              alt=""
            />
            <h3>{service.txt}</h3>
          </div>
        ))}
      </div>
      <Button text={"book online now"} />
    </div>
  );
};
export default Service;

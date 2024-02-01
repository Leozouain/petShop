const cards = {
  1: {
    text: "Saving your dog from cages and salon stress",
    img: "https://assets-global.website-files.com/5f99c7dfbbc17623931b16c2/62226871795df22407c9c0de_cages-p-800.jpeg",
    alt: "protecting your dog",
  },
  2: {
    text: "Delivering you peace of mind and convenience",
    img: "https://assets-global.website-files.com/5f99c7dfbbc17623931b16c2/62226ad49035c53d7de43417_relaxed-p-800.jpeg",
    alt: "convenience",
  },
};

const Mobile = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-20 mt-10">
      <div
        className="flex flex-col justify-center gap-5  items-center mt-[30px] 
      text-center md:max-w-[60%]"
      >
        <h4 className="md:max-w-[60%]">
          Expert Mobile Dog Grooming in Santa Ana
        </h4>
        <h3 className="  max-w-[80%] md:text-sub">
          A world class groomer in a state of the art mobile spa delivers stress
          free dog grooming at your doorstep in Santa Ana
        </h3>
      </div>
      <div className="block  items-center py-5 md:flex gap-10 justify-center ">
        {Object.values(cards).map((card, index) => (
          <div key={index}>
            <img className="max-h-[635px]" src={card.img} alt={card.alt} />
            <h3 className="text-center">{card.text}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Mobile;

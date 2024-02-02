import { motion } from "framer-motion";

const prices = {
  1: {
    price: "50.00",
    description:
      "Plano Básico - Inclui banho, tosa higiênica, limpeza de ouvidos e corte de unhas.",
    img: "https://images.unsplash.com/photo-1523626797181-8c5ae80d40c2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "Básico",
  },
  2: {
    price: "75.00",
    description:
      "Plano Intermediário - Além dos serviços do Plano Básico, inclui hidratação para pelos e escovação.",
    img: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "Intermediario",
  },
  3: {
    price: "100.00",
    description:
      "Plano Premium - Oferece todos os serviços dos planos anteriores, além de aromaterapia e acessórios especiais.",
    img: "https://images.unsplash.com/photo-1590634331662-660d6992a9f2?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "Premium",
  },
};

const SquishyCard = () => {
  return (
    <section className=" px-4 py-12 lg:flex   rounded-2xl">
      {Object.values(prices).map((price, index) => (
        <div key={index} className="mx-auto w-fit my-5">
          <Card price={price} />
        </div>
      ))}
    </section>
  );
};

const Card = ({ price }) => {
  return (
    <motion.div
      whileHover="hover"
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl
       bg-blue-500 p-8"
    >
      <div className="relative z-10 text-white">
        <span
          className="mb-3 block w-fit rounded-full bg-blue-400 px-3 py-0.5 
        text-sm font-light text-white"
        >
          {price.type}
        </span>
        <motion.span
          initial={{ scale: 0.85 }}
          variants={{
            hover: {
              scale: 1,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          className="my-2 block origin-top-left font-mono text-6xl font-black leading-[1.2]"
        >
          R${price.price}
          <br />
          Mês
        </motion.span>
        <p>{price.description}</p>
      </div>
      <button
        className="absolute bottom-4 left-4 right-4 z-20 rounded border-2
       bg-blue-500 hover:bg-blue-400/30 py-2 text-center font-mono font-black uppercase
        text-white backdrop-blur transition-colors 
         hover:text-white"
      >
        Get it now
      </button>
      <div className="absolute inset-0 z-1 bg-black  ">
        <motion.img
          className="opacity-60"
          src={price.img}
          alt=""
          variants={{
            hover: {
              scale: 1.2,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
        />
      </div>
      {/* <Background /> */}
    </motion.div>
  );
};

export default SquishyCard;

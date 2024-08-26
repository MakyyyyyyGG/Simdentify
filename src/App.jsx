import { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [number, setNumber] = useState("");
  const [simImage, setSimImage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const prefix = number.slice(0, 4);

    const smartPrefixes = [
      "0813",
      "0908",
      "0911",
      "0913",
      "0914",
      "0919",
      "0920",
      "0921",
      "0922",
      "0923",
      "0924",
      "0925",
      "0928",
      "0929",
      "0931",
      "0932",
      "0933",
      "0934",
      "0939",
      "0940",
      "0941",
      "0942",
      "0943",
      "0944",
      "0947",
      "0949",
      "0951",
      "0961",
      "0964",
      "0968",
      "0969",
      "0970",
      "0971",
      "0973",
      "0974",
      "0980",
      "0981",
      "0999",
    ];
    const tntPrefixes = [
      "0907",
      "0909",
      "0910",
      "0912",
      "0918",
      "0930",
      "0938",
      "0948",
      "0950",
      "0989",
    ];
    const globePrefixes = [
      "0817",
      "0904",
      "0905",
      "0954",
      "09253",
      "09255",
      "09256",
      "09257",
      "09258",
    ];
    const tmPrefixes = ["0909", "0910", "0953"];

    const tmGlobePrefixes = [
      "0905",
      "0906",
      "0915",
      "0916",
      "0917",
      "0926",
      "0927",
      "0935",
      "0936",
      "0937",
      "0945",
      "0955",
      "0956",
      "0957",
      "0958",
      "0959",
      "0965",
      "0966",
      "0967",
      "0975",
      "0977",
      "0978",
      "0979",
      "0995",
      "0996",
      "0997",
    ];
    const smartTntPrefixes = ["0946", "0963", "0982", "0985", "0998"];

    const smartSunPrefixes = ["0951", "0952", "0962", "0972"];
    const ditoPrefixes = [
      "0895",
      "0896",
      "0897",
      "0898",
      "0991",
      "0992",
      "0993",
      "0994",
    ];
    const gomoPrefixes = ["0976"];

    if (smartPrefixes.includes(prefix)) {
      setSimImage("smart.png");
    } else if (tntPrefixes.includes(prefix)) {
      setSimImage("tnt.png");
    } else if (globePrefixes.includes(prefix)) {
      setSimImage("globe.png");
    } else if (tmPrefixes.includes(prefix)) {
      setSimImage("tm.png");
    } else if (ditoPrefixes.includes(prefix)) {
      setSimImage("dito.png");
    } else if (gomoPrefixes.includes(prefix)) {
      setSimImage("gomo.png");
    } else if (tmGlobePrefixes.includes(prefix)) {
      setSimImage("tmGlobe.png");
    } else if (smartTntPrefixes.includes(prefix)) {
      setSimImage("smartTnt.png");
    } else if (smartSunPrefixes.includes(prefix)) {
      setSimImage("smartSun.png");
    } else {
      setSimImage("");
    }

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex w-screen h-screen">
        <div className="flex-1 flex flex-col justify-center items-center">
          <div>
            <div className="flex justify-center items-center">
              <img
                src="logo.png"
                alt=""
                height={"80px"}
                width={"80px"}
                className="rounded-2xl mr-2"
              />
              <div>
                <h1 className="text-3xl font-bold text-violet-800 mr-2">
                  SimDentify
                </h1>
                <a href="https://www.facebook.com/Markyyyyyy.Clerigo/">
                  <p className="text-slate-500 text-[13px] underline underline-offset-4">
                    By MarkyyyyyyGG
                  </p>
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-10">
              <form
                onSubmit={handleSubmit}
                className="flex gap-4 flex-col border p-10 rounded-2xl  w-[350px] sm:w-[500px]"
              >
                <h1 className="text-2xl font-bold">
                  Enter the first 4 digits of your phone number.
                </h1>
                <p className="text-slate-500  mb-5">
                  We will identify the sim card provider for you.
                </p>
                <input
                  required
                  type="text"
                  className=" rounded-2x  py-4 px-8 rounded-2xl bg-[#f5f7fa]"
                  placeholder="e.g. 0905"
                  onChange={(event) => setNumber(event.target.value)}
                />
                <button className=" py-4 px-8 rounded-2xl  bg-violet-500 text-white text-xl font-bold">
                  Identify
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex-1 p-2 hidden sm:block">
          <img
            src="simbg2.png"
            alt=""
            className="w-full h-full object-cover rounded-3xl "
          />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && simImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300"
          onClick={closeModal}
        >
          <motion.div
            className="bg-white p-4 rounded-2xl shadow-lg transform"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={simImage}
              className="w-80 h-80 object-cover"
              alt="SIM Provider"
            />
          </motion.div>
        </div>
      )}
    </>
  );
}

export default App;

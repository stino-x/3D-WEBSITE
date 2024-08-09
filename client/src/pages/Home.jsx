import { useSnapshot } from "valtio";
import state from "../store";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from "../config/motion";
import { CustomButton } from "../components";
//import { useState } from 'react';

export default function Home() {
  const snap = useSnapshot(state);
  //const [imageError, setImageError] = useState(false);

  console.log("Render Home Component, snap.intro:", snap.intro);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img 
              src="/threejs.png"  // Correct path
              alt="logo" 
              className="w-8 h-8 object-contain" 
              onError={(e) => {
                console.error('Image failed to load', e);
                console.log(e)
                //setImageError(true);
              }}
            />
            {/* {imageError && <p className="error-message">Image failed to load</p>} */}
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET&rsquo;S <br className="xl:block hidden" /> DO IT.
              </h1>
            </motion.div>
            <motion.div {...headContentAnimation} className="flex flex-col gap-5">
              <p className="max-w-md font-normal text-gray-600 text-base">
                Create your unique and exclusive short with our brand new 3D customization tool{" "}
                <strong>Unleash your imagination</strong>{" "}
                and define your own style
              </p>
              <CustomButton
                type="filled"
                title="Customize It"
                handleClick={() => {
                  console.log("CustomButton clicked, updating state.intro");
                  state.intro = false;
                }}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

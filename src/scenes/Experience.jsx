import { motion } from "framer-motion";
import ListBox from "../components/ListBox";

const Experience = () => {
    return (
        <section id="experience" className="h-full w-full">
        <motion.div
                className="md:w-2/5 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 3.0 }}
                variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 }
                }}
            >
                <div>
                    <p className="font-playfair font-semibold text-4xl mb-5">
                        <span className="text-red">EXP</span>ERIENCE
                    </p>
                </div>
            </motion.div>
            <motion.div
                className="flex justify-center w-full h-5/6 mx-auto pt-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.5, duration: 3.0 }}
                variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 }
                }}
            >
                <ListBox listitems={["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]} />
                <ListBox listitems={["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]} />
            </motion.div>
        </section>
    );
};

export default Experience;
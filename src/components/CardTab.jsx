import { motion } from "framer-motion";
import { useState ,useEffect} from "react";

let tabs = [
    { id: 1, label: "Authentication" },
    { id: 2, label: "Security" },
    { id: 3, label: "User Experience" },
    { id: 4, label: "Performance & Scalibility" },
    { id: 5, label: "Multi-brand Management" },
];

export default function CardTab({setActiveTabInd}) {
    
    let [activeTab, setActiveTab] = useState(tabs[0].id);
    return (
        <div className="justify-center items-center hidden sm:flex md:flex">
            <div className="flex space-x-9 ">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => [setActiveTab(tab.id), setActiveTabInd(tab.id)]}
                        className={`${activeTab === tab.id ? "" : "hover:text-white/60"
                            } relative rounded-xl px-6 py-3 text-sm font-medium bg-zinc-800 text-white outline-sky-400 transition focus-visible:outline-2`}
                        style={{
                            WebkitTapHighlightColor: "transparent",
                        }}
                    >
                        {activeTab === tab.id && (
                            <motion.span
                                layoutId="bubble"
                                className="absolute inset-0 z-10 bg-white mix-blend-difference rounded-xl"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.9 }}
                            />
                        )}
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>
    );
}

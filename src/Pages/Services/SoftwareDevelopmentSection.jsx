import React from "react";
import {
    MessageSquare,
    ShieldPlus,
    CheckSquare,
    Globe,
    Layers,
    Target,
    Lightbulb,
    Crosshair,
    Grid,
    ClipboardList,
    Gem,
    Download,
    Zap,
} from "lucide-react";

// Circle step component without label
const WorkflowCircle = ({ Icon }) => (
    <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
            <Icon className="w-8 h-8 text-orange-500" />
        </div>
    </div>
);

// Horizontal connector (desktop only)
const ConnectorH = () => (
    <div className="hidden md:block w-40 h-0.5 bg-yellow-400"></div>
);

const ConnectorH2 = () => (
    <div className="hidden md:block w-8 h-0.5 bg-yellow-400"></div>
);

const ConnectorH3 = () => (
    <div className="hidden md:block w-32 h-0.5 bg-yellow-400"></div>
);


const ConnectorH4 = () => (
    <div className="hidden md:block w-52 h-0.5 bg-yellow-400"></div>
);

const Connectorleft = () => (
    <div className="hidden md:block w-24 h-0.5 bg-yellow-400"></div>
);

const Connectorleft2 = () => (
    <div className="hidden md:block w-16 h-0.5 bg-yellow-400"></div>
);

const Connectorright = () => (
    <div className="hidden md:block w-24 h-0.5 bg-yellow-400"></div>
);
// Vertical connector (mobile only)
const ConnectorV = () => (
    <div className="md:hidden w-0.5 h-10 bg-yellow-400"></div>
);

const SoftwareDevelopmentSection = () => {
    // Define workflow steps
    const topRow = [MessageSquare, ShieldPlus, CheckSquare, Globe];
    const centerIcon = Layers;
    const middleRow = [Target, Lightbulb, Crosshair, Grid]; // reversed on render
    const bottomRow = [ClipboardList, Gem, Download, Zap];

    const mobileSteps = [
        ...topRow,
        centerIcon,
        ...middleRow,
        ...bottomRow,
    ];

    return (
        <section className="w-full bg-white py-12 ">
            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-800">
                Outsourced Software Development Workflow
            </h2>
            <p className="text-center text-gray-600 mb-12 w-full mx-auto text-sm md:text-base">
                Our Strategic Development Plan streamlines project execution, enhances
                collaboration, and ensures timely delivery with flexible scaling, all
                while maintaining high-quality standards.
            </p>

            {/* Desktop Layout */}
            <div className=" max-w-[830px] mx-auto  relative hidden md:flex flex-col items-center gap-8">
                {/* Top Row */}
                <div className=" relative w-full flex flex-col items-center">
                    <div className="flex items-center">
                        {topRow.map((Icon, i) => (
                            <React.Fragment key={i}>
                                <WorkflowCircle Icon={Icon} />
                                {i < topRow.length - 1 && <ConnectorH />}
                            </React.Fragment>
                        ))}
                        <ConnectorH2></ConnectorH2>
                    </div>

                    {/* Vertical Connector + Center Icon */}
                    <div
                        className="absolute flex flex-col items-center  mt-8 right-0 "
        
                        >
                        <div className="w-0.5 h-10 bg-yellow-400" />
                        <WorkflowCircle Icon={centerIcon} />
                        <div className="w-0.5 h-10 bg-yellow-400" />
                    </div>
                </div>

                {/* Middle Row (reversed) */}
                <div className=" max-w-3xl flex items-center md:mt-12">
                    <Connectorleft />
                    {[...middleRow].reverse().map((Icon, i) => (
                        <React.Fragment key={i}>

                            <WorkflowCircle Icon={Icon} />
                            {i < middleRow.length - 1 && <ConnectorH3 />}
                        </React.Fragment>
                    ))}
                    <Connectorright />
                </div>

                {/* Vertical Connector */}
                <div className=" absolute flex flex-col items-center top-44 left-0">
                    <div className="w-0.5 h-9 bg-yellow-400" />
                        <WorkflowCircle Icon={centerIcon} />
                        <div className="w-0.5 h-9 bg-yellow-400" />
                </div>

                {/* Bottom Row */}
                <div className=" max-w-3xl flex items-center mt-10">
                    <Connectorleft2></Connectorleft2>
                    {bottomRow.map((Icon, i) => (
                        <React.Fragment key={i}>
                            <WorkflowCircle Icon={Icon} />
                            {i < bottomRow.length - 1 && <ConnectorH />}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden flex flex-col items-center">
                {mobileSteps.map((Icon, i) => (
                    <React.Fragment key={i}>
                        <WorkflowCircle Icon={Icon} />
                        {i < mobileSteps.length - 1 && <ConnectorV />}
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};

export default SoftwareDevelopmentSection;

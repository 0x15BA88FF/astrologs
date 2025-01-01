import { useState } from "react";
import { ChevronRight } from "lucide-react";

const OutlineHeading = ({ heading, expanded }) => {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <li>
            <div className="flex items-center gap-2 w-full px-2 py-1 hover:bg-surface-700 rounded" style={{ paddingLeft: `${1 * heading.depth}rem` }}>
                {heading.children?.length > 0? (
                    <button onClick={_ => setIsExpanded(!isExpanded)} className="flex items-center -ml-3">
                        <ChevronRight size={20} className={ `transition-all duration-200 ${isExpanded && "rotate-90"}` } />
                    </button>
                ) : (
                    <div className="mr-2" />
                )}
                <a href={`#${heading.slug}`} className="w-full text-sm">{heading.text}</a>
            </div>
            { heading.children?.length > 0 && (
                <ul className={!isExpanded && "hidden"}>
                    {heading.children.map(child => (
                        <OutlineHeading key={child.slug} heading={child} />
                    ))}
                </ul>
            )}
        </li>
    );
};

export default OutlineHeading;

import { useState, useMemo } from "react";
import { nestHeadings, searchHeadingsTree } from "@/scripts/headingTree.js";

import { Search } from "lucide-react";
import OutlineHeading from "@/components/OutlineHeading.jsx";

const Outline = ({ headings }) => {
    const nestedHeadings = useMemo(() => nestHeadings(headings), [headings]);
    const [filteredHeadings, setFilteredHeadings] = useState(nestedHeadings);

    const handleSearch = (text) => {
        if (text.trim() == "") {
            setFilteredHeadings(nestedHeadings);
        } else {
            setFilteredHeadings(searchHeadingsTree(nestedHeadings, (node) =>
                node.text.toLowerCase().includes(text.toLowerCase())
            ));
        }
    };

    return (
        <div className="h-full flex flex-col">
            <div className="flex items-center gap-4 px-4 py-2 bg-surface-900 border-2 border-surface-700 rounded">
                <Search size={20} className="w-max" />
                <input type="text" onChange={e => handleSearch(e.target.value)} placeholder="Search Headings" className="w-full bg-transparent" />
            </div>
            <ul className="flex-grow mt-4 overflow-y-scroll">
                {filteredHeadings.length > 0 ? (
                    filteredHeadings.map(heading => (
                        <OutlineHeading key={heading.slug} heading={heading} />
                    ))
                ) : (
                    <li>No headings available</li>
                )}
            </ul>
        </div>
    );
};

export default Outline;

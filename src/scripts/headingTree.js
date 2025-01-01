export const searchHeadingsTree = (tree, condition) => {
    const filter = (node) => {
        const filteredChildren = node.children?.map(filter).filter(Boolean);
        const matchesCondition = condition(node);

        if (matchesCondition || (filteredChildren && filteredChildren.length > 0)) {
            return { ...node, children: filteredChildren };
        }

        return null;
    }

    return tree.map(filter).filter(Boolean); 
};

export const nestHeadings = (headings) => {
    const nested = [];
    const stack = [{ depth: 0, children: nested }];

    headings.forEach((heading) => {
        while (stack[stack.length - 1].depth >= heading.depth) {
            stack.pop();
        }
        const parent = stack[stack.length - 1];
        const node = { ...heading, children: [] };
        parent.children.push(node);
        stack.push(node);
    });

    return nested;
};


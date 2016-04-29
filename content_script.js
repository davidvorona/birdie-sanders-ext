walk(document.body);
setTimeout(function () {
	walk(document.body);
}, 1000);

function walk(node)
{
	// Source: http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

        v = v.replace(/\bBernie\b/g, "Birdie");
	v = v.replace(/\bBERNIE'S\b/g, "BIRDIE'S");
	v = v.replace(/\bBernie's\b/g, "Birdie's");
	v = v.replace(/\bberniesanders\b/g, "birdiesanders");

	textNode.nodeValue = v;
}

"use strict";

const name = "language-restructuredtext";
let disposables = null;


module.exports = {
	
	activate(){
		const {CompositeDisposable} = require("atom");
		disposables = new CompositeDisposable();
		disposables.add(
			atom.commands.add("atom-text-editor", `${name}:fit-borders`, this.fitBorders.bind(this))
		);
	},
	
	
	deactivate(){
		if(disposables){
			disposables.dispose();
			disposables = null;
		}
	},
	
	
	fitBorders(){
		const editor = atom.workspace.getActiveTextEditor();
		if(!editor) return;
		
		editor.transact(125, () => {
			let haveSelectedRegions = false;
			for(const cursor of editor.getCursors())
				cursor.selection.isEmpty()
					? fitBordersAtCursor(cursor)
					: (haveSelectedRegions = true);
			
			if(haveSelectedRegions)
				editor.mutateSelectedText(s => fitBordersInSelection(s), 75);
		});
	}
};


function fitBordersInSelection(selection){
	const insetHeading = /((^|\n)([-=~`#"^+*:.'_])\3{2,})[ \t]*\n([ \t]*\S.*?)[ \t]*\n(\3{3,})[ \t]*(?=$|\n)/g;
	const plainHeading = /((?:^|\n)[ \t]*\n)(\S.*?)[ \t]*\n(([-=~`#"^+*:.'_])\4{2,})[ \t]*(?=$|\n)/g;
	const modifiedText = selection.getText()
		.replace(insetHeading, (...args) => {
			const [match, topLine, nl, borderStyle, titleText, bottomLine] = args;
			const padding   = titleText.match(/^ */)[0].length;
			const newLength = titleText.length + padding;
			const newBorder = borderStyle.repeat(newLength);
			return `${nl}${newBorder}\n${titleText}\n${newBorder}`;
		})
		.replace(plainHeading, (...args) => {
			const [match, blankLine, titleText, borderLine, borderStyle] = args;
			const newLength = titleText.length;
			const newBorder = borderStyle.repeat(newLength);
			return `${blankLine}${titleText}\n${newBorder}`;
		});
	selection.insertText(modifiedText, {select: true});
}


function fitBordersAtCursor(cursor){
	const {editor} = cursor;
	const {scopes} = cursor.getScopeDescriptor();
	const borderScope = "punctuation.definition.heading.restructuredtext";
	
	if(-1 !== scopes.indexOf(borderScope)){
		const position = cursor.getBufferPosition();
		const numLines = editor.getLineCount();
		const range = editor.bufferRangeForScopeAtPosition(borderScope, position);
		const {row} = position;
		
		const lines = [];
		for(let i = -2; i < 3; ++i){
			const offsetRow = row + i;
			if(offsetRow < 0 || offsetRow >= numLines) continue;
			const {scopes}  = editor.tokenForBufferPosition({row: offsetRow, column: 0});
			const isBorder  = -1 !== scopes.indexOf(borderScope);
			const text      = editor.lineTextForBufferRow(offsetRow);
			lines.push({isBorder, row: offsetRow, scopes, text});
		}
		
		// Cursor's located underneath a section heading
		if(/\w/.test(lines[1].text) && lines[2].isBorder){
			if(lines[0].isBorder)
				fitInsetHeading(editor, [,,...lines]);
			else{
				const blankLine = /^[ \t]*$/.test(lines[0].text);
				if(blankLine && /^\S/.test(lines[1].text))
					fitPlainHeading(editor, lines);
			}
		}
		
		// Cursor's located in the row above a heading
		else{
			if(row <= 3)
				lines.unshift(...new Array(5 - lines.length));
			if(/\w/.test(lines[3].text) && lines[2].isBorder && lines[4].isBorder)
				fitInsetHeading(editor, lines);
		}
	}
}


function fitInsetHeading(editor, lines){
	const topStyle    = lines[2].text[0];
	const bottomStyle = lines[4].text[0];
	const titleText   = lines[3].text;
	if(topStyle !== bottomStyle) return;
	
	editor.transact(75, () => {
		const padding      = titleText.match(/^ */)[0].length;
		const newLength    = titleText.replace(/[ \t]+$/, "").length + padding;
		const scaledBorder = topStyle.repeat(newLength);
		const rowRange     = i => editor.bufferRangeForBufferRow(lines[i].row);
		
		// Avoid adding an undo step if nothing changed.
		if(scaledBorder === lines[2].text && scaledBorder === lines[4].text)
			return editor.abortTransaction();
		
		editor.buffer.setTextInRange(rowRange(2), scaledBorder);
		editor.buffer.setTextInRange(rowRange(4), scaledBorder);
	});
}


function fitPlainHeading(editor, lines){
	const borderStyle = lines[2].text[0];
	const titleText   = lines[1].text;
	
	editor.transact(75, () => {
		const {length} = titleText.replace(/[ \t]+$/, "");
		const scaled   = borderStyle.repeat(length);
		const range    = editor.bufferRangeForBufferRow(lines[2].row);
		
		if(scaled !== editor.buffer.getTextInRange(range))
			editor.buffer.setTextInRange(range, scaled);
	});
}

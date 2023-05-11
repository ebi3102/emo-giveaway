import {InnerBlocks, useBlockProps} from "@wordpress/block-editor";

import metadata from "./social-row-block.json";

const {name} = metadata;

let metadataSocial = metadata;

export {metadataSocial, name};

const TEMPLATE = [
	["core/columns", {templateLock:"all", width:"30%", verticalAlignment:"center"}, [
		["core/column", {templateLock:"all"}, [
			["core/image", {}]
		]],
		["core/column", {templateLock:"all"}, [
			["core/button"]
		]]
	]]
];

export const settings = {
	icon: "smiley",
	edit(){
		return (
			<div {...useBlockProps}>
				<InnerBlocks template={TEMPLATE} templateLock="all" />
			</div>
		);
	},
	save(){
		return (
			<div {...useBlockProps}>
				<InnerBlocks.Content/>
			</div>
		);
	}
}

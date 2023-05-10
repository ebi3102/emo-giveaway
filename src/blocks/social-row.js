import metadata from "./social-row-block.json";

const {name} = metadata;

let metadataSocial = metadata;

export {metadataSocial, name};

export const settings = {
	icon: "smiley",
	edit(){
		return <div>Child Element</div>;
	},
	save(){
		return <div>Child Element</div>;
	}
}

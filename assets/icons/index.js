export const getIcon = (name) =>{
	console.log(name);
	return import "./"+name+"-icon.png";
} 
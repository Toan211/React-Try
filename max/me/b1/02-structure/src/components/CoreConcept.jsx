
//NOTE - normal usage
/* export default function CoreConcept(props) {
	return (
		<li>
			<img src={props.image} alt={props.title} />
			<h3>{props.title}</h3>
			<p>{props.description}</p>
		</li>
	);
} */

//REVIEW - if using arrow function, then do it like this
/* export const CoreConcept = ({image, title, description}) => {
	return (
		<li>
			<img src={image} alt={title} />
			<h3>{title}</h3>
			<p>{description}</p>
		</li>
	);
} */

//REVIEW - if using arrow function, but default
export default ({image, title, description}) => {
	return (
		<li>
			<img src={image} alt={title} />
			<h3>{title}</h3>
			<p>{description}</p>
		</li>
	);
}
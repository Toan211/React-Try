/*REVIEW - special children prop usage: it's only good with single props
				closest to normal HTML usage, that's place between component tag
				example <tabButton>children here </tabButton>

*/
 export default function TabButton({children, onSelect}) {
	return (
		<li><button onClick={onSelect}>{children}</button></li>
	);
} 

/*REVIEW - normal attribute prop usage: common practice, with multiple attribute props
				
				example <tabButton label="children"> </tabButton>

*/
/* export default function TabButton(props) {
	return (
		<li><button>{props.label}</button></li>
	);
} 
 */


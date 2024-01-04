/*REVIEW - special children prop usage: it's only good with single props
				closest to normal HTML usage, that's place between component tag
				example <tabButton>children here </tabButton>

*/

//* Normal usage
/*  export default function TabButton({children, onSelect, isActived}) {
	return (
		<li><button className={isActived ? 'active' : undefined} onClick={onSelect}>{children}</button></li>
	);
}  */

//* forward props
export default function TabButton({children, isActived, ...props}) {
	return (
		<li><button className={isActived ? 'active' : undefined} {...props}>{children}</button></li>
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


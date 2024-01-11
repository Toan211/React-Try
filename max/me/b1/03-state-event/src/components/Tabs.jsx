
export default function Tabs({children, buttons, ButtonsContainer}) {

	//* we can use this as away to make wrapper inside component, or use shortcut by simply pass ButtonsContainer
	//NOTE - we call this remap
	// const ButtonsContainer = buttonsContainer; 
		/*//? third approach would be remap while destruction, hence { buttonsContainer:ButtonsContainer } */

	return (
		<>
		{/* Remember, if a component wrapper is passed as a wrapper
			we cant use lower case opening char, hence <buttonsContainer> is wrong
			  */}
			<ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}
		</>
	);
}

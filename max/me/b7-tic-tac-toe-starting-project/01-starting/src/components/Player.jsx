import { useState } from "react";

export default function Player({ name, symbol }) {
	const [isEditting, setIsEditting] = useState(false);

	function handleEditClick(edittingState) {
		if (!edittingState) {
			setIsEditting(true);
		} else if (edittingState) {
			setIsEditting(false);
		}
		console.log(edittingState);
	}

	return (
		<li>
			<span className="player">
				{!isEditting ? (
					<span className="player-name">{name}</span>
				) : (
					<input type="text" required/>
				)}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={() => handleEditClick(isEditting)}>
				{!isEditting ? "Edit" : "Save"}
			</button>
		</li>
	);
}

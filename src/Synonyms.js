import React from "react"

export default function Synonyms(props) {
	//console.log(props.synonyms)

	if (props.synonyms) {
		return (
			<div className='Synonyms'>
				<ul>
					{props.synonyms.map(function (synonym, index) {
						return (
							<div>
								<strong>Synonym: </strong>
								<li key={index}>{synonym}</li>
							</div>
						)
					})}
				</ul>
			</div>
		)
	}
	return null
}

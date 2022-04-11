import React from "react"

export default function Phonetics(props) {
	// console.log(props.phonetic)
	return (
		<div className='Phonetics'>
			{props.phonetic.text}
			<br />
			<a href={props.phonetic.audio} target='_blank' rel='noopener noreferrer'>
				Pronunciation
			</a>
		</div>
	)
}

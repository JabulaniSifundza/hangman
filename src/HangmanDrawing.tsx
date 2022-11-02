const HEAD = (
	<div style={{
		width: "50px",
		height: "50px",
		borderRadius: "100%",
		border: "10px solid black",
		top: "50px",
		right:"-30px",
		position: "absolute"
	}}/>
)


const BODY = (
	<div style={{
		width: "10px",
		height: "100px",
		top: "120px",
		background: "black", 
		right:0,
		position: "absolute"
	}}/>
)

const RIGHT_ARM = (
	<div style={{
		width: "100px",
		height: "10px",
		top: "150px",
		background: "black", 
		right:"-100px",
		position: "absolute",
		rotate:"-30deg",
		transformOrigin: "left bottom",
	}}/>
)


const LEFT_ARM = (
	<div style={{
		width: "100px",
		height: "10px",
		top: "150px",
		background: "black", 
		right:"10px",
		position: "absolute",
		rotate:"30deg",
		transformOrigin: "right bottom",
	}}/>
)



const RIGHT_LEG = (
	<div style={{
		width: "100px",
		height: "10px",
		top: "210px",
		background: "black", 
		right:"-90px",
		position: "absolute",
		rotate:"60deg",
		transformOrigin: "left bottom",
	}}/>
)


const LEFT_LEG = (
	<div style={{
		width: "100px",
		height: "10px",
		top: "150px",
		background: "black", 
		right:0,
		position: "absolute",
		rotate:"-60deg",
		transformOrigin: "right bottom",
	}}/>
)


const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps ={
	numberOfGuesses: number
}


export function HangmanDrawing({numberOfGuesses}: 
	HangmanDrawingProps){
	return (
		<div style={{
			position: "relative",
		}}>
			{BODY_PARTS.slice(0, numberOfGuesses)}
			<div style={{
				height: "50px",
				width: "10px",
				background: "black", 
				marginLeft: "120px",
				top: 0,
				right: 0,
				position: "absolute"
			}}/>
			
			<div style={{
				height: "10px",
				width: "200px",
				background: "black", 
				marginLeft: "120px"
			}}/>
			
			<div style={{
				height: "400px",
				width: "10px",
				background: "black", 
				marginLeft: "120px"
			}}/>
			
			<div style={{
				height: "10px",
				width: "250px",
				background: "black"
			}}/>
		</div>
	)

}
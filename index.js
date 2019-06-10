// title:  TIC-80 JS Template
// author: Rob Loach
// desc:   Use this template to build ES6 JavaScript TIC-80 games.
// script: js

let t = 0
let x = 96
let y = 24
let world = 'WORLD'

export function TIC() {
	if (btn(0)) y--
	if (btn(1)) y++
	if (btn(2)) x--
	if (btn(3)) x++

	cls(13)
	spr(1 + ( (t % 60) / 30 | 0) * 2, x, y, 14, 3, 0, 0, 2, 2)
	print(`HELLO ${world}!`, 84, 84)
	t++
}

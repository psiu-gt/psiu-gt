/**
 * @fileoverview Logic to make a text have a rainbow shadow effect.
 */

/**
 * Make the selected text have a rainbow shadow effect.
 * Shamelessly borrowed from https://codepen.io/Rueb/pen/KyomvJ
 * @todo(dwitt): Make more elegant and readable.
 * @param {!HTMLElement} textNode
 */
export function rainbow(textNode) {
  let i = 1
  let clr = []

  setInterval(() => {
    if (i === 1) {
      clr = [
        '#19F',
        '#19F',
        '#19F',
        '#19F',
        '#19F',
        '#EA0',
        '#EA0',
        '#EA0',
        '#EA0',
        '#EA0',
        '#E62',
        '#E62',
        '#E62',
        '#E62',
        '#E62',
        '#C25',
        '#C25',
        '#C25',
        '#C25',
        '#C25',
      ]
    } else if (i === 2) {
      clr = [
        '#C25',
        '#19F',
        '#19F',
        '#19F',
        '#19F',
        '#19F',
        '#EA0',
        '#EA0',
        '#EA0',
        '#EA0',
        '#EA0',
        '#E62',
        '#E62',
        '#E62',
        '#E62',
        '#E62',
        '#C25',
        '#C25',
        '#C25',
        '#C25',
      ]
    } else if (i === 3) {
      clr = [
        '#C25',
        '#C25',
        '#19F',
        '#19F',
        '#19F',
        '#19F',
        '#19F',
        '#EA0',
        '#EA0',
        '#EA0',
        '#EA0',
        '#EA0',
        '#E62',
        '#E62',
        '#E62',
        '#E62',
        '#E62',
        '#C25',
        '#C25',
        '#C25',
      ]
    } else if (i === 4) {
      clr = [
        '#C25',
        '#C25',
        '#C25',
        '#19F',
        '#19F',
        '#19F',
        '#19F',
        '#19F',
        '#EA0',
        '#EA0',
        '#EA0',
        '#EA0',
        '#EA0',
        '#E62',
        '#E62',
        '#E62',
        '#E62',
        '#E62',
        '#C25',
        '#C25',
      ]
    } else if (i === 5) {
      clr = [
        '#C25',
        '#C25',
        '#C25',
        '#C25',
        '#19F',
        '#19F',
        '#19F',
        '#19F',
        '#19F',
        '#EA0',
        '#EA0',
        '#EA0',
        '#EA0',
        '#EA0',
        '#E62',
        '#E62',
        '#E62',
        '#E62',
        '#E62',
        '#C25',
      ]
    } else if (i === 6) {
      clr = [
        '#C25',
        '#C25',
        '#C25',
        '#C25',
        '#C25',
        '#19F',
        '#19F',
        '#19F',
        '#19F',
        '#19F',
        '#EA0',
        '#EA0',
        '#EA0',
        '#EA0',
        '#EA0',
        '#E62',
        '#E62',
        '#E62',
        '#E62',
        '#E62',
      ]
    } else if (i === 7) {
      clr = [
        '#E62',
        '#C25',
        '#C25',
        '#C25',
        '#C25',
        '#C25',
        '#19F',
        '#19F',
        '#19F',
        '#19F',
        '#19F',
        '#EA0',
        '#EA0',
        '#EA0',
        '#EA0',
        '#EA0',
        '#E62',
        '#E62',
        '#E62',
        '#E62',
      ]
    } else if (i === 8) {
      clr = [
        '#E62',
        '#E62',
        '#C25',
        '#C25',
        '#C25',
        '#C25',
        '#C25',
        '#19F',
        '#19F',
        '#19F',
        '#19F',
        '#19F',
        '#EA0',
        '#EA0',
        '#EA0',
        '#EA0',
        '#EA0',
        '#E62',
        '#E62',
        '#E62',
      ]
    } else if (i === 9) {
      clr = [
        '#E62',
        '#E62',
        '#E62',
        '#C25',
        '#C25',
        '#C25',
        '#C25',
        '#C25',
        '#19F',
        '#19F',
        '#19F',
        '#19F',
        '#19F',
        '#EA0',
        '#EA0',
        '#EA0',
        '#EA0',
        '#EA0',
        '#E62',
        '#E62',
      ]
    } else if (i === 10) {
      clr = [
        '#E62',
        '#E62',
        '#E62',
        '#E62',
        '#C25',
        '#C25',
        '#C25',
        '#C25',
        '#C25',
        '#19F',
        '#19F',
        '#19F',
        '#19F',
        '#19F',
        '#EA0',
        '#EA0',
        '#EA0',
        '#EA0',
        '#EA0',
        '#E62',
      ]
    } else if (i === 11) {
      clr = [
        '#E62',
        '#E62',
        '#E62',
        '#E62',
        '#E62',
        '#C25',
        '#C25',
        '#C25',
        '#C25',
        '#C25',
        '#19F',
        '#19F',
        '#19F',
        '#19F',
        '#19F',
        '#EA0',
        '#EA0',
        '#EA0',
        '#EA0',
        '#EA0',
      ]
    } else if (i === 12) {
      clr = [
        '#EA0',
        '#E62',
        '#E62',
        '#E62',
        '#E62',
        '#E62',
        '#C25',
        '#C25',
        '#C25',
        '#C25',
        '#C25',
        '#19F',
        '#19F',
        '#19F',
        '#19F',
        '#19F',
        '#EA0',
        '#EA0',
        '#EA0',
        '#EA0',
      ]
    } else if (i === 13) {
      clr = [
        '#EA0',
        '#EA0',
        '#E62',
        '#E62',
        '#E62',
        '#E62',
        '#E62',
        '#C25',
        '#C25',
        '#C25',
        '#C25',
        '#C25',
        '#19F',
        '#19F',
        '#19F',
        '#19F',
        '#19F',
        '#EA0',
        '#EA0',
        '#EA0',
      ]
    } else if (i === 14) {
      clr = [
        '#EA0',
        '#EA0',
        '#EA0',
        '#E62',
        '#E62',
        '#E62',
        '#E62',
        '#E62',
        '#C25',
        '#C25',
        '#C25',
        '#C25',
        '#C25',
        '#19F',
        '#19F',
        '#19F',
        '#19F',
        '#19F',
        '#EA0',
        '#EA0',
      ]
    } else if (i === 15) {
      clr = [
        '#EA0',
        '#EA0',
        '#EA0',
        '#EA0',
        '#E62',
        '#E62',
        '#E62',
        '#E62',
        '#E62',
        '#C25',
        '#C25',
        '#C25',
        '#C25',
        '#C25',
        '#19F',
        '#19F',
        '#19F',
        '#19F',
        '#19F',
        '#EA0',
      ]
    } else if (i === 16) {
      clr = [
        '#EA0',
        '#EA0',
        '#EA0',
        '#EA0',
        '#EA0',
        '#E62',
        '#E62',
        '#E62',
        '#E62',
        '#E62',
        '#C25',
        '#C25',
        '#C25',
        '#C25',
        '#C25',
        '#19F',
        '#19F',
        '#19F',
        '#19F',
        '#19F',
      ]
    } else if (i === 17) {
      clr = [
        '#19F',
        '#EA0',
        '#EA0',
        '#EA0',
        '#EA0',
        '#EA0',
        '#E62',
        '#E62',
        '#E62',
        '#E62',
        '#E62',
        '#C25',
        '#C25',
        '#C25',
        '#C25',
        '#C25',
        '#19F',
        '#19F',
        '#19F',
        '#19F',
      ]
    } else if (i === 18) {
      clr = [
        '#19F',
        '#19F',
        '#EA0',
        '#EA0',
        '#EA0',
        '#EA0',
        '#EA0',
        '#E62',
        '#E62',
        '#E62',
        '#E62',
        '#E62',
        '#C25',
        '#C25',
        '#C25',
        '#C25',
        '#C25',
        '#19F',
        '#19F',
        '#19F',
      ]
    } else if (i === 19) {
      clr = [
        '#19F',
        '#19F',
        '#19F',
        '#EA0',
        '#EA0',
        '#EA0',
        '#EA0',
        '#EA0',
        '#E62',
        '#E62',
        '#E62',
        '#E62',
        '#E62',
        '#C25',
        '#C25',
        '#C25',
        '#C25',
        '#C25',
        '#19F',
        '#19F',
      ]
    } else if (i === 20) {
      clr = [
        '#19F',
        '#19F',
        '#19F',
        '#19F',
        '#EA0',
        '#EA0',
        '#EA0',
        '#EA0',
        '#EA0',
        '#E62',
        '#E62',
        '#E62',
        '#E62',
        '#E62',
        '#C25',
        '#C25',
        '#C25',
        '#C25',
        '#C25',
        '#19F',
      ]
    }

    textNode.style.textShadow =
      '0.25px 0.25px 0px ' +
      clr[0] +
      ', .5px .5px 0px ' +
      clr[1] +
      ', .75px .75px 0px ' +
      clr[2] +
      ', 1px 1px 0px ' +
      clr[3] +
      ', 1.25px 1.25px 0px ' +
      clr[4] +
      ', 1.5px 1.5px 0px ' +
      clr[5] +
      ', 1.75px 1.75px 0px ' +
      clr[6] +
      ', 2px 2px 0px ' +
      clr[7] +
      ', 2.25px 2.25px 0px ' +
      clr[8] +
      ', 2.5px 2.5px 0px ' +
      clr[9] +
      ', 2.75px 2.75px 0px ' +
      clr[10] +
      ', 3px 3px 0px ' +
      clr[11] +
      ', 3.25px 3.25px 0px ' +
      clr[12] +
      ', 3.5px 3.5px 0px ' +
      clr[13] +
      ', 3.75px 3.75px 0px ' +
      clr[14] +
      ', 4px 4px 0px ' +
      clr[15] +
      ', 4.25px 4.25px 0px ' +
      clr[16] +
      ', 4.5px 4.5px 0px ' +
      clr[17] +
      ', 4.75px 4.75px 0px ' +
      clr[18] +
      ', 5px 5px 0px ' +
      clr[19] +
      ''

    if (i < 20) {
      i++
    } else {
      i = 1
    }
  }, 40)
}

import Loadable from 'react-loadable';
import React, { Component } from 'react'
function Loading() {
  return <div>Loading random comics...</div>;
}
const RandomComics = Loadable({
  loader: () => {
    let items = [
      '01-it-will-be-fun',
      '02-coffee-addict',
      '03-effectivity',
      '04-balance-of-money',
      '05-titles',
      '06-no-code',
      '07-tickeeets',
      '08-treasure',
      '09-failing-tests',
      '10-optimisation',
      '11-strategy'
    ];
    let comics = items[Math.floor(Math.random()*items.length)];
    return import(`../Issues/${comics}`)
  },
  loading: Loading,
});
export default RandomComics;

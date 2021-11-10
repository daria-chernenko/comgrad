import { released } from '../Issues';
const randomComic = released[Math.floor(Math.random()*released.length)];
export default randomComic;

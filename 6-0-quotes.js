const quotes = [{
    quote: "If you hate a person, you hate something in him that is part of yourself. What isn't part of ourselves doesn't disturb us.",
    author: "Hermann Hesse",
},
{
    quote: "She had an unequalled gift... of squeezing big mistakes into small opportunities.",
    author: "Henry James",
},
{
    quote: "When an actor plays a scene exactly the way a director orders, it isn't acting. It's following instructions. Anyone with the physical qualifications can do that.",
    author: "James Dean",
},
{
    quote: "For man, autumn is a time of harvest, of gathering together. For nature, it is a time of sowing, of scattering abroad.",
    author: "Edwin Teale",
},
{
    quote: "There's a lot to be said for self-delusionment when it comes to matters of the heart.",
    author: "Diane Frolov",
},
{
    quote: "Nature gives you the face you have at twenty; it is up to you to merit the face you have at fifty.",
    author: "Gabriel Coco Chanel",
},
{
    quote: "As men, we are all equal in the presence of death.",
    author: "Publilius Syrus",
},{
    quote: "Advice is seldom welcome.",
    author: "Lord Chesterfield",
},
{
    quote: "Obstacles don't have to stop you. If you run into a wall, don't turn around and give up. Figure out how to climb it, go through it, or work around it.",
    author: "Michael Jordan",
},
{
    quote: "Inside myself is a place where I live all alone and that's where you renew your springs that never dry up.",
    author: "Pearl S Buck",
},




];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// console.log(quotes[0]); 
//0-9까지 숫자 주는 function 필요
// console.log(quotes[Math.floor(Math.random()*10)]); //여기 10대신, 배열 길이 length로 세서 넣음

const todaysQuotes = quotes[Math.floor(Math.random()*quotes.length)];
    //배열 번호를 변수에 저장

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;


//배열의 길이 알아내기(array.length)
//ex) [1,2,3,4,5].length > 이러면 하나하나 안세도 된다.


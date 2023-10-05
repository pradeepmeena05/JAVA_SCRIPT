
const arr=[`Why don't scientists trust atoms? Because they make up everything!`,
`Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.`,
`How do you organize a space party? You planet!`,
`What do you call a fish with no eyes? Fsh!`,
`I told my wife she was drawing her eyebrows too high. She looked surprised.`,` What do you call a dinosaur with a wide vocabulary?
A thesaurus`,` What do you call a fake noodle?
An impasta`,`Why did the teddy bear so no to dessert?
Because she was stuffed`,`How do you stop an astronaut’s baby from crying?
You rocket`,`How do you get a tissue to dance?
You put a little boogie into it`,`How does the ocean say hello?
It waves`,`What is a snake’s favorite subject?
Hiss-tory`,`What are the strongest days of the week?
Saturday and Sunday. The rest are weak days.`,];

let randomNumber = Math.floor(Math.random() * arr.length);

let jokes=document.getElementById("joke");
jokes.innerHTML=arr[randomNumber];
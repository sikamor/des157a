(function(){
    'use strict';
    console.log('reading javacript');

    const madlib=document.querySelector('#madlib');

    const theForm=document.querySelector('form');

    theForm.addEventListener('submit', function(event){

        event.preventDefault();  
        
        const name = document.querySelector('#name').value;

        const age = document.querySelector('#age').value;

        const year = document.querySelector('#year').value;

        const building = document.querySelector('#building').value;

        const occasion = document.querySelector('#occasion').value;

        const time = document.querySelector('#time').value;

        const day = document.querySelector('#day').value;

        const invited = document.querySelector('#invited').value;

        const guests = document.querySelector('#guests').value;

        const drink = document.querySelector('#drink').value;

        const ingVerb = document.querySelector('#ingVerb').value;

        const smallObject = document.querySelector('#smallObject').value;
        
        const adverb1 = document.querySelector('#adverb1').value;
        
        const howLong = document.querySelector('#howLong').value;

        const stories = document.querySelector('#stories').value;

        const adverb2 = document.querySelector('#adverb2').value;

        const quote = document.querySelector('#quote').value;

        const bones = document.querySelector('#bones').value;

        const bodyPart = document.querySelector('#bodyPart').value;

        const trait1 = document.querySelector('#trait1').value;

        const trait2 = document.querySelector('#trait2').value;

        const monument = document.querySelector('#monument').value;

        let suffix;

        if(year < 2){
            suffix = 'st';
        }

        else if(year == 2){
            suffix = 'nd';
        }

        else{
            suffix = 'rd';
        }


        let myText;


        if(name == ''){
            myText = 'please provide a name';
            document.querySelector('#name').focus();
        }


        else if(age == ''){
            myText = 'please provide a number';
            document.querySelector('#age').focus();
        }

        else if(year == ''){
            myText = 'please provide a number';
            document.querySelector('#year').focus();
        }

        else if(building == ''){
            myText = 'please provide a building';
            document.querySelector('#building').focus();
        }

        else if(occasion == ''){
            myText = 'please provide an occasion';
            document.querySelector('#occasion').focus();
        }

        else if(time == ''){
            myText = 'please provide a number';
            document.querySelector('#time').focus();
        }

        else if(day == ''){
            myText = 'please provide a day';
            document.querySelector('#day').focus();
        }

        else if(invited == ''){
            myText = 'please provide a number';
            document.querySelector('#invited').focus();
        }

        else if(guests == ''){
            myText = 'please provide a number';
            document.querySelector('#guests').focus();
        }

        else if(drink == ''){
            myText = 'please provide a drink';
            document.querySelector('#drink').focus();
        }

        else if(ingVerb == ''){
            myText = 'please provide a verb';
            document.querySelector('#ingVerb').focus();
        }

        else if(smallObject == ''){
            myText = 'please provide a small object';
            document.querySelector('#smallObject').focus();
        }

        else if(adverb1 == ''){
            myText = 'please provide an adverb';
            document.querySelector('#adverb1').focus();
        }

        else if(howLong == ''){
            myText = 'please provide a number';
            document.querySelector('#howLong').focus();
        }

        else if(stories == ''){
            myText = 'please provide a number';
            document.querySelector('#stories').focus();
        }

        else if(adverb2 == ''){
            myText = 'please provide an adverb';
            document.querySelector('#adverb2').focus();
        }

        else if(quote == ''){
            myText = 'please provide a phrase';
            document.querySelector('#quote').focus();
        }

        else if(bones == ''){
            myText = 'please provide a number';
            document.querySelector('#bones').focus();
        }

        else if(bodyPart == ''){
            myText = 'please provide a body part';
            document.querySelector('#bodyPart').focus();
        }

        else if(trait1 == ''){
            myText = 'please provide a trait';
            document.querySelector('#trait1').focus();
        }

        else if(trait2 == ''){
            myText = 'please provide a trait';
            document.querySelector('#trait2').focus();
        }

        else if(monument == ''){
            myText = 'please provide a type of monument';
            document.querySelector('#monument').focus();
        }

        else{
            myText = `
            
            ${name}, ${age} year old ${year}${suffix} year undergraduate student at UC Davis died last week after falling from the roof of ${building} in a tragic accident. 

            ${name} decided to host a ${occasion} party on the roof of ${building} at ${time}:00 AM on ${day}. Of the ${invited} people invited, ${guests} showed up. 
            
            According to party attendees, ${name} drank a little too much ${drink} and started acting carelessly. ${name} started erratically ${ingVerb} when they tripped over a ${smallObject} near the ledge. That's when they slipped, but ${adverb1} clinged on the side of the building for ${howLong} before finally releasing their grip and falling ${stories} stories to their ultimate demise. 
            
            While witnesses stories are inconsistent, some say that ${name}  got up briefly after the fall and ${adverb2} limped a few steps and collapsed shortly after, muttering the phrase “${quote}” before finally collapsing.
            
            Post mortem examination revealed that ${name} broke ${bones} bones and even lost their ${bodyPart} from the sheer force of the impact. 
            
            Family and friends will always remember ${name} for their ${trait1} and ${trait2}. The school will be building a ${monument} outside ${building} in remembrance. 
            `;

            // document.querySelector('.open').addEventListener('click', function(event){
            //     event.preventDefault();
            //     document.getElementById('madlib').className='showing';
            // });
        }

        madlib.innerHTML=myText;

        document.querySelector('.open').addEventListener('click', function(event){
            event.preventDefault();
            document.getElementById('madlib').className='showing';
        });
    
        document.querySelector('.close').addEventListener('click', function(event){
            event.preventDefault();
            document.getElementById('madlib').className='hidden';
        });
    
        // document.addEventListener('keydown', function (event){
        //     if(event.key === 'Escape'){
        //         document.getElementById('madlib').className = 'hidden';
        //     }
        // });
    });
})();
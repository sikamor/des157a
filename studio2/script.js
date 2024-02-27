(function () {
    'use strict';

    const container = document.querySelector('#container');
    const hotSpots = document.querySelectorAll('#container div');
    const theImg = document.querySelector('section img');
    const writingSection = document.getElementById('writing');


    //event listeners for the hotspots
    hotSpots.forEach(function (eachSpot) {
        eachSpot.addEventListener('mouseover', function (event) {
            zoomPhoto(event);
            updateWriting(event);
        });
    });

    //zooms in on image
    function zoomPhoto(event){
        const thisCorner=event.target.id;
        console.log(thisCorner);
        switch(thisCorner){
            case 'artwork':  theImg.className = 'artwork'; break;
            case 'luckycat':  theImg.className = 'luckycat'; break;
            case 'pothos':  theImg.className = 'pothos'; break;
        }

    }

    //updates the text
    function updateWriting(event) {
        const thisCorner = event.target.id;
        switch (thisCorner){
            case 'artwork': writingSection.innerHTML = "<h2>Art on the Wall:</h2><p>This piece was created by my friend's mom for my birthday. She is a geometric artist, and her work has always fascinated me because it involves mathematical precision. I always enjoy art and media that has an underlying pattern or principle to it because it makes it feel that much more intentional.</p><br><p>The image is created on a 48 fold Celtic key grid and is painted with tea-stain, gold, ivory black, and indigo watercolor on 600 gsm khadi paper.I relate to the artist's design thinking, so this hangs up as a reminder of my own potential.</p>"; break;
            case 'luckycat': writingSection.innerHTML = "<h2>Propagation Initiation:</h2><p>The species Indian Laurel, or Ficus Microcarpa, is widespread across southern california as a very malleable plant, often seen as massive evergreen shade-trees, but now typically grown and trimmed for hedgelines. This particular cutting comes from my home's backyard in carlsbad. My dad and i were not aware that this species could propagate, a process where roots grow from where the stem of a particular has broken off from the main plant, and we discovered it by accident. So the next time I was home, I made sure to stash a few cuttings in my suitcase to bring back to davis.</p><br><p>So far, its been a success! I placed it in a beer bottle I've saved because of its nice label, and change out the water once a week. I like the idea of making nothing from something, it gives a meaning to life: creating. This was just a broken part of a plant; easily discardable. However, there is now a root system growing in this bottle, and I can easily plant it in soil and let this tree grow for the rest of my own lifetime, leaving a lasting legacy of my patience and desire to create"; break;
            case 'pothos': writingSection.innerHTML = "<h2>Pothos Varieties:</h2><p>Pothos are one of the most common house plants, due to their easy maintenacne and spade shaped leaves. While someone like my dad is more attuned to collecting rare or specialty plants, I have no problem taking care of or displaying plants that are ordinary. Because in my mind, these are the best for the job. Their wide leaves and vibrant colours embue the room with the sense of health and vitality, as if I can somehow tap into that myself as well.</p><br><p>This collection of pothos is made up of three subspecies. What is so interesting is that a lot of these are bred. Enthusiasts will find one singular leaf on a plant that shows some form or irregularity and run with it. They will remove it, generate the ideal conditions in a growing room, and propagate that tiny clipping so that it grows a whole new plants that only displays what was originally a single abnormality. That is where the neon colour of the middle pothos comes from.</p><br><p>I plan on collecting more varieties of this plant. While they are nothing extraordinary, a collection, in my mind, will be incredibily satisfying as it will display the subtle aesthetic differences that we as people have selected out as desirable for display."; break;
        }
    }

    //resets text to original
    hotSpots.forEach(function (eachSpot) {
        eachSpot.addEventListener('mouseout', function () {
            theImg.className = 'start';
            writingSection.innerHTML = '<p>A bedroom is a reflection of oneself. Therefor, a deeper examination reveals the the finer details of our lives.<br><p>Hover over one of the objects to learn more.</p>'; 
        });
    });

    
})();


//your JS code here. If required.
const bands = [
      'The Plot in You', 
      'The Devil Wears Prada', 
      'Pierce the Veil', 
      'Norma Jean', 
      'The Bled', 
      'Say Anything', 
      'The Midway State', 
      'We Came as Romans', 
      'Counterparts', 
      'Oh, Sleeper', 
      'A Skylit Drive', 
      'Anywhere But Here', 
      'An Old Dog'
    ];

    // Function to remove 'a', 'an', 'the' from the start
    function stripArticle(name) {
      return name.replace(/^(a |an |the )/i, '').trim();
    }

    // Sort ignoring articles
    const sortedBands = bands.sort((a, b) => {
      return stripArticle(a).localeCompare(stripArticle(b));
    });

    // Insert into <ul id="band">
    document.getElementById("band").innerHTML = 
      sortedBands.map(band => `<li>${band}</li>`).join('');
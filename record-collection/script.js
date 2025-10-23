
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"]
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: []
  },
  5439: {
    albumTitle: "ABBA Gold"
  }
};

// 

function updateRecords(records, id, prop, value) {
  const album = records[id];

 
  if (value === "") {
    delete album[prop];
  }
  
  else if (prop === "tracks") {
   
    album.tracks = album.tracks || [];
    
    album.tracks.push(value);
  }
 
  else {
    album[prop] = value;
  }


  return records;
}

// 

console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));
// Adds artist "ABBA"

console.log(updateRecords(recordCollection, 5439, "tracks", "Dancing Queen"));
// Adds "Dancing Queen" to new tracks array

console.log(updateRecords(recordCollection, 2548, "artist", ""));
// Deletes artist property from album 2548
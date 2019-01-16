/*
 * This is the simple meta-data file describing certain attributes
 * of my favourite band The Beatles and their song: 'Two of Us'
 * from the album 'Let it Be'.
 */

(function song() {
  // name of the song
  const song = "Two of Us";
  // name of the album where the song was initially released
  const album = "Let It Be";
  // name of the band which performed the song
  const band = "The Beatles";
  // if the type of the album was SINGLE or not
  const single = false;
  // source of the song's relevant information
  const wiki = new URL("https://en.wikipedia.org/wiki/Two_of_Us_(song)");
  // when was the song released
  const released = new Date(1970, 4, 8);
  // when was the song initially recorded
  const recorded = new Date(1969, 0, 31);
  // song genre
  const genre = "Folk rock";
  // duration in seconds
  const length = 213;
  // the personnel which covers the song and their roles
  const personnel = [{
      name: "Paul McCartney",
      roles: ["lead vocal", "lead acoustic guitar"]
    },
    {
      name: "John Lennon",
      roles: ["harmony vocal", "whistling", "rhythm acoustic guitar"]
    },
    {
      name: "George Harrison",
      roles: ["bassline on electric guitar"]
    },
    {
      name: "Ringo Starr",
      roles: ["drums"]
    }
  ];
  // song writers
  const writers = ["Lennon", "McCartney"];
  // song producer(s)
  const producers = ["Phil Spector"];

  /*
   * Meta-data output:
   */
  console.group("'%s' from album '%s' by famous '%s':", song, album, band)
  console.log('Song name:', song);
  console.log('Album name:', album);
  console.log('Band name:', band);
  console.log('Single type of album:', single);
  console.log('Source of data:', wiki.href);
  console.log('Release date:', released.toDateString());
  console.log('Recording date:', recorded.toDateString());
  console.log('Song genre:', genre);
  console.log('Song duration in seconds:', length);
  console.group('Song personnel:')
  // iterate all persons and log their names and roles
  personnel.forEach((person) => {
    console.log("%s, roles: %s", person.name, person.roles.join(', '))
  });
  console.groupEnd()
  console.log('Song writers:', writers.join(', '));
  console.log('Song producers:', producers.join(', '));
  console.groupEnd()
})();

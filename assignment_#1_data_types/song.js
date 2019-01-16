/*
 * This is the simple meta-data file describing certain attributes
 * of my favourite band The Beatles and their song: 'Two of Us'
 * from the album 'Let it Be'.
 */

// name of the song
function song() {
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
  const personnel = [
    {
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
  const songwriters = ["Lennon", "McCartney"];
  // song producer(s)
  const producers = ["Phil Spector"];

  /*
   * Meta-data output:
   */
  console.log(song);
}

song();

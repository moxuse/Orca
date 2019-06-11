function convertBatak (g) {
    let gryph = '';
    switch(g) {
      case '0':
        gryph = 'ᯀ';
        break;
      case '1':
        gryph = 'ᯁ';
        break;
      case '2':
        gryph = 'ᯂ';
        break;
      case '3':
        gryph = 'ᯃ';
        break;
      case '4':
        gryph = 'ᯄ';
        break;
      case '5':
        gryph = 'ᯅ';
        break;
      case '6':
        gryph = 'ᯆ';
        break;
      case '7':
        gryph = 'ᯇ';
        break;
      case '8':
        gryph = 'ᯈ';
        break;
      case '9':
        gryph = 'ᯉ';
        break;
      case 'a':
      case 'A':
        gryph = 'ᯊ';
        break;
      case 'b':
      case 'B':
        gryph = 'ᯋ';
        break;
      case 'c':
      case 'C':
        gryph = 'ᯌ';
        break;
      case 'd':
      case 'D':
        gryph = 'ᯍ';
        break;
      case 'e':
      case 'E':
        gryph = 'ᯎ';
        break;
      case 'f':
      case 'F':
        gryph = 'ᯏ';
        break;
      case 'g':
      case 'G':
        gryph = 'ᯐ';
        break;
      case 'h':
      case 'H':
        gryph = 'ᯑ';
        break;
      case 'i':
      case 'I':
        gryph = 'ᯒ';
        break;
      case 'j':
      case 'J':
        gryph = 'ᯓ';
        break;
      case 'k':
      case 'K':
        gryph = 'ᯔ';
        break;
      case 'l':
      case 'L':
        gryph = 'ᯕ';
        break;
      case 'm':
      case 'M':
        gryph = 'ᯖ';
        break;
      case 'n':
      case 'N':
        gryph = 'ᯗ';
        break;
      case 'o':
      case 'O':
        gryph = 'ᯘ';
        break;
      case 'p':
      case 'P':
        gryph = 'ᯙ';
        break;
      case 'q':
      case 'Q':
        gryph = 'ᯚ';
        break;
      case 'R':
      case 'r':
        gryph = 'ᯛ';
        break;
      case 's':
      case 'S':
        gryph = 'ᯜ';
        break;
      case 't':
      case 'T':
        gryph = 'ᯝ';
        break;
      case 'u':
      case 'U':
        gryph = 'ᯞ';
        break;
      case 'v':
      case 'V':
        gryph = 'ᯟ';
        break;
      case 'w':
      case 'W':
        gryph = 'ᯠ';
        break;
      case 'x':
      case 'X':
        gryph = 'ᯡ';
        break;
      case 'y':
      case 'Y':
        gryph = 'ᯢ';
        break;
      case 'z':
      case 'Z':
        gryph = 'ᯣ';
        break;
      default:
        gryph = g;
        break;
    }
    return gryph;
  }

  module.exports = convertBatak;
  
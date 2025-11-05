
function printA() {
  for (let i = 0; i < 7; i++) {
    let line = "";
    for (let j = 0; j < 7; j++) {
      if (((j === 0 || j === 6) && i !== 0) || ((i === 0 || i === 3) && j > 0 && j < 6))
        line += "*";
      else line += " ";
    }
    console.log(line);
  }
  console.log("\n");
}

function printB() {
  for (let i = 0; i < 7; i++) {
    let line = "";
    for (let j = 0; j < 6; j++) {
      if (
        j === 0 ||
        ((i === 0 || i === 3 || i === 6) && j < 5) ||
        (j === 5 && i !== 0 && i !== 3 && i !== 6)
      )
        line += "*";
      else line += " ";
    }
    console.log(line);
  }
  console.log("\n");
}

function printC() {
  for (let i = 0; i < 7; i++) {
    let line = "";
    for (let j = 0; j < 7; j++) {
      if (
        (i === 0 && j > 0) ||
        (i === 6 && j > 0) ||
        (j === 0 && i > 0 && i < 6)
      )
        line += "*";
      else line += " ";
    }
    console.log(line);
  }
  console.log("\n");
}

function printD() {
  for (let i = 0; i < 7; i++) {
    let line = "";
    for (let j = 0; j < 6; j++) {
      if (
        j === 0 ||
        ((i === 0 || i === 6) && j < 5) ||
        (j === 5 && i > 0 && i < 6)
      )
        line += "*";
      else line += " ";
    }
    console.log(line);
  }
  console.log("\n");
}

function printE() {
  for (let i = 0; i < 7; i++) {
    let line = "";
    for (let j = 0; j < 6; j++) {
      if (j === 0 || i === 0 || i === 3 || i === 6) line += "*";
      else line += " ";
    }
    console.log(line);
  }
  console.log("\n");
}

function printF() {
  for (let i = 0; i < 7; i++) {
    let line = "";
    for (let j = 0; j < 6; j++) {
      if (j === 0 || i === 0 || i === 3) line += "*";
      else line += " ";
    }
    console.log(line);
  }
  console.log("\n");
}

function printG() {
  for (let i = 0; i < 7; i++) {
    let line = "";
    for (let j = 0; j < 7; j++) {
      if (
        (i === 0 && j > 0) ||
        (i === 6 && j > 0 && j < 6) ||
        (j === 0 && i > 0 && i < 6) ||
        (j === 6 && i >= 3 && i < 6) ||
        (i === 3 && j >= 4)
      )
        line += "*";
      else line += " ";
    }
    console.log(line);
  }
  console.log("\n");
}

function printH() {
  for (let i = 0; i < 7; i++) {
    let line = "";
    for (let j = 0; j < 7; j++) {
      if (j === 0 || j === 6 || i === 3) line += "*";
      else line += " ";
    }
    console.log(line);
  }
  console.log("\n");
}

function printI() {
  for (let i = 0; i < 7; i++) {
    let line = "";
    for (let j = 0; j < 7; j++) {
      if (i === 0 || i === 6 || j === 3) line += "*";
      else line += " ";
    }
    console.log(line);
  }
  console.log("\n");
}

function printJ() {
  for (let i = 0; i < 7; i++) {
    let line = "";
    for (let j = 0; j < 7; j++) {
      if (i === 0 || (j === 3 && i < 6) || (i === 6 && j < 3 && j > 0))
        line += "*";
      else line += " ";
    }
    console.log(line);
  }
  console.log("\n");
}

function printK() {
  for (let i = 0; i < 7; i++) {
    let line = "";
    for (let j = 0; j < 7; j++) {
      if (j === 0 || j === 6 - i || j === i - 1) line += "*";
      else line += " ";
    }
    console.log(line);
  }
  console.log("\n");
}

function printL() {
  for (let i = 0; i < 7; i++) {
    let line = "";
    for (let j = 0; j < 7; j++) {
      if (j === 0 || i === 6) line += "*";
      else line += " ";
    }
    console.log(line);
  }
  console.log("\n");
}

function printM() {
  for (let i = 0; i < 7; i++) {
    let line = "";
    for (let j = 0; j < 7; j++) {
      if (j === 0 || j === 6 || (i === j && i < 4) || (i + j === 6 && i < 4))
        line += "*";
      else line += " ";
    }
    console.log(line);
  }
  console.log("\n");
}

function printN() {
  for (let i = 0; i < 7; i++) {
    let line = "";
    for (let j = 0; j < 7; j++) {
      if (j === 0 || j === 6 || j === i) line += "*";
      else line += " ";
    }
    console.log(line);
  }
  console.log("\n");
}

function printO() {
  for (let i = 0; i < 7; i++) {
    let line = "";
    for (let j = 0; j < 7; j++) {
      if (
        ((i === 0 || i === 6) && j > 0 && j < 6) ||
        ((j === 0 || j === 6) && i > 0 && i < 6)
      )
        line += "*";
      else line += " ";
    }
    console.log(line);
  }
  console.log("\n");
}

function printP() {
  for (let i = 0; i < 7; i++) {
    let line = "";
    for (let j = 0; j < 6; j++) {
      if (
        j === 0 ||
        (i === 0 && j < 5) ||
        (i === 3 && j < 5) ||
        (j === 5 && i > 0 && i < 3)
      )
        line += "*";
      else line += " ";
    }
    console.log(line);
  }
  console.log("\n");
}

function printQ() {
  for (let i = 0; i < 7; i++) {
    let line = "";
    for (let j = 0; j < 7; j++) {
      if (
        ((i === 0 || i === 5) && j > 0 && j < 6) ||
        ((j === 0 || j === 6) && i > 0 && i < 5) ||
        (i === j && i > 3)
      )
        line += "*";
      else line += " ";
    }
    console.log(line);
  }
  console.log("\n");
}

function printR() {
  for (let i = 0; i < 7; i++) {
    let line = "";
    for (let j = 0; j < 7; j++) {
      if (
        j === 0 ||
        (i === 0 && j < 6) ||
        (i === 3 && j < 6) ||
        (j === 6 && i > 0 && i < 3) ||
        (i - j === 3)
      )
        line += "*";
      else line += " ";
    }
    console.log(line);
  }
  console.log("\n");
}

function printS() {
  for (let i = 0; i < 7; i++) {
    let line = "";
    for (let j = 0; j < 7; j++) {
      if (
        i === 0 ||
        i === 3 ||
        i === 6 ||
        (j === 0 && i < 3) ||
        (j === 6 && i > 3)
      )
        line += "*";
      else line += " ";
    }
    console.log(line);
  }
  console.log("\n");
}

function printT() {
  for (let i = 0; i < 7; i++) {
    let line = "";
    for (let j = 0; j < 7; j++) {
      if (i === 0 || j === 3) line += "*";
      else line += " ";
    }
    console.log(line);
  }
  console.log("\n");
}

function printU() {
  for (let i = 0; i < 7; i++) {
    let line = "";
    for (let j = 0; j < 7; j++) {
      if (((j === 0 || j === 6) && i < 6) || (i === 6 && j > 0 && j < 6))
        line += "*";
      else line += " ";
    }
    console.log(line);
  }
  console.log("\n");
}

function printV() {
  for (let i = 0; i < 7; i++) {
    let line = "";
    for (let j = 0; j < 7; j++) {
      if ((j === i && i < 4) || (j === 6 - i && i < 4) || (i > 3 && (j === i - 3 || j === 9 - i)))
        line += "*";
      else line += " ";
    }
    console.log(line);
  }
  console.log("\n");
}

function printW() {
  for (let i = 0; i < 7; i++) {
    let line = "";
    for (let j = 0; j < 7; j++) {
      if (j === 0 || j === 6 || (i === j && i > 3) || (i + j === 6 && i > 3))
        line += "*";
      else line += " ";
    }
    console.log(line);
  }
  console.log("\n");
}

function printX() {
  for (let i = 0; i < 7; i++) {
    let line = "";
    for (let j = 0; j < 7; j++) {
      if (i === j || i + j === 6) line += "*";
      else line += " ";
    }
    console.log(line);
  }
  console.log("\n");
}

function printY() {
  for (let i = 0; i < 7; i++) {
    let line = "";
    for (let j = 0; j < 7; j++) {
      if ((i === j && i < 4) || (i + j === 6 && i < 4) || (j === 3 && i > 3))
        line += "*";
      else line += " ";
    }
    console.log(line);
  }
  console.log("\n");
}

function printZ() {
  for (let i = 0; i < 7; i++) {
    let line = "";
    for (let j = 0; j < 7; j++) {
      if (i === 0 || i === 6 || i + j === 6) line += "*";
      else line += " ";
    }
    console.log(line);
  }
  console.log("\n");
}

printA(); printB(); printC(); printD(); printE();
printF(); printG(); printH(); printI(); printJ();
printK(); printL(); printM(); printN(); printO();
printP(); printQ(); printR(); printS(); printT();
printU(); printV(); printW(); printX(); printY(); printZ();

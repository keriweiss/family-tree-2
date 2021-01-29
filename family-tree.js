class FamilyTree {
  constructor(name, level = `--`) {
    if (typeof name !== "string") {
      throw "who?";
    }
    this.value = name;
    this.children = [];
    this.level = level;
  }
  familySize() {
    return 1 + this.children.length;
  }
  findMember(person) {
    return this.value === person
      ? this
      : this.children.filter((obj) => obj.value === person)[0];
  }
  log(family = Object.values(this)) {
    let tree = [];
    tree.push(`${family[2]} ${family[0]}`);
    family[1].forEach((kid) => {
      tree.push(`\n${this.log(Object.values(kid))}`);
    });
    return tree.join("");
  }
  insert(child) {
    this.children.push(new FamilyTree(child, this.level + "--"));
  }
}

module.exports = FamilyTree;

/*{
  function members(obj, level) {
    let string = `${level} ${obj.value}\n`;
    if (obj.children.length === 0) {
      return string;
    } else {
      level += '--';
      obj.children.forEach((child) => {
        string += `${members(child, level)}`;
      });
      return string;
    }
  }
  return members(this, '--');
}*/

const randomList = (arr, count) => {
  let randomArray = [];
  if (count === 0) {
    return randomArray;
  } else {
    let randomIndex = Math.floor(Math.random() * (arr.length - 1));
    randomArray.push(arr[randomIndex]);
    arr.splice(randomIndex, 1);
    return randomArray.concat(randomList(arr, count - 1));
  }
};

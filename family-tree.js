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

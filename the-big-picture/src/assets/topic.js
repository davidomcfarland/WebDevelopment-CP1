class Topic {
  constructor(name, id, dataSource) {
    this.name = name;
    this.id   = id;

    this.parents = new Array;
    this.subs    = new Array;

    this.dataSource = dataSource;
  }

  addParent(newParentName){
    let newParent = this.dataSource.addTopic(newParentName);
    this.parents.push(newParent.id);
    return newParent
  }

  addSub(newSubName){
    let newSub = this.dataSource.addTopic(newSubName);
    this.subs.push(newSub.id);
    return newSub;
  }

  linkParent(parentName) {
    let linkedParent = this.dataSource.getTopicByName(parentName);
    this.parents.push(linkedParent.id);
    return linkedParent;
  }

  linkSub(subName) {
    let linkedSub = this.dataSource.getTopicByName(subName);
    this.subs.push(linkedSub.id);
    return linkedSub;
  }

  removeParent(parentName) {
    let removedParent = this.dataSource.getTopicByName(parentName);
    let removedId = removedParent.id;

    this.parents = this.parents.filter( parent => parent.id = removedId);

    return true
  }

  removeSub(subName) {
    let removedSub = this.dataSource.getTopicByName(subName);
    let removedId = removedSub.id;

    this.subs = this.subs.filter( sub => sub.id = removedId);

    return true
  }
}

export default Topic

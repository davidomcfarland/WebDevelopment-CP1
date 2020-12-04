import Topic from "@/assets/topic.js"

class TopicSet  {
  constructor(inputTopics, name) {

    this.name   = name;
    this.topics = inputTopics;
    this.maxID  = [inputTopics].length;

    return this;
  }

  getTopicById(id) {
    let topic = this.topics.find(
        item => item.id === id
    )
    return topic;
  }

  getTopicByName(name) {
    let topic = this.topics.find(
      item => item.name === name
    )
    return topic;
  }

  addTopic(name) {
    this.maxID++;
    let newTopic = new Topic(name, this.maxID, this);
    this.topics.push(newTopic);

    return newTopic;
  }

  removeTopic(name) {
    this.maxID++;

    let topicToDelete = this.getTopicByName(name);

    this.topics.splice(topicToDelete.id, 1);
  }
}

export default TopicSet;

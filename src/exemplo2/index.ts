import { WordsCollection } from './words-collection';

const collection = new WordsCollection();
collection.addItem('Crlos');
collection.addItem('Cris');
collection.addItem('Jerlan');
collection.addItem('Alfaia');

const iterator = collection.getIterator();

console.log('Straight traversal:');
while (iterator.valid()) {
    console.log(iterator.next());
}

console.log('');
console.log('Reverse traversal:');
const reverseIterator = collection.getReverseIterator();
while (reverseIterator.valid()) {
    console.log(reverseIterator.next());
}

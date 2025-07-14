import { LinkedList } from "./linkedList.js";

export class HashMap {
    constructor() {
        this.loadFactor = 0.8;
        this.capacity = 16;
        this.buckets = [];
        this.loadLevel;
    }


    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % this.capacity;
        }

        return hashCode;
    }

    set(key, value) {
        const hashedKey = this.hash(key);

        if (!this.buckets[hashedKey]) {
            let bucket = new LinkedList;
            bucket.append({key, value});
            this.buckets[hashedKey] = bucket;
            this.sizeHandler();
            return;
        }

        let foundKeysIndex = null;
        foundKeysIndex = this.buckets[hashedKey].findKey(key);
        
        if (foundKeysIndex !== null) {
                this.buckets[hashedKey].insertAt({key, value}, foundKeysIndex + 1);
                this.buckets[hashedKey].removeAt(foundKeysIndex);
            } else {
                this.buckets[hashedKey].append({key, value});
                this.sizeHandler();
            }
    }

    get(key) {
        let result = null;
        this.buckets.forEach((bucket) => {
            if (bucket.head === null) {
                return;
            }

            let curr = bucket.head;
            while (curr) {
                if (curr.data.key === key) {
                    result = curr.data.value;
                }
                curr = curr.next;
            }
        })

        return result;
    }

    has(key) {
        return this.get(key) ? true : false;
    }

    remove(key) {
        let result = false;
        this.buckets.forEach((bucket) => {
            let index =  bucket.findKey(key);
            if (index !== null) {
                bucket.removeAt(index);
                result = true;
            }
        });
        
        this.updateLoadLevel();
        return result;
    }

    length() {
        let totalEntries = 0;
        this.buckets.forEach((bucket) => {
            totalEntries += bucket.size();
        })

        return totalEntries;
    }

    clear() {
        this.buckets.forEach((bucket) => {
            while (bucket.getHead() !== null) {
                bucket.pop();
            }
        })
        this.updateLoadLevel();

    }

    keys() {
        let keysList = [];
        this.buckets.forEach((bucket) => {
            let curr = bucket.head;
            while (curr) {
                keysList.push(curr.data.key);
                curr = curr.next;
            }
        })

        return keysList;
    }

    values() {
        let valuesList = [];
        this.buckets.forEach((bucket) => {
            let curr = bucket.head;
            while (curr) {
                valuesList.push(curr.data.value);
                curr = curr.next;
            }
        })

        return valuesList;
    }

    entries() {
        let pairs = [];
        this.buckets.forEach((bucket) => {
            let curr = bucket.head;
            while (curr) {
                pairs.push([curr.data.key, curr.data.value]);
                curr = curr.next;
            }
        })

        return pairs;
    }

    sizeHandler() {
        if (this.length() > (this.loadFactor * this.capacity)) {
            let newArray = [];
            this.capacity *= 2;
            this.buckets.forEach((bucket) => {
                let hashedKey;
                let curr = bucket.head;
                let newBucket = new LinkedList;
                while (curr) {
                    hashedKey = this.hash(curr.data.key);
                    const {key, value} = curr.data;
                    newBucket.append({key, value});
                    curr = curr.next;
                }

                newArray[hashedKey] = newBucket;
            })
            this.buckets = newArray;
            
        }
        this.updateLoadLevel();
    }

    updateLoadLevel() {
        this.loadLevel = this.length() / this.capacity;
    }
}
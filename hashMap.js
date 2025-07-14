import { LinkedList } from "./linkedList.js";

export class HashMap {
    constructor() {
        this.loadFactor = 0.8;
        this.capacity = 16;
        this.buckets = [];
    }

    sizeHandler() {
        if (this.length() > (this.loadFactor * this.capacity)) {
            let newArray;
            this.capacity *= 2;
            this.buckets.forEach((bucket) => {
                newArray[this.hash(bucket.key)] = bucket;
            })
            this.buckets = newArray;
            
        }
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

        if (this.buckets[hashedKey].key === key) {
                this.buckets[hashedKey].value = value;
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
}
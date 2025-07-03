import { LinkedList } from "./linkedList.js";

export class HashMap {
    constructor() {
        this.loadFactor = 0.8;
        this.capacity = 16;
        this.buckets = [];
    }

    sizeHandler() {
        let totalEntries = 0;
        this.buckets.forEach((bucket) => {
            totalEntries += bucket.size();
        })
        if (totalEntries > (this.loadFactor * this.capacity)) {
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
        }

        if (this.buckets[hashedKey].key === key) {
                this.buckets[hashedKey].value = value;
            }
    }
}
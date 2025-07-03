export class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    append(value) {
        if (this.head === null) {
            this.head = new Node(value, null);
        } else {
            let curr = this.head;
            curr = this.getTail();
            curr.next = new Node(value,null);
        }
    }

    prepend(value) {
        if (this.head === null) {
            this.head = new Node(value, null);
        } else {
            let newnode = new Node(value, this.head);
            this.head = newnode;

        }
    }

    size() {
        let s = 0;

        if (this.head === null) {
            return s;
        }

        let curr = this.head;
        s++;

        while (curr.next !== null) {
            curr = curr.next;
            s++;
        }

        return s;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        if (this.head === null) {
            console.log("Cannot get tail. Empty list.");
            return null;
        }

        let curr = this.head;
        while (curr.next !== null) {
            curr = curr.next;
        }

        return curr;
    }

    at(index) {
        let currentIndex = 0;

        if (this.head === null) {
            return null;
        }

        if (index === 0) {return this.head};
        
        let curr = this.head;
        while (curr.next !== null) {
            curr = curr.next;
            currentIndex++;

            if (currentIndex === index) {
                return curr;
            }
        }

        console.log('Not Found');
        return;
    }

    pop() {
        if (this.head === null) {
            console.log("Invalid action: pop(). Empty list");
            return;
        }

        if (this.head.next === null) {
            this.head = null;
            return;
        }

        let curr = this.head;
        while (curr.next !== null) {
            if (curr.next.next === null) {
                curr.next = null;
                return;
            }
            curr = curr.next;
        }
    }

    contains(value) {
        if (this.head === null) {
            console.log("Empty list, no such element");
            return;
        }

        let curr = this.head;
        while (curr) {
            if (curr.data === value) {return true;}
            curr = curr.next;
        }

        return false;
    }

    find(value) {
        if (this.head === null) {
            return null;
        }

        let currentIndex = 0;
        let curr = this.head;
        while (curr) {
            if (curr.data === value) {return currentIndex;}
            curr = curr.next;
            currentIndex++;
        }

        return null;

    }

    toString() {
        let printString = "";
        if (this.head === null) {
            printString += "null"
        }

        let curr = this.head;
        while (curr) {
            printString = `${printString} ( ${curr.data} ) ->`;
            curr = curr.next;
        }
        printString = `${printString} null`;

        return printString;
    }

    insertAt(value, index) {
        if (this.head === null) {
            return;
        }

        if (index === 0) {
            this.prepend(value);
            return;
        }
        if (index > this.size()) {
            console.log('Error, index out of range');
            return;
        }

        let prevIndexNode = this.at(index - 1);
        let currIndexNode = this.at(index);
        let newnode = new Node(value, currIndexNode);
        prevIndexNode.next = newnode;
    }

    removeAt(index) {
        if (this.head === null) {
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        let prevIndexNode = this.at(index - 1);
        prevIndexNode.next = prevIndexNode.next.next;
    }
}

class Node {
    constructor(data = null, next = null) {
        this.data = data;
        this.next = next;
    }

    
}

